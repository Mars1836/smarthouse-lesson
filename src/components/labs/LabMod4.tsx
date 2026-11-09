import React, { useState } from 'react';
import { Sun, Sliders, Calculator } from 'lucide-react';

export const LabMod4: React.FC = () => {
  const [kelvin, setKelvin] = useState<number>(4000);
  const [cri, setCri] = useState<number>(95);
  const [bulbs, setBulbs] = useState<number>(8);
  const [area, setArea] = useState<number>(20);

  // Compute Kelvin color and name
  let colorRgba = 'rgba(254, 243, 199, 0.78)';
  let kName = 'Trung tính';
  if (kelvin <= 3300) {
    colorRgba = 'rgba(251, 191, 36, 0.78)';
    kName = 'Vàng ấm';
  } else if (kelvin >= 5000) {
    colorRgba = 'rgba(224, 242, 254, 0.82)';
    kName = 'Trắng lạnh';
  }

  // Lux Calculation
  const totalLumen = (bulbs || 1) * 810;
  const lux = Math.round(totalLumen / (area || 1));

  let advice = 'Đạt chuẩn độ rọi sinh hoạt Phòng khách / Phòng học tiêu chuẩn (300 - 500 Lux).';
  if (lux < 150) {
    advice = 'Ánh sáng hơi tối — chỉ phù hợp làm đèn ngủ hoặc hành lang (cần tăng thêm số bóng đèn).';
  } else if (lux > 600) {
    advice = 'Độ rọi rất cao — phù hợp cho siêu thị, showroom trưng bày hoặc bàn kỹ thuật chi tiết.';
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Trượt Kelvin & CRI */}
      <div className="lg:col-span-7 space-y-4">
        <h4 className="font-bold text-sm text-amber-400 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-400" />
          <span>Thực hành 1: Mô Phỏng Nhiệt Độ Màu (Kelvin) & Hoàn Màu (CRI)</span>
        </h4>

        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between font-bold mb-1.5">
              <span>
                Nhiệt độ màu (CCT):{' '}
                <strong className="text-amber-400 text-sm">
                  {kelvin}K ({kName})
                </strong>
              </span>
              <span className="text-slate-400">2700K ➔ 6500K</span>
            </div>
            <input
              type="range"
              min="2700"
              max="6500"
              step="100"
              value={kelvin}
              onChange={(e) => setKelvin(parseInt(e.target.value))}
              className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-amber-500 via-yellow-100 to-sky-400"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span className="font-bold">So sánh Chỉ số hoàn màu (CRI) [00:01:09]:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCri(70)}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition ${
                  cri === 70
                    ? 'bg-rose-600 text-white shadow ring-2 ring-rose-500/50'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                Đèn Rẻ Tiền (CRI 70)
              </button>
              <button
                onClick={() => setCri(95)}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition ${
                  cri === 95
                    ? 'bg-emerald-600 text-white shadow ring-2 ring-emerald-500/50'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                Đèn Lumi Chuẩn (CRI 95)
              </button>
            </div>
          </div>
        </div>

        {/* Room Preview Box */}
        <div
          className="p-5 sm:p-6 rounded-2xl border-2 border-slate-700 text-center transition-all duration-300 shadow-inner"
          style={{
            background: `radial-gradient(circle, ${colorRgba} 0%, rgba(15,23,42,0.96) 100%)`
          }}
        >
          <div className="font-extrabold text-base text-white">
            {cri === 95
              ? `Không Gian ${kelvin}K • CRI 95 (Màu sắc trung thực rực rỡ)`
              : `Không Gian ${kelvin}K • CRI 70 (Màu sắc nhợt nhạt, xỉn màu)`}
          </div>

          <div
            className="flex justify-center gap-6 sm:gap-8 my-4 text-3xl sm:text-4xl transition-all duration-300 select-none"
            style={{
              filter: cri < 80 ? 'grayscale(60%) contrast(75%)' : 'none'
            }}
          >
            <span>🍎</span>
            <span>🍋</span>
            <span>🥗</span>
            <span>👗</span>
          </div>

          <p className="text-xs text-slate-200 max-w-lg mx-auto leading-relaxed">
            {cri === 95
              ? 'Với CRI 95 tiệm cận ánh sáng mặt trời (CRI 100), màu đỏ của táo, đĩa thức ăn và quần áo hiện lên tươi tắn, chuẩn màu thiết kế tuyệt đối.'
              : 'Khi CRI thấp (70), ánh sáng thiếu phổ màu khiến trái cây, món ăn và quần áo trông xám xịt, xỉn màu và sai lệch so với màu thực tế.'}
          </p>
        </div>
      </div>

      {/* Máy tính Độ rọi Lux = Lumen / m2 */}
      <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between space-y-4 shadow-inner">
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-purple-400 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-purple-400" />
            <span>Thực hành 2: Máy Tính Độ Rọi (Lux = Lumen / m²) [00:02:35]</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Thử thay đổi số bóng đèn Downlight Lumi (mỗi bóng 9W phát ra ~810 Lumen, hiệu suất 90 lm/W) và diện tích phòng:
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Số bóng đèn (810 lm):</label>
              <input
                type="number"
                min="1"
                max="100"
                value={bulbs}
                onChange={(e) => setBulbs(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 font-bold text-emerald-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Diện tích phòng (m²):</label>
              <input
                type="number"
                min="1"
                max="300"
                value={area}
                onChange={(e) => setArea(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 font-bold text-amber-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs space-y-1.5 shadow-sm">
          <div className="text-sm font-extrabold text-purple-300">
            Tổng Quang Thông: {totalLumen.toLocaleString()} Lumen ➔ Độ rọi: ~{lux} Lux
          </div>
          <p className="text-slate-300 leading-relaxed">{advice}</p>
        </div>
      </div>
    </div>
  );
};
