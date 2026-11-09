import { SearchItem } from '../types';

export const quickSearchIndex: SearchItem[] = [
  { modId: 'mod0', title: 'Mượn dây Mát (N) ổ cắm bị nhảy CB chống giật', desc: 'Do lệch dòng đi/về trên RCBO. Chỉ mượn N khi chung 1 CB.' },
  { modId: 'mod0', title: 'Cách tìm dây Lửa trong 5 sợi dây đỏ cùng màu', desc: 'Tách rời 5 đầu dây, bật CB dùng bút thử điện tìm 1 dây sáng đỏ.' },
  { modId: 'mod1', title: 'Đấu Bình nóng lạnh 2500W / Máy bơm', desc: 'Bắt buộc đấu vào CHÂN SỐ 1 (3000W) của công tắc công suất cao.' },
  { modId: 'mod1', title: 'Quy chuẩn chôn đế âm vuông & chữ nhật', desc: 'Đế vuông bắt buộc chôn tai vít NẰM DỌC, cách nhau 1-3cm.' },
  { modId: 'mod1', title: 'Cảm biến chuyển động nháy Xanh, Đỏ, Hồng', desc: 'Ấn 2 lần nút Config: Xanh = 30s, Đỏ = 120s, Hồng = 300s.' },
  { modId: 'mod1', title: 'Rule 2 cảm biến cầu thang 2 in 1', desc: 'Bật đèn dùng HOẶC (OR), Tắt đèn dùng VÀ (AND). Lắp mắt che còn 50°.' },
  { modId: 'mod2', title: 'Điều hòa trung tâm Daikin VRV & Mạch DTA116A51', desc: 'Cần lắp thêm mạch DTA116A51 ở cục nóng, cáp RS485 < 100m, tối đa 16 dàn lạnh.' },
  { modId: 'mod2', title: 'Module 2 in 2 out & Module 5 in 1 LED dây', desc: 'Giữ công tắc cơ cũ (Mode Change). Module 5in1 giữ Config 10s rồi bấm 1-5 lần.' },
  { modId: 'mod3', title: 'Bấm App bị trễ 5-6 giây đèn mới sáng', desc: 'Trùng kênh Wi-Fi 6 với Zigbee 17. Cần Xóa mạng Zigbee trên App để HC tự đổi kênh.' },
  { modId: 'mod3', title: 'Kết nối HC và LC (Tối đa 1 HC + 6 LC, 450 Endpoints)', desc: 'HC và LC nối với nhau qua mạng LAN/IP nội bộ, KHÔNG qua Zigbee.' },
  { modId: 'mod3', title: 'AI Camera Hub LMAI 2.0 (Đèn AI không sáng)', desc: 'Cắm dây LAN, bật AI trên App đèn mới sáng xanh. Tối đa 6 cam Hikvision/Dahua/EZViz/KBVision.' },
  { modId: 'mod4', title: '5 Thông số ánh sáng: Kelvin, CRI, Lumen, Lm/W, Lux', desc: 'CRI mặt trời = 100 (đèn tốt 80-95). Độ rọi Lux = Lumen / m².' },
  { modId: 'mod5', title: 'Nhóm Lighting (Group ID) & Đèn nháy 3 lần', desc: '1 đèn BLE có thể thuộc nhiều Nhóm Lighting cùng lúc.' },
  { modId: 'mod5', title: 'Cảnh Thường (>10 đèn delay 2s) vs Cảnh Lighting (Scene ID)', desc: 'Cảnh thường >10 đèn phải chia cụm delay 2s. Cảnh Lighting sáng đồng loạt 100%.' },
  { modId: 'mod5', title: 'Ánh sáng nhịp sinh học HCL (1.5 - 2 tiếng)', desc: 'Các mốc thời gian HCL nên đặt cách nhau 1.5 - 2 giờ để chuyển màu mượt mà.' }
];
