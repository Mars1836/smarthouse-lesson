# smarthouse-lesson

> **Lumi SmartHome Academy** — Nền tảng Học & Thực Hành Nghề Điện Thông Minh Toàn Diện 4-Trong-1.

Ứng dụng web tương tác hiện đại được xây dựng bằng **Vite + React + TypeScript + Tailwind CSS** chuyển đổi và nâng cấp từ cuốn Sổ tay Kỹ thuật viên Lumi Smart Home.

---

## 🌟 Tính Năng Nổi Bật

### 1. 📚 Lộ Trình 6 Chặng Học Cốt Lõi (Từ Zero Đến Thợ Cứng)
- **Chặng 0: Nhập Môn Điện Dân Dụng & An Toàn Đế Âm**
  - Phân biệt 4 loại dây trong đế âm (L, N, Tải, PE).
  - Giải mã tình huống "5 dây đỏ cùng màu + cụm dây xanh".
  - Nguyên lý hoạt động của Aptomat chống giật (RCBO) và lý do mượn dây Mát (N) ổ cắm bị nhảy CB.
- **Chặng 1: Bài 1A - Công Tắc Cảm Ứng, Đế Âm & Cảm Biến Lumi**
  - Bảng công suất (Công tắc thường 150W LED, Chiết áp Dimmer, Công suất cao nút 1 = 3000W cho Bình nóng lạnh).
  - Quy chuẩn chôn đế âm vuông tai vít dọc.
  - Cảm biến chuyển động (đổi trễ Xanh 30s, Đỏ 120s, Hồng 300s), Cảm biến cầu thang 2in1 (Mắt che 50°, Rule Bật OR - Tắt AND), Cảm biến cửa (2cm).
- **Chặng 2: Bài 1B - Hồng Ngoại IR, Điều Hòa VRV Daikin & Bộ 3 Module**
  - Tích hợp điều hòa trung tâm VRV Daikin qua mạch DTA116A51 (RS485 < 100m, 2 chiều).
  - Bắt bệnh qua đèn LED Module VRV (Nguồn đỏ, Zigbee xanh, RS485 xanh).
  - Module Input 4 kênh (9-24VDC), Module 2 in 2 out giữ công tắc cơ, Module 5 in 1 LED dây 24VDC (5 chế độ cấu hình).
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
3. **Lab Chặng 2:**
   - Bắt bệnh qua 3 đèn LED Module VRV Daikin (Nguồn, Zigbee, RS485).
   - Chọn 5 chế độ ấn nút Config cho Module LED dây 5 in 1.
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
- **Thi Sát Hạch Toàn Diện (15 Câu):** Đề thi tổng hợp sát với các tình huống thực tế tại công trình.
- **Tra cứu nhanh tại công trình (Quick Search):** Gợi ý tức thì các mẹo bắt bệnh (nhảy CB, bình nóng lạnh, DTA116A51, trễ 5s, CRI...).
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
├── s_tay_k_thu_t_vi_n_lumi_smart_home.html  # Tài liệu gốc HTML
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── data/
    │   ├── modules.ts          # Dữ liệu 6 chặng cốt lõi
    │   ├── masterExam.ts       # Ngân hàng đề thi 15 câu
    │   └── searchIndex.ts      # Chỉ mục tra cứu nhanh
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
            ├── LabMod2.tsx     # Bắt bệnh VRV Daikin & LED 5in1
            ├── LabMod3.tsx     # Phân tích phổ sóng 2.4GHz
            ├── LabMod4.tsx     # Kelvin, CRI & Tính Lux
            └── LabMod5.tsx     # 12 đèn BLE Mesh & Scene ID
```

---

## 📄 Bản Quyền
Dự án được xây dựng phục vụ mục đích đào tạo và nâng cao tay nghề kỹ thuật viên Smart Home Lumi.
