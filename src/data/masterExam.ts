import { QuizQuestion } from '../types';
import { coreModules } from './modules';

export function getAllMasterQuestions(): QuizQuestion[] {
  const list: QuizQuestion[] = [];
  coreModules.forEach(m => {
    (m.miniQuiz || []).forEach(q => list.push({ ...q, step: m.step }));
  });

  // 3 comprehensive practical questions added to make 15
  list.push(
    {
      step: 'Chặng 1',
      q: 'Khi lắp Cảm biến cửa Lumi, hai phần của cảm biến được gắn như thế nào?',
      options: [
        'Phần To gắn lên cánh cửa di động, phần Nhỏ (nam châm) gắn lên khung cửa cố định, 2 vạch khuyết đối diện nhau, mở hé >2cm sẽ báo mở.',
        'Cả 2 phần gắn lên cánh cửa.',
        'Gắn cách nhau 20cm.',
        'Phải kéo dây 220V vào cảm biến cửa.'
      ],
      correct: 0,
      explain: 'Chính xác [Bài 1 - 00:16:25]!'
    },
    {
      step: 'Chặng 3',
      q: 'Các cảm biến dùng Pin (như cảm biến cửa, cảm biến chuyển động pin) có làm nhiệm vụ tiếp sóng (Router mở rộng mạng Mesh) cho các công tắc ở xa không?',
      options: [
        'Có tiếp sóng rất mạnh.',
        'Không! Thiết bị dùng Pin là End Device (Low Power Node) thường ngủ để tiết kiệm pin nên KHÔNG mở rộng sóng cho thiết bị khác.',
        'Chỉ tiếp sóng khi hết pin.',
        'Tiếp sóng tối đa 100m.'
      ],
      correct: 1,
      explain: 'Đúng [Bài 2 - 00:15:34]! Chỉ các thiết bị cấp nguồn 220V mới làm Router chuyển tiếp sóng.'
    },
    {
      step: 'Chặng 3',
      q: 'Một bộ AI Camera Hub (LMAI 2.0) tích hợp được tối đa bao nhiêu Camera IP và của những hãng nào?',
      options: [
        'Tối đa 6 Camera IP thuộc 4 hãng: Hikvision, Dahua, EZViz, KBVision (dùng luồng phụ Sub-stream, lắp cao 2.5m - 6m).',
        'Tối đa 32 Camera bất kỳ.',
        'Chỉ 1 Camera duy nhất.',
        'Không cần cắm dây mạng LAN.'
      ],
      correct: 0,
      explain: 'Chính xác [Bài 2 - 00:25:15]!'
    }
  );

  return list;
}
