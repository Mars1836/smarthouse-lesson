# smarthouse-lesson

> **Lumi SmartHome Academy (Phiên Bản Nâng Cấp V2)** — Nền tảng Học & Thực Hành Nghề Điện Thông Minh Toàn Diện 4-Trong-1.

Ứng dụng web tương tác hiện đại được xây dựng bằng **Vite + React + TypeScript + Tailwind CSS** chuyển đổi và nâng cấp từ cuốn Sổ tay Kỹ thuật viên Lumi Smart Home (Bản cập nhật Version 2 đầy đủ mã sản phẩm, sơ đồ chân và thông số thực tế tại công trình).

---

## 🌟 Tính Năng Nổi Bật & Cập Nhật Version 2

### 1. 📚 Lộ Trình 6 Chặng Học Cốt Lõi (Từ Zero Đến Thợ Cứng)
- **Chặng 0: Nhập Môn Điện Dân Dụng & An Toàn Đế Âm**
  - Phân biệt 4 loại dây trong đế âm (L, N, Tải, PE).
  - Giải mã tình huống "5 dây đỏ cùng màu + cụm dây xanh".
  - Nguyên lý hoạt động của Aptomat chống giật (RCBO) và lý do mượn dây Mát (N) ổ cắm bị nhảy CB.
- **Chặng 1: Bài 1A - Công Tắc Cảm Ứng, Đế Âm & Hệ Thống Cảm Biến (Cập Nhật V2)**
  - **Mã sản phẩm chi tiết & thứ tự chân:**
    - `LM-SxN`: Công tắc thường (1-4 nút, 700W trở / 150W LED, cầu đấu `L | 1 | 2 | 3 | 4 | N`).
    - `LM-S1D`: Chiết áp Dimmer TRIAC (1 nút, 500W trở / 150W LED Dim, cầu đấu `L | 1 | 2 | N`, cấm On/Off tải thường).
    - `LM-SxH`: Công tắc công suất cao (1-3 nút, cầu đấu `N | L | 1 | 2 | 3` với **chân N nằm ngoài cùng bên trái**, duy nhất **Nút 1 = 3000W trở (~16A)** cho Bình nóng lạnh 2500W).
  - **Khảo sát đế âm chuẩn Sino & độ sâu:**
    - Đế vuông `Sino S3157L` (75×75×40mm, bắt buộc chôn tai vít nằm dọc, cấm dùng đế đôi liền khối).
    - Đế chữ nhật `Sino S2157` (106×56×40mm, tai ngang hoặc dọc).
    - Khoảng cách ghép đế: Tối thiểu 2cm (khuyên dùng 3–4cm), chôn sâu lõm 1–2cm sau khi trát tường.
    - Quản lý địa chỉ MAC 4 ký tự Hex (VD: `493A`, `A55B`).
  - **Bảng 6 thao tác cài đặt trực tiếp trên nút Config:**
    1. Nhóm Binding không dây (Giữ 10s công tắc 1 ➔ Chạm công tắc 2).
    2. Reset công tắc (Nhấn 5 lần).
    3. Đổi Nhấn giữ / Nhấn nhả (Giữ 3s).
    4. Khóa cảm ứng toàn bộ công tắc (Nhấn 10 lần).
    5. Khóa cảm ứng từng nút lẻ (Giữ 9s).
    6. Đổi độ sáng LED viền 100% ⇄ 30% (Giữ 5s cho phòng ngủ).
  - **Hệ thống 6 mã cảm biến Lumi:**
    - `LM-MDZ/2.0`: Cảm biến chuyển động Pin (Zigbee, góc 90°, cao 3m quét rộng 6m; cao 6m quét rộng 12m).
    - `LM-MDB`: Cảm biến chuyển động Pin (BLE Mesh).
    - `LM-MDZ/2.1`: Cảm biến chuyển động nguồn 220V qua Adapter 3.3VDC (Zigbee).
    - `LM-MC`: Cảm biến gắn trần bản thường độc lập (Không sóng, 220VAC, 2 biến trở 10 nấc Time 5s-30p & Lux 20-300).
    - `LM-MSZ`: Công tắc cảm biến cầu thang 2in1 (Góc ngang 150° lắp mắt che còn 50°, đế vuông chôn dọc, chữ nhật chôn ngang, Rule Bật OR - Tắt AND).
    - `LM-DSZ/1.1`: Cảm biến cửa Pin 3.3V (To gắn cánh, Nhỏ gắn khung, rãnh quay vào nhau $\le$ 2cm).
