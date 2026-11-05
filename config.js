// ==========================================
// 🎯 【關關難過關關過】各隊專屬題庫與規則設定檔 (config.js)
// ==========================================

window.CUSTOM_GAME_CONFIG = {
  // 1. Firebase 跨手機即時連線網址
  firebaseUrl: "https://gofighting-4d19f-default-rtdb.asia-southeast1.firebasedatabase.app",

  // 2. 活動基本設定與萬用最高權限密碼 (1123)
  gameTitle: "關關難過關關過",
  teamCount: 10,               // 10 個小隊
  superPin: "1123",            // 最高權限萬用密碼 (所有角色與解鎖皆可用)
  masterPin: "1123",           // 總關主密碼
  angelPin: "8888",            // 小天使通用密碼 (輸入 1123 也能進)
  switchPin: "1123",           // 切換身分防弊密碼

  // 3. 10 個小隊專屬代表色設定
  teamColors: [
    { id: 1,  colorName: "極光紅", hex: "#E63946", textHex: "#FFFFFF" },
    { id: 2,  colorName: "深海藍", hex: "#1D3557", textHex: "#FFFFFF" },
    { id: 3,  colorName: "翡翠綠", hex: "#2A9D8F", textHex: "#FFFFFF" },
    { id: 4,  colorName: "活力黃", hex: "#E9C46A", textHex: "#0F172A" },
    { id: 5,  colorName: "暖陽橙", hex: "#F4A261", textHex: "#0F172A" },
    { id: 6,  colorName: "夢幻紫", hex: "#8E44AD", textHex: "#FFFFFF" },
    { id: 7,  colorName: "玫瑰粉", hex: "#FF70A6", textHex: "#0F172A" },
    { id: 8,  colorName: "天空藍", hex: "#48CAE4", textHex: "#0F172A" },
    { id: 9,  colorName: "可可棕", hex: "#6F4E37", textHex: "#FFFFFF" },
    { id: 10, colorName: "石墨灰", hex: "#4A4A4A", textHex: "#FFFFFF" }
  ],

  // 4. 獎懲秒數設定 (單位：秒)
  bossFailPenaltySec: 60,      // 關主按「失敗」懲罰加幾秒 (+60秒)
  bossBonusRewardSec: 30,      // 關主按「加分題」獎勵扣幾秒 (-30秒)
  folderPeekPenaltySec: 45,    // 偷點別隊雲端資料夾懲罰加幾秒 (+45秒)
  folderPeekText: "抓到偷看別隊資料夾！全隊請立刻原地開合跳 20 下，並且系統已自動增加 45 秒懲罰時間！",

  // 5. 三大題目標題說明 (提醒學生第二題要寫出句子+經典名稱)
  questions: [
    { id: 1, title: "第一題：四位數終極密碼", prompt: "請根據提示 01~05 與小天使 1A2B，輸入 4 位數密碼：" },
    { id: 2, title: "第二題：經典句子重組",   prompt: "請輸入重組後的「完整句子＋經典名稱」（前後順序不拘）：" },
    { id: 3, title: "第三題：世界國家之謎",   prompt: "請根據提示 11~15 的國家特徵，輸入正確的國家名稱：" }
  ],

  // 6. 各小隊專屬最終答案 (系統批改時會自動忽略標點符號、斜線與空白)
  teamQuestions: {
    1: [ // 第 1 小隊 (極光紅)
      { qId: 1, answers: ["7943"] },
      { qId: 2, answers: [
          "君子不重則不威論語",
          "論語君子不重則不威",
          "子曰君子不重則不威論語",
          "論語子曰君子不重則不威"
        ]
      },
      { qId: 3, answers: ["法國", "法蘭西"] }
    ],
    2: [ // 第 2 小隊 (深海藍) — 第一題已更正為 2318
      { qId: 1, answers: ["2318"] },
      { qId: 2, answers: [
          "老者安之朋友信之少者懷之論語",
          "論語老者安之朋友信之少者懷之"
        ]
      },
      { qId: 3, answers: ["日本", "日本國"] }
    ],
    // 第 3~10 小隊待補 (目前先預填第一題專屬密碼)
    3:  [{ qId: 1, answers: ["3942"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    4:  [{ qId: 1, answers: ["8372"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    5:  [{ qId: 1, answers: ["5721"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    6:  [{ qId: 1, answers: ["4873"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    7:  [{ qId: 1, answers: ["9580"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    8:  [{ qId: 1, answers: ["6478"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    9:  [{ qId: 1, answers: ["7245"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }],
    10: [{ qId: 1, answers: ["5243"] }, { qId: 2, answers: ["待補"] }, { qId: 3, answers: ["待補"] }]
  },

  // 7. 小天使 1A2B 各隊謎底 (第 2 小隊已更正為 2318)
  default1A2B: "7943",
  angelCodes: {
    "A01": { teamId: 1,  secret1A2B: "7943" },
    "A02": { teamId: 2,  secret1A2B: "2318" },
    "A03": { teamId: 3,  secret1A2B: "3942" },
    "A04": { teamId: 4,  secret1A2B: "8372" },
    "A05": { teamId: 5,  secret1A2B: "5721" },
    "A06": { teamId: 6,  secret1A2B: "4873" },
    "A07": { teamId: 7,  secret1A2B: "9580" },
    "A08": { teamId: 8,  secret1A2B: "6478" },
    "A09": { teamId: 9,  secret1A2B: "7245" },
    "A10": { teamId: 10, secret1A2B: "5243" }
  },

  // 8. 各小隊專屬的 15 個提示設定
  teamClues: {
    // =========================================================
    // 🔴 第 1 小隊 (1小-極光紅) 專屬 15 提示
    // =========================================================
    1: [
      // 第一題 (7943)
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "關卡 01 (關主 B01)", taskDesc: "請尋找【關主 B01】完成挑戰以取得提示！", hintText: "【提示1】彩虹（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "關卡 02 (關主 B02)", taskDesc: "請尋找【關主 B02】完成挑戰以取得提示！", hintText: "【提示2】三原色（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "boss",   bossCode: "B03", bossName: "關卡 03 (關主 B03)", taskDesc: "請尋找【關主 B03】完成挑戰以取得提示！", hintText: "【提示3】2的倍數（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "folder", bossCode: "",    bossName: "提示 04 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示4】3的倍數（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "angel",  bossCode: "",    bossName: "任務 05 (隨隊小天使)", taskDesc: "請向隨隊小天使完成指定任務（或進行 1A2B 猜數字），由小天使發送提示！", hintText: "【提示5】A+B=16，16+7=23（終極密碼）" },

      // 第二題 (君子不重則不威 / 論語)
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B04", bossName: "關卡 06 (關主 B04)", taskDesc: "請尋找【關主 B04】完成挑戰以取得提示！", hintText: "【提示6】子不" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B05", bossName: "關卡 07 (關主 B05)", taskDesc: "請尋找【關主 B05】完成挑戰以取得提示！", hintText: "【提示7】則重" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B06", bossName: "關卡 08 (關主 B06)", taskDesc: "請尋找【關主 B06】完成挑戰以取得提示！", hintText: "【提示8】不君" },
      { id: 9,  code: "CLUE09", qId: 2, type: "folder", bossCode: "",    bossName: "提示 09 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示9】子威" },
      { id: 10, code: "CLUE10", qId: 2, type: "angel",  bossCode: "",    bossName: "任務 10 (隨隊小天使)", taskDesc: "請向隨隊小天使完成指定任務，由小天使按下過關發送提示！", hintText: "【提示10】曰" },

      // 第三題 (法國)
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B07", bossName: "關卡 11 (關主 B07)", taskDesc: "請尋找【關主 B07】完成挑戰以取得提示！", hintText: "【提示11】領土的輪廓形狀酷似一個『正六邊形』，因此在當地常被簡稱為六邊形國" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B01", bossName: "關卡 12 (關主 B01)", taskDesc: "請尋找【關主 B01】完成挑戰以取得提示！", hintText: "【提示12】國旗的顏色意義，分別象徵著自由、平等與博愛" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B02", bossName: "關卡 13 (關主 B02)", taskDesc: "請尋找【關主 B02】完成挑戰以取得提示！", hintText: "【提示13】長棍麵包、鵝肝皆是代表性美食" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B03", bossName: "關卡 14 (關主 B03)", taskDesc: "請尋找【關主 B03】完成挑戰以取得提示！", hintText: "【提示14】它收藏蒙娜麗莎畫像" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示 15 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示15】它有著世界知名的鋼鐵建築之一" }
    ],

    // =========================================================
    // 🔵 第 2 小隊 (2小-深海藍) 專屬 15 提示
    // =========================================================
    2: [
      // 第一題 (2318) — 提示1已更正為 A+B=5 , C+D>5
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "關卡 01 (關主 B01)", taskDesc: "請尋找【關主 B01】完成挑戰以取得提示！", hintText: "【提示1】A+B=5 , C+D>5 （終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "關卡 02 (關主 B02)", taskDesc: "請尋找【關主 B02】完成挑戰以取得提示！", hintText: "【提示2】無限（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "folder", bossCode: "",    bossName: "提示 03 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示3】皇帝（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "folder", bossCode: "",    bossName: "提示 04 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示4】白陽三聖（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "angel",  bossCode: "",    bossName: "任務 05 (隨隊小天使)", taskDesc: "請向隨隊小天使完成指定任務（或進行 1A2B 猜數字），由小天使發送提示！", hintText: "【提示5】一雙人（終極密碼）" },

      // 第二題 (老者安之，朋友信之，少者懷之 / 論語)
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B03", bossName: "關卡 06 (關主 B03)", taskDesc: "請尋找【關主 B03】完成挑戰以取得提示！", hintText: "【提示6】懷老者" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B04", bossName: "關卡 07 (關主 B04)", taskDesc: "請尋找【關主 B04】完成挑戰以取得提示！", hintText: "【提示7】之安" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B05", bossName: "關卡 08 (關主 B05)", taskDesc: "請尋找【關主 B05】完成挑戰以取得提示！", hintText: "【提示8】之信" },
      { id: 9,  code: "CLUE09", qId: 2, type: "boss",   bossCode: "B06", bossName: "關卡 09 (關主 B06)", taskDesc: "請尋找【關主 B06】完成挑戰以取得提示！", hintText: "【提示9】少朋友" },
      { id: 10, code: "CLUE10", qId: 2, type: "folder", bossCode: "",    bossName: "提示 10 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示10】之者" },

      // 第三題 (日本)
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B07", bossName: "關卡 11 (關主 B07)", taskDesc: "請尋找【關主 B07】完成挑戰以取得提示！", hintText: "【提示11】擁有一座被聯合國教科文組織列為世界遺產的標誌性火山" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B01", bossName: "關卡 12 (關主 B01)", taskDesc: "請尋找【關主 B01】完成挑戰以取得提示！", hintText: "【提示12】這裡的飲食文化米飯是主食" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B02", bossName: "關卡 13 (關主 B02)", taskDesc: "請尋找【關主 B02】完成挑戰以取得提示！", hintText: "【提示13】武士和忍者是其歷史上著名的文化形象" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B03", bossName: "關卡 14 (關主 B03)", taskDesc: "請尋找【關主 B03】完成挑戰以取得提示！", hintText: "【提示14】這個地方曾被稱為『倭』" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示 15 (雲端資料夾)", taskDesc: "請在下方 10 色雲端資料夾中，點選你們小隊的代表色領取提示！", hintText: "【提示15】境內完全沒有『省』這個行政區劃" }
    ]
  }
};
