import React, { useState } from 'react';
import { Zap, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export const LabMod0: React.FC = () => {
  const [selectedWire, setSelectedWire] = useState<number | null>(null);
  const [rcboMode, setRcboMode] = useState<'none' | 'wrong' | 'correct'>('none');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Thực hành 1: Bút thử điện 5 dây đỏ */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4 shadow-inner">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-amber-400 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Thực hành 1: Chạm Bút Thử Điện Tìm Dây Lửa (L)</span>
          </h4>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            CB Đang Bật 220V
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Trong hộp đế âm có 5 sợi dây màu đỏ giống hệt nhau và 1 cụm dây xanh xoắn chung. Hãy bấm chọn từng đầu dây để đưa đầu bút thử điện vào kiểm tra:
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setSelectedWire(i)}
              className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition ${
                selectedWire === i
                  ? 'bg-red-950 border-red-500 ring-2 ring-red-500/50'
                  : 'bg-slate-900 hover:bg-slate-850 border-red-500/40 hover:border-red-400'
              }`}
            >
              <span className="w-4 h-9 rounded bg-red-600 block border-t-4 border-amber-300 shadow-sm" />
              <span className="text-[11px] font-bold">Dây Đỏ {i}</span>
            </button>
          ))}
          <button
            onClick={() => setSelectedWire(6)}
            className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition ${
              selectedWire === 6
                ? 'bg-blue-950 border-blue-500 ring-2 ring-blue-500/50'
                : 'bg-slate-900 hover:bg-slate-850 border-blue-500/40 hover:border-blue-400'
            }`}
          >
            <span className="w-4 h-9 rounded bg-blue-600 block border-t-4 border-amber-300 shadow-sm" />
            <span className="text-[11px] font-bold text-blue-400">Cụm Xanh</span>
          </button>
        </div>

        {selectedWire === null && (
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-400">
            👉 Hãy bấm vào một sợi dây phía trên để xem đèn bút thử điện có sáng không!
          </div>
        )}

        {selectedWire === 3 && (
          <div className="p-3.5 rounded-xl bg-red-950/90 border-2 border-red-500 text-xs text-red-200 space-y-1">
            <div className="flex items-center gap-2 font-bold text-red-300">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              💡 ĐÈN BÚT THỬ ĐIỆN SÁNG ĐỎ RỰC!
            </div>
            <p>
              Sợi <strong>Dây Đỏ số 3</strong> chính là <strong>Dây Lửa Nguồn (L - 220V)</strong>! Hãy quấn băng dính đánh dấu lại ngay để lát nữa đấu vào chân <code className="bg-red-900 px-1 py-0.5 rounded">L</code> của công tắc.
            </p>
          </div>
        )}

        {selectedWire === 6 && (
          <div className="p-3.5 rounded-xl bg-blue-950/80 border border-blue-500 text-xs text-blue-200 space-y-1">
            <div className="font-bold text-blue-300">💧 Bút thử điện KHÔNG sáng:</div>
            <p>
              Đây là cụm <strong>Dây Nguội / Mát chung (N)</strong>. Bạn trích 1 sợi từ bó này đấu vào chân <code className="bg-blue-900 px-1 py-0.5 rounded">N</code> để nuôi nguồn công tắc.
            </p>
          </div>
        )}

        {selectedWire !== null && selectedWire !== 3 && selectedWire !== 6 && (
          <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 text-xs text-amber-200 space-y-1">
            <div className="font-bold text-amber-300">🌑 Bút thử điện KHÔNG sáng:</div>
            <p>
              Sợi <strong>Dây Đỏ số {selectedWire}</strong> là <strong>Dây Tải đi lên bóng đèn</strong> (đấu vào các chân <code>1, 2, 3, 4</code>). Hãy thử tiếp các sợi dây đỏ khác để tìm dây Lửa!
            </p>
          </div>
        )}
      </div>

      {/* Thực hành 2: Mô phỏng lỗi mượn mát nhảy CB chống giật */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4 shadow-inner flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Thực hành 2: Mô Phỏng Lỗi Mượn Mát Nhảy CB</span>
            </h4>
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
                rcboMode === 'wrong'
                  ? 'bg-rose-600 text-white animate-pulse'
                  : rcboMode === 'correct'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-700 text-slate-300'
              }`}
            >
              {rcboMode === 'wrong' ? 'RCBO: TRIP (CÚP ĐIỆN!)' : rcboMode === 'correct' ? 'RCBO: ON (AN TOÀN)' : 'RCBO: CHỜ TEST'}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Đế âm công tắc chỉ có dây Lửa (của CB Đèn), bị thiếu dây Mát (N). Hãy thử 2 phương án lấy dây Mát dưới đây rồi kiểm tra phản ứng của Aptomat chống giật:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={() => setRcboMode('wrong')}
              className={`p-3 rounded-xl border text-left text-xs transition ${
                rcboMode === 'wrong'
                  ? 'bg-rose-900 border-rose-400 ring-2 ring-rose-500/50'
                  : 'bg-rose-950/60 hover:bg-rose-900/70 border-rose-500/50'
              }`}
            >
              <div className="font-bold text-rose-300 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> Cách 1: Mượn N từ Ổ cắm
              </div>
              <div className="text-[11px] text-slate-300 mt-1">Lấy L của CB Đèn + N của CB Ổ cắm (Khác RCBO)</div>
            </button>

            <button
              onClick={() => setRcboMode('correct')}
              className={`p-3 rounded-xl border text-left text-xs transition ${
                rcboMode === 'correct'
                  ? 'bg-emerald-900 border-emerald-400 ring-2 ring-emerald-500/50'
                  : 'bg-emerald-950/60 hover:bg-emerald-900/70 border-emerald-500/50'
              }`}
            >
              <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Cách 2: Kéo N từ Hộp Đèn
              </div>
              <div className="text-[11px] text-slate-300 mt-1">Dây N kéo từ đèn trần (Cùng đi ra & về 1 CB Đèn)</div>
            </button>
          </div>
        </div>

        {rcboMode === 'none' && (
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-400">
            👉 Chọn 1 trong 2 cách đấu dây Mát phía trên để kiểm tra phản ứng của Aptomat chống giật!
          </div>
        )}

        {rcboMode === 'wrong' && (
          <div className="p-3.5 rounded-xl bg-rose-950 border-2 border-rose-500 text-xs text-rose-200 space-y-1 animate-fade-in">
            <div className="font-extrabold text-sm text-rose-300 flex items-center gap-1.5">
              💥 CẠCH! NHẢY APTOMAT CHỐNG GIẬT NGAY LẬP TỨC!
            </div>
            <p>
              Dòng điện đi ra từ chân L của CB Đèn nhưng lại chạy về chân N của CB Ổ cắm. CB chống giật phát hiện <strong>dòng đi (I_out) ≠ dòng về (I_in)</strong> nên ngắt điện toàn phòng để bảo vệ rò điện!
            </p>
          </div>
        )}

        {rcboMode === 'correct' && (
          <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-500 text-xs text-emerald-200 space-y-1">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              ✅ HOẠT ĐỘNG HOÀN TOÀN BÌNH THƯỜNG!
            </div>
            <p>
              Dây Lửa và dây Nguội cùng xuất phát và quay về trên 1 CB Đèn nên dòng điện cân bằng tuyệt đối, đèn sáng ổn định và an toàn cho gia chủ.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