- **Chặng 2: Bài 1B - Hồng Ngoại LM-IR/2.0, VRV Daikin LM-DK & Bộ 3 Module (Cập Nhật V2)**
  - `LM-IR/2.0`: Bộ hồng ngoại (5VDC/1A, $\le$ 5m, Thư viện vs Học lệnh điều hòa tối đa 6 ô ngữ cảnh).
  - **Module VRV Daikin `LM-DK` + Mạch Daikin `DTA116A51`:**
    - Cục nóng Daikin ➔ DTA: `X37A` ➔ `X1A` (Nguồn 16-24VDC), `F1, F2` ➔ `X7A` (DIII-NET).
    - Mạch DTA ➔ LM-DK: Cáp CAT6/CAT6A < 100m. **Đấu chéo:** `DATA(+)` của Lumi vào `B(-)` của DTA; `DATA(-)` của Lumi vào `A(+)` của DTA.
    - Công thức cấu hình App: `NetID device = ID mặt lạnh + 1` (khiển BRC 00-15 ➔ NetID 1-16).
    - Ý nghĩa đèn LED DTA: `H1P/H2P` nháy vàng thông DIII-NET; `H3P/H4P` nháy vàng thông Modbus.
  - `LM-INPUT`: Module Input 4 kênh tiếp điểm khô (IN- vào COM, IN+ vào NO/NC, nguồn 9-24VDC).
  - `LM-2120/Z` & `LM-2120/B`: Module 2 In 2 Out giữ công tắc cơ (8 chân `IN2|IN1|O2|O1|S|NC|N|L`, Mode Any change).
  - `LM-5IN1/Z` & `LM-5IN1/B`: Module LED dây 12-24VDC (5 chế độ cấu hình, cấp nguồn sáng 100%, vào mạng HC tự giảm về 12%).
- **Chặng 3: Bài 2 - Bộ Trung Tâm HC/LC, Xử Lý Trễ Mạng & AI Camera Hub**
  - Kiến trúc 4 tầng, chế độ chạy Offline 100% khi mất cáp quang Internet.
  - Kết nối HC (Master) và LC (Slave) qua mạng LAN / IP nội bộ (không qua Zigbee), quản lý 450 Endpoints.
  - Phân tích phổ sóng 2.4GHz: Trị lỗi trễ 5-6s do trùng Kênh 6 Wi-Fi và Kênh 17 Zigbee. Ưu thế kênh quảng bá 37, 38, 39 của BLE Mesh.
  - AI Camera Hub LMAI 2.0 (tối đa 6 camera IP Hikvision/Dahua/EZViz/KBVision).
- **Chặng 4: Bài 3 & 4 - Khoa Học Chiếu Sáng & Lumi Smart Lighting**
  - 5 thông số vàng: Nhiệt độ màu CCT (Kelvin), Hoàn màu (CRI), Quang thông (Lumen), Hiệu suất (Lm/W), Độ rọi (Lux = Lumen/m²).
- **Chặng 5: Bài 5, 6, 7 - Nhóm Lighting, Cảnh Lighting & Nhịp Sinh Học HCL**
  - Nhóm Lighting (Group ID): 1 đèn nằm trong nhiều nhóm, nhấp nháy 3 lần khi gia nhập.
  - Cảnh Thường (>10 đèn chia cụm delay 2s) vs Cảnh Lighting (Scene ID + Managed Flood sáng đồng loạt 100%).
  - Ánh sáng nhịp sinh học HCL (mô phỏng Mặt Trời, các mốc cách nhau 1.5 - 2 giờ).

---

### 2. ⚡ 6 Bàn Thực Hành Tương Tác Trực Quan (Interactive Labs)
1. **Lab Chặng 0:**
   - Chạm bút thử điện tìm dây Lửa nguồn trong 5 dây đỏ cùng màu.
   - Thử nghiệm 2 cách đấu dây Mát (N): Mượn N ổ cắm khác RCBO (gây cúp điện) vs Kéo N từ đèn trần (an toàn).
2. **Lab Chặng 1:**
   - Sơ đồ tương tác mạch điện 220V: Bật/tắt CB, bật/tắt tải 1 & tải 2.
   - Mô phỏng quá tải cháy rơ-le chân 2 khi đấu nhầm Bình nóng lạnh 2500W.
   - Mô phỏng đổi màu LED nút Config cảm biến chuyển động (30s, 120s, 300s).
3. **Lab Chặng 2 (Nâng cấp V2):**
   - Bắt bệnh qua đèn LED mạch `DTA116A51` (H1P–H4P) & Module `LM-DK` (Nguồn, Zigbee, RS485).
   - **Máy tính nhanh NetID:** Nhập ID mặt lạnh (0-15) ➔ Tự động tính NetID = ID + 1.
   - Cấu hình 5 chế độ ấn nút Config cho Module LED dây 5 in 1 kèm trạng thái độ sáng thực tế: Mới cấp nguồn 100% ➔ Gia nhập mạng HC 12%.
