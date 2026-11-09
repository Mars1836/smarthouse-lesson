import React from 'react';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface MiniQuizProps {
  step: string;
  questions: QuizQuestion[];
  userAnswers: Record<number, number>;
  onAnswer: (qIdx: number, oIdx: number) => void;
}

export const MiniQuiz: React.FC<MiniQuizProps> = ({
  step,
  questions,
  userAnswers,
  onAnswer
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 font-extrabold flex items-center justify-center text-sm">
            3
          </span>
          <h3 className="font-extrabold text-sm sm:text-base">Kiểm Tra Nhanh Kiến Thức {step}</h3>
        </div>
        <span className="text-[11px] text-slate-400">Trả lời đúng để tự động hoàn thành chặng</span>
      </div>

      <div className="space-y-4">
        {questions.map((qItem, qIdx) => {
          const userAns = userAnswers[qIdx];
          return (
            <div
              key={qIdx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5"
            >
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                {qIdx + 1}. {qItem.q}
              </p>
              <div className="space-y-1.5">
                {qItem.options.map((opt, oIdx) => {
                  let cls =
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200';
                  if (userAns !== undefined) {
                    if (oIdx === qItem.correct) {
                      cls = 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold';
                    } else if (oIdx === userAns) {
                      cls = 'bg-rose-500/20 border-rose-500 text-rose-400';
                    }
                  }
                  return (
                    <button
                      key={oIdx}
                      onClick={() => onAnswer(qIdx, oIdx)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-start gap-2 ${cls}`}
                    >
                      <span className="font-mono font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {userAns !== undefined && (
                <div
                  className={`p-2.5 rounded-lg text-xs leading-relaxed flex items-start gap-2 ${
                    userAns === qItem.correct
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}
                >
                  {userAns === qItem.correct ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <strong>{userAns === qItem.correct ? 'Chính xác! ' : 'Giải thích: '}</strong>
                    {qItem.explain}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
