import React, { useState } from 'react';
import { ThermometerSnowflake, Palette, CheckCircle2, AlertOctagon } from 'lucide-react';

export const LabMod2: React.FC = () => {
  const [vrvState, setVrvState] = useState<'ok' | 'cut_rs485' | 'no_zigbee'>('ok');
  const [selected5in1, setSelected5in1] = useState<number>(1);

  const modes5in1: Record<number, { title: string; desc: string }> = {
    1: {
      title: 'Chế độ 1: RGBW (Ấn Config 1 lần)',
      desc: 'Điều khiển 1 dây LED đổi màu RGB (chân R, G, B) + 1 kênh LED đơn sắc Trắng (chân W). Đấu dây Dương chung vào V+ (24VDC).'
    },
    2: {
      title: 'Chế độ 2: RGB + WW (Ấn Config 2 lần)',
      desc: 'Điều khiển 1 dây LED đổi màu RGB + 1 dây LED Tunable White thay đổi nhiệt độ màu Nóng/Lạnh (WW).'
    },
    3: {
      title: 'Chế độ 3: 5 Dim (Ấn Config 3 lần)',
      desc: 'Điều khiển độc lập 5 lộ đèn LED dây đơn sắc (tăng giảm độ sáng từng lộ riêng biệt).'
    },
    4: {
      title: 'Chế độ 4: 1 WW + 3 Dim (Ấn Config 4 lần)',
      desc: 'Điều khiển 1 lộ LED thay đổi nhiệt độ màu Nóng/Lạnh + 3 lộ LED đơn sắc.'
    },
    5: {
      title: 'Chế độ 5: 2 WW + 1 Dim (Ấn Config 5 lần)',
      desc: 'Điều khiển 2 lộ LED thay đổi nhiệt độ màu Nóng/Lạnh + 1 lộ LED đơn sắc.'
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bắt bệnh LED Module VRV Daikin */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4 shadow-inner">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-amber-400 flex items-center gap-2">
            <ThermometerSnowflake className="w-4 h-4 text-cyan-400" />
            <span>Thực hành 1: Bắt Bệnh Qua Đèn LED Module VRV [00:24:50]</span>
          </h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Bấm chọn các tình huống thực tế tại công trình để xem trạng thái 3 đèn LED trên Module VRV Lumi:
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setVrvState('ok')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
              vrvState === 'ok' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            1. Hoạt động chuẩn
          </button>
          <button
            onClick={() => setVrvState('cut_rs485')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
              vrvState === 'cut_rs485' ? 'bg-rose-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            2. Đứt/Ngược dây F1-F2 (DTA116A51)
          </button>
          <button
            onClick={() => setVrvState('no_zigbee')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
              vrvState === 'no_zigbee' ? 'bg-amber-600 text-white shadow' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            3. Chưa gia nhập mạng HC
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 glow-rose inline-block mb-1.5" />
            <div className="font-bold">LED Nguồn</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Đỏ = Có 12-24V</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
            <span
              className={`w-3.5 h-3.5 rounded-full inline-block mb-1.5 ${
                vrvState === 'no_zigbee' ? 'bg-rose-500 glow-rose' : 'bg-emerald-500 glow-emerald'
              }`}
            />
            <div className="font-bold">LED Zigbee</div>
            <div className={`text-[10px] mt-0.5 ${vrvState === 'no_zigbee' ? 'text-rose-400 font-bold' : 'text-emerald-400'}`}>
              {vrvState === 'no_zigbee' ? 'Đỏ = Chưa vào mạng' : 'Xanh = Đã vào mạng'}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
            <span
              className={`w-3.5 h-3.5 rounded-full inline-block mb-1.5 ${
                vrvState === 'cut_rs485' ? 'bg-rose-500 glow-rose animate-ping' : 'bg-emerald-500 glow-emerald'
              }`}
            />
            <div className="font-bold">LED RS485</div>
            <div className={`text-[10px] mt-0.5 ${vrvState === 'cut_rs485' ? 'text-rose-400 font-bold' : 'text-emerald-400'}`}>
              {vrvState === 'cut_rs485' ? 'Nháy Đỏ = Lỗi F1/F2' : 'Xanh = Kết nối DTA tốt'}
            </div>
          </div>
        </div>

        {vrvState === 'ok' && (
          <div className="p-3 rounded-xl bg-slate-900 text-xs text-emerald-300 border border-emerald-500/40 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>✅ <strong>Tất cả kết nối hoàn hảo:</strong> Đã nhận mạch DTA116A51 và đồng bộ 2 chiều lên App Lumi Life.</span>
          </div>
        )}

        {vrvState === 'cut_rs485' && (
          <div className="p-3 rounded-xl bg-rose-950 text-xs text-rose-200 border border-rose-500 flex items-start gap-2">
            <AlertOctagon className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span>
              ⚠️ <strong>Bắt bệnh:</strong> Đèn RS485 nháy Đỏ báo hiệu đứt dây tín hiệu F1-F2 từ Module về mạch <code className="bg-rose-900 px-1 py-0.5 rounded">DTA116A51</code> ở cục nóng, đấu sai cực tính hoặc cục nóng Daikin chưa được đóng điện!
            </span>
          </div>
        )}

        {vrvState === 'no_zigbee' && (
          <div className="p-3 rounded-xl bg-amber-950 text-xs text-amber-200 border border-amber-500 flex items-start gap-2">
            <AlertOctagon className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
            <span>
              💡 <strong>Bắt bệnh:</strong> Đèn Zigbee sáng Đỏ nghĩa là Module chưa được Add vào bộ trung tâm HC. Hãy mở App Lumi Life bật chế độ tìm kiếm thiết bị mới và bấm nút Config trên module.
            </span>
          </div>
        )}
      </div>

      {/* Chuyển 5 chế độ Module 5 in 1 */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4 shadow-inner flex flex-col justify-between">
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-purple-400 flex items-center gap-2">
            <Palette className="w-4 h-4 text-purple-400" />
            <span>Thực hành 2: Bấm Nút Config Chọn 5 Chế Độ LED 5 in 1 [00:31:10]</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Sau khi <strong>nhấn giữ nút Config 10 giây</strong> để mở khóa, hãy chọn số lần bấm nút Config (từ 1 đến 5 lần) để cấu hình đầu ra cho cuộn LED dây 24VDC:
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
                <span>Bấm {n} lần</span>
                <span className="text-[10px] text-slate-400">Mode {n}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs space-y-1.5 shadow-sm">
          <div className="font-bold text-amber-400 text-sm">{modes5in1[selected5in1].title}</div>
          <p className="text-slate-300 leading-relaxed">{modes5in1[selected5in1].desc}</p>
        </div>
      </div>
    </div>
  );
};
