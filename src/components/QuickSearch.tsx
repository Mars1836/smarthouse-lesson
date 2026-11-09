import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { quickSearchIndex } from '../data/searchIndex';

interface QuickSearchProps {
  onSelectModule: (modId: string) => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({ onSelectModule }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? quickSearchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="flex-1 max-w-md relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Tra cứu nhanh: nhảy CB, bình nóng lạnh, trễ 5s, CRI..."
          className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400 pointer-events-none" />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && query.trim() && (
        <div className="absolute left-0 right-0 top-12 bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-2xl shadow-2xl p-3 max-h-96 overflow-y-auto z-50 animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-emerald-500">
              🔍 Kết quả tra cứu nhanh (Bấm để nhảy tới Chặng học)
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[11px] text-slate-400 hover:text-slate-200"
            >
              Đóng
            </button>
          </div>

          <div className="space-y-2">
            {filtered.length === 0 ? (
              <div className="text-xs text-slate-400 py-2">
                Không tìm thấy từ khóa. Hãy thử: "bình nóng lạnh", "nhảy CB", "DTA", "trễ", "CRI", "HCL"...
              </div>
            ) : (
              filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onSelectModule(item.modId);
                    setIsOpen(false);
                  }}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:border-emerald-500 border border-transparent cursor-pointer transition"
                >
                  <div className="font-bold text-xs text-emerald-500">{item.title}</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">{item.desc}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
