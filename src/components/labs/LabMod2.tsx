import React, { useState } from 'react';
import { ThermometerSnowflake, Palette, CheckCircle2, AlertOctagon, Calculator } from 'lucide-react';

export const LabMod2: React.FC = () => {
  const [vrvState, setVrvState] = useState<'ok' | 'cut_rs485' | 'no_zigbee'>('ok');
  const [daikinId, setDaikinId] = useState<number>(0);
  const [selected5in1, setSelected5in1] = useState<number>(1);

  const modes5in1: Record<
    number,
    { title: string; pinout: string; initial: string; afterJoin: string }
  > = {
    1: {
      title: 'Nhấn 1 lần = Chế độ 1 (RGBWW)',
      pinout: '1 = B | 2 = G | 3 = R | 4 = CW | 5 = WW (Dây dương chung vào +)',
      initial: 'Kênh WW sáng trắng 100%, RGB tắt.',
      afterJoin: 'Kênh WW sáng vàng 100%, RGB tắt (Chỉ điều khiển được 1 trong 2 kênh tại 1 thời điểm).'
    },
    2: {
      title: 'Nhấn 2 lần = Chế độ 2 (RGB & WW)',
      pinout: '1 = B | 2 = G | 3 = R | 4 = CW | 5 = WW (Dây dương chung vào +)',
      initial: 'Cả 2 kênh sáng trắng 100%.',
      afterJoin: 'Cả 2 kênh tự động giảm xuống sáng vàng 12% (2 kênh chạy độc lập cùng lúc).'
    },
    3: {
      title: 'Nhấn 3 lần = Chế độ 3 (5Dim)',
      pinout: '1 = D1 | 2 = D2 | 3 = D3 | 4 = D4 | 5 = D5 (5 lộ LED đơn sắc độc lập)',
      initial: 'Cả 5 kênh sáng trắng 100%.',
      afterJoin: 'Cả 5 kênh tự động giảm xuống sáng 12%.'
    },
    4: {
      title: 'Nhấn 4 lần = Chế độ 4 (1WW 3Dim)',
      pinout: '1 = CW | 2 = WW | 3 = D1 | 4 = D2 | 5 = D3 (1 lộ WW + 3 lộ Dim)',
      initial: '4 lộ LED sáng trắng 100%.',
      afterJoin: 'Kênh WW sáng vàng 12%, 3 Dim sáng 12%.'
    },
    5: {
      title: 'Nhấn 5 lần = Chế độ 5 (2WW 1Dim)',
      pinout: '1 = CW1 | 2 = WW1 | 3 = CW2 | 4 = WW2 | 5 = D1 (2 lộ WW + 1 lộ Dim)',
      initial: 'Tất cả kênh sáng trắng 100%.',
      afterJoin: 'Tất cả kênh tự động giảm xuống sáng 12%.'
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Thực hành 1: Bắt bệnh LED Mạch DTA116A51 & Module LM-DK */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4 shadow-inner flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-amber-400 flex items-center gap-2">
              <ThermometerSnowflake className="w-4 h-4 text-cyan-400" />
              <span>Thực hành 1: Bắt Bệnh Đèn LED Trên DTA116A51 & LM-DK [00:24:30]</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Chọn tình huống để kiểm tra đèn <code>H1P–H4P</code> trên DTA116A51 và 3 đèn LED trên Module <code>LM-DK</code>:
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setVrvState('ok')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  vrvState === 'ok' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                1. Chuẩn (DATA+ đấu B-)
              </button>
              <button
                onClick={() => setVrvState('cut_rs485')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  vrvState === 'cut_rs485' ? 'bg-rose-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                2. Đấu nhầm DATA+/A+ hoặc đứt cáp
              </button>
              <button
                onClick={() => setVrvState('no_zigbee')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  vrvState === 'no_zigbee' ? 'bg-amber-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                3. Chưa vào mạng Zigbee HC
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 glow-emerald inline-block mb-1" />
                <div className="font-bold">DTA: H1P/H2P</div>
                <div className="text-[10px] text-amber-300 mt-0.5">Nháy vàng = Thông DIII-NET</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                <span
                  className={`w-3.5 h-3.5 rounded-full inline-block mb-1 ${
                    vrvState === 'no_zigbee' ? 'bg-rose-500 glow-rose' : 'bg-emerald-500 glow-emerald'
                  }`}
                />
                <div className="font-bold">LM-DK: Zigbee</div>
                <div className={`text-[10px] mt-0.5 ${vrvState === 'no_zigbee' ? 'text-rose-400 font-bold' : 'text-emerald-400'}`}>
                  {vrvState === 'no_zigbee' ? 'Đỏ = Chưa vào mạng' : 'Xanh = Đã vào mạng'}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                <span
                  className={`w-3.5 h-3.5 rounded-full inline-block mb-1 ${
                    vrvState === 'cut_rs485' ? 'bg-slate-600' : 'bg-emerald-500 glow-emerald'
                  }`}
                />
                <div className="font-bold">LM-DK: RS485 & H3P/H4P</div>
                <div className={`text-[10px] mt-0.5 ${vrvState === 'cut_rs485' ? 'text-slate-400 font-bold' : 'text-emerald-400'}`}>
                  {vrvState === 'cut_rs485' ? 'Tắt = Mất tín hiệu' : 'Nháy = Thông Modbus'}
                </div>
              </div>
            </div>

            {vrvState === 'ok' && (
              <div className="p-3 rounded-xl bg-slate-900 text-xs text-emerald-300 border border-emerald-500/40 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <span>
                  ✅ <strong>Đấu đúng:</strong> Chân <code>DATA(+)</code> vào <code>B(-)</code>, <code>DATA(-)</code> vào <code>A(+)</code>. Đèn H3P/H4P trên DTA nháy vàng và LED RS485 trên LM-DK nháy xanh!
                </span>
              </div>
            )}

            {vrvState === 'cut_rs485' && (
              <div className="p-3 rounded-xl bg-rose-950 text-xs text-rose-200 border border-rose-500 flex items-start gap-2">
                <AlertOctagon className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span>
                  ⚠️ <strong>Bắt bệnh [00:24:47]:</strong> Đèn RS485 tắt báo hiệu chưa kết nối được với DTA116A51. Hãy kiểm tra: (1) Có đấu nhầm <code>DATA(+)</code> vào <code>A(+)</code> không (phải đấu <code>DATA+</code> vào <code>B-</code>), (2) Đứt dây CAT6, hoặc (3) Chưa gạt DIP Switch <code>DS1, DS2, SS1, SS2, SS3</code>.
                </span>
              </div>
            )}

            {vrvState === 'no_zigbee' && (
              <div className="p-3 rounded-xl bg-amber-950 text-xs text-amber-200 border border-amber-500 flex items-start gap-2">
                <AlertOctagon className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  💡 <strong>Bắt bệnh:</strong> Đèn Zigbee sáng Đỏ nghĩa là Module LM-DK chưa gia nhập mạng HC. Hãy mở App Lumi Life bật chế độ tìm kiếm thiết bị mới và bấm nút Config trên module.
                </span>
              </div>
            )}
          </div>

          {/* Máy tính nhanh NetID = ID mặt lạnh + 1 */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mt-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-amber-300">Tính nhanh NetID trên App [00:23:59]:</span>
                <span className="text-slate-400 block text-[11px]">Nhập ID mặt lạnh cài trên khiển BRC (0 – 15):</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <input
                type="number"
                min="0"
                max="15"
                value={daikinId}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setDaikinId(isNaN(val) ? 0 : Math.min(15, Math.max(0, val)));
                }}
                className="w-16 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-center font-mono font-bold text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                ➔ NetID = {daikinId + 1}
              </span>
            </div>
          </div>
        </div>

        {/* Thực hành 2: Cấu hình Module 5 IN 1 (LM-5IN1/Z-B) & Trạng thái 100% -> 12% */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4 shadow-inner flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-purple-400 flex items-center gap-2">
              <Palette className="w-4 h-4 text-purple-400" />
              <span>Thực hành 2: Cấu Hình LM-5IN1 & Trạng Thái Sáng 100% ➔ 12% [00:30:11]</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sau khi giữ nút Config 10 giây, chọn số lần nhấn nút Config (1–5 lần) để xem sơ đồ 5 chân <code>1, 2, 3, 4, 5</code> và trạng thái sáng khi chưa vào mạng vs đã vào mạng:
            </p>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setSelected5in1(n)}
                  className={`p-2 rounded-xl border text-xs font-bold transition flex flex-col items-center gap-1 ${
                    selected5in1 === n
                      ? 'bg-purple-900 border-purple-400 text-white ring-2 ring-purple-500/50'
                      : 'bg-slate-900 hover:bg-purple-950 border-purple-500/30 text-purple-300'
                  }`}
                >
                  <span>Nhấn {n} lần</span>
                  <span className="text-[10px] text-slate-400">Mode {n}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs space-y-2 shadow-sm">
            <div className="font-bold text-amber-400 text-sm">{modes5in1[selected5in1].title}</div>
            <div className="font-mono text-cyan-300 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 text-[11px]">
              Sơ đồ chân: {modes5in1[selected5in1].pinout}
            </div>
            <div className="space-y-1 text-slate-300 leading-relaxed pt-1">
              <p>
                • <strong>Mới cấp nguồn (Chưa vào mạng):</strong> {modes5in1[selected5in1].initial}
              </p>
              <p>
                • <strong>Sau khi gia nhập mạng HC:</strong>{' '}
                <span className="text-emerald-300 font-semibold">{modes5in1[selected5in1].afterJoin}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
