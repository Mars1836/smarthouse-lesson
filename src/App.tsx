import React, { useState, useEffect } from 'react';
import { coreModules } from './data/modules';
import { ModuleData } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import { MasterExamModal } from './components/MasterExamModal';
import { AddModuleModal } from './components/AddModuleModal';

const STORAGE_COMPLETED = 'lumi_lms_completed_v2';
const STORAGE_NOTES = 'lumi_lms_notes_v2';
const STORAGE_CUSTOM_MODS = 'lumi_lms_custom_mods_v2';
const STORAGE_MINIQUIZ = 'lumi_lms_miniquiz_v2';
const STORAGE_THEME = 'lumi_lms_theme';

export function App() {
  const [currentModuleId, setCurrentModuleId] = useState<string>('mod0');
  const [customModules, setCustomModules] = useState<ModuleData[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_CUSTOM_MODS) || '[]');
    } catch {
      return [];
    }
  });

  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_COMPLETED) || '{}');
    } catch {
      return {};
    }
  });

  const [notesMap, setNotesMap] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_NOTES) || '{}');
    } catch {
      return {};
    }
  });

  const [miniQuizMap, setMiniQuizMap] = useState<Record<string, Record<number, number>>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_MINIQUIZ) || '{}');
    } catch {
      return {};
    }
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved !== null) return saved === 'dark';
    return true; // Default dark
  });

  const [isMasterExamOpen, setIsMasterExamOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  // Sync theme with HTML root class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(STORAGE_THEME, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(STORAGE_THEME, 'light');
    }
  }, [isDark]);

  const allModules: ModuleData[] = [...coreModules, ...customModules];
  const activeModuleIndex = allModules.findIndex((m) => m.id === currentModuleId);
  const currentModule = allModules[activeModuleIndex] || allModules[0];
  const prevModule = activeModuleIndex > 0 ? allModules[activeModuleIndex - 1] : null;
  const nextModule = activeModuleIndex < allModules.length - 1 ? allModules[activeModuleIndex + 1] : null;

  const completedCount = allModules.filter((m) => !!completedMap[m.id]).length;

  const handleToggleComplete = (modId: string) => {
    setCompletedMap((prev) => {
      const next = { ...prev, [modId]: !prev[modId] };
      localStorage.setItem(STORAGE_COMPLETED, JSON.stringify(next));
      return next;
    });
  };

  const handleSaveNote = (modId: string, text: string) => {
    setNotesMap((prev) => {
      const next = { ...prev, [modId]: text };
      localStorage.setItem(STORAGE_NOTES, JSON.stringify(next));
      return next;
    });
  };

  const handleAnswerMiniQuiz = (modId: string, qIdx: number, oIdx: number) => {
    setMiniQuizMap((prev) => {
      const modQuiz = { ...(prev[modId] || {}), [qIdx]: oIdx };
      const next = { ...prev, [modId]: modQuiz };
      localStorage.setItem(STORAGE_MINIQUIZ, JSON.stringify(next));

      // Auto check complete if all answered and correct
      const mod = allModules.find((m) => m.id === modId);
      if (mod && mod.miniQuiz) {
        const allCorrect = mod.miniQuiz.every((q, i) => modQuiz[i] === q.correct);
        if (allCorrect) {
          setCompletedMap((cPrev) => {
            const cNext = { ...cPrev, [modId]: true };
            localStorage.setItem(STORAGE_COMPLETED, JSON.stringify(cNext));
            return cNext;
          });
        }
      }

      return next;
    });
  };

  const handleAddCustomModule = (newMod: ModuleData) => {
    const updated = [...customModules, newMod];
    setCustomModules(updated);
    localStorage.setItem(STORAGE_CUSTOM_MODS, JSON.stringify(updated));
    setCurrentModuleId(newMod.id);
  };

  const handleDeleteCustomModule = (modId: string) => {
    const updated = customModules.filter((m) => m.id !== modId);
    setCustomModules(updated);
    localStorage.setItem(STORAGE_CUSTOM_MODS, JSON.stringify(updated));
    if (currentModuleId === modId) {
      setCurrentModuleId('mod0');
    }
  };

  const handleExportData = () => {
    const payload = {
      completed: completedMap,
      notes: notesMap,
      miniQuiz: miniQuizMap,
      customMods: customModules
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lumi_academy_backup.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target?.result as string);
        if (data.completed) {
          setCompletedMap(data.completed);
          localStorage.setItem(STORAGE_COMPLETED, JSON.stringify(data.completed));
        }
        if (data.notes) {
          setNotesMap(data.notes);
          localStorage.setItem(STORAGE_NOTES, JSON.stringify(data.notes));
        }
        if (data.miniQuiz) {
          setMiniQuizMap(data.miniQuiz);
          localStorage.setItem(STORAGE_MINIQUIZ, JSON.stringify(data.miniQuiz));
        }
        if (data.customMods) {
          setCustomModules(data.customMods);
          localStorage.setItem(STORAGE_CUSTOM_MODS, JSON.stringify(data.customMods));
        }
        alert('Khôi phục dữ liệu thành công!');
      } catch (err) {
        alert('File dữ liệu không hợp lệ!');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <Navbar
        onToggleSidebarMobile={() => setIsSidebarMobileOpen((prev) => !prev)}
        onSelectModule={(id) => {
          setCurrentModuleId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMasterExam={() => setIsMasterExamOpen(true)}
        totalModules={allModules.length}
        completedCount={completedCount}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      <div className="flex-1 flex relative max-w-[1600px] w-full mx-auto">
        <Sidebar
          modules={allModules}
          currentModuleId={currentModuleId}
          completedMap={completedMap}
          onSelectModule={(id) => {
            setCurrentModuleId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onDeleteCustomModule={handleDeleteCustomModule}
          onExportData={handleExportData}
          onImportData={handleImportData}
          isOpenMobile={isSidebarMobileOpen}
          onCloseMobile={() => setIsSidebarMobileOpen(false)}
        />

        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto">
          {currentModule && (
            <ModuleView
              module={currentModule}
              prevModule={prevModule}
              nextModule={nextModule}
              isDone={!!completedMap[currentModule.id]}
              onToggleComplete={() => handleToggleComplete(currentModule.id)}
              onSelectModule={(id) => {
                setCurrentModuleId(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenMasterExam={() => setIsMasterExamOpen(true)}
              userMiniQuizAnswers={miniQuizMap[currentModule.id] || {}}
              onAnswerMiniQuiz={(qIdx, oIdx) =>
                handleAnswerMiniQuiz(currentModule.id, qIdx, oIdx)
              }
              note={notesMap[currentModule.id] || ''}
              onSaveNote={(text) => handleSaveNote(currentModule.id, text)}
            />
          )}
        </main>
      </div>

      <MasterExamModal
        isOpen={isMasterExamOpen}
        onClose={() => setIsMasterExamOpen(false)}
      />

      <AddModuleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddModule={handleAddCustomModule}
        nextStepNum={allModules.length}
      />
    </div>
  );
}
export default App;
