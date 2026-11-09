import React from 'react';
import { Check, CheckCircle2, Youtube, ExternalLink, ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import { ModuleData } from '../types';
import { LabMod0 } from './labs/LabMod0';
import { LabMod1 } from './labs/LabMod1';
import { LabMod2 } from './labs/LabMod2';
import { LabMod3 } from './labs/LabMod3';
import { LabMod4 } from './labs/LabMod4';
import { LabMod5 } from './labs/LabMod5';
import { MiniQuiz } from './MiniQuiz';
import { NotesEditor } from './NotesEditor';

interface ModuleViewProps {
  module: ModuleData;
  prevModule: ModuleData | null;
  nextModule: ModuleData | null;
  isDone: boolean;
  onToggleComplete: () => void;
  onSelectModule: (id: string) => void;
  onOpenMasterExam: () => void;
  userMiniQuizAnswers: Record<number, number>;
  onAnswerMiniQuiz: (qIdx: number, oIdx: number) => void;
  note: string;
  onSaveNote: (note: string) => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  prevModule,
  nextModule,
  isDone,
  onToggleComplete,
  onSelectModule,
  onOpenMasterExam,
  userMiniQuizAnswers,
  onAnswerMiniQuiz,
  note,
  onSaveNote
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* KHỐI 1: HEADER CHẶNG & MỐC VIDEO YOUTUBE */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 rounded-3xl p-5 sm:p-7 text-white border border-emerald-500/30 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl text-xs font-extrabold uppercase bg-emerald-500 text-slate-950 shadow-sm">
              {module.step}
            </span>
            <span
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold border ${
                module.badgeColor || 'bg-white/10 text-slate-200 border-white/20'
              }`}
            >
              {module.badge || 'Bài học mở rộng'}
            </span>
          </div>
          <button
            onClick={onToggleComplete}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
              isDone
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
            }`}
          >
            {isDone ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" /> Đã Hoàn Thành Chặng Này
              </>
            ) : (
              <>
                <span className="w-3.5 h-3.5 rounded border border-white/60 inline-block" /> Đánh Dấu Đã Học Xong
              </>
            )}
          </button>
        </div>

        <h1 className="text-xl sm:text-3xl font-extrabold mt-4 text-white tracking-tight">{module.title}</h1>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">{module.summary}</p>

        {module.videoUrl && (
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <a
              href={module.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 shadow transition"
            >
              <Youtube className="w-4 h-4" />
              <span>Mở Video Gốc Trên YouTube</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            {(module.timestamps || []).map((ts, idx) => (
              <a
                key={idx}
                href={ts.url ? ts.url : `${module.videoUrl}&t=${ts.sec}s`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono bg-white/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 transition"
              >
                ⏱️ {ts.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* KHỐI 2: SỔ TAY LÝ THUYẾT & SƠ ĐỒ TRỰC QUAN */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 font-extrabold flex items-center justify-center text-sm">
            1
          </span>
          <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Kiến Thức Cốt Lõi & Quy Tắc Công Trình
          </h2>
        </div>
        {(module.theoryBlocks || []).map((tb, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
          >
            <h3 className="font-bold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">{tb.title}</h3>
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-200"
              dangerouslySetInnerHTML={{ __html: tb.html }}
            />
          </div>
        ))}
      </div>

      {/* KHỐI 3: BÀN THỰC HÀNH TƯƠNG TÁC NGAY TẠI BÀI HỌC (CONTEXTUAL LAB) */}
      {module.labType && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-500 dark:text-amber-400 font-extrabold flex items-center justify-center text-sm">
                2
              </span>
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-amber-500 dark:text-amber-400">
                Bàn Thực Hành Mô Phỏng Ngay Tại Bài Học
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Thao tác trực tiếp bên dưới để hiểu sâu nguyên lý
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border-2 border-amber-500/40 shadow-md">
            {module.labType === 'lab_mod0' && <LabMod0 />}
            {module.labType === 'lab_mod1' && <LabMod1 />}
            {module.labType === 'lab_mod2' && <LabMod2 />}
            {module.labType === 'lab_mod3' && <LabMod3 />}
            {module.labType === 'lab_mod4' && <LabMod4 />}
            {module.labType === 'lab_mod5' && <LabMod5 />}
          </div>
        </div>
      )}

      {/* KHỐI 4: MINI-QUIZ KIỂM TRA HIỂU BÀI + GHI CHÚ CÁ NHÂN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <MiniQuiz
            step={module.step}
            questions={module.miniQuiz || []}
            userAnswers={userMiniQuizAnswers}
            onAnswer={onAnswerMiniQuiz}
          />
        </div>
        <div className="lg:col-span-5">
          <NotesEditor step={module.step} initialNote={note} onSaveNote={onSaveNote} />
        </div>
      </div>

      {/* KHỐI 5: ĐIỀU HƯỚNG CHẶNG TIẾP THEO */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
        {prevModule ? (
          <button
            onClick={() => {
              onSelectModule(prevModule.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 transition text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại: {prevModule.step}
          </button>
        ) : (
          <div />
        )}

        {nextModule ? (
          <button
            onClick={() => {
              onSelectModule(nextModule.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition flex items-center gap-1.5"
          >
            Học tiếp: {nextModule.step} — {nextModule.title.split(':')[0]} <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onOpenMasterExam}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition flex items-center gap-1.5"
          >
            <Trophy className="w-4 h-4" /> Làm Bài Thi Sát Hạch Tổng Hợp (15 Câu) <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
