window.PRACTICE_SETS = window.PRACTICE_SETS || {};

(function() {
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 🧩 Gộp toàn bộ câu hỏi từ 4 file practice
  const allQuestions = [
    ...(window.PRACTICE_SETS["g2_1"] || []),
    ...(window.PRACTICE_SETS["g2_2"] || []),
    ...(window.PRACTICE_SETS["g2_3"] || []),
    ...(window.PRACTICE_SETS["g2_4"] || [])
  ];

  // 🧮 Chọn ngẫu nhiên 40 câu (nếu ít hơn thì lấy hết)
  const randomCount = Math.min(40, allQuestions.length);
  const randomQuestions = shuffle(allQuestions).slice(0, randomCount);

  // 🟢 Gán vào bộ đề thi
  window.PRACTICE_SETS["g2_random"] = randomQuestions;

  console.log(`✅ Tạo đề ngẫu nhiên nhóm 1: ${randomQuestions.length} câu`);
})();
