(function () {
  const $ = (sel) => document.querySelector(sel);
  const params = new URLSearchParams(location.search);

  const setId = params.get("set");
  const practiceId = params.get("practice");
  let DATA = [];

  // ✅ Hỗ trợ đề thực hành g1_ và g2_
  let normalizedPracticeId = practiceId;
  if (practiceId && (practiceId.startsWith("g1_") || practiceId.startsWith("g2_"))) {
    normalizedPracticeId = practiceId;
  }

  // ====== LẤY DỮ LIỆU ======
  if (normalizedPracticeId && window.PRACTICE_SETS && window.PRACTICE_SETS[normalizedPracticeId]) {
    DATA = JSON.parse(JSON.stringify(window.PRACTICE_SETS[normalizedPracticeId]));
    window.questions = window.PRACTICE_SETS[normalizedPracticeId];
  }
  else if (setId && window.QUESTION_SETS && window.QUESTION_SETS[setId]) {
    DATA = JSON.parse(JSON.stringify(window.QUESTION_SETS[setId]));
    window.questions = window.QUESTION_SETS[setId];
  }
  else {
    DATA = [];
    window.questions = [];
  }

  const quizEl = $("#quiz");
  const resEl = $("#result");
  const submitBtn = $("#submitBtn");
  const redoBtn = $("#redoWrong");
  const timerEl = $("#timer");


  // =================== 60 PHÚT ====================
  let timeLeft = 3600;
  const tick = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (timeLeft <= 0) { submitQuiz(); return; }
    timeLeft--;
    setTimeout(tick, 1000);
  };
  tick();


  // ============== TRỘN ==================
  function shuffle(arr) {
    for (let i=arr.length-1; i>0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const questions = DATA.map(q => {
    const correctIndex = q.answer;
    const opts = q.options.map((t,i)=>({text:t, correct:(i === correctIndex)}));
    shuffle(opts);
    return { ...q, options: opts };
  });
  shuffle(questions);

  let cur = 0;
  const user = new Array(questions.length).fill(null);



  // ========================================================
  //          ⭐⭐⭐ TỰ ĐỘNG CHUYỂN FURIGANA ⭐⭐⭐
  // ========================================================
  function convertFurigana(text) {
    if (!text) return text;
    return text.replace(/([一-龯々〆ヵヶ]+)\s*（([ぁ-んァ-ン]+)）/g,
      (match, kanji, hira) => `<ruby>${kanji}<rt>${hira}</rt></ruby>`);
  }

  // 👉 Chạy chuyển đổi FURIGANA CHO TẤT CẢ CÂU HỎI trước khi render
  questions.forEach(q => {
    if (q.q) q.q = convertFurigana(q.q);
    if (q.hira) q.hira = convertFurigana(q.hira);
    if (q.vi) q.vi = convertFurigana(q.vi);
    if (q.explain) q.explain = convertFurigana(q.explain);
  });
  // ========================================================

document.addEventListener("DOMContentLoaded", () => {
    const areas = document.querySelectorAll(".question, .option, .explain");

    areas.forEach(el => {
        let html = el.innerHTML;

        // Tìm: Kanji + (furigana)
        html = html.replace(/([\u4E00-\u9FAF]+)\s*\((.*?)\)/g, (m, kanji, kana) => {
            return `<ruby>${kanji}<rt>${kana}</rt></ruby>`;
        });

        el.innerHTML = html;
    });
});


  // =============== RENDER ===============
  function render() {
    if (!questions.length) {
      quizEl.innerHTML = '<p>Không có dữ liệu câu hỏi.</p>';
      return;
    }

    const q = questions[cur];
    const hasAnswered = user[cur] !== null;

    const header = `<div class="q-head"><div class="q-index">Câu ${cur+1}/${questions.length}</div></div>`;
    const body = `
      <div class="q-text">${q.q}</div>
      ${q.hira ? `<div class="hira">${q.hira}</div>` : ''}
      ${
        q.img
        ? `<div class="q-img">
             <img src="${q.img}" 
                  onerror="this.style.display='none';"
                  style="max-width:100%;border:1px solid #ccc;border-radius:8px;margin:8px 0;">
           </div>`
        : ''
      }

      <div class="options">
        ${q.options.map((op,i)=>{
          let cls='opt', mark='';
          if(hasAnswered){
            if(op.correct){ cls+=' correct'; mark='✅'; }
            else if(user[cur]===i){ cls+=' incorrect'; mark='❌'; }
          }
          return `<div class="${cls}" data-idx="${i}">${op.text} <span class="mark">${mark}</span></div>`;
        }).join('')}
      </div>

      <div class="nav">
        <button class="btn" id="backBtn" ${cur===0?'disabled':''}>⬅️ Quay lại</button>
        <button class="btn" id="explainBtn">📘 Giải thích</button>
        <button class="btn" id="nextBtn" ${cur===questions.length-1?'disabled':''}>➡️ Tiếp theo</button>
      </div>

      <div id="explainBox" class="explain-box" style="display:${hasAnswered?'block':'none'};">
        ${q.vi ? `<div><b>Dịch:</b> ${q.vi}</div>` : ''}
        ${q.explain ? `<div><b>📘 Giải thích:</b> ${q.explain}</div>` : ''}
        ${q.tip ? `<div class="tip">${q.tip}</div>` : ''}
      </div>
    `;

    quizEl.innerHTML = header + body;

    const optionEls = quizEl.querySelectorAll(".opt");
    optionEls.forEach(el => {
      el.addEventListener("click", () => {
        if (user[cur] !== null) return;
        const idx = parseInt(el.dataset.idx);
        user[cur] = idx;

        optionEls.forEach((optEl, j) => {
          const mark = optEl.querySelector(".mark");
          if (q.options[j].correct) {
            optEl.classList.add("correct");
            mark.textContent = "✅";
          } else if (j === idx) {
            optEl.classList.add("incorrect");
            mark.textContent = "❌";
          }
          optEl.style.pointerEvents = "none";
        });

        const ex = $("#explainBox");
        if (ex) ex.style.display = "block";
      });
    });

    $("#backBtn").onclick = () => { if (cur > 0) { cur--; render(); } };
    $("#nextBtn").onclick = () => { if (user[cur] !== null && cur < questions.length-1) { cur++; render(); } };
    $("#explainBtn").onclick = () => {
      const box = $("#explainBox");
      box.style.display = box.style.display === "none" ? "block" : "none";
    };
  }

  render();
  submitBtn.onclick = submitQuiz;



  // ================= SUBMIT =================
  function submitQuiz() {
    let correct = 0;
    const wrongs = [];

    const html = questions.map((q,i)=>{
      const picked = user[i];
      const right = q.options.find(o=>o.correct);
      const isRight = (picked!==null && q.options[picked] && q.options[picked].correct);

      if (isRight) { correct++; return ""; }
      wrongs.push(q);

      return `
        <div class="result-item">
          <div class="q-text">${q.q}</div>
          ${q.hira ? `<div class="hira">${q.hira}</div>` : ''}
          ${
            q.img
            ? `<div class="q-img"><img src="${q.img}" style="max-width:100%;border:1px solid #ccc;border-radius:8px;margin:8px 0;"></div>`
            : ''
          }
          <div class="answer-line">❌ <b>Bạn chọn:</b> ${picked!==null ? q.options[picked].text : '(chưa chọn)'}</div>
          <div class="answer-line">✅ <b>Đáp án đúng:</b> ${right.text}</div>
          ${q.vi?`<div><b>Dịch:</b> ${q.vi}</div>`:''}
          ${q.explain?`<div><b>📘 Giải thích:</b> ${q.explain}</div>`:''}
          ${q.tip?`<div class="tip">${q.tip}</div>`:''}
        </div>`;
    }).join("");

    quizEl.style.display = "none";
    resEl.style.display = "block";
    resEl.innerHTML = `
      <div class="result-title">✅ Bạn làm đúng ${correct}/${questions.length}</div>
      ${
        wrongs.length
        ? `<div><b>Bạn đã làm sai các câu sau:</b></div>${html}`
        : `<div>🎉 Bạn làm đúng tất cả!</div>`
      }
    `;

    redoBtn.style.display = wrongs.length ? "block" : "none";
    redoBtn.onclick = () => {
      if (!wrongs.length) { alert("Không có câu sai!"); return; }
      questions.length = 0;
      shuffle(wrongs).forEach(q => questions.push(q));
      user.length = questions.length;
      user.fill(null);
      cur = 0;
      quizEl.style.display = "block";
      resEl.style.display = "none";
      redoBtn.style.display = "none";
      render();
    };
  }

  redoBtn.style.position = "fixed";
  redoBtn.style.bottom = "20px";
  redoBtn.style.right = "20px";
  redoBtn.style.background = "#2563eb";
  redoBtn.style.color = "#fff";
  redoBtn.style.border = "none";
  redoBtn.style.padding = "10px 16px";
  redoBtn.style.borderRadius = "8px";
})();
