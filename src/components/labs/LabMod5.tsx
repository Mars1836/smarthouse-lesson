import React, { useState, useRef, useEffect } from 'react';
import { Lightbulb, Layers, Zap, Clock } from 'lucide-react';

interface Downlight {
  id: number;
  name: string;
  groups: string[];
  on: boolean;
  missed: boolean;
}

export const LabMod5: React.FC = () => {
  const [lights, setLights] = useState<Downlight[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: i + 1 === 6 ? 'Đèn 6 (Sảnh Chung)' : i < 5 ? `Khách ${i + 1}` : `Bếp ${i + 1}`,
      groups: i + 1 === 6 ? ['Khách', 'Bếp'] : i < 5 ? ['Khách'] : ['Bếp'],
      on: false,
      missed: false
    }))
  );

  const [statusText, setStatusText] = useState<string>(
    '👉 Bấm vào các nút phía trên hoặc bấm tắt/bật lẻ từng bóng đèn bên dưới. Chú ý Đèn số 6 (Sảnh Chung) thuộc cả 2 Nhóm Phòng Khách và Phòng Bếp!'
  );

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  const toggleSingle = (id: number) => {
    clearAllTimers();
    setLights((prev) =>
      prev.map((d) => (d.id === id ? { ...d, on: !d.on, missed: false } : d))
    );
    setStatusText(
      `💡 Điều khiển lẻ Đèn ${id} [Bài 5 - 01:58]: Bật/tắt riêng lẻ không làm ảnh hưởng đến các đèn còn lại trong Nhóm Lighting!`
    );
  };

  const runGroupLiving = () => {
    clearAllTimers();
    setLights((prev) =>
      prev.map((d) => ({
        ...d,
        missed: false,
        on: d.groups.includes('Khách')
      }))
    );
    setStatusText(
      '🛋️ Nhóm Phòng Khách (Đèn 1–6): Sáng đồng loạt! Chú ý Đèn 6 (Sảnh Chung) sáng theo vì thuộc cả Nhóm Khách và Nhóm Bếp [Bài 5 - 02:12].'
    );
  };

  const runGroupKitchen = () => {
    clearAllTimers();
    setLights((prev) =>
      prev.map((d) => ({
        ...d,
        missed: false,
        on: d.groups.includes('Bếp')
      }))
    );
    setStatusText(
      '🍳 Nhóm Phòng Bếp (Đèn 6–12): Sáng đồng loạt! Đèn 6 tham gia cả 2 nhóm nên cũng sáng.'
    );
  };

  const runNormalScene = () => {
    clearAllTimers();
    setLights((prev) => prev.map((d) => ({ ...d, on: false, missed: false })));
    setStatusText(
      '🐢 Đang chạy "Cảnh Thường" (>10 đèn) [Bài 6 - 01:57]: HC bắn từng gói tin đơn lẻ... Đèn bật đuổi nhau từng bóng và Đèn số 11 bị Miss bản tin! (Khắc phục: Chia cụm 10 thiết bị + Delay 2s).'
    );

    lights.forEach((d, idx) => {
      const t = setTimeout(() => {
        setLights((prev) =>
          prev.map((item) => {
            if (item.id === d.id) {
              if (item.id === 11) {
                return { ...item, on: false, missed: true };
              }
              return { ...item, on: true, missed: false };
            }
            return item;
          })
        );
      }, (idx + 1) * 220);
      timersRef.current.push(t);
    });
  };

  const runLightingScene = () => {
    clearAllTimers();
    setLights((prev) => prev.map((d) => ({ ...d, on: true, missed: false })));
    setStatusText(
      '⚡ "Cảnh Lighting" (Scene ID + Managed Flood) [Bài 6 - 02:17]: Chỉ 1 bản tin duy nhất từ HC, cả 12 bóng đèn BLE Mesh sáng ĐỒNG LOẠT 100% không độ trễ, không bao giờ sót đèn!'
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={runGroupLiving}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow transition flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" /> Bật Nhóm Khách (Đèn 1–6)
          </button>
          <button
            onClick={runGroupKitchen}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow transition flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" /> Bật Nhóm Bếp (Đèn 6–12)
          </button>
          <button
            onClick={runNormalScene}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow transition flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5" /> Cảnh Thường (Bị trễ & Miss đèn 11)
          </button>
          <button
            onClick={runLightingScene}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow transition flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" /> Cảnh Lighting (Scene ID đồng loạt)
          </button>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
        {statusText}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
        {lights.map((d) => (
          <div
            key={d.id}
            onClick={() => toggleSingle(d.id)}
            className={`p-3 rounded-2xl border cursor-pointer text-center transition-all duration-200 select-none ${
              d.on
                ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                : d.missed
                ? 'bg-rose-950/80 border-rose-500 ring-1 ring-rose-500'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs font-extrabold mb-1.5 transition ${
                d.on
                  ? 'bg-amber-300 text-slate-950 glow-amber'
                  : d.missed
                  ? 'bg-rose-600 text-white animate-bounce'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {d.id}
            </div>
            <div className={`text-[11px] font-bold truncate ${d.id === 6 ? 'text-cyan-400' : 'text-slate-200'}`}>
              {d.name}
            </div>
            <div
              className={`text-[10px] font-mono mt-1 ${
                d.on ? 'text-emerald-400 font-bold' : d.missed ? 'text-rose-400 font-extrabold' : 'text-slate-500'
              }`}
            >
              {d.on ? '● SÁNG' : d.missed ? '✕ MISS!' : '○ TẮT'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
