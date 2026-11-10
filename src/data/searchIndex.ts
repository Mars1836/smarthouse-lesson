import { SearchItem } from '../types';

export const quickSearchIndex: SearchItem[] = [
  { modId: 'mod0', title: 'Mượn dây Mát (N) ổ cắm bị nhảy CB chống giật', desc: 'Do lệch dòng đi/về trên RCBO. Chỉ mượn N khi chung 1 CB.' },
  { modId: 'mod0', title: 'Cách tìm dây Lửa trong 5 sợi dây đỏ cùng màu', desc: 'Tách rời 5 đầu dây, bật CB dùng bút thử điện tìm 1 dây sáng đỏ.' },
  { modId: 'mod1', title: 'Mã công tắc LM-SxN, LM-S1D (Dimmer), LM-SxH (CS Cao)', desc: 'LM-SxN (L|1|2|3|4|N, 700W/150W); LM-S1D (L|1|2|N, 1 nút); LM-SxH (N|L|1|2|3, Nút 1 = 3000W).' },
  { modId: 'mod1', title: 'Đế âm vuông Sino S3157L (75x75x40) & chữ nhật S2157 (106x56x40)', desc: 'Đế vuông chôn tai dọc, cách tối thiểu 2cm (khuyên dùng 3-4cm), sâu 1-2cm sau trát.' },
  { modId: 'mod1', title: '6 Thao tác nút Config công tắc & Địa chỉ MAC 4 ký tự Hex', desc: 'Binding 10s, Reset 5 lần, Nhấn nhả 3s, Khóa tổng 10 lần, Khóa lẻ 9s, Độ sáng LED 30%/100% giữ 5s.' },
  { modId: 'mod1', title: 'So sánh cảm biến LM-MDZ/2.0 (Zigbee), LM-MDB (BLE), LM-MDZ/2.1', desc: 'Góc 90° (cao 3m rộng 6m; cao 6m rộng 12m). Nhớ đánh thức cảm biến khi lưu cài đặt từ App.' },
  { modId: 'mod1', title: '10 Nấc vặn biến trở cảm biến LM-MC & Cầu thang 2in1 LM-MSZ', desc: 'Time (5s -> 30 phút), Lux (Cả ngày -> Khi tối -> 20..300). Cầu thang Bật dùng OR, Tắt dùng AND.' },
  { modId: 'mod1', title: 'Cảm biến cửa LM-DSZ/1.1 (Pin 3.3V)', desc: 'Phần To gắn cánh cửa, phần Nhỏ (nam châm) gắn khung cửa, rãnh quay vào nhau <= 2cm.' },
  { modId: 'mod2', title: 'Hồng ngoại LM-IR/2.0 (5VDC/1A) - Thư viện vs Học lệnh', desc: 'Khoảng cách <= 5m. Học lệnh điều hòa tối đa 6 ô ngữ cảnh cài sẵn + 2 nút ON/OFF.' },
  { modId: 'mod2', title: 'Điều hòa VRV Daikin LM-DK & Mạch DTA116A51 (Đấu DATA+ vào B-)', desc: 'Đấu DATA(+) vào B(-), DATA(-) vào A(+). Công thức NetID = ID mặt lạnh + 1. Tối đa 2 cục nóng, 16 dàn lạnh.' },
  { modId: 'mod2', title: 'Module LM-INPUT (9-24VDC) & LM-2120/Z-B (2 In 2 Out 8 chân)', desc: 'LM-INPUT: IN- vào COM, IN+ vào NO/NC. LM-2120: IN2|IN1|O2|O1|S|NC|N|L (Mode Any change).' },
  { modId: 'mod2', title: 'Module LED dây LM-5IN1/Z & LM-5IN1/B (Độ sáng 100% -> 12%)', desc: 'Giữ Config 10s rồi bấm 1-5 lần (RGBWW, RGB&WW, 5Dim, 1WW3Dim, 2WW1Dim). Vào mạng giảm xuống 12%.' },
  { modId: 'mod3', title: 'Bấm App bị trễ 5-6 giây đèn mới sáng', desc: 'Trùng kênh Wi-Fi 6 với Zigbee 17. Cần Xóa mạng Zigbee trên App để HC tự đổi kênh.' },
  { modId: 'mod3', title: 'Mã LM-HC/3.0, 5 đèn LED & Nút Config (AP Mode / Reset Factory)', desc: 'Power, Internet, Service, Zigbee, Bluetooth. Giữ Config đến Internet sáng = AP Mode; đến Service sáng = Reset Factory.' },
  { modId: 'mod3', title: 'Giới hạn 450 Endpoint, 20 Rule an ninh, Proxy Node & Works with Lumi', desc: '1 HC + 6 LC qua LAN/IP; 50 nhà/1 user; Module Input (NO/NC) & LM-GATE (RS485 DEA).' },
  { modId: 'mod3', title: 'AI Camera Hub LM-AI/2.0 (Sub-stream 640x480, 1024 Kbps, 25fps)', desc: 'LAN 1Gbps, 12V-2A, 3 tiếp điểm 10A, bật AI trên App đèn mới sáng. Cao 2.5-6m, góc cụp 10-45°.' },
  { modId: 'mod4', title: '5 Thông số ánh sáng: Kelvin, CRI, Lumen, Lm/W, Lux', desc: 'CRI mặt trời = 100 (đèn tốt 80-95). Độ rọi Lux = Lumen / m².' },
  { modId: 'mod5', title: 'Nhóm Lighting (Group ID) & Đèn nháy 3 lần', desc: '1 đèn BLE có thể thuộc nhiều Nhóm Lighting cùng lúc.' },
  { modId: 'mod5', title: 'Cảnh Thường (>10 đèn delay 2s) vs Cảnh Lighting (Scene ID)', desc: 'Cảnh thường >10 đèn phải chia cụm delay 2s. Cảnh Lighting sáng đồng loạt 100%.' },
  { modId: 'mod5', title: 'Ánh sáng nhịp sinh học HCL (1.5 - 2 tiếng)', desc: 'Các mốc thời gian HCL nên đặt cách nhau 1.5 - 2 giờ để chuyển màu mượt mà.' }
];
