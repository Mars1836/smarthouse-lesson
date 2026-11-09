import React from 'react';
import { Menu, Sun, Moon, Trophy } from 'lucide-react';
import { QuickSearch } from './QuickSearch';

interface NavbarProps {
  onToggleSidebarMobile: () => void;
  onSelectModule: (id: string) => void;
  onOpenMasterExam: () => void;
  totalModules: number;
  completedCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleSidebarMobile,
  onSelectModule,
  onOpenMasterExam,
  totalModules,
  completedCount,
  isDark,
  onToggleTheme
}) => {
  const percentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 lg:px-6 flex items-center justify-between gap-3">
      {/* Left: Hamburger & Brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebarMobile}
          className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-500/20 transition"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md shrink-0">
            L
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
                Lumi SmartHome Academy
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                Lộ Trình Thực Chiến 4-Trong-1
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Học lý thuyết • Thực hành mô phỏng • Bắt bệnh công trình ngay trên 1 màn hình
            </p>
          </div>
        </div>
      </div>

      {/* Center: Instant Field Troubleshooter Search */}
      <QuickSearch onSelectModule={onSelectModule} />

      {/* Right: Progress, Master Exam & Theme */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="hidden md:flex items-center gap-2.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs">
            <span className="text-slate-500 dark:text-slate-400">Hoàn thành:</span>
            <span className="font-extrabold text-emerald-500 ml-1">
              {completedCount}/{totalModules} Chặng
            </span>
          </div>
          <div className="w-20 h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <button
          onClick={onOpenMasterExam}
          className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm flex items-center gap-1.5 transition shrink-0"
        >
          <Trophy className="w-4 h-4 text-slate-950" />
          <span className="hidden sm:inline">Thi Sát Hạch Tổng (15 Câu)</span>
          <span className="sm:hidden">Thi Tổng</span>
        </button>

        <button
          onClick={onToggleTheme}
          title="Đổi giao diện Sáng / Tối"
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>
      </div>
    </header>
  );
};
