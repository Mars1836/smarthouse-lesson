import React, { useState } from 'react';
import { X, PlusCircle } from 'lucide-react';
import { ModuleData } from '../types';

interface AddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddModule: (newMod: ModuleData) => void;
  nextStepNum: number;
}

export const AddModuleModal: React.FC<AddModuleModalProps> = ({
  isOpen,
  onClose,
  onAddModule,
  nextStepNum
}) => {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newId = 'custom_' + Date.now();
    const safeHtml = content
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>');

    const newMod: ModuleData = {
      id: newId,
      step: `Chặng ${nextStepNum}`,
      title: title.trim(),
      subtitle: 'Bài học mở rộng do bạn thêm vào lộ trình',
      badge: 'Sổ tay mở rộng',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      videoUrl: videoUrl.trim() || null,
      timestamps: [],
      summary: 'Nội dung ghi chú và sơ đồ kỹ thuật mở rộng do bạn biên soạn.',
      isCustom: true,
      theoryBlocks: [
        {
          title: 'Nội Dung Kỹ Thuật & Lưu Ý Lắp Đặt',
          html: `<div class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">${safeHtml}</div>`
        }
      ],
      labType: null,
      miniQuiz: [
        {
          q: 'Bạn đã nắm vững toàn bộ sơ đồ đấu nối và lưu ý của bài học này chưa?',
          options: ['Đã nắm vững 100% và sẵn sàng đi công trình!', 'Cần xem lại thêm video.'],
          correct: 0,
          explain: 'Tuyệt vời! Chặng học đã được đánh dấu hoàn thành trên lộ trình.'
        }
      ]
    };

    onAddModule(newMod);
    setTitle('');
    setVideoUrl('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h3 className="font-extrabold text-lg text-emerald-500 flex items-center gap-2">
            <PlusCircle className="w-5 h-5" /> Thêm Chặng Học Mới Vào Lộ Trình
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
          <div>
            <label className="block font-bold mb-1 text-slate-800 dark:text-slate-200">
              Tên Chặng / Bài Học Tiếp Theo *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="VD: Chặng 6: Động Cơ Rèm, Cửa Cuốn & Khóa Thông Minh"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block font-bold mb-1 text-slate-800 dark:text-slate-200">
              Link Video YouTube (Không bắt buộc)
            </label>
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block font-bold mb-1 text-slate-800 dark:text-slate-200">
              Tóm tắt cốt lõi & Sơ đồ chân đấu nối *
            </label>
            <textarea
              rows={6}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="- Nguyên lý đấu nối...&#10;- Các lưu ý quan trọng khi đi dây...&#10;- Cách cài đặt trên App Lumi Life..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow"
            >
              💾 Lưu Vào Cây Lộ Trình
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
