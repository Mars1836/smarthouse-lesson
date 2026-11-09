import React, { useState } from 'react';
import { X, Trophy, RotateCcw, CheckCircle2, HelpCircle } from 'lucide-react';
import { getAllMasterQuestions } from '../data/masterExam';

interface MasterExamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterExamModal: React.FC<MasterExamModalProps> = ({ isOpen, onClose }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const questions = getAllMasterQuestions();

  if (!isOpen) return null;

  let correctCount = 0;
  Object.keys(answers).forEach((k) => {
    const idx = parseInt(k);
    if (answers[idx] === questions[idx]?.correct) correctCount++;
  });

  const handleAnswer = (qIdx: number, oIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-lg sm:text-xl text-amber-500 dark:text-amber-400 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Đề Thi Sát Hạch Kỹ Thuật Viên Lumi Toàn Diện (15 Câu)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Tổng hợp toàn bộ tình huống thực tế từ Chặng 0 đến Chặng 5
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs sm:text-sm border border-emerald-500/30">
              Điểm: {correctCount} / {questions.length}
            </span>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Làm lại
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {questions.map((item, idx) => {
            const uAns = answers[idx];
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-emerald-500 dark:text-emerald-400">
                    {item.step}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Câu {idx + 1} / {questions.length}
                  </span>
                </div>
                <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 leading-relaxed">
                  {item.q}
                </p>
                <div className="space-y-1.5">
                  {item.options.map((opt, oIdx) => {
                    let cls =
                      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200';
                    if (uAns !== undefined) {
                      if (oIdx === item.correct) {
                        cls = 'bg-emerald-500/20 border-emerald-500 text-emerald-500 dark:text-emerald-400 font-bold';
                      } else if (oIdx === uAns) {
                        cls = 'bg-rose-500/20 border-rose-500 text-rose-500 dark:text-rose-400';
                      }
                    }
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(idx, oIdx)}
                        className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition ${cls}`}
                      >
                        <span className="font-mono font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {uAns !== undefined && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-start gap-2 leading-relaxed ${
                      uAns === item.correct
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20'
                    }`}
                  >
                    {uAns === item.correct ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <strong>{uAns === item.correct ? 'Chính xác! ' : 'Giải thích: '}</strong>
                      {item.explain}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