4. **Lab Chặng 3:**
   - Biểu đồ phổ tần 2.4GHz động: Xung đột Kênh Wi-Fi 6 và Kênh Zigbee 17, tính năng "Xóa Mạng Zigbee" để HC tự động né sang Kênh 25 sạch 100%.
5. **Lab Chặng 4:**
   - Thanh trượt Kelvin (2700K - 6500K) đổi màu không gian phòng.
   - So sánh CRI 70 (xỉn màu) vs CRI 95 (chuẩn màu sắc) trên trái cây, thức ăn và quần áo.
   - Máy tính độ rọi Lux thực tế = (Số bóng × 810 Lumen) / Diện tích phòng (m²).
6. **Lab Chặng 5:**
   - Lưới 12 đèn Downlight BLE Mesh: Bật nhóm Khách (đèn 1-6), Bật nhóm Bếp (đèn 6-12), Đèn 6 sảnh chung thuộc cả 2 nhóm.
   - Mô phỏng sự cố Cảnh thường (>10 đèn bị trễ và rớt bản tin Đèn 11) vs Cảnh Lighting sáng đồng loạt 100%.

---

### 3. 🎯 Đánh Giá & Tiện Ích Kỹ Thuật Viên
- **Mini-Quiz theo từng chặng:** Trả lời đúng 100% tự động đánh dấu hoàn thành chặng.
- **Thi Sát Hạch Toàn Diện (15+ Câu):** Đề thi tổng hợp sát với các tình huống thực tế tại công trình.
- **Tra cứu nhanh tại công trình (Quick Search V2):** Gợi ý tức thì các mã sản phẩm và bệnh công trình (`LM-SxH`, `LM-MDB`, `LM-MC`, `DTA116A51`, `NetID`, `12%`, `nhảy CB`...).
- **Sổ tay ghi chú cá nhân:** Lưu tự động ghi chú cho từng bài vào LocalStorage.
- **Thêm chặng học mới:** Cho phép thợ/học viên tự thêm các bài học mở rộng (Bài 8, 9...).
- **Sao lưu & Khôi phục dữ liệu:** Xuất và nhập dữ liệu học tập dưới dạng file `.json`.
- **Giao diện Dark / Light Mode** tùy chỉnh theo sở thích.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Framework:** React 18
- **Build Tool:** Vite 6
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Lưu trữ dữ liệu:** LocalStorage & JSON Backup / Restore

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu Cầu Hệ Thống
- [Node.js](https://nodejs.org/) (Phiên bản 18+ hoặc 20+)
- npm hoặc yarn/pnpm

### Cài Đặt
```bash
# Cài đặt các gói phụ thuộc
npm install
```

### Khởi Chạy Môi Trường Phát Triển
```bash
npm run dev
```
Trình duyệt sẽ mở tại `http://localhost:3000`.

### Đóng Gói Production
```bash
npm run build
```
Mã nguồn tối ưu sẽ được xuất ra thư mục `dist/`.

---

## 📂 Cấu Trúc Dự Án

```
smarthouse-lesson/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── s_tay_k_thu_t_vi_n_lumi_smart_home.html       # Bản HTML gốc V1
├── s_tay_k_thu_t_vi_n_lumi_smart_home (1).html   # Bản HTML nâng cấp V2
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── data/
    │   ├── modules.ts          # Dữ liệu 6 chặng cốt lõi (V2)
    │   ├── masterExam.ts       # Ngân hàng đề thi sát hạch
    │   └── searchIndex.ts      # Chỉ mục tra cứu nhanh V2
    └── components/
        ├── Navbar.tsx
        ├── Sidebar.tsx
        ├── ModuleView.tsx
        ├── MiniQuiz.tsx
        ├── NotesEditor.tsx
        ├── QuickSearch.tsx
        ├── AddModuleModal.tsx
        ├── MasterExamModal.tsx
        └── labs/
            ├── LabMod0.tsx     # Bút thử điện & RCBO
            ├── LabMod1.tsx     # Đấu nối 220V & Bình nóng lạnh
            ├── LabMod2.tsx     # Bắt bệnh VRV Daikin DTA116A51, NetID & LED 5in1 (V2)
            ├── LabMod3.tsx     # Phân tích phổ sóng 2.4GHz
            ├── LabMod4.tsx     # Kelvin, CRI & Tính Lux
            └── LabMod5.tsx     # 12 đèn BLE Mesh & Scene ID
```

---

## 📄 Bản Quyền
Dự án được xây dựng phục vụ mục đích đào tạo và nâng cao tay nghề kỹ thuật viên Smart Home Lumi.
