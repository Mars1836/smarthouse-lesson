import React, { useState } from 'react';
import { Radio, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const LabMod3: React.FC = () => {
  const [spectrumState, setSpectrumState] = useState<'conflict' | 'clean'>('conflict');

  const zigbeeX = spectrumState === 'conflict' ? 290 : 545;
  const zigbeeLabel = spectrumState === 'conflict' ? 'Zigbee Ch 17 (Bị Đè!)' : 'Zigbee Ch 25 (Sạch 100%)';
  const zigbeeColor = spectrumState === 'conflict' ? '#f43f5e' : '#10b981';

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-sm sm:text-base text-rose-400 flex items-center gap-2">
            <Radio className="w-4 h-4 text-rose-400" />
            <span>Mô Phỏng Phổ Tần 2.4GHz: Tại Sao Bấm App Bị Trễ 5–6 Giây? [Bài 2 - 00:16:45]</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Quan sát sự chồng lấn giữa Kênh Wi-Fi 6 và Kênh Zigbee 17, sau đó bấm nút "Xóa & Tạo lại mạng Zigbee" để xem HC tự động nhảy sang kênh sạch!
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setSpectrumState('conflict')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              spectrumState === 'conflict'
                ? 'bg-rose-600 text-white shadow-lg ring-2 ring-rose-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" /> Tạo Lỗi Trùng Kênh 6 Wi-Fi
          </button>
          <button
            onClick={() => setSpectrumState('clean')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              spectrumState === 'clean'
                ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" /> Xóa Mạng Zigbee Để HC Tự Né Kênh
          </button>
        </div>
      </div>

      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-x-auto shadow-inner">
        <svg viewBox="0 0 700 180" className="w-full max-w-3xl mx-auto h-auto select-none">
          {/* Base frequency line */}
          <line x1="30" y1="145" x2="670" y2="145" stroke="#475569" strokeWidth="2" />

          {/* Wi-Fi Ch 1, 6, 11 */}
          <path d="M 60 145 Q 120 35 180 145" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="2" />
          <text x="120" y="130" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold">
            Wi-Fi Kênh 1
          </text>

          <path d="M 230 145 Q 290 25 350 145" fill="rgba(239,68,68,0.25)" stroke="#ef4444" strokeWidth="2.5" />
          <text x="290" y="130" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">
            Wi-Fi Kênh 6 (Mạnh)
          </text>

          <path d="M 400 145 Q 460 35 520 145" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="2" />
          <text x="460" y="130" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold">
            Wi-Fi Kênh 11
          </text>

          {/* BLE Mesh Channels 37, 38, 39 */}
          <rect x="38" y="65" width="12" height="80" rx="3" fill="#06b6d4" />
          <text x="44" y="55" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="bold">
            BLE 37
          </text>

          <rect x="200" y="65" width="12" height="80" rx="3" fill="#06b6d4" />
          <text x="206" y="55" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="bold">
            BLE 38
          </text>

          <rect x="615" y="65" width="12" height="80" rx="3" fill="#06b6d4" />
          <text x="621" y="55" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="bold">
            BLE 39
          </text>

          {/* Zigbee Channel (Dynamic) */}
          <rect
            x={zigbeeX - 14}
            y="40"
            width="28"
            height="105"
            rx="5"
            fill={zigbeeColor}
            opacity="0.88"
            className="transition-all duration-500 ease-in-out"
          />
          <text
            x={zigbeeX}
            y="28"
            textAnchor="middle"
            fill={zigbeeColor}
            fontSize="11"
            fontWeight="bold"
            className="transition-all duration-500 ease-in-out"
          >
            {zigbeeLabel}
          </text>
        </svg>
      </div>

      {spectrumState === 'conflict' ? (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs sm:text-sm text-rose-300 flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
          <div>
            <strong>TRẠNG THÁI HIỆN TẠI: ĐANG TRÙNG KÊNH!</strong> Router Wi-Fi của chủ nhà đang phát ở{' '}
            <strong>Kênh 6</strong> đè thẳng lên đỉnh <strong>Kênh 17 của Zigbee</strong>. Hậu quả: Bấm bật đèn trên App
            mất <strong>5 – 6 giây</strong> đèn mới phản hồi! Trong khi đó <strong>BLE Mesh (Kênh 37, 38, 39)</strong>{' '}
            nằm hoàn toàn ở khe trống nên phản hồi tức thì.
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
          <div>
            <strong>ĐÃ XỬ LÝ TRIỆT ĐỂ!</strong> Sau khi Xóa mạng Zigbee trên App [00:17:51], HC đã tự động quét và
            chuyển mạng Zigbee sang <strong>Kênh 25</strong> nằm hoàn toàn ngoài vùng phủ của Kênh 6 Wi-Fi. Tốc độ bấm App
            phản hồi tức thì <strong>0.5 – 1 giây</strong>!
          </div>
        </div>
      )}
    </div>
  );
};
