import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

interface NotesEditorProps {
  step: string;
  initialNote: string;
  onSaveNote: (note: string) => void;
}

export const NotesEditor: React.FC<NotesEditorProps> = ({
  step,
  initialNote,
  onSaveNote
}) => {
  const [note, setNote] = useState(initialNote);
  const [saveStatus, setSaveStatus] = useState('Đã lưu tự động');

  useEffect(() => {
    setNote(initialNote);
  }, [initialNote]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNote(val);
    setSaveStatus('Đang lưu...');
    onSaveNote(val);
    setTimeout(() => {
      setSaveStatus('Đã lưu tự động ✓');
    }, 400);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-sm sm:text-base flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <BookOpen className="w-4 h-4 text-emerald-500" />
            <span>Sổ Tay Ghi Chú Riêng Cho {step}</span>
          </h3>
          <span className="text-[11px] text-emerald-500 dark:text-emerald-400 font-mono">
            {saveStatus}
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Ghi lại mẹo đi dây, giá thiết bị hoặc thắc mắc của bạn ở bài này:
        </p>
        <textarea
          value={note}
          onChange={handleChange}
          rows={7}
          placeholder={`Nhập ghi chú cá nhân của bạn cho ${step}...`}
          className="w-full p-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
      </div>

      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-[11px] text-slate-500 dark:text-slate-400">
        💡 Mọi ghi chú được lưu trực tiếp trên máy của bạn và gắn liền với từng Chặng học.
      </div>
    </div>
  );
};
