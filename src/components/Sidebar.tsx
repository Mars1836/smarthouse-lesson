import React from 'react';
import { Check, Plus, Download, Upload, Trash2 } from 'lucide-react';
import { ModuleData } from '../types';

interface SidebarProps {
  modules: ModuleData[];
  currentModuleId: string;
  completedMap: Record<string, boolean>;
  onSelectModule: (id: string) => void;
  onOpenAddModal: () => void;
  onDeleteCustomModule: (id: string) => void;
  onExportData: () => void;
  onImportData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  modules,
  currentModuleId,
  completedMap,
  onSelectModule,
  onOpenAddModal,
  onDeleteCustomModule,
  onExportData,
  onImportData,
  isOpenMobile,
  onCloseMobile
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed lg:sticky top-16 left-0 z-30 w-80 h-[calc(100vh-4rem)] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-200 shrink-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Lộ Trình Từ Zero Đến Thợ Cứng
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Mỗi chặng tích hợp: Video + Sơ đồ + Thực hành + Quiz
            </p>
          </div>
        </div>

        {/* Module List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {modules.map((m) => {
            const isActive = m.id === currentModuleId;
            const isDone = !!completedMap[m.id];
            return (
              <div
                key={m.id}
                onClick={() => {
                  onSelectModule(m.id);
                  onCloseMobile();
                }}
                className={`w-full text-left p-3 rounded-xl border transition flex items-start gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${
                    isDone
                      ? isActive
                        ? 'bg-white text-emerald-700'
                        : 'bg-emerald-500 text-white'
                      : isActive
                      ? 'bg-emerald-800 text-emerald-200'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5" /> : m.step.replace('Chặng ', '')}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isActive ? 'text-emerald-100' : 'text-emerald-500 font-bold'
                      }`}
                    >
                      {m.step}
                    </span>
                    {m.isCustom && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteCustomModule(m.id);
                        }}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 hover:bg-rose-600 hover:text-white transition flex items-center gap-1"
                        title="Xóa bài học tự thêm"
                      >
                        <Trash2 className="w-3 h-3" /> Xóa
                      </button>
                    )}
                  </div>
                  <div className="font-bold text-xs sm:text-sm line-clamp-2 mt-0.5">{m.title}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add New Lesson / Backup Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 space-y-2">
          <button
            onClick={onOpenAddModal}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow flex items-center justify-center gap-2 transition"
          >
            <Plus className="w-4 h-4" /> Thêm Chặng Mới (Bài 8, 9...)
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onExportData}
              className="py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 transition"
            >
              <Download className="w-3.5 h-3.5" /> Sao lưu (.JSON)
            </button>
            <label className="py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-center cursor-pointer flex items-center justify-center gap-1 transition">
              <Upload className="w-3.5 h-3.5" /> Khôi phục
              <input type="file" accept=".json" onChange={onImportData} className="hidden" />
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};
