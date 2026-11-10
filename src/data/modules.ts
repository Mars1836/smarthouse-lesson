import { ModuleData } from '../types';

export const coreModules: ModuleData[] = [
  {
    id: 'mod0',
    step: 'Chặng 0',
    title: 'Nhập Môn Điện Dân Dụng & An Toàn Đế Âm',
    subtitle: 'Dành cho người mới 100%: Phân biệt L/N/Tải/PE, xử lý đế âm 5 dây đỏ & lỗi nhảy CB chống giật',
    badge: 'Nền tảng bắt buộc',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    videoUrl: null,
    timestamps: [],
    summary: 'Khác với công tắc cơ chỉ cắt dây Lửa, Công tắc thông minh Lumi bắt buộc phải có cả Dây Lửa (L - 220V) và Dây Nguội/Mát (N) để nuôi nguồn mạch điện tử 24/7.',
    theoryBlocks: [
      {
        title: '1. Bảng Nhận Diện 4 Loại Dây Điện Trong Đế Âm Tường',
        html: `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30">
                <div class="flex justify-between font-bold text-red-400 mb-1"><span>🔥 Dây Lửa (L)</span><span>220V AC</span></div>
                <p class="text-slate-600 dark:text-slate-300">Bút thử điện <strong>sáng đỏ rực</strong>. Cấp nguồn chính vào chân <code>L</code> của công tắc.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div class="flex justify-between font-bold text-blue-400 mb-1"><span>💧 Dây Nguội / Mát (N)</span><span>~0V</span></div>
                <p class="text-slate-600 dark:text-slate-300">Bút thử điện không sáng. Thường được <strong>xoắn chụm nhiều dây xanh/trắng</strong> trong đế âm. Đấu vào chân <code>N</code>.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div class="flex justify-between font-bold text-amber-400 mb-1"><span>💡 Dây Tải Ra Đèn</span><span>Chân 1,2,3,4</span></div>
                <p class="text-slate-600 dark:text-slate-300">Dây chạy từ công tắc lên bóng đèn. Thợ hay kéo <strong>cùng màu đỏ</strong> với dây Lửa nên phải tách ra thử bút điện.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div class="flex justify-between font-bold text-emerald-400 mb-1"><span>🛡️ Dây Tiếp Địa (PE)</span><span>Xanh lá-Vàng</span></div>
                <p class="text-slate-600 dark:text-slate-300">Đo đồng hồ với L vẫn lên 220V! <strong>Cấm đấu nhầm vào chân N</strong> (sẽ làm nhảy CB chống giật ngay).</p>
            </div>
        </div>`
      },
      {
        title: '2. Giải Mã Bức Ảnh Đế Âm Có "5 Dây Đỏ + 1 Cụm Dây Xanh" & Lỗi Mượn Mát Nhảy CB',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h4 class="font-bold text-amber-400">🛠️ 4 Bước Xử Lý 5 Dây Đỏ Cùng Màu:</h4>
                <p>1. <strong>Tắt CB</strong>, tách rời 5 đầu dây đỏ không chạm nhau.</p>
                <p>2. <strong>Bật CB</strong>, chạm bút thử điện vào từng dây đỏ: <strong>Duy nhất 1 dây làm bút sáng đỏ là Lửa nguồn (L)</strong> -> Đánh dấu lại.</p>
                <p>3. <strong>Tắt CB</strong>, lấy sợi dây xanh trích từ bó dây chụm chung đấu vào chân <strong>N</strong>.</p>
                <p>4. Đấu 4 sợi đỏ còn lại vào chân <strong>1, 2, 3, 4</strong> (lệch nút nào chỉ cần tráo dây ở 1,2,3,4).</p>
            </div>
            <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1.5">
                <h4 class="font-bold text-rose-400">⚠️ Tại Sao Mượn Dây Mát (N) Của Ổ Cắm Lại Nhảy CB Chống Giật?</h4>
                <p>• <strong>Nguy cơ nhà 3 pha:</strong> Đấu nhầm 2 dây Lửa khác pha (L1 và L2) sẽ tạo điện áp <strong>380V</strong> nổ tung công tắc!</p>
                <p>• <strong>Nguyên lý CB chống giật (RCBO/RCCB):</strong> Điện đi ra từ dây L của CB Đèn thì bắt buộc phải quay về đúng dây N của CB Đèn. Nếu bạn mượn dây N của CB Ổ cắm, dòng điện bị lệch -> <strong>CB chống giật tưởng rò điện và nhảy cúp ngay khi bật đèn!</strong></p>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod0',
    miniQuiz: [
      {
        q: 'Khi mở hộp đế âm công tắc 4 nút thấy 5 sợi dây màu đỏ giống hệt nhau và 1 cụm dây màu xanh dương xoắn chung, làm sao tìm đúng dây Lửa nguồn (L)?',
        options: [
          'Đoán theo màu đầu cosse nhựa.',
          'Ngắt CB tách rời 5 đầu dây đỏ, bật lại CB rồi dùng bút thử điện chạm từng dây: duy nhất 1 dây làm bút sáng đỏ chính là dây Lửa nguồn (L).',
          'Đấu đại 1 dây đỏ bất kỳ vào chân L.',
          'Cắt bỏ bớt 3 dây đỏ.'
        ],
        correct: 1,
        explain: 'Chính xác! Thợ điện thường đi chung 1 cuộn dây đỏ cho cả Lửa nguồn và Tải đèn. Chỉ có dây Lửa nguồn (L) mới làm bút thử điện sáng khi đã tách rời các dây.'
      },
      {
        q: 'Vì sao khi đế âm công tắc bị thiếu dây Nguội (N), bạn câu dây Nguội từ ổ cắm gần đó (nhưng khác Aptomat chống giật RCBO) thì vừa bật đèn là nhảy CB?',
        options: [
          'Do công tắc tiêu thụ quá nhiều điện.',
          'Do dòng điện đi ra từ L của CB Đèn nhưng lại trở về qua N của CB Ổ cắm, làm lệch dòng điện so sánh khiến CB chống giật nhảy bảo vệ.',
          'Do dây ổ cắm bị đứt.',
          'Do bóng đèn bị cháy.'
        ],
        correct: 1,
        explain: 'Chuẩn xác! Chỉ được mượn dây Mát từ ổ cắm nếu ổ cắm đó đi CHUNG cùng 1 CB chống giật với đèn (tắt CB đèn thì ổ cắm mất điện theo).'
      }
    ]
  },
  {
    id: 'mod1',
    step: 'Chặng 1',
    title: 'Bài 1A: Công Tắc Cảm Ứng, Đế Âm & Hệ Thống Cảm Biến (Bản Đầy Đủ Mã SP)',
    subtitle: 'Đầy đủ mã LM-SxN/LM-S1D/LM-SxH, thứ tự chân đấu, đế Sino S3157L/S2157, 6 thao tác Config, LM-MDZ/LM-MDB/LM-MC/LM-MSZ/LM-DSZ',
    badge: 'Video Bài 1 (00:00 - 18:50)',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=-RhVDFZZfnc',
    timestamps: [
      { label: '00:29 4 Tiêu chí & 7 Dòng CT', sec: 29 },
      { label: '00:59 Mã LM-SxN / LM-S1D / LM-SxH', sec: 59 },
      { label: '02:32 Đế âm Sino S3157L & S2157', sec: 152 },
      { label: '05:23 Địa chỉ MAC & 6 Tính năng Config', sec: 323 },
      { label: '07:25 Mã LM-MDZ/2.0, LM-MDB, LM-MDZ/2.1', sec: 445 },
      { label: '10:40 10 Nấc vặn biến trở LM-MC', sec: 640 },
      { label: '12:59 Cầu thang 2in1 LM-MSZ', sec: 779 },
      { label: '16:22 Cảm biến cửa LM-DSZ/1.1', sec: 982 }
    ],
    summary: 'Tổng hợp 100% thông số trên từng slide Bài 1 (Phần 1 & 2): Giải mã ký hiệu mã sản phẩm, sự ngược chân N trên công tắc công suất cao LM-SxH, kích thước milimet đế âm Sino, 6 thao tác vật lý và toàn bộ 6 mã cảm biến (bao gồm 10 nấc vặn biến trở Time/Lux).',
    theoryBlocks: [
      {
        title: '1. Phân Loại Ngoại Hình & Giải Mã Mã Sản Phẩm + Thứ Tự Chân Đấu Trên Tem [00:00:29 - 00:05:15]',
        html: `
        <div class="space-y-4 text-xs sm:text-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-emerald-400 mb-1">🎨 4 Tiêu Chí Ngoại Hình Công Tắc [00:00:29]:</div>
                    <p>• <strong>Màu sắc:</strong> Đen, Trắng &nbsp;|&nbsp; <strong>Hình dạng:</strong> Vuông, Chữ nhật</p>
                    <p>• <strong>Viền:</strong> Viền thẳng, Viền bo &nbsp;|&nbsp; <strong>Mặt kính:</strong> Kính phẳng, Kính lõm</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-amber-400 mb-1">⚡ 7 Dòng Công Tắc Cảm Ứng Lumi:</div>
                    <p>1. CS Thường &bull; 2. CS Cao &bull; 3. Chiết áp (Dimmer) &bull; 4. Công tắc Rèm &bull; 5. Cửa cuốn &bull; 6. Cổng &bull; 7. Dual Mode.</p>
                </div>
            </div>

            <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                <table class="w-full border-collapse text-left text-xs">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                            <th class="p-2.5">Loại Công Tắc</th>
                            <th class="p-2.5">Mã Sản Phẩm & Giải Nghĩa Ký Hiệu</th>
                            <th class="p-2.5">Công Suất & Thông Số Tem</th>
                            <th class="p-2.5">Thứ Tự Cầu Đấu Trên Tem</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                            <td class="p-2.5 font-bold text-emerald-400">1. Công tắc thường<br><span class="text-[10px] text-slate-400">[00:00:59]</span></td>
                            <td class="p-2.5">
                                <code class="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">LM-SxN</code><br>
                                <span class="text-[11px] text-slate-400">Tem hộp: <code>LM-SZN-xK(G)/W(B)/V.2</code></span><br>
                                • <b>LM</b>: Lumi | <b>S</b>: Switch<br>
                                • <b>x = 1, 2, 3, 4</b>: Số nút (tối đa 4 nút)<br>
                                • <b>N</b>: Normal (Loại thường)
                            </td>
                            <td class="p-2.5">
                                • Nguồn: <code>100–240V AC ~ 50/60Hz</code><br>
                                • Tải mỗi rơ-le (1 nút): <strong>700W thuần trở</strong> / <strong>150W LED</strong><br>
                                • Nhiệt độ: <code>0°C–50°C</code> | Bảo vệ: <code>IP2X</code>
                            </td>
                            <td class="p-2.5 font-mono font-bold">
                                <span class="px-1.5 py-1 rounded bg-slate-900 text-red-400 border border-slate-700">L | 1 | 2 | 3 | 4 | N</span><br>
                                <span class="text-[10px] text-slate-400 font-sans">Chân L bên trái, chân N ngoài cùng bên phải</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2.5 font-bold text-purple-400">2. Công tắc chiết áp (Dimmer/Quạt)<br><span class="text-[10px] text-slate-400">[00:01:22]</span></td>
                            <td class="p-2.5">
                                <code class="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">LM-S1D</code><br>
                                <span class="text-[11px] text-slate-400">Tem hộp: <code>LM-S1D/A(W)</code></span><br>
                                • <b>1</b>: Chỉ có duy nhất <strong>1 nút bấm</strong><br>
                                • <b>D</b>: Dimmer (Chiết áp TRIAC)
                            </td>
                            <td class="p-2.5">
                                • Tải: <strong>500W thuần trở</strong> / <strong>150W LED Dim</strong><br>
                                • <span class="text-rose-400 font-bold">Cảnh báo:</span> Cấm dùng bật/tắt (On/Off) thiết bị thường vì sẽ gây hỏng mạch TRIAC!
                            </td>
                            <td class="p-2.5 font-mono font-bold">
                                <span class="px-1.5 py-1 rounded bg-slate-900 text-purple-300 border border-slate-700">L | 1 | 2 | N</span><br>
                                <span class="text-[10px] text-amber-400 font-sans">Dây tải đấu vào chân 1, chân 2 bỏ trống [00:04:50]</span>
                            </td>
                        </tr>
                        <tr class="bg-rose-500/10">
                            <td class="p-2.5 font-bold text-rose-400">3. Công tắc công suất cao<br><span class="text-[10px] text-slate-400">[00:01:43]</span></td>
                            <td class="p-2.5">
                                <code class="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">LM-SxH</code><br>
                                • <b>x = 1, 2, 3</b>: Tối đa <strong>3 nút</strong><br>
                                • <b>H</b>: High power (Công suất cao)
                            </td>
                            <td class="p-2.5">
                                • <strong>Duy nhất Nút 1: 3000W thuần trở (~16A) / 300W LED</strong> (Bình nóng lạnh 30L 2500W, máy bơm, đèn sưởi)<br>
                                • <strong>Nút 2 & 3:</strong> CS thường (<strong>700W trở / 150W LED</strong>)
                            </td>
                            <td class="p-2.5 font-mono font-bold">
                                <span class="px-1.5 py-1 rounded bg-slate-900 text-amber-300 border border-rose-500">N | L | 1 | 2 | 3</span><br>
                                <span class="text-[10px] text-rose-400 font-sans font-bold">⚠️ Chú ý: Chân N nằm ngoài cùng bên trái (ngược với LM-SxN!) [00:05:09]</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`
      },
      {
        title: '2. Khảo Sát Đế Âm (Sino S3157L / S2157) & 6 Thao Tác Vật Lý Nút Config [00:02:32 - 00:07:05]',
        html: `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
            <div class="lg:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 class="font-bold text-amber-400 text-sm">📐 Kích Thước Đế Âm Chuẩn & Độ Sâu [00:02:49]:</h4>
                <p>• <strong>Đế vuông (<code class="text-emerald-400">Sino S3157L</code>):</strong> Rộng <code>75mm</code> × Cao <code>75mm</code> × Sâu <code>40mm</code>. <strong>Bắt buộc chôn 2 tai vít NẰM DỌC (ĐỨNG)</strong>. <span class="text-rose-400 font-bold">❌ Cấm dùng đế đôi vuông liền khối!</span></p>
                <p>• <strong>Đế chữ nhật (<code class="text-emerald-400">Sino S2157</code>):</strong> Dài <code>106mm</code> × Rộng <code>56mm</code> × Sâu <code>40mm</code>. Chôn tai ngang hoặc dọc tùy ý.</p>
                <p>• <strong>Khoảng cách tối thiểu (2 mặt kính sát khít nhau):</strong><br>
                &nbsp;&nbsp;+ Đế vuông <code>S3157L</code>: Cách nhau <strong>2 cm</strong> (cả ngang và dọc).<br>
                &nbsp;&nbsp;+ Đế chữ nhật <code>S2157</code>: Cách nhau <strong>2,5 cm (ngang)</strong> và <strong>2 cm (dọc)</strong>.</p>
                <p>• <strong>Khoảng cách khuyên dùng thực tế:</strong> Cách nhau <strong>3 – 4 cm</strong> cho đẹp và thoáng [00:03:41].</p>
                <p>• <strong>Độ sâu chôn đế:</strong> Chôn bằng mặt gạch thô; sau khi trát vữa hoàn thiện thì mặt đế <strong>lõm sâu vào 1 – 2 cm</strong> [00:03:48].</p>
                <p>• <strong>Quản lý MAC 4 ký tự Hex [00:05:23]:</strong> Mỗi thiết bị có mã MAC riêng (VD trên slide: <code>493A</code> là MAC công tắc, <code>A55B</code> là MAC bộ trung tâm HC).</p>
            </div>

            <div class="lg:col-span-7 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 class="font-bold text-emerald-400 text-sm">🛠️ Bảng 6 Tính Năng Cài Đặt Trực Tiếp Trên Công Tắc [00:05:51]:</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <div class="font-bold text-cyan-400">1. Nhóm Binding (Đảo chiều không dây)</div>
                        <p class="mt-0.5">Nhấn giữ <strong>nút cảm ứng 10 giây</strong> trên Công tắc 1 (mở chờ) ➔ Sang Công tắc 2 <strong>chạm vào nút cần liên kết</strong> (không cần giữ 10s ở công tắc 2).</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <div class="font-bold text-rose-400">2. Reset công tắc (Về mặc định)</div>
                        <p class="mt-0.5">Ấn <strong>nút Config 5 lần</strong> (dùng khi chưa gia nhập mạng HC hoặc tháo từ nhà A sang nhà B).</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <div class="font-bold text-amber-400">3. Đổi Nhấn giữ / Nhấn nhả</div>
                        <p class="mt-0.5">Nhấn giữ <strong>nút Config 3 giây</strong> (chuyển đổi giữa chế độ công tắc thường và nút nhấn chuông/Rule).</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <div class="font-bold text-purple-400">4. Khóa cảm ứng toàn bộ công tắc</div>
                        <p class="mt-0.5">Ấn <strong>nút Config 10 lần</strong> (khóa toàn bộ mặt kính không cho bấm tay, chỉ điều khiển qua App).</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <div class="font-bold text-indigo-400">5. Khóa cảm ứng từng nút lẻ</div>
                        <p class="mt-0.5">Nhấn giữ <strong>nút Config 9 giây</strong> (VD: khóa riêng nút máy bơm tưới cây trên công tắc 3 nút).</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-500/40">
                        <div class="font-bold text-emerald-400">6. Đổi độ sáng LED viền (100% ⇄ 30%)</div>
                        <p class="mt-0.5">Nhấn giữ <strong>nút Config 5 giây</strong> (tháo nhẹ mặt kính để bấm nút Config hoặc chỉnh trên App). Mức 30% tránh chói mắt phòng ngủ người già.</p>
                    </div>
                </div>
            </div>
        </div>`
      },
      {
        title: '3. Bảng Tổng Hợp 6 Mã Cảm Biến Lumi & So Sánh LM-MDZ/2.0 (Zigbee) vs LM-MDB (BLE Mesh) [00:07:11 - 00:18:50]',
        html: `
        <div class="space-y-4 text-xs">
            <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                <table class="w-full border-collapse text-left">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                            <th class="p-2.5">Tên Cảm Biến</th>
                            <th class="p-2.5">Mã Sản Phẩm</th>
                            <th class="p-2.5">Nguồn Cấp</th>
                            <th class="p-2.5">Chuẩn Sóng</th>
                            <th class="p-2.5">Thông Số Kỹ Thuật & Lưu Ý Lắp Đặt Trên Slide</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                            <td class="p-2.5 font-bold text-emerald-400">1. CB Chuyển động Pin (Zigbee)</td>
                            <td class="p-2.5 font-mono font-bold"><code>LM-MDZ/2.0</code></td>
                            <td class="p-2.5">Pin tiểu mặt sau</td>
                            <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Zigbee</span></td>
                            <td class="p-2.5" rowspan="3">
                                • <strong>Góc quét hình nón 90°:</strong> Trần cao <strong>3m ➔ Đường kính sàn 6m</strong>; Trần cao <strong>6m ➔ Đường kính sàn 12m</strong> [00:08:19].<br>
                                • <strong>3 Vị trí cấm lắp:</strong> (1) Gần nguồn nhiệt lớn (bếp, cục nóng), (2) Cây cối đung đưa, (3) Ngoài trời nắng chiếu trực tiếp.<br>
                                • <strong>Độ trễ nút Config (Ấn nhanh 2 lần):</strong> <span class="text-emerald-400 font-bold">Xanh = 30s</span> | <span class="text-rose-400 font-bold">Đỏ = 120s (2p)</span> | <span class="text-pink-400 font-bold">Hồng = 300s (5p)</span>. Trên App chỉnh từ <strong>10s – 60 phút</strong>.<br>
                                • <span class="text-amber-400 font-bold">⚠️ Ghi chú vàng [00:09:18]:</span> <em>"Đánh thức cảm biến để lưu thông số cài đặt trên App"</em> (bấm nút hoặc khua tay trước mắt cảm biến khi lưu trên App).
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2.5 font-bold text-cyan-400">2. CB Chuyển động Pin (Bluetooth)</td>
                            <td class="p-2.5 font-mono font-bold"><code>LM-MDB</code></td>
                            <td class="p-2.5">Pin tiểu mặt sau</td>
                            <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">BLE Mesh</span></td>
                        </tr>
                        <tr>
                            <td class="p-2.5 font-bold text-teal-400">3. CB Chuyển động Nguồn</td>
                            <td class="p-2.5 font-mono font-bold"><code>LM-MDZ/2.1</code></td>
                            <td class="p-2.5">220VAC qua Adapter <code>3.3VDC</code></td>
                            <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Chỉ có Zigbee</span></td>
                        </tr>
                        <tr class="bg-amber-500/5">
                            <td class="p-2.5 font-bold text-amber-400">4. CB Gắn trần bản thường độc lập</td>
                            <td class="p-2.5 font-mono font-bold"><code>LM-MC</code></td>
                            <td class="p-2.5">220V AC trực tiếp<br>Chân: <code>L | 1 | Trống | N</code></td>
                            <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-bold">Không sóng (Độc lập)</span></td>
                            <td class="p-2.5">
                                • Không cần HC, không cần công tắc Lumi. Tự đóng cắt rơ-le chân <code>1</code> ra đèn.<br>
                                • Chỉnh bằng <strong>2 núm vặn biến trở 10 nấc</strong> mặt sau: <strong>Time (5s – 30 phút)</strong> và <strong>Lux (Cả ngày – Khi tối – Lux 20..300)</strong> [00:10:40].
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2.5 font-bold text-indigo-400">5. Công tắc CB Cầu thang 2in1</td>
                            <td class="p-2.5 font-mono font-bold"><code>LM-MSZ</code></td>
                            <td class="p-2.5">220V AC (1 rơ-le)<br>Chân: <code>L | 1 | N</code></td>
                            <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Zigbee</span></td>
                            <td class="p-2.5">
                                • Góc ngang <strong>150°</strong> (lắp <strong>Mắt che</strong> giảm còn <strong>50°</strong>), góc dọc <strong>35°</strong>, xa <strong>5m</strong>.<br>
                                • <strong>Chôn đế âm bắt buộc:</strong> Đế vuông chôn tai <strong>ĐỨNG</strong>; Đế chữ nhật chôn tai <strong>NẰM NGANG</strong> [00:14:53].<br>
                                • 2 chế độ: <strong>Auto</strong> (vặn 2 biến trở 10 nấc mặt sau) hoặc <strong>Manual</strong> (tắt đèn nút Auto, cài Rule trên App chuẩn hơn).<br>
                                • <strong>Rule 2 cảm biến 2 đầu cầu thang:</strong> Bật đèn dùng <strong>HOẶC (OR)</strong>; Tắt đèn dùng <strong>VÀ (AND)</strong> [00:15:52].
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2.5 font-bold text-rose-400">6. Cảm biến cửa</td>
                            <td class="p-2.5 font-mono font-bold"><code>LM-DSZ/1.1</code></td>
                            <td class="p-2.5">Pin <code>3.3V</code></td>
                            <td class="p-2.5"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Zigbee</span></td>
                            <td class="p-2.5">
                                • <strong>Phần Cảm biến (To):</strong> Gắn trên <strong>Cánh cửa</strong> (di động). <strong>Phần Nam châm (Nhỏ):</strong> Gắn trên <strong>Khung/Lề cửa</strong> (cố định) [00:16:43].<br>
                                • Hai mặt có <strong>rãnh đánh dấu</strong> quay vào nhau, khoảng cách khi đóng <strong><code>&lt;= 2 cm</code></strong>.<br>
                                • <strong>Rule An Ninh:</strong> Kết hợp điều kiện <strong>AND (Và)</strong> với 1 <strong>Nút công tắc ảo "An Ninh"</strong> [00:18:04].
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <div class="font-bold text-cyan-400 mb-1">💡 Khi Nào Chọn LM-MDZ/2.0 (Zigbee) vs. LM-MDB (BLE Mesh)?</div>
                <p>• Nếu điều khiển qua <strong>Rule (If-Then) trên bộ trung tâm HC</strong>: Vì HC thu phát được cả 2 sóng Zigbee và BLE Mesh nên thiết bị của 2 chuẩn sóng vẫn phối hợp chéo qua HC được.</p>
                <p>• <strong>NHƯNG bắt buộc chọn đúng mã cùng chuẩn sóng khi:</strong> (1) Cần <strong>tiếp sóng mở rộng mạng Mesh</strong> (nhà toàn công tắc Zigbee thì phải dùng <code>LM-MDZ/2.0</code> để nhờ công tắc tiếp sóng; nhà toàn đèn âm trần BLE Smart Lighting thì chọn <code>LM-MDB</code>), hoặc (2) Cài <strong>Binding trực tiếp</strong> không qua HC [00:12:24].</p>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod1',
    miniQuiz: [
      {
        q: "Trên Công tắc công suất cao LM-SxH (tối đa 3 nút), thứ tự cầu đấu dây ở mặt sau và vị trí đấu Bình nóng lạnh 2500W có gì đặc biệt?",
        options: [
          'Thứ tự chân giống hệt công tắc thường và nút nào cũng chịu được 3000W.',
          'Thứ tự chân là N | L | 1 | 2 | 3 (chân N nằm ngoài cùng bên trái, ngược với LM-SxN) và CHỈ DUY NHẤT NÚT SỐ 1 chịu tải 3000W thuần trở (~16A).',
          'Không cần đấu dây Nguội (N).',
          'Đấu bình nóng lạnh vào chân số 3.'
        ],
        correct: 1,
        explain: 'Chính xác [00:01:43 & 00:05:09]! Mã LM-SxH có chân N nằm ngoài cùng bên trái (N | L | 1 | 2 | 3) và chỉ rơ-le số 1 chịu tải 3000W.'
      },
      {
        q: "Khi cài đặt thông số độ trễ (10s - 60 phút) hoặc độ nhạy cho Cảm biến chuyển động dùng Pin (LM-MDZ/2.0 hoặc LM-MDB) trên App Lumi Life, bạn phải làm thao tác gì để cảm biến nhận lệnh?",
        options: [
          'Cứ bấm lưu trên App là xong, không cần làm gì thêm.',
          'Phải "Đánh thức cảm biến" (bấm nút hoặc khua tay trước mắt cảm biến) ngay lúc lưu trên App vì cảm biến dùng pin thường ở chế độ ngủ.',
          'Phải tháo pin ra lắp lại 5 lần.',
          'Phải tắt Aptomat tổng.'
        ],
        correct: 1,
        explain: 'Chuẩn xác theo ghi chú trên Slide [00:09:18]: "Đánh thức cảm biến để lưu thông số cài đặt trên app"!'
      },
      {
        q: "Khi lắp Công tắc Cảm biến cầu thang 2in1 (mã LM-MSZ), chiều chôn đế âm và cách cài Rule cho 2 cảm biến ở 2 đầu cầu thang chuẩn nhất là gì?",
        options: [
          'Đế vuông chôn tai đứng, đế chữ nhật chôn tai nằm ngang; cài Rule Bật đèn dùng HOẶC (OR) và Tắt đèn dùng VÀ (AND).',
          'Đế chữ nhật chôn đứng; cả Bật và Tắt đều dùng HOẶC (OR).',
          'Không cần phân biệt chiều đế âm.',
          'Chỉ lắp được 1 cảm biến duy nhất.'
        ],
        correct: 0,
        explain: 'Chính xác [00:14:53 & 00:15:52]!'
      }
    ]
  },
  {
    id: 'mod2',
    step: 'Chặng 2',
    title: 'Bài 1B: Hồng Ngoại LM-IR/2.0, VRV Daikin LM-DK & Bộ 3 Module (Đầy Đủ Sơ Đồ Chân)',
    subtitle: 'Đấu chân DATA(+)/B(-) mạch DTA116A51, công thức NetID = ID + 1, LM-INPUT, LM-2120 (8 chân) & LM-5IN1 (sáng 100% -> 12%)',
    badge: 'Video Bài 1 (18:57 - 32:45)',
    badgeColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=-RhVDFZZfnc',
    timestamps: [
      { label: '18:57 Hồng ngoại LM-IR/2.0 (5VDC)', sec: 1137 },
      { label: '20:38 Module Daikin LM-DK & DTA116A51', sec: 1238 },
      { label: '23:06 Đấu chân DATA+/B- & NetID=ID+1', sec: 1386 },
      { label: '24:30 Bắt bệnh LED H1P-H4P & LM-DK', sec: 1470 },
      { label: '25:28 Module LM-INPUT (COM/NO/NC)', sec: 1528 },
      { label: '26:43 Module LM-2120/Z-B (8 chân)', sec: 1603 },
      { label: '29:22 Module LM-5IN1 (100% -> 12%)', sec: 1762 }
    ],
    summary: 'Nắm trọn bộ thông số chuyên sâu Phần 3 & 4 của Bài 1: Sơ đồ đấu chéo chân DATA(+)/B(-) giữa LM-DK và DTA116A51, danh sách mã khiển BRC Daikin, công thức NetID = ID + 1, sơ đồ 8 chân LM-2120 và quy luật đèn sáng 100% -> 12% trên Module 5in1.',
    theoryBlocks: [
      {
        title: '1. Bộ Hồng Ngoại LM-IR/2.0 & Module Điều Hòa Trung Tâm VRV Daikin (LM-DK + DTA116A51) [00:18:57 - 00:25:20]',
        html: `
        <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <!-- Hồng ngoại LM-IR/2.0 -->
                <div class="lg:col-span-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-sm text-emerald-400">📺 Hồng Ngoại IR [18:57]</span>
                        <code class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">LM-IR/2.0</code>
                    </div>
                    <p>• <strong>Nguồn cấp:</strong> <code>5V DC / 1A</code> (qua củ sạc Adapter). Truyền thông: <strong>Zigbee</strong>.</p>
                    <p>• <strong>Yêu cầu lắp đặt:</strong> Khoảng cách <strong><code>&lt;= 5m</code></strong>, không vật cản, mắt IR nhìn thẳng thiết bị. Điều khiển <strong>1 chiều</strong>.</p>
                    <p>• <strong>2 Chế độ điều khiển [19:42]:</strong><br>
                    &nbsp;&nbsp;1. <em>Thư viện có sẵn:</em> Đủ nút tăng giảm từng °C, Mode, Fan, Swing.<br>
                    &nbsp;&nbsp;2. <em>Học lệnh từ Remote cũ:</em> Với điều hòa chỉ tạo được tối đa <strong>6 ô ngữ cảnh cài sẵn</strong> (VD: Cool 18°C, 20°C, 25°C, 26°C, Heat 28°C, 30°C) + 2 nút <code>ON / OFF</code>.</p>
                </div>

                <!-- VRV Daikin LM-DK + DTA116A51 -->
                <div class="lg:col-span-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="font-bold text-sm text-amber-400">❄️ Module Zigbee Daikin VRV (Đồng bộ 2 chiều) [20:38]</span>
                        <div class="flex gap-1.5">
                            <code class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">LM-DK (12-24VDC)</code>
                            <code class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold">+ Mạch Daikin DTA116A51</code>
                        </div>
                    </div>
                    <p>• <strong>Giới hạn phần cứng [22:27]:</strong> 1 bộ <code>LM-DK</code> + 1 mạch <code>DTA116A51</code> (lắp tại cục nóng) quản lý tối đa <strong>2 Cục nóng nối Chính–Phụ</strong> và <strong>16 Mặt lạnh</strong>. <em>(Nếu 2 cục nóng chạy độc lập song song ➔ Phải dùng 2 bộ LM-DK + 2 mạch DTA116A51)</em>. Dây tín hiệu RS485 dùng cáp <strong>CAT6 / CAT6A dài <code>&lt; 100m</code></strong>.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                        <div class="p-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700">
                            <div class="font-bold text-cyan-400 mb-1">🔌 Sơ Đồ Đấu Chân Chuẩn [23:06 & 23:30]:</div>
                            <p>1. <strong>Cục nóng Daikin ➔ Mạch DTA116A51:</strong><br>
                            &nbsp;&nbsp;• Cấp nguồn: Chân <code>X37A</code> (cục nóng) ➔ <code>X1A</code> (16-24VDC trên DTA).<br>
                            &nbsp;&nbsp;• Tín hiệu: Chân <code>F1, F2</code> (cục nóng) ➔ <code>X7A</code> (DIII-NET trên DTA).</p>
                            <p class="mt-1">2. <strong>Mạch DTA (Cầu X2M) ➔ Module Lumi LM-DK:</strong><br>
                            &nbsp;&nbsp;• Gạt DIP Switch <code>DS1, DS2</code> & <code>SS1, SS2, SS3</code> chọn RS485.<br>
                            &nbsp;&nbsp;• <span class="text-amber-300 font-bold">Chân <code>DATA(+)</code> của Lumi ➔ Đấu vào <code>B(-)</code> của DTA!</span><br>
                            &nbsp;&nbsp;• <span class="text-amber-300 font-bold">Chân <code>DATA(-)</code> của Lumi ➔ Đấu vào <code>A(+)</code> của DTA!</span></p>
                        </div>
                        <div class="p-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700">
                            <div class="font-bold text-emerald-400 mb-1">📟 Mã Khiển Daikin Hỗ Trợ Cài ID & Công Thức NetID [23:41]:</div>
                            <p>• <strong>Bảng điều khiển hỗ trợ:</strong> <code>BRC1C61</code>, <code>BRC1C62-9</code>, <code>BRC4C151 / 152 / 153</code> (Remote), <code>BRC1E61 / 62 / 63</code>, <code>BRC2E61</code>.</p>
                            <p class="mt-1.5 p-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-center">
                                Công thức App [23:59]: NetID device = ID mặt lạnh + 1
                            </p>
                            <p class="text-[11px] text-slate-400 mt-1">• <strong>Đèn LED trên DTA116A51 [24:30]:</strong> <code>H1P/H2P</code> nháy vàng = thông DIII-NET với cục nóng; <code>H3P/H4P</code> nháy vàng = thông Modbus với LM-DK.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
      },
      {
        title: '2. Bộ 3 Module Chuyên Dụng: LM-INPUT, LM-2120/Z-B (2 In 2 Out) & LM-5IN1/Z-B (LED Dây) [00:25:28 - 00:32:10]',
        html: `
        <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Module Input LM-INPUT -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-sm text-emerald-400">1. Module Input [25:28]</span>
                        <code class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">LM-INPUT</code>
                    </div>
                    <p>• <strong>Nguồn cấp:</strong> <code>12 – 24V DC</code> (Sơ đồ đấu nối hỗ trợ dải <code>9 – 24V DC</code> vào chân <code>24V/12V</code> và <code>GND</code>). Sóng: <strong>Zigbee</strong>.</p>
                    <p>• <strong>Chức năng:</strong> Tích hợp tối đa <strong>4 cảm biến hãng thứ 3</strong> có tiếp điểm khô <code>NO</code> (Normal Open) hoặc <code>NC</code> (Normal Close) như beam hàng rào, báo khói, báo cháy.</p>
                    <p>• <strong>Sơ đồ đấu 4 cặp chân <code>IN1-, IN1+</code> đến <code>IN4-, IN4+</code> [26:25]:</strong><br>
                    &nbsp;&nbsp;+ Chân <strong><code>IN-</code></strong> ➔ Đấu vào chân <strong><code>COM</code></strong> của cảm biến.<br>
                    &nbsp;&nbsp;+ Chân <strong><code>IN+</code></strong> ➔ Đấu vào chân <strong><code>NO</code></strong> hoặc <strong><code>NC</code></strong> của cảm biến.</p>
                </div>

                <!-- Module 2 IN 2 OUT LM-2120 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-sm text-amber-400">2. Module 2 IN 2 OUT [26:43]</span>
                        <code class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">LM-2120/Z & LM-2120/B</code>
                    </div>
                    <p>• <strong>Nguồn & Công suất:</strong> <code>110–230V AC</code>. Chịu tải <strong>1000W thuần trở / 200W LED mỗi rơ-le</strong> (công tắc cơ 4 nút cần 2 module hoặc gộp tải).</p>
                    <p>• <strong>Thứ tự 8 chân trên thân [27:36]:</strong> <code class="px-1.5 py-0.5 rounded bg-slate-900 text-amber-300 font-bold">IN2 | IN1 | O2 | O1 | S | NC | N | L</code><br>
                    &nbsp;&nbsp;(Cắt dây từ công tắc cơ lên đèn: đầu ra công tắc cơ vào <code>IN1, IN2</code>; đầu lên bóng đèn vào <code>O1, O2</code>).</p>
                    <p>• <strong>Cấu hình sâu trên App [27:58 - 29:11]:</strong><br>
                    &nbsp;&nbsp;+ <em>3 Chế độ Đầu vào:</em> <strong>Any change</strong> (Mặc định khuyên dùng), <strong>Nhấn giữ</strong> (bất tiện vì lệch trạng thái tay/App), <strong>Nhấn nhả</strong>.<br>
                    &nbsp;&nbsp;+ <em>5 Chế độ Đầu ra:</em> <code>Mặc định</code>, <code>Tự động bật</code>, <code>Tự động tắt</code>, <code>Bật trễ</code>, <code>Tắt trễ</code>.<br>
                    &nbsp;&nbsp;+ <em>Liên kết In-Out & Trạng thái khởi động sau mất điện:</em> <code>Mặc định</code> (nhớ trạng thái cũ), <code>Bật</code>, hoặc <code>Tắt</code>.</p>
                </div>
            </div>

            <!-- Bảng 5 Chế độ Module 5 IN 1 LM-5IN1/Z & LM-5IN1/B -->
            <div class="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 space-y-2.5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="font-bold text-sm text-purple-300">3. Module 5 IN 1 Điều Khiển LED Dây (Nhấn giữ Config 10s ➔ Nhấn 1 đến 5 lần) [00:29:22 - 00:31:58]</span>
                    <code class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-200 font-bold">LM-5IN1/Z (Zigbee) & LM-5IN1/B (BLE) • 12-24VDC</code>
                </div>
                <p>Tất cả dây Dương (<code>+12V/24V</code>) của cuộn LED đấu chung vào chân <code>+</code> của nguồn tổ ong MeanWell. Các dây Âm điều khiển màu đấu vào 5 chân <code>1, 2, 3, 4, 5</code> theo bảng chuẩn trên slide:</p>
                <div class="overflow-x-auto rounded-xl border border-purple-500/30">
                    <table class="w-full border-collapse text-left">
                        <thead>
                            <tr class="bg-slate-900 text-purple-200">
                                <th class="p-2">Thao Tác Nút Config</th>
                                <th class="p-2">Tên Chế Độ</th>
                                <th class="p-2">Sơ Đồ Đấu 5 Chân (1 - 2 - 3 - 4 - 5)</th>
                                <th class="p-2">Trạng Thái Khi Mới Cấp Nguồn</th>
                                <th class="p-2">Trạng Thái Sau Khi Gia Nhập Mạng HC</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800 bg-slate-950/80 text-slate-200">
                            <tr>
                                <td class="p-2 font-bold text-amber-400">Giữ 10s + Nhấn 1 lần</td>
                                <td class="p-2 font-bold">1. RGBWW<br><span class="text-[10px] text-slate-400">(Chỉ chạy 1 trong 2 kênh cùng lúc)</span></td>
                                <td class="p-2 font-mono"><code>1=B | 2=G | 3=R | 4=CW | 5=WW</code></td>
                                <td class="p-2">Kênh WW sáng trắng <strong>100%</strong>, RGB tắt</td>
                                <td class="p-2 text-amber-300">Kênh WW sáng vàng <strong>100%</strong>, RGB tắt</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-amber-400">Giữ 10s + Nhấn 2 lần</td>
                                <td class="p-2 font-bold">2. RGB & WW<br><span class="text-[10px] text-emerald-400">(2 kênh chạy độc lập cùng lúc)</span></td>
                                <td class="p-2 font-mono"><code>1=B | 2=G | 3=R | 4=CW | 5=WW</code></td>
                                <td class="p-2">Cả 2 kênh sáng trắng <strong>100%</strong></td>
                                <td class="p-2 text-emerald-300 font-bold">Cả 2 kênh giảm xuống sáng vàng <strong>12%</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-amber-400">Giữ 10s + Nhấn 3 lần</td>
                                <td class="p-2 font-bold">3. 5Dim<br><span class="text-[10px] text-slate-400">(5 lộ LED đơn sắc độc lập)</span></td>
                                <td class="p-2 font-mono"><code>1=D1 | 2=D2 | 3=D3 | 4=D4 | 5=D5</code></td>
                                <td class="p-2">Cả 5 kênh sáng trắng <strong>100%</strong></td>
                                <td class="p-2 text-emerald-300 font-bold">Cả 5 kênh giảm xuống sáng <strong>12%</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-amber-400">Giữ 10s + Nhấn 4 lần</td>
                                <td class="p-2 font-bold">4. 1WW 3Dim<br><span class="text-[10px] text-slate-400">(1 lộ WW + 3 lộ Dim)</span></td>
                                <td class="p-2 font-mono"><code>1=CW | 2=WW | 3=D1 | 4=D2 | 5=D3</code></td>
                                <td class="p-2">4 lộ LED sáng trắng <strong>100%</strong></td>
                                <td class="p-2 text-emerald-300 font-bold">Kênh WW sáng vàng <strong>12%</strong>, 3 Dim sáng <strong>12%</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold text-amber-400">Giữ 10s + Nhấn 5 lần</td>
                                <td class="p-2 font-bold">5. 2WW 1Dim<br><span class="text-[10px] text-slate-400">(2 lộ WW + 1 lộ Dim)</span></td>
                                <td class="p-2 font-mono"><code>1=CW1 | 2=WW1 | 3=CW2 | 4=WW2 | 5=D1</code></td>
                                <td class="p-2">Tất cả kênh sáng trắng <strong>100%</strong></td>
                                <td class="p-2 text-emerald-300 font-bold">Tất cả kênh giảm xuống sáng <strong>12%</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod2',
    miniQuiz: [
      {
        q: "Khi đấu dây tín hiệu RS485 từ cầu đấu X2M của mạch mở rộng Daikin DTA116A51 sang Module Lumi LM-DK, quy tắc đấu chân nào sau đây là ĐÚNG theo slide [00:23:30]?",
        options: [
          'Đấu DATA(+) vào A(+) và DATA(-) vào B(-).',
          'Đấu chéo: Chân DATA(+) của Lumi LM-DK đấu vào chân B(-) của DTA116A51; chân DATA(-) của Lumi đấu vào chân A(+) của DTA116A51 (và tính địa chỉ NetID = ID mặt lạnh + 1).',
          'Đấu trực tiếp vào điện 220V AC.',
          'Chỉ cần đấu 1 sợi dây duy nhất.'
        ],
        correct: 1,
        explain: 'Chính xác [00:23:30 & 00:23:59]! Phải đấu DATA(+) vào B(-) và DATA(-) vào A(+), đồng thời trên App Lumi Life địa chỉ NetID device = ID mặt lạnh + 1.'
      },
      {
        q: "Trên Module 5 IN 1 (LM-5IN1/Z hoặc LM-5IN1/B), dấu hiệu nhận biết trên dải đèn LED khi thiết bị vừa gia nhập mạng HC thành công ở các chế độ 2 (RGB & WW), 3 (5Dim), 4 (1WW 3Dim) và 5 (2WW 1Dim) là gì?",
        options: [
          'Đèn tắt hẳn về 0%.',
          'Khi mới cấp nguồn đèn sáng trắng 100%, ngay sau khi gia nhập mạng HC thành công độ sáng các kênh tự động giảm xuống mức 12%.',
          'Đèn nhấp nháy màu đỏ liên tục.',
          'Nguồn tổ ong tự ngắt.'
        ],
        correct: 1,
        explain: 'Chuẩn xác theo các slide [00:30:11 - 00:31:58]! Việc độ sáng tự hạ từ 100% xuống 12% giúp kỹ thuật viên nhìn bằng mắt thường biết ngay Module 5in1 đã vào mạng thành công.'
      },
      {
        q: "Khi đấu nối Module Input (LM-INPUT) với cảm biến hãng thứ 3 (như cảm biến hàng rào hoặc báo cháy), cặp chân tín hiệu IN- và IN+ được đấu vào đâu?",
        options: [
          'Chân IN- đấu vào chân COM của cảm biến; chân IN+ đấu vào chân NO hoặc NC của cảm biến (nguồn nuôi module là 9-24VDC).',
          'Đấu thẳng điện 220V vào IN- và IN+.',
          'Đấu cả 2 chân vào GND.',
          'Không cần đấu dây.'
        ],
        correct: 0,
        explain: 'Chính xác [00:26:25]!'
      }
    ]
  },
  {
    id: 'mod3',
    step: 'Chặng 3',
    title: 'Bài 2: Bộ Trung Tâm HC/LC, Xử Lý Trễ Mạng & AI Camera Hub',
    subtitle: 'Kiến trúc 4 tầng, 1 HC + 6 LC qua LAN, trị bệnh trễ 5-6s do trùng kênh Wi-Fi/Zigbee & AI Hub LMAI 2.0',
    badge: 'Video Bài 2 (Full)',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=nPyDl1cZFkc',
    timestamps: [
      { label: '00:38 Kiến trúc 4 tầng & Offline', sec: 38 },
      { label: '07:04 Phân biệt HC và LC (Qua LAN)', sec: 424 },
      { label: '13:32 Giới hạn 450 Endpoints', sec: 812 },
      { label: '16:45 Lỗi trễ 5-6s do trùng kênh Wi-Fi', sec: 1005 },
      { label: '18:35 Ưu thế kênh 37,38,39 BLE Mesh', sec: 1115 },
      { label: '20:25 AI Camera Hub LMAI 2.0', sec: 1225 }
    ],
    summary: 'Hiểu rõ trái tim hệ thống HC/LC, lý do mất mạng Internet vẫn điều khiển qua App bình thường, cách xử lý triệt để lỗi bấm App trễ 5-6 giây và quy chuẩn lắp AI Camera Hub.',
    theoryBlocks: [
      {
        title: '1. Chế Độ Offline Khi Mất Internet & Phân Biệt HC (Master) vs. LC (Slave)',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                <h4 class="font-bold text-emerald-400">🌐 Khi Nhà Khách Đứt Cáp Quang Internet [01:32]:</h4>
                <p>• <strong>Vẫn chạy 100%:</strong> Bấm công tắc, Cảnh, Rule tự động, Hẹn giờ và <strong>điều khiển qua App khi điện thoại bắt chung Wi-Fi nội bộ (Local)</strong>.</p>
                <p>• <strong>Chỉ mất:</strong> Điều khiển từ xa qua 4G và Giọng nói. Tự động Backup lên Cloud mỗi <strong>2 giờ/lần</strong>.</p>
            </div>
            <div class="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 space-y-1.5">
                <h4 class="font-bold text-indigo-400">🧠 Giới Hạn Hệ Thống & Kết Nối HC - LC [07:04 & 13:32]:</h4>
                <p>• Tối đa <strong>1 HC (Master) + 6 LC (Slave)</strong>, quản lý <strong>450 Endpoints</strong>, 70–100 Rule/Cảnh, 40 Nhóm.</p>
                <p>• <strong>Cực kỳ lưu ý:</strong> HC và LC nói chuyện với nhau qua <strong>Mạng LAN / IP (cùng lớp mạng Router)</strong>, KHÔNG phải qua sóng Zigbee!</p>
            </div>
        </div>`
      },
      {
        title: '2. Trị Bệnh "Bấm App 5-6 Giây Mới Sáng" & AI Camera Hub LMAI 2.0',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1.5">
                <h4 class="font-bold text-rose-400">📶 Xung Đột Kênh Wi-Fi 2.4GHz & Zigbee [16:45]:</h4>
                <p>• Wi-Fi kênh 1, 6, 11 (nhất là <strong>Kênh 6</strong>) đè trực tiếp lên <strong>Kênh 17 của Zigbee</strong> làm nghẽn bản tin.</p>
                <p>• <strong>Cách khắc phục:</strong> Vào App <strong>Xóa mạng Zigbee</strong> trước khi cài đặt để HC tự quét chọn kênh Zigbee sạch. (BLE Mesh chạy ở <strong>Kênh 37, 38, 39</strong> nằm ở khe trống nên không bao giờ trùng Wi-Fi).</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                <h4 class="font-bold text-amber-400">📹 Thông Số AI Camera Hub (LMAI 2.0) [20:25]:</h4>
                <p>• <strong>Bắt buộc cắm dây LAN</strong>. Phải bật tính năng AI trên App thì <strong>đèn LED AI mới sáng xanh</strong>.</p>
                <p>• Tối đa <strong>6 Camera IP</strong> thuộc 4 hãng: <strong>Hikvision, Dahua, EZViz, KBVision</strong> (luồng phụ Sub-stream, lắp cao <strong>2.5m – 6m</strong>, tối đa 4 vùng x 8 điểm).</p>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod3',
    miniQuiz: [
      {
        q: 'Trong tòa nhà 5 tầng lắp 1 bộ HC ở tầng 1 và 3 bộ LC ở các tầng trên, HC và LC giao tiếp với nhau bằng đường truyền nào?',
        options: [
          'Truyền qua sóng Zigbee xuyên sàn bê tông.',
          'Kết nối qua mạng LAN / IP (cắm dây mạng hoặc Wi-Fi chung cùng 1 lớp mạng Router chính).',
          'Truyền qua hồng ngoại IR.',
          'Không cần kết nối với nhau.'
        ],
        correct: 1,
        explain: 'Chính xác [00:08:15]! HC và LC giao tiếp qua mạng LAN/IP nội bộ.'
      },
      {
        q: 'Vì sao mạng BLE Mesh không bị hiện tượng trễ 5-6 giây do nhiễu sóng Wi-Fi 2.4GHz như Zigbee?',
        options: [
          'Vì BLE Mesh dùng dây điện.',
          'Vì BLE Mesh hoạt động trên 3 kênh quảng bá 37, 38, 39 nằm hoàn toàn ở khoảng trống giữa các kênh Wi-Fi 1, 6, 11 và tự động nhảy kênh.',
          'Vì BLE Mesh phát công suất 1000W.',
          'Vì BLE Mesh không qua HC.'
        ],
        correct: 1,
        explain: 'Hoàn toàn chính xác [00:18:35]!'
      }
    ]
  },
  {
    id: 'mod4',
    step: 'Chặng 4',
    title: 'Bài 3 & 4: Khoa Học Chiếu Sáng & Lumi Smart Lighting',
    subtitle: '5 thông số vàng: Nhiệt độ màu (Kelvin), Hoàn màu (CRI), Quang thông (Lumen), Lm/W & Độ rọi (Lux)',
    badge: 'Video Bài 3 & Bài 4',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=zEtc_-wOoZU',
    timestamps: [
      { label: 'Bài 3: Lời nói đầu Smart Lighting', sec: 34, url: 'https://www.youtube.com/watch?v=YbSMXxhpu1w&t=34s' },
      { label: '00:36 Nhiệt độ màu CCT (Kelvin)', sec: 36 },
      { label: '01:09 Chỉ số hoàn màu CRI (Ra)', sec: 69 },
      { label: '01:56 Quang thông (Lumen)', sec: 116 },
      { label: '02:13 Hiệu suất sáng (Lumen/W)', sec: 133 },
      { label: '02:35 Độ rọi (Lux = Lumen/m²)', sec: 155 }
    ],
    summary: 'Ra mắt cuối năm 2020, Lumi Smart Lighting giúp thay đổi không gian linh hoạt và bảo vệ sức khỏe. Thợ điện cần nắm vững 5 chỉ số quang học để tư vấn và thiết kế chiếu sáng chuẩn.',
    theoryBlocks: [
      {
        title: '1. Năm Thông Số Kỹ Thuật Chiếu Sáng Bắt Buộc Phải Nhớ',
        html: `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div class="font-bold text-amber-400 mb-1">1. Nhiệt độ màu (CCT)</div>
                <p>Đơn vị: <strong>Kelvin (K)</strong>.<br>• 2700K-3200K: Vàng ấm<br>• 4000K-4500K: Trung tính<br>• 5000K-6500K: Trắng lạnh.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30">
                <div class="font-bold text-rose-400 mb-1">2. Độ hoàn màu (CRI)</div>
                <p>Độ trung thực màu sắc so với <strong>Mặt trời (CRI = 100)</strong>. Đèn tốt có <strong>CRI 80 – 95</strong> (quan trọng cho shop quần áo, bàn ăn).</p>
            </div>
            <div class="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <div class="font-bold text-cyan-400 mb-1">3. Quang thông (Lumen)</div>
                <p>Tổng lượng ánh sáng đèn phát ra theo mọi hướng. Chỉ số <strong>Lumen (lm) càng cao đèn càng sáng</strong>.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div class="font-bold text-emerald-400 mb-1">4. Hiệu suất (Lm/W)</div>
                <p>1 Watt điện sinh ra bao nhiêu Lumen. <strong>Lm/W càng cao thì đèn càng tiết kiệm điện</strong>.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <div class="font-bold text-purple-400 mb-1">5. Độ rọi (Lux)</div>
                <p><strong>1 Lux = 1 Lumen / m²</strong>. Đo lượng ánh sáng thực tế rơi trên mặt bàn học, văn phòng, bệnh viện.</p>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod4',
    miniQuiz: [
      {
        q: 'Đơn vị nào dùng để đo lượng ánh sáng thực tế rơi trên 1 mét vuông bề mặt (1 Lumen/m²) để đánh giá bàn học hay văn phòng có đủ sáng không?',
        options: [
          'Kelvin (K).',
          'Độ rọi Lux (lx).',
          'Chỉ số hoàn màu CRI.',
          'Ampe (A).'
        ],
        correct: 1,
        explain: 'Chính xác [Bài 4 - 00:02:35]! Độ rọi Lux = Quang thông (Lumen) / Diện tích bề mặt (m²).'
      },
      {
        q: 'Ánh sáng tự nhiên của Mặt Trời có chỉ số hoàn màu (CRI) bằng bao nhiêu?',
        options: [
          'CRI = 50.',
          'CRI = 80.',
          'CRI = 100 (Mức chuẩn tối đa).',
          'CRI = 6500.'
        ],
        correct: 2,
        explain: 'Đúng [Bài 4 - 00:01:42]! Mặt trời có CRI = 100, còn đèn LED chất lượng cao thông dụng có CRI từ 80 đến 95.'
      }
    ]
  },
  {
    id: 'mod5',
    step: 'Chặng 5',
    title: 'Bài 5, 6, 7: Nhóm Lighting, Cảnh Lighting & Nhịp Sinh Học HCL',
    subtitle: 'Group ID (1 đèn nhiều nhóm, nháy 3 lần), Scene ID Managed Flood (sáng đồng loạt) & HCL (mốc 1.5 - 2 giờ)',
    badge: 'Video Bài 5, 6, 7',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=k1oF9RMb3wI',
    timestamps: [
      { label: 'Bài 5 [01:08] Nhóm Lighting vs Đảo chiều', sec: 68, url: 'https://www.youtube.com/watch?v=k1oF9RMb3wI&t=68s' },
      { label: 'Bài 5 [02:12] 1 Đèn thuộc nhiều nhóm', sec: 132, url: 'https://www.youtube.com/watch?v=k1oF9RMb3wI&t=132s' },
      { label: 'Bài 6 [01:50] Cảnh thường >10 đèn bị trễ', sec: 110, url: 'https://www.youtube.com/watch?v=lI1myd9S7XI&t=110s' },
      { label: 'Bài 6 [02:17] Cảnh Lighting (Managed Flood)', sec: 137, url: 'https://www.youtube.com/watch?v=lI1myd9S7XI&t=137s' },
      { label: 'Bài 7 [01:52] Nhịp sinh học HCL (1.5-2h)', sec: 112, url: 'https://www.youtube.com/watch?v=ows6tattKCc&t=112s' }
    ],
    summary: 'Làm chủ 3 vũ khí mạnh nhất của đèn BLE Mesh: Nhóm Lighting (Group ID), Cảnh Lighting (Scene ID không độ trễ) và Ánh sáng sinh học HCL chuyển màu mượt mà theo Mặt Trời.',
    theoryBlocks: [
      {
        title: '1. Nhóm Lighting (Bài 5) & Cảnh Lighting (Bài 6) Khác Gì Thông Thường?',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 space-y-1.5">
                <h4 class="font-bold text-cyan-400">🔗 Ưu Thế Nhóm Lighting (Group ID) [Bài 5]:</h4>
                <p>• Điều khiển lẻ 1 đèn trong nhóm <strong>không làm ảnh hưởng</strong> các đèn khác.</p>
                <p>• <strong>1 đèn có thể nằm trong NHIỀU Nhóm Lighting cùng lúc</strong> (VD: Đèn sảnh chung thuộc cả Nhóm Khách và Nhóm Bếp).</p>
                <p>• Khi thêm vào nhóm trên App, đèn ngoài thực tế sẽ <strong>nhấp nháy 3 lần</strong>.</p>
                <p>• <em>Mẹo đi dây:</em> Cấp nguồn 220V liên tục cho cả dàn đèn rồi dùng Rule gán nút công tắc bất kỳ để bật/tắt Nhóm.</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                <h4 class="font-bold text-amber-400">🎬 Cảnh Thường vs. Cảnh Lighting (Scene ID) [Bài 6]:</h4>
                <p>• <strong>Cảnh Thường:</strong> HC bắn lệnh tới từng thiết bị một. Nếu <strong>&gt; 10 thiết bị</strong> sẽ bị bật đuổi nhau và sót lệnh (miss) -> <strong>Bắt buộc chia từng cụm 10 thiết bị cách nhau Delay 2 giây!</strong></p>
                <p>• <strong>Cảnh Lighting:</strong> Chỉ chứa đèn BLE trong cùng 1 HC/LC. Dùng <strong>Scene ID + Managed Flood</strong> giúp cả chục đèn đổi màu/bật tắt <strong>ĐỒNG LOẠT 100% cùng lúc</strong>.</p>
            </div>
        </div>`
      },
      {
        title: '2. HCL (Human Centric Lighting) — Chiếu Sáng Nhịp Sinh Học [Bài 7]',
        html: `
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm space-y-1.5">
            <p>• <strong>Nguyên lý:</strong> Mô phỏng ánh sáng Mặt Trời tự nhiên (Sáng 06:45 ấm nhẹ 5000K 50% -> 07:30 rực rỡ 6500K 100% giúp tỉnh táo -> Tối dịu dần về 2700K-3000K để không ức chế giấc ngủ).</p>
            <p class="text-emerald-400 font-bold">• Quy tắc cài đặt HCL [00:02:53]: Các mốc thời gian liên tiếp trong biểu đồ HCL nên đặt cách nhau từ 1.5 tiếng đến 2 tiếng để đèn biến thiên màu sắc mượt mà tự nhiên (khác với Hẹn giờ thường đổi màu đột ngột).</p>
        </div>`
      }
    ],
    labType: 'lab_mod5',
    miniQuiz: [
      {
        q: "Khi tạo một 'Cảnh Thường' có hơn 10 thiết bị đầu ra (ví dụ 20 bóng đèn), bạn phải xử lý thế nào để tránh bị trễ và sót bản tin (miss lệnh)?",
        options: [
          'Chia thành từng cụm tối đa 10 thiết bị và chèn độ trễ (Delay) 2 giây giữa các cụm (hoặc chuyển sang dùng Cảnh Lighting nếu tất cả là đèn BLE chung 1 HC/LC).',
          'Bấm nút cảnh 5 lần liên tục.',
          'Thay dây điện to hơn.',
          'Không thể khắc phục.'
        ],
        correct: 0,
        explain: 'Chính xác [Bài 6 - 00:03:43]! Cảnh thường bắn từng lệnh đơn lẻ nên >10 thiết bị phải chèn Delay 2s; còn Cảnh Lighting dùng Scene ID sẽ sáng đồng loạt ngay lập tức.'
      },
      {
        q: 'Khi cài đặt biểu đồ ánh sáng nhịp sinh học HCL trên App Lumi Life, khoảng cách giữa các mốc thời gian liên tiếp nên đặt là bao lâu?',
        options: [
          'Cách nhau 1 phút.',
          'Cách nhau từ 1.5 tiếng đến 2 tiếng để ánh sáng chuyển màu mượt mà tự nhiên.',
          'Cách nhau 12 tiếng.',
          'Cách nhau 5 giây.'
        ],
        correct: 1,
        explain: 'Chuẩn xác [Bài 7 - 00:02:53]!'
      }
    ]
  }
];
