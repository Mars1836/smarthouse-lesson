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
    title: 'Bài 1A: Công Tắc Cảm Ứng, Đế Âm & Cảm Biến Lumi',
    subtitle: 'Phân loại công suất (Nút 1 = 3000W), chôn đế âm vuông dọc, Cảm biến chuyển động, Cầu thang 2in1 & Cửa',
    badge: 'Video Bài 1 (00:00 - 18:50)',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=-RhVDFZZfnc',
    timestamps: [
      { label: '00:27 Công tắc thường/Dimmer/CS Cao', sec: 27 },
      { label: '02:32 Khảo sát chôn đế âm', sec: 152 },
      { label: '05:56 6 Tính năng cài đặt', sec: 356 },
      { label: '07:25 Cảm biến chuyển động', sec: 445 },
      { label: '12:59 Cảm biến cầu thang 2in1', sec: 779 },
      { label: '16:25 Cảm biến cửa (2cm)', sec: 985 }
    ],
    summary: 'Nắm vững giới hạn công suất từng loại công tắc (đặc biệt Nút 1 công suất cao 3000W cho bình nóng lạnh), quy chuẩn chôn đế âm vuông tai dọc và cách cấu hình 3 loại cảm biến.',
    theoryBlocks: [
      {
        title: '1. Bảng Công Suất 3 Loại Công Tắc & Quy Chuẩn Chôn Đế Âm',
        html: `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs sm:text-sm">
            <div class="lg:col-span-7 overflow-x-auto">
                <table class="w-full border-collapse text-left">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-300">
                            <th class="p-2.5">Loại Công Tắc</th>
                            <th class="p-2.5">Số Nút</th>
                            <th class="p-2.5">Tải Tối Đa / Nút</th>
                            <th class="p-2.5">Lưu Ý Sống Còn</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                            <td class="p-2.5 font-bold text-emerald-400">Công tắc thường</td>
                            <td class="p-2.5">1-4 nút</td>
                            <td class="p-2.5"><strong>150W LED</strong> / 700W trở</td>
                            <td class="p-2.5">Chỉ lắp đèn chiếu sáng, quạt hút nhỏ.</td>
                        </tr>
                        <tr>
                            <td class="p-2.5 font-bold text-purple-400">Chiết áp (Dimmer)</td>
                            <td class="p-2.5">1 nút</td>
                            <td class="p-2.5">150W LED Dim / 500W</td>
                            <td class="p-2.5"><strong>Cấm</strong> dùng bật/tắt (On/Off) thiết bị thường.</td>
                        </tr>
                        <tr class="bg-rose-500/10">
                            <td class="p-2.5 font-bold text-rose-400">Công suất cao</td>
                            <td class="p-2.5">1-3 nút</td>
                            <td class="p-2.5"><strong>Nút 1: 3000W trở</strong><br><span class="text-[11px] text-slate-400">Nút 2,3: 150W LED</span></td>
                            <td class="p-2.5"><strong>Bình nóng lạnh (2500W), máy bơm bắt buộc đấu vào CHÂN SỐ 1!</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="lg:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h4 class="font-bold text-amber-400">📐 Khảo Sát Đế Âm & 6 Tính Năng [00:02:32]:</h4>
                <p>• <strong>Đế vuông:</strong> Bắt buộc chôn 2 tai vít <strong>NẰM DỌC</strong>. Đế chữ nhật: Ngang/dọc đều được.</p>
                <p>• <strong>Độ sâu:</strong> Chôn bằng mặt gạch chưa trát. Khoảng cách ghép nhiều đế: <strong>1cm – 3cm</strong> (tối thiểu 2cm).</p>
                <p>• <strong>Reset công tắc:</strong> Dùng bút thử điện <strong>ấn 5 lần nút Config</strong>. Hỗ trợ chỉnh LED nền 100% hoặc 30% (phòng ngủ).</p>
            </div>
        </div>`
      },
      {
        title: '2. Hệ Thống 3 Loại Cảm Biến: Chuyển Động, Cầu Thang 2in1 & Cảm Biến Cửa',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div class="font-bold text-emerald-400">1. Cảm biến chuyển động [07:25]</div>
                <p>• Bản Pin (Zigbee/BLE) & Bản Nguồn 220V -> 3.3VDC (Zigbee).</p>
                <p>• Góc quét 90°. <strong>Ấn 2 lần nút Config</strong> đổi thời gian trễ: <span class="text-emerald-400 font-bold">Xanh (30s)</span>, <span class="text-rose-400 font-bold">Đỏ (120s)</span>, <span class="text-pink-400 font-bold">Hồng (300s)</span>.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div class="font-bold text-amber-400">2. Cầu thang 2 in 1 [12:59]</div>
                <p>• Góc ngang 150° (lắp <strong>Mắt che</strong> giảm còn <strong>50°</strong> tránh quét nhầm hành lang).</p>
                <p>• Cài Rule 2 đầu cầu thang: <strong>Bật dùng HOẶC (OR)</strong>, <strong>Tắt dùng VÀ (AND)</strong>.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div class="font-bold text-cyan-400">3. Cảm biến cửa [16:25]</div>
                <p>• <strong>Phần To</strong> gắn lên Cánh cửa; <strong>Phần Nhỏ (nam châm)</strong> gắn lên Khung cửa.</p>
                <p>• Hai vạch khuyết đối diện nhau, tách xa <strong>> 2cm</strong> sẽ báo Mở.</p>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod1',
    miniQuiz: [
      {
        q: 'Trên công tắc công suất cao 3 nút của Lumi, nút nào chịu được tải 3000W thuần trở để đấu Bình nóng lạnh?',
        options: [
          'Cả 3 nút đều chịu được 3000W.',
          'Chỉ duy nhất NÚT SỐ 1 (chân số 1). Nút 2 và 3 chỉ chịu tải thường 150W LED / 700W thuần trở.',
          'Chỉ nút số 3.',
          'Phải đấu chập nút 1 và nút 2.'
        ],
        correct: 1,
        explain: 'Chính xác [00:01:41]! Đấu nhầm bình nóng lạnh sang chân 2 hoặc 3 sẽ làm cháy rơ-le ngay lập tức.'
      },
      {
        q: 'Khi ấn 2 lần vào nút Config trên Cảm biến chuyển động Lumi và thấy đèn nháy ĐỎ, thời gian trễ tắt đèn đang là bao nhiêu?',
        options: [
          '30 giây (Nháy Xanh).',
          '120 giây / 2 phút (Nháy Đỏ).',
          '300 giây / 5 phút (Nháy Hồng).',
          '10 giây.'
        ],
        correct: 1,
        explain: 'Đúng [00:10:05]! Xanh = 30s, Đỏ = 120s, Hồng = 300s.'
      }
    ]
  },
  {
    id: 'mod2',
    step: 'Chặng 2',
    title: 'Bài 1B: Hồng Ngoại IR, Điều Hòa VRV Daikin & Bộ 3 Module',
    subtitle: 'Module VRV Daikin (Mạch DTA116A51), Module Input, Module 2in2out (giữ công tắc cơ) & Module 5in1 LED dây',
    badge: 'Video Bài 1 (18:55 - 32:00)',
    badgeColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    videoUrl: 'https://www.youtube.com/watch?v=-RhVDFZZfnc',
    timestamps: [
      { label: '19:00 Bộ Hồng ngoại IR (5m)', sec: 1140 },
      { label: '20:39 Module VRV Daikin & DTA116A51', sec: 1239 },
      { label: '24:50 Bắt bệnh đèn LED VRV', sec: 1490 },
      { label: '25:27 Module Input (9-24VDC)', sec: 1527 },
      { label: '26:41 Module 2 in 2 out', sec: 1601 },
      { label: '29:23 Module 5 in 1 LED Dây', sec: 1763 }
    ],
    summary: 'Cách tích hợp điều hòa trung tâm VRV Daikin phản hồi 2 chiều bằng mạch DTA116A51, giữ lại công tắc cơ cổ điển bằng Module 2in2out và điều khiển 5 chế độ LED dây 24VDC.',
    theoryBlocks: [
      {
        title: '1. So Sánh Hồng Ngoại IR vs. Module Điều Hòa Trung Tâm Daikin VRV',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h4 class="font-bold text-emerald-400">📺 Hồng Ngoại IR (Điều hòa 2 cục, TV, Quạt) [19:00]</h4>
                <p>• Khoảng cách tối đa <strong>5m</strong>, không vật cản, điều khiển <strong>1 chiều</strong> (bấm remote ngoài thì App không biết).</p>
                <p>• Có 2 chế độ: Chọn Thư viện có sẵn hoặc Học lệnh từ Remote cũ (tối đa 6 ngữ cảnh).</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                <h4 class="font-bold text-amber-400">❄️ Module Zigbee Daikin VRV (Đồng bộ 2 chiều) [20:39]</h4>
                <p>• <strong>Bắt buộc mua thêm mạch mở rộng <code class="text-white bg-rose-600 px-1.5 py-0.5 rounded">DTA116A51</code> của Daikin</strong> lắp ở Cục nóng, kéo cáp RS485 (F1, F2) <strong>&lt; 100m</strong> về Module Lumi.</p>
                <p>• Quản lý tối đa <strong>2 Cục nóng</strong> (đấu liên động) và <strong>16 Mặt lạnh</strong>.</p>
            </div>
        </div>`
      },
      {
        title: '2. Bộ 3 Module Chuyên Dụng: Input, 2 In 2 Out & 5 In 1 (LED Dây)',
        html: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div class="font-bold text-emerald-400">1. Module Input [25:27]</div>
                <p>• Cấp nguồn <strong>9–24V DC</strong>. Có 4 ngõ vào (IN1–IN4 đấu với GND).</p>
                <p>• Tích hợp cảm biến hãng thứ 3 (khói, beam hàng rào NO/NC) vào Lumi.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div class="font-bold text-amber-400">2. Module 2 In 2 Out [26:41]</div>
                <p>• Giữ lại mặt công tắc cơ cũ của chủ nhà. Chịu tải <strong>1000W trở / 200W LED</strong> mỗi kênh.</p>
                <p>• 3 chế độ: <strong>Change (Mặc định)</strong>, Nhấn giữ, Nhấn nhả.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div class="font-bold text-purple-400">3. Module 5 in 1 LED Dây [29:23]</div>
                <p>• Dùng nguồn tổ ong <strong>12V/24V DC</strong>.</p>
                <p>• Giữ nút Config <strong>10s</strong> rồi bấm <strong>1 đến 5 lần</strong>: (1) RGBW, (2) RGB+WW, (3) 5 Dim, (4) 1WW+3Dim, (5) 2WW+1Dim.</p>
            </div>
        </div>`
      }
    ],
    labType: 'lab_mod2',
    miniQuiz: [
      {
        q: 'Để tích hợp điều hòa trung tâm Daikin VRV với Module Zigbee Lumi, ta bắt buộc phải lắp thêm bo mạch gì tại cục nóng?',
        options: [
          'Mạch mở rộng (Adaptor) mã DTA116A51 của hãng Daikin và kéo dây tín hiệu RS485 dưới 100m.',
          'Nguồn tổ ong 24VDC.',
          'Cục phát hồng ngoại IR.',
          'Module Input 4 kênh.'
        ],
        correct: 0,
        explain: 'Chính xác [00:21:29]! Mạch DTA116A51 giúp chuyển đổi giao tiếp để Module Lumi đồng bộ 2 chiều tối đa 2 cục nóng và 16 dàn lạnh.'
      },
      {
        q: 'Trên Module 5 in 1 điều khiển LED dây, để chuyển sang chế độ số 2 (RGB + WW), bạn thao tác nút Config như thế nào?',
        options: [
          'Ấn 5 lần liên tiếp.',
          'Ấn giữ nút Config 10 giây đến khi đèn nháy, sau đó ấn nút Config 2 lần.',
          'Ấn giữ 2 giây.',
          'Rút nguồn cắm lại 2 lần.'
        ],
        correct: 1,
        explain: 'Đúng [00:31:10]! Giữ 10s để mở khóa chọn mode, sau đó bấm từ 1 đến 5 lần tương ứng 5 chế độ LED.'
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
