// questions.js — Đề 1 (問1〜問8)
window.QUESTION_SETS = window.QUESTION_SETS || {};
window.QUESTION_SETS["1"] = [
{
  id: 1,
  q: "問1 スプリンクラーは、なんの工事（こうじ）か。",
  options: [
    "海洋（かいよう）土木（どぼく）工事（こうじ）",
    "通信（つうしん）工事（こうじ）",
    "土木（どぼく）工事（こうじ）",
    "消防（しょうぼう）設備（せつび）工事（こうじ）"
  ],
  answer: 3,
  vi: "Hệ thống sprinkler thuộc loại công trình nào?",
  explain: "Đáp án đúng:  Thuộc công trình thiết bị phòng cháy chữa cháy 消防（しょうぼう）設備（せつび）工事（こうじ）."
},
{
  id: 2,
  q: "問2 建物（たてもの）の中（なか）から外（そと）に通（つう）じる通信（つうしん）回線（かいせん）を管理（かんり）・接続（せつぞく）するための配線盤（はいせんばん）を何（なん）というか。",
  options: [
    "分電盤（ぶんでんばん）",
    "MDF",
    "PBX",
    "分配器（ぶんぱいき）"
  ],
  answer: 1,
  vi: "Bảng dây dùng để quản lý và kết nối đường dây thông tin từ trong ra ngoài tòa nhà gọi là gì?",
  explain: "Đáp án đúng: — MDF (Main Distribution Frame) là bảng phân phối chính của hệ thống thông tin."
},
{
  id: 3,
  q: "問3 給排水（きゅうはいすい）衛生（えいせい）設備（せつび）工事（こうじ）について、適切（てきせつ）なものを選（えら）べ。",
  options: [
    "給湯（きゅうとう）設備（せつび）工事（こうじ）",
    "地熱井（ちねつい）工事（こうじ）",
    "塗装（とそう）工事（こうじ）",
    "舗装（ほそう）工事（こうじ）"
  ],
  answer: 0,
  vi: "Chọn loại công trình phù hợp với công trình thiết bị vệ sinh cấp thoát nước.",
  explain: "Đáp án đúng:  — Công trình thiết bị cấp nước nóng thuộc nhóm cấp thoát nước và vệ sinh."
},
{
  id: 4,
  q: "問4 内外装（ないがいそう）仕上（しあ）げ工事（こうじ）に含（ふく）まれないものはどれか。",
  options: [
    "ガス",
    "屋根（やね）",
    "カーテンウォール",
    "防水（ぼうすい）"
  ],
  answer: 0,
  vi: "Trong các loại sau, loại nào không thuộc công trình hoàn thiện nội ngoại thất?",
  explain: "Đáp án đúng:  — Gas không thuộc nhóm hoàn thiện nội ngoại thất."
},
{
  id: 5,
  q: "問5 工程表（こうていひょう）から読（よ）み取（と）れる４つの要素（ようそ）はどれか。",
  options: [
    "ガントチャート",
    "バーチャート",
    "グラフ式工程表（こうていひょう）",
    "ネットワーク式工程表（こうていひょう）"
  ],
  answer: 3,
  vi: "Trong các loại sơ đồ tiến độ, loại nào thể hiện rõ 4 yếu tố: trình tự, ngày, tiến độ và ảnh hưởng tiến độ?",
  explain: "Đáp án đúng:  — Sơ đồ tiến độ kiểu mạng (ネットワーク式工程表) thể hiện đầy đủ 4 yếu tố."
},
  {
  q: "問6　以下（いか）の写真（しゃしん）は何（なん）の工事（こうじ）か。【64】",
  img: "images/IMG_3607.jpeg",
  options: [
    "給排水（きゅうはいすい）設備（せつび）工事（こうじ）",
    "ガス設備（せつび）工事（こうじ）",
    "衛生（えいせい）器具（きぐ）設備（せつび）工事（こうじ）",
    "給湯（きゅうとう）設備（せつび）工事（こうじ）"
  ],
  answer: 0,
  vi: "Công trình trong hình là loại nào?",
  explain: "Hình cho thấy hệ thống ống nước thải và cấp nước — đây là công trình 給排水（きゅうはいすい）設備（せつび）工事（こうじ） (cấp thoát nước)**."
},
  {
  q: "問7　「おつかれさまです」はどんな時（とき）に挨拶（あいさつ）するか。【79】",
  options: [
    "他（ほか）の人（ひと）は来（たいへん）そうだと思（おも）えま",
    "仕事（しごと）が終（お）わるときにあいさつします",
    "休憩（きゅうけい）の時（とき）にあいさつします",
    "すべて正解（せいかい）です"
  ],
  answer: 3,
  vi: "Cụm 'おつかれさまです' được dùng khi nào?",
  explain: "‘おつかれさまです’ là câu chào phổ biến dùng khi công việc kết thúc, lúc nghỉ giải lao, hoặc khi gặp đồng nghiệp — nên tất cả đều đúng."
},
{
  id: 8,
  q: "問8 作業（さぎょう）終了後（しゅうりょうご）、火（ひ）を使（つか）う場合（ばあい）は、何（なに）をする？",
  options: [
    "確実（かくじつ）に消火（しょうか）を確認（かくにん）する。",
    "放置（ほうち）する。",
    "ゴミを確認（かくにん）する。",
    "上司（じょうし）に連絡（れんらく）する。"
  ],
  answer: 0,
  vi: "Sau khi kết thúc công việc có dùng lửa, cần làm gì?",
  explain: "Đáp án đúng:  — Phải chắc chắn rằng lửa đã được dập tắt hoàn toàn."
},
{
  id: 9,
  q: "問9 服装（ふくそう）の注意（ちゅうい）について、正（ただ）しいものを一つ選（えら）べ。",
  options: [
    "できるだけ上着（うわぎ）のボタンをはずす。",
    "ポケットに手（て）を入（い）れたまま作業（さぎょう）する。",
    "暑（あつ）いから半袖（はんそで）や半パンの作業服（さぎょうふく）を着（き）る。",
    "そでは手首（てくび）までおろして着用（ちゃくよう）する。"
  ],
  answer: 3,
  vi: "Chọn đáp án đúng về quy tắc ăn mặc khi làm việc.",
  explain: "Đáp án đúng:  Tay áo phải kéo xuống đến cổ tay khi làm việc để tránh tai nạn."
},
{
  id: 10,
  q: "問10 漏電（ろうでん）の定義（ていぎ）について正（ただ）しいものを選（えら）べ。",
  options: [
    "電気（でんき）が通（とお）るべきではない部分（ぶぶん）に電気（でんき）が流（なが）れてしまうこと。",
    "大地（だいち）を電気的（でんきてき）に接続（せつぞく）すること。",
    "雷（かみなり）による電流（でんりゅう）を放流（ほうりゅう）すること。",
    "人体（じんたい）に電流（でんりゅう）が流（なが）れること。"
  ],
  answer: 0,
  vi: "Chọn định nghĩa đúng về hiện tượng rò điện (漏電)（ろうでん）.",
  explain: "Đáp án đúng:  — Là hiện tượng dòng điện chảy vào phần không được thiết kế để dẫn điện."
},
{
  id: 11,
  q: "問11 ヒヤリ・ハット活動（かつどう）について、不適切（ふてきせつ）なものを選（えら）べ。",
  options: [
    "作業員（さぎょういん）が経験（けいけん）したヒヤリ・ハットを全員（ぜんいん）で共有（きょうゆう）することによって、現場（げんば）の安全性（あんぜんせい）を高（たか）める。",
    "再発生（さいはっせい）しないため、ヒヤリ・ハットを経験（けいけん）したことを報告（ほうこく）した作業員（さぎょういん）に責任（せきにん）を追及（ついきゅう）し、反省（はんせい）を促（うなが）す。",
    "報告（ほうこく）された内容（ないよう）を分析（ぶんせき）して、同様（どうよう）の事故（じこ）やトラブルが起（お）こらないように改善点（かいぜんてん）を導（みちび）き出（だ）すことができる。",
    "報告（ほうこく）されたヒヤリ・ハットを分析（ぶんせき）し、原因（げんいん）を特定（とくてい）し、改善（かいぜん）策（さく）を提案（ていあん）します。"
  ],
  answer: 1,
  vi: "Chọn nội dung KHÔNG phù hợp trong hoạt động báo cáo suýt tai nạn (ヒヤリ・ハット).",
  explain: "Đáp án đúng:  — Không được truy cứu trách nhiệm cá nhân, mà cần phân tích và cải thiện tập thể."
},
{
  id: 12,
  q: "問12 木造（もくぞう）住宅（じゅうたく）の工事（こうじ）をする人（ひと）は何（なん）というか。",
  options: [
    "大工（だいく）",
    "住宅（じゅうたく）工事（こうじ）",
    "石工事（いしこうじ）",
    "電気（でんき）工事（こうじ）"
  ],
  answer: 0,
  vi: "Người thi công nhà gỗ được gọi là gì?",
  explain: "Đáp án đúng:  — 大工（だいく） nghĩa là thợ mộc, người làm công trình nhà gỗ."
},
  {
  q: "問13　以下（いか）の写真（しゃしん）は何（なん）の工事（こうじ）か。【56】",
  img: "images/0156.png",
  options: [
    "鋼製（こうせい）下地（したじ）工事（こうじ）",
    "ボード貼（は）り工事（こうじ）",
    "床（ゆか）仕上（しあ）げ工事（こうじ）",
    "カーテン工事（こうじ）"
  ],
  answer: 0,
  vi: "Hình dưới đây là công trình gì?",
  explain: "Hình cho thấy khung xương thép được lắp đặt — đây là **鋼製（こうせい）下地（したじ）工事（こうじ）**, tức là công trình lắp đặt khung xương kim loại để làm tường hoặc trần."
},
  {
  q: "問14　イラストによると、どんな工事（こうじ）か。【62】",
  img: "images/IMG_3608.jpeg",
  options: [
    "地中（ちちゅう）配線（はいせん）工事（こうじ）",
    "架空（かくう）配線（はいせん）工事（こうじ）",
    "電灯（でんとう）設備（せつび）工事（こうじ）",
    "配線（はいせん）工事（こうじ）"
  ],
  answer: 1,
  vi: "Theo hình minh họa, đây là loại công trình nào?",
  explain: "Công nhân đang làm việc trên xe nâng, xử lý dây điện phía trên không trung. Đây là 架空（かくう）配線（はいせん）工事（こうじ）, tức là công trình lắp đặt đường dây điện trên không."
},
{
  id: 15,
  q: "問15 鉄骨（てっこつ）で作（つく）られる構造（こうぞう）について、違（ちが）うものを選（えら）べ。",
  options: [
    "トラス構造（こうぞう）",
    "ラーメン構造（こうぞう）",
    "ネジ構造（こうぞう）",
    "ブレース構造（こうぞう）"
  ],
  answer: 2,
  vi: "Chọn cấu trúc KHÔNG phải là cấu trúc bằng thép.",
  explain: "Đáp án đúng:  — ネジ構造（こうぞう） (cấu trúc bằng bu-lông) không được xếp vào nhóm cấu trúc thép chính."
},
{
  id: 16,
  q: "問16 「盛（も）り土（ど）・締（し）め固（かた）め」は何（なに）か。",
  options: [
    "ブルドーザなどの機械（きかい）を使（つか）って、土砂（どしゃ）を押（お）して運（はこ）ぶ。",
    "トラクターに積（つ）み込（こ）む。",
    "油圧（ゆあつ）ショベルを使（つか）って掘削（くっさく）する。",
    "平地（へいち）はブルドーザを使（つか）って、盛（も）り土（ど）を行（おこな）い、締固（し）めを行（おこな）う。"
  ],
  answer: 3,
  vi: "‘Đắp đất và nén chặt’ là công việc nào?",
  explain: "Đáp án đúng:  — Dùng xe ủi để đắp và nén chặt đất ở khu vực bằng phẳng."
},
  {
    q: "問17　相手（あいて）の仕事（しごと）や苦労（くろう）に対（たい）して、感謝（かんしゃ）して労（ねぎら）う意味（いみ）の言葉（ことば）で、建設（けんせつ）現場（げんば）だけではなく、事務所（じむしょ）や休憩（きゅうけい）場所（ばしょ）などですれ違（ちが）ったときにも使（つか）えます。その言葉（ことば）はどれか【79】",
    options: [
      "失礼（しつれい）します",
      "ご安全（あんぜん）に",
      "おつかれさまです",
      "おはようございます"
    ],
    answer: 2,
    vi: "Câu nào là lời thể hiện sự cảm ơn và động viên công sức của người khác, dùng cả ở hiện trường, văn phòng hay lúc lướt qua?",
    explain: "Đáp án đúng: 「おつかれさまです」 – Lời chào cảm ơn, ghi nhận vất vả của đối phương."
  },
  {
    q: "問18　発破（はっぱ）を行（おこな）う業務（ぎょうむ）に就（つ）くには何（なん）が必要（ひつよう）か【73】",
    options: [
      "発破（はっぱ）技師（ぎし）免許（めんきょ）",
      "特定（とくてい）技能（ぎのう）資格（しかく）",
      "職長（しょくちょう）免許（めんきょ）",
      "JLPT 資格（しかく）"
    ],
    answer: 0,
    vi: "Để làm công việc nổ mìn (phát phá), cần gì?",
    explain: "Đáp án đúng: 発破技師免許 – Phải có giấy phép kỹ sư nổ mìn."
  },
  {
  q: "問19　鉄筋（てっきん）と鉄筋（てっきん）のつなぐ部分（ぶぶん）を加熱（かねつ）して、軸方向（じくほうこう）に圧力（あつりょく）をかけて接合（せつごう）する工法（こうほう）は何（なん）と言（い）うか。【47】",
  img: "images/IMG_3609.jpeg",
  options: [
    "溶接（ようせつ）継手（つぎて）",
    "ガス圧接（あっせつ）継手（つぎて）",
    "アーク溶接（ようせつ）",
    "ろう接（せつ）"
  ],
  answer: 1,
  vi: "Phương pháp nung nóng phần nối giữa hai thanh thép và ép lại theo trục gọi là gì?",
  explain: "Đây là **ガス圧接（あっせつ）継手（つぎて）**, tức là phương pháp nối thép bằng hàn ép khí gas — sử dụng nhiệt và áp lực dọc trục để nối chặt hai đầu thép."
},
  {
    q: "問20　コンクリート強度（きょうど）の低下（ていか）防止（ぼうし）対策（たいさく）のため、コンクリートに振動（しんどう）を与（あた）えて型枠（かたわく）を隅々（すみずみ）までいきわたらせ、不要（ふよう）な空気（くうき）を除去（じょきょ）するための機械（きかい）は何（なん）というか【50】",
    options: [
      "掘削（くっさく）機械（きかい）",
      "バイブレーター",
      "ローラ",
      "こて"
    ],
    answer: 1,
    vi: "Để truyền rung vào bê tông, làm đầy khuôn và loại bọt khí, dùng máy gì?",
    explain: "Đáp án đúng: バイブレーター – Máy đầm rung bê tông."
  },
  {
    q: "問21　床（ゆか）など水平面（すいへいめん）に直接（ちょくせつ）付（つ）ける墨（すみ）を何（なん）と言（い）うか【81】",
    options: [
      "仕上（しあ）げ墨（すみ）",
      "地墨（じすみ）",
      "立（た）て墨（すみ）",
      "逃（に）げ墨（すみ）"
    ],
    answer: 1,
    vi: "Mực/dấu đặt trực tiếp trên mặt phẳng ngang (như sàn) gọi là gì?",
    explain: "Đáp án đúng: 地墨（じすみ） – Vạch mực nền trên mặt phẳng."
  },
  {
    q: "問22　話（はな）したい相手（あいて）が誰（だれ）かと会話中（かいわちゅう）の時（とき）に、急（いそ）いで伝（つた）えることがあるときに、何（なに）を言（い）うか【80】",
    options: [
      "ご苦労様（くろうさま）",
      "失礼（しつれい）します",
      "お疲（つか）れ様（さま）です",
      "お早（はよ）うございます"
    ],
    answer: 1,
    vi: "Khi cần chen ngang để nhắn gấp lúc người kia đang nói chuyện, phải nói gì?",
    explain: "Đáp án đúng: 失礼（しつれい）します – Xin phép (cắt lời/đi ngang)."
  },
  {
    q: "問23　作業（さぎょう）を終（お）わってから、必（かなら）ず（　　　）をする【99】",
    options: [
      "ラジオ体操（たいそう）",
      "朝礼（ちょうれい）",
      "後（あと）片付（かたづけ）",
      "上司（じょうし）に連絡（れんらく）"
    ],
    answer: 2,
    vi: "Sau khi kết thúc công việc phải làm gì nhất định?",
    explain: "Đáp án đúng:後（あと）片付（かたづけ）tiếp theo là dọn dẹp vệ sinhsinh "
  },   
  {
    q: "問24　埋設（まいせつ）について、適切（てきせつ）なものを選（えら）べ【91】",
    options: [
      "電柱（でんちゅう）を使（つか）って建物内（たてものない）までケーブルを配線（はいせん）すること",
      "ケーブルを通（とお）す管（くだ）を取（と）り付（つ）けること",
      "電線（でんせん）などを地中（ちちゅう）に埋（う）めること",
      "電線（でんせん）を通（とお）す管（くだ）のこと"
    ],
    answer: 2,
    vi: "Về 埋設 （まいせつ）(chôn ngầm), lựa chọn mô tả đúng là gì?",
    explain: "Đáp án đúng: 電線（でんせん）などを地中（ちちゅう）に埋（う）めること – Chôn dây/thiết bị xuống đất."
  },
  {
    q: "問25　仕事（しごと）をしている人（ひと）より、先（さき）に帰（かえ）らなければならないときに「お先（さき）に失礼（しつれい）します」という挨拶（あいさつ）に対（たい）して、何（なに）を言（い）うか。",
    options: [
      "ご苦労様（ごくろうさま）",
      "ありがとうございます",
      "お疲（つか）れ様（さま）でした",
      "ご安全（あんぜん）に"
    ],
    answer: 2,
    vi: "Khi ai đó nói “xin phép về trước”, bạn đáp lại thế nào?",
    explain: "Đáp án đúng: お疲れ様でした – Cảm ơn đã vất vả, chúc nghỉ ngơi."
  },
  {
    q: "問26　土木（どぼく）工事（こうじ）でない工事（こうじ）を選（えら）べ【26〜30】",
    options: [
      "浄水場（じょうすいじょう）や下水（げすい）処理場（しょりじょう）の敷地（しきち）造成（ぞうせい）などの建設（けんせつ）工事（こうじ）を行（おこな）う",
      "山岳（さんがく）トンネル",
      "防潮堤（ぼうちょうてい）",
      "温度（おんど）・湿度（しつど）の調整（ちょうせい）や空気（くうき）の清浄（せいじょう）の設備（せつび）を施工（せこう）する"
    ],
    answer: 3,
    vi: "Hãy chọn hạng mục KHÔNG thuộc công trình dân dụng (địa kỹ thuật/cầu đường).",
    explain: "Đáp án đúng:  – Hệ thống điều hòa, thông gió, lọc không khí (thiết bị M&E), không phải công trình đất/đập/đường."
  },
  {
    q: "問27　ダムの役割（やくわり）について、不適切（ふてきせつ）な回答（かいとう）を選（えら）べ【学科26】",
    options: [
      "同時（どうじ）に水力（すいりょく）発電（はつでん）も行（おこな）います。",
      "自然環境（しぜんかんきょう）を保安（ほうあん）する。",
      "農業（のうぎょう）や工業（こうぎょう）で安定（あんてい）した水量（すいりょう）調節（ちょうせつ）の役割（やくわり）が あります。",
      "河川（かせん）に流（なが）れる水（みず）の量（りょう）を調整（ちょうせい）する。"
    ],
    answer: 1,
    vi: "Về vai trò của đập, phương án nào KHÔNG phù hợp?",
    explain: "Đáp án đúng: – “Bảo an môi trường tự nhiên” là diễn đạt không đúng vai trò đặc trưng của đập."
  },
  {
  q: "問28　地下水（ちかすい）を排水（はいすい）するための工法（こうほう）は何（なん）の工事（こうじ）か。【41】",
  img: "images/IMG_3610.jpeg",
  options: [
    "ウォルポイント工事（こうじ）",
    "推進（すいしん）トンネル工事（こうじ）",
    "さく井（せい）工事（こうじ）",
    "海洋（かいよう）土木（どぼく）工事（こうじ）"
  ],
  answer: 0,
  vi: "Phương pháp thi công nào dùng để hút và thoát nước ngầm ra khỏi lòng đất?",
  explain: "Hình vẽ mô tả hệ thống ống hút nước ngầm với bể và bơm trung gian — đây là **ウォルポイント工事（Well Point 工事）**, dùng để hạ mực nước ngầm trước khi thi công móng hoặc tầng hầm."
},
  {
  q: "問29　鉄筋（てっきん）の長（なが）さが足（た）りない場合（ばあい）、２本（にほん）の鉄筋（てっきん）をつなぎ合わせて、長（なが）い１本（いっぽん）の鉄筋（てっきん）にする工事（こうじ）は何（なん）と言（い）うか。",
  options: [
    "鉄筋（てっきん）工事（こうじ）",
    "鉄筋（てっきん）継手（つぎて）工事（こうじ）",
    "杭（くい）工事（こうじ）",
    "溶接（ようせつ）工事（こうじ）"
  ],
  answer: 1,
  vi: "Khi thanh thép không đủ dài, nối 2 thanh lại thành 1 thanh dài gọi là công việc nối thép.",
  explain: "Đáp án đúng: 鉄筋（てっきん）継手（つぎて）工事（こうじ） — Công việc nối thép để kéo dài thanh."
},
{
  q: "問30. タワークレーンを使(つか)って、1階(いっかい)ずつ組(く)み上(あ)げていく方法(ほうほう)は何(なん)というか【46】",
  options: [
    "1. ブラケット工法(こうほう)",
    "2. 建(た)てて逃(に)げ方式(ほうしき)",
    "3. ノンブラケット工法(こうほう)",
    "4. 水平(すいへい)積(つ)み上(あ)げ方式(ほうしき)"
  ],
  answer: 3,
  vi: "Phương pháp sử dụng **タワークレーン (Cần cẩu tháp)** để lắp ráp/nâng lên từng tầng (**1階(いっかい)ずつ**) được gọi là gì?",
  explain: "Đó là **水平(すいへい)積(つ)み上(あ)げ方式(ほうしき)** (Phương pháp xếp chồng ngang rồi nâng lên). Trong bối cảnh này, thuật ngữ này được sử dụng để chỉ phương pháp nâng cần cẩu tháp lên từng tầng (**1階(いっかい)ずつ**) theo chiều cao của công trình.",
  tip: "💡 Nhớ: **タワークレーン (Cần cẩu tháp)** + **1階(いっかい)ずつ** = **水平積(すいへいづみ)み上(あ)げ方式(あげほうしき)** (Phương pháp nâng lên theo chiều ngang)."
}
];
