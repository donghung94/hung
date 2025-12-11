// exam_random.js
window.QUESTION_SETS = window.QUESTION_SETS || {};

(function() {
  // 🔹 Gộp tất cả câu hỏi từ các bộ questions1–4
  function getAllQuestions() {
    let all = [];
    for (let key in window.QUESTION_SETS) {
      if (Array.isArray(window.QUESTION_SETS[key])) {
        all = all.concat(window.QUESTION_SETS[key]);
      }
    }
    return all;
  }

  // 🔹 Hàm trộn ngẫu nhiên mảng (Fisher–Yates shuffle)
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // 🔹 Lấy ngẫu nhiên số lượng câu chỉ định
  function getRandomQuestions(count) {
    const all = getAllQuestions();
    const shuffled = shuffle(all);
    return shuffled.slice(0, count);
  }

  // 🔹 Tạo bộ đề thi mới mỗi lần mở app (40 câu)
  window.QUESTION_SETS["randomExam"] = getRandomQuestions(40);

  console.log("✅ Random Exam loaded:", window.QUESTION_SETS["randomExam"].length, "questions");
})();
