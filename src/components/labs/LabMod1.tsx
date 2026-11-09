import React, { useState } from 'react';
import { Power, Flame, Settings } from 'lucide-react';

export const LabMod1: React.FC = () => {
  const [mode, setMode] = useState<'switch2' | 'highpower'>('switch2');
  const [cb, setCb] = useState(true);
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [overload, setOverload] = useState(false);
  const [sensorColor, setSensorColor] = useState<'green' | 'red' | 'pink'>('green');

  const lActive = cb ? 'wire-active' : '';
  const out1 = cb && sw1 && !overload;
  const out2 = cb && sw2;

  const load1Title = mode === 'highpower' ? 'BÌNH NÓNG LẠNH 2500W' : 'ĐÈN TRẦN SỐ 1 (40W)';
  const port1Label = mode === 'highpower' ? '1 (3000W)' : 'Chân 1';

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setMode('switch2');
              setOverload(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              mode === 'switch2' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            1. Đấu Công Tắc 2 Nút Chuẩn
          </button>
          <button
            onClick={() => {
              setMode('highpower');
              setOverload(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              mode === 'highpower' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            2. Công Tắc CS Cao (Bình Nóng Lạnh 2500W)
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCb(!cb)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              cb ? 'bg-emerald-600 text-white shadow' : 'bg-rose-600 text-white'
            }`}
          >
            <Power className="w-3.5 h-3.5" />
            {cb ? 'CB 220V: BẬT' : 'CB 220V: TẮT'}
          </button>
          <button
            onClick={() => setSw1(!sw1)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
              sw1 ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Nút 1: {sw1 ? 'BẬT' : 'TẮT'}
          </button>
          <button
            onClick={() => setSw2(!sw2)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
              sw2 ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Nút 2: {sw2 ? 'BẬT' : 'TẮT'}
          </button>
          {mode === 'highpower' && !overload && (
            <button
              onClick={() => {
                setOverload(true);
                setCb(true);
                setSw2(true);
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5 shadow"
            >
              <Flame className="w-3.5 h-3.5" /> Thử đấu nhầm BNL vào Chân 2
            </button>
          )}
        </div>
      </div>

      {overload && (
        <div className="p-3.5 rounded-xl bg-rose-950 border-2 border-rose-500 text-rose-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-pulse">
          <span>
            🔥 <strong>CHÁY RƠ-LE CHÂN SỐ 2!</strong> Chân số 2 chỉ chịu tải 700W thuần trở, đấu Bình nóng lạnh 2500W (~11.3A) làm dính tiếp điểm ngay! Phải đấu vào <strong>CHÂN SỐ 1 (3000W)</strong>.
          </span>
          <button
            onClick={() => {
              setOverload(false);
              setSw1(true);
              setSw2(false);
            }}
            className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold shrink-0"
          >
            Đấu lại Chân 1
          </button>
        </div>
      )}

      {/* SVG Wiring diagram */}
      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-x-auto flex justify-center shadow-inner">
        <svg viewBox="0 0 740 270" className="w-full max-w-3xl h-auto select-none">
          {/* CB 220V */}
          <rect
            x="15"
            y="75"
            width="95"
            height="110"
            rx="10"
            fill="#1e293b"
            stroke={cb ? '#10b981' : '#f43f5e'}
            strokeWidth="2.5"
          />
          <text x="62" y="105" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
            CB 220V AC
          </text>
          <text x="62" y="130" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">
            L (Lửa)
          </text>
          <text x="62" y="160" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">
            N (Nguội)
          </text>

          {/* Dây Lửa */}
          <path
            d="M 110 125 L 250 125 L 250 175"
            fill="none"
            stroke={cb ? '#ef4444' : '#475569'}
            strokeWidth="4"
            className={lActive}
          />
          {/* Dây Nguội */}
          <path d="M 110 155 L 215 155 L 215 175" fill="none" stroke="#3b82f6" strokeWidth="4" />
          <path d="M 215 155 L 215 35 L 610 35 L 610 65" fill="none" stroke="#3b82f6" strokeWidth="3.5" />
          <path d="M 465 35 L 465 65" fill="none" stroke="#3b82f6" strokeWidth="3.5" />
          <circle cx="215" cy="155" r="5" fill="#3b82f6" />

          {/* Công tắc Lumi */}
          <rect
            x="180"
            y="175"
            width="210"
            height="80"
            rx="12"
            fill="#0f172a"
            stroke="#10b981"
            strokeWidth="2.5"
          />
          <text x="285" y="238" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">
            {mode === 'highpower' ? 'CÔNG TẮC CS CAO LUMI' : 'CÔNG TẮC THƯỜNG LUMI'}
          </text>
          <text x="215" y="198" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold">
            N
          </text>
          <text x="250" y="198" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">
            L
          </text>
          <text x="305" y="198" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
            {port1Label}
          </text>
          <text x="360" y="198" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
            2 (150W)
          </text>

          {/* Dây Tải 1 & 2 */}
          {!overload ? (
            <path
              d="M 305 175 L 305 115 L 465 115 L 465 100"
              fill="none"
              stroke={out1 ? '#facc15' : '#475569'}
              strokeWidth="4"
              className={out1 ? 'wire-active' : ''}
            />
          ) : (
            <path
              d="M 360 175 L 360 115 L 465 115 L 465 100"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="5"
              className="wire-active"
            />
          )}
          <path
            d="M 360 175 L 360 140 L 610 140 L 610 100"
            fill="none"
            stroke={out2 ? '#facc15' : '#475569'}
            strokeWidth="3.5"
            className={out2 ? 'wire-active' : ''}
          />

          {/* Tải 1 */}
          <rect
            x="405"
            y="65"
            width="120"
            height="38"
            rx="8"
            fill={out1 ? '#f59e0b' : overload ? '#e11d48' : '#1e293b'}
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text
            x="465"
            y="88"
            textAnchor="middle"
            fill={out1 ? '#0f172a' : '#fff'}
            fontSize="10"
            fontWeight="bold"
          >
            {overload ? '🔥 QUÁ TẢI CHÂN 2!' : load1Title}
          </text>

          {/* Tải 2 */}
          <rect
            x="555"
            y="65"
            width="110"
            height="38"
            rx="8"
            fill={out2 ? '#facc15' : '#1e293b'}
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <text
            x="610"
            y="88"
            textAnchor="middle"
            fill={out2 ? '#0f172a' : '#fff'}
            fontSize="10"
            fontWeight="bold"
          >
            ĐÈN SỐ 2 (30W)
          </text>
        </svg>
      </div>

      {/* Mô phỏng cảm biến chuyển động */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs space-y-1">
          <div className="font-bold text-sm text-emerald-500 flex items-center gap-2">
            <Settings className="w-4 h-4" />
            <span>Mô phỏng Ấn 2 Lần Nút Config Cảm Biến Chuyển Động [00:10:05]:</span>
            <span
              className={`w-3.5 h-3.5 rounded-full inline-block ${
                sensorColor === 'green'
                  ? 'bg-emerald-500 glow-emerald'
                  : sensorColor === 'red'
                  ? 'bg-rose-500 glow-rose'
                  : 'bg-pink-500 glow-pink'
              }`}
            />
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            {sensorColor === 'green' && (
              <>
                Đang chọn: <strong>Nháy Xanh = Sau 30 giây</strong> hết người đèn tự tắt (Mặc định).
              </>
            )}
            {sensorColor === 'red' && (
              <>
                Đang chọn: <strong>Nháy Đỏ = Sau 120 giây (2 phút)</strong> hết người đèn tự tắt.
              </>
            )}
            {sensorColor === 'pink' && (
              <>
                Đang chọn: <strong>Nháy Hồng = Sau 300 giây (5 phút)</strong> hết người đèn tự tắt.
              </>
            )}
          </p>
        </div>
        <div className="flex gap-2 shrink-0 text-xs">
          <button
            onClick={() => setSensorColor('green')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              sensorColor === 'green' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            Nháy Xanh (30s)
          </button>
          <button
            onClick={() => setSensorColor('red')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              sensorColor === 'red' ? 'bg-rose-600 text-white shadow' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            Nháy Đỏ (120s)
          </button>
          <button
            onClick={() => setSensorColor('pink')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              sensorColor === 'pink' ? 'bg-pink-600 text-white shadow' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            Nháy Hồng (300s)
          </button>
        </div>
      </div>
    </div>
  );
};
