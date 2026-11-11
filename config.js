// ==========================================
// 🎯 【關關難過關關過】10 小隊完整題庫與規則設定檔 (config.js)
// 資料來源：雲端試算表《關關難過關關不哭》
// ==========================================

window.CUSTOM_GAME_CONFIG = {
  // 1. Firebase 跨手機即時連線網址
  firebaseUrl: "https://gofighting-4d19f-default-rtdb.asia-southeast1.firebasedatabase.app",

  // 2. 活動基本設定與總關主密碼 (支援 1123 / 20040521 / 19951004)
  gameTitle: "關關難過關關過",
  teamCount: 10,
  superPin: "1123",
  masterPin: "1123",
  masterPins: ["1123", "20040521", "19951004"],
  angelPin: "8888",
  switchPin: "1123",

  // 3. 10 個小隊專屬角色名稱與代表色設定
  teamColors: [
    { id: 1,  colorName: "DoReMi",     hex: "#E63946", textHex: "#FFFFFF" },
    { id: 2,  colorName: "史迪奇",     hex: "#1D3557", textHex: "#FFFFFF" },
    { id: 3,  colorName: "海王星",     hex: "#2A9D8F", textHex: "#FFFFFF" },
    { id: 4,  colorName: "小小兵",     hex: "#E9C46A", textHex: "#0F172A" },
    { id: 5,  colorName: "漩渦鳴人",   hex: "#F4A261", textHex: "#0F172A" },
    { id: 6,  colorName: "百變怪",     hex: "#8E44AD", textHex: "#FFFFFF" },
    { id: 7,  colorName: "甘露寺蜜璃", hex: "#FF70A6", textHex: "#0F172A" },
    { id: 8,  colorName: "泡泡",       hex: "#48CAE4", textHex: "#0F172A" },
    { id: 9,  colorName: "達菲熊",     hex: "#6F4E37", textHex: "#FFFFFF" },
    { id: 10, colorName: "酷洛米",     hex: "#4A4A4A", textHex: "#FFFFFF" }
  ],

  // ★ 10 個關主關卡名稱設定 (對應 B01 ~ B10)
  bossStations: [
    { index: 1,  bossCode: "B01", name: "補給站" },
    { index: 2,  bossCode: "B02", name: "大家來找碴" },
    { index: 3,  bossCode: "B03", name: "大藝術家" },
    { index: 4,  bossCode: "B04", name: "動動ABC" },
    { index: 5,  bossCode: "B05", name: "Emo不Emo" },
    { index: 6,  bossCode: "B06", name: "明爭暗鬥" },
    { index: 7,  bossCode: "B07", name: "平了又平" },
    { index: 8,  bossCode: "B08", name: "數獨海戰棋" },
    { index: 9,  bossCode: "B09", name: "默契大挑戰" },
    { index: 10, bossCode: "B10", name: "八仙過海" }
  ],

  // 4. 獎懲秒數設定 (單位：秒)
  bossFailPenaltySec: 60,      // 關主按「失敗」懲罰加幾秒 (+60秒)
  folderPeekPenaltySec: 45,    // 偷點別隊雲端資料夾懲罰加幾秒 (+45秒)
  folderPeekText: "抓到偷看別隊資料夾！全隊請立刻原地開合跳 20 下，並且系統已自動增加 45 秒懲罰時間！",

  // 5. 三大題目標題說明
  questions: [
    { id: 1, title: "第一題：四位數終極密碼", prompt: "請根據提示 01~05 與小天使 1A2B，輸入 4 位數密碼：" },
    { id: 2, title: "第二題：經典句子重組",   prompt: "請輸入重組後的「完整句子＋經典名稱」（前後順序不拘）：" },
    { id: 3, title: "第三題：世界國家之謎",   prompt: "請根據提示 11~15 的國家特徵，輸入正確的國家名稱：" }
  ],

  // 6. 10 小隊專屬最終答案
  teamQuestions: {
    1: [
      { qId: 1, answers: ["7943"] },
      { qId: 2, answers: ["君子不重則不威論語", "論語君子不重則不威", "子曰君子不重則不威論語", "論語子曰君子不重則不威"] },
      { qId: 3, answers: ["法國", "法蘭西"] }
    ],
    2: [
      { qId: 1, answers: ["2318"] },
      { qId: 2, answers: ["老者安之朋友信之少者懷之論語", "論語老者安之朋友信之少者懷之"] },
      { qId: 3, answers: ["日本", "日本國"] }
    ],
    3: [
      { qId: 1, answers: ["3942"] },
      { qId: 2, answers: ["三年無改於父之道可謂孝矣論語", "論語三年無改於父之道可謂孝矣"] },
      { qId: 3, answers: ["冰島", "冰島共和國"] }
    ],
    4: [
      { qId: 1, answers: ["8372"] },
      { qId: 2, answers: ["魍魎邪魔化為塵落在中原三星地彌勒救苦真經", "彌勒救苦真經魍魎邪魔化為塵落在中原三星地", "魍魎邪魔化為塵落在中原三星地彌勒救苦經", "彌勒救苦經魍魎邪魔化為塵落在中原三星地"] },
      { qId: 3, answers: ["瑞士", "瑞士聯邦"] }
    ],
    5: [
      { qId: 1, answers: ["5721"] },
      { qId: 2, answers: ["孝子治國萬民安善體親心是孝男百孝經", "百孝經孝子治國萬民安善體親心是孝男"] },
      { qId: 3, answers: ["新加坡", "新加坡共和國"] }
    ],
    6: [
      { qId: 1, answers: ["4873"] },
      { qId: 2, answers: ["福祿皆由孝字得天將孝子另眼觀百孝經", "百孝經福祿皆由孝字得天將孝子另眼觀"] },
      { qId: 3, answers: ["蒙古", "蒙古國"] }
    ],
    7: [
      { qId: 1, answers: ["9580"] },
      { qId: 2, answers: [
          "齋莊中正純然清淨浩然充塞在其中關聖帝君伏魔真經",
          "關聖帝君伏魔真經齋莊中正純然清淨浩然充塞在其中",
          "齋裝中正純然清淨浩然充塞在其中關聖帝君伏魔真經",
          "關聖帝君伏魔真經齋裝中正純然清淨浩然充塞在其中",
          "齋莊中正純然清淨浩然充塞在其中伏魔真經",
          "伏魔真經齋莊中正純然清淨浩然充塞在其中",
          "齋裝中正純然清淨浩然充塞在其中伏魔真經",
          "伏魔真經齋裝中正純然清淨浩然充塞在其中"
        ]
      },
      { qId: 3, answers: ["埃及", "阿拉伯埃及共和國"] }
    ],
    8: [
      { qId: 1, answers: ["6478"] },
      { qId: 2, answers: [
          "貨惡其棄於地也不必藏於己禮運大同篇",
          "禮運大同篇貨惡其棄於地也不必藏於己",
          "貨惡其棄於地也不必藏於已禮運大同篇",
          "禮運大同篇貨惡其棄於地也不必藏於已",
          "貨惡其棄於地也不必藏於己禮記禮運大同篇",
          "禮記禮運大同篇貨惡其棄於地也不必藏於己"
        ]
      },
      { qId: 3, answers: ["荷蘭", "尼德蘭"] }
    ],
    9: [
      { qId: 1, answers: ["7245"] },
      { qId: 2, answers: ["洗心滌慮借假修真化人心為良善道之宗旨", "道之宗旨洗心滌慮借假修真化人心為良善"] },
      { qId: 3, answers: ["紐西蘭", "新西蘭"] }
    ],
    10: [
      { qId: 1, answers: ["5243"] },
      { qId: 2, answers: ["休聽邪人胡說話識得西來白陽子彌勒救苦真經", "彌勒救苦真經休聽邪人胡說話識得西來白陽子", "休聽邪人胡說話識得西來白陽子彌勒救苦經", "彌勒救苦經休聽邪人胡說話識得西來白陽子"] },
      { qId: 3, answers: ["巴西", "巴西聯邦共和國"] }
    ]
  },

  // 7. 小天使 1A2B 各隊謎底
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

  // 8. 10 小隊專屬的 15 個提示設定 (每隊 10 個關卡已依序對應 B01 ~ B10 十個關主)
  teamClues: {
    // 🔴 第 1 小隊 (DoReMi)
    1: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】彩虹（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】三原色（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示3】2的倍數（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "folder", bossCode: "",    bossName: "提示4-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示4】3的倍數（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "angel",  bossCode: "",    bossName: "提示5-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示5】A+B=16 16+7=23 （終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】子不" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】則重" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】不君" },
      { id: 9,  code: "CLUE09", qId: 2, type: "folder", bossCode: "",    bossName: "提示9-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示9】子威" },
      { id: 10, code: "CLUE10", qId: 2, type: "angel",  bossCode: "",    bossName: "提示10-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示10】曰" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】領土的輪廓形狀酷似一個『正六邊形』，因此在當地常被簡稱為六邊形國" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】國旗的顏色意義，分別象徵著自由、平等與博愛" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】長棍麵包、鵝肝皆是代表性美食" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示14】它收藏蒙娜麗莎畫像" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示15-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示15】它有著世界知名的鋼鐵建築之一" }
    ],

    // 🔵 第 2 小隊 (史迪奇)
    2: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】A+B=5 , C+D>5 （終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】無限（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "folder", bossCode: "",    bossName: "提示3-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示3】皇帝（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "folder", bossCode: "",    bossName: "提示4-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示4】白陽三聖（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "angel",  bossCode: "",    bossName: "提示5-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示5】一雙人（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】懷老者" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】之安" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】之信" },
      { id: 9,  code: "CLUE09", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示9】少朋友" },
      { id: 10, code: "CLUE10", qId: 2, type: "folder", bossCode: "",    bossName: "提示10-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示10】之者" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】擁有一座被聯合國教科文組織列為世界遺產的標誌性火山" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】這裡的飲食文化米飯是主食" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】武士和忍者是其歷史上著名的文化形象" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示14】這個地方曾被稱為『倭』" },
      { id: 15, code: "CLUE15", qId: 3, type: "angel",  bossCode: "",    bossName: "提示15-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示15】境內完全沒有『省』這個行政區劃" }
    ],

    // 🟢 第 3 小隊 (海王星)
    3: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】民「眾」（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】二虎的好朋友（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示3】春夏秋冬（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示4】伯「仲」（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "angel",  bossCode: "",    bossName: "提示5-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示5】A+B=12，C+D=6（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】三年" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】道矣" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】改無" },
      { id: 9,  code: "CLUE09", qId: 2, type: "angel",  bossCode: "",    bossName: "提示9-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示9】可謂孝" },
      { id: 10, code: "CLUE10", qId: 2, type: "folder", bossCode: "",    bossName: "提示10-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示10】於父之" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】擁有世上少數可以直接步行進入地下岩漿庫參觀的休眠火山" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】這裡沒有傳統的家族姓氏，大多數人的姓氏源自父親的名字加上「之子」或「之女」" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】全民酷愛熱狗，且當地完全找不到任何一家麥當勞分店" },
      { id: 14, code: "CLUE14", qId: 3, type: "folder", bossCode: "",    bossName: "提示14-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示14】這座島嶼幾乎全境都沒有樹林，歷史上只有在被維京人發現前曾有過矮樹叢" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示15-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示15】全境沒有任何鐵路系統，境內也不存在任何蚊子" }
    ],

    // 🟡 第 4 小隊 (小小兵)
    4: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】山（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】生氣（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示3】👓（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示4】雙胞胎（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "angel",  bossCode: "",    bossName: "提示5-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示5】A+B=10，10+10=20（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】魍魔在" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】魎邪化地" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】落中原" },
      { id: 9,  code: "CLUE09", qId: 2, type: "angel",  bossCode: "",    bossName: "提示9-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示9】三星" },
      { id: 10, code: "CLUE10", qId: 2, type: "folder", bossCode: "",    bossName: "提示10-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示10】為塵" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】法律規定養社交型寵物（如天竺鼠、鸚鵡）必須一次養兩隻以上以防牠們孤單" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】這個國家跟巧克力有濃到化不開的關係" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】國旗是全球僅有的兩個正方形國旗之一" },
      { id: 14, code: "CLUE14", qId: 3, type: "folder", bossCode: "",    bossName: "提示14-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示14】境內包含四種官方語言，但憲法中寫明的國名使用的是拉丁文縮寫" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示15-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示15】士兵配有一種集多種工具於一體的折疊式萬用小刀" }
    ],

    // 🟠 第 5 小隊 (漩渦鳴人)
    5: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】謝必安（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】義結金蘭（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "angel",  bossCode: "",    bossName: "提示3-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示3】朔月（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "folder", bossCode: "",    bossName: "提示4-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示4】吾（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示5】A+C=7，B+D=8（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】孝善心" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】子國民" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】孝男萬安" },
      { id: 9,  code: "CLUE09", qId: 2, type: "angel",  bossCode: "",    bossName: "提示9-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示9】治體" },
      { id: 10, code: "CLUE10", qId: 2, type: "folder", bossCode: "",    bossName: "提示10-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示10】親是" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】這個國家嚴格禁止進口與販售口香糖" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】國歌歌詞是以馬來語演唱，即使馬來語並非當地大多數人的日常口語" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】建國以來土地面積透過填海造陸擴大了超過 20%" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示14】這個國家對於毒品犯、性侵犯等重罪會使用鞭刑" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示15-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示15】國旗上的五顆白色五角星分別代表民主、和平、進步、正義與平等" }
    ],

    // 🟣 第 6 小隊 (百變怪)
    6: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】北斗星（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】桃園結義（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "folder", bossCode: "",    bossName: "提示3-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示3】撲克牌（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示4】眾仙過海（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "folder", bossCode: "",    bossName: "提示5-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示5】A+C=B+D（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】眼福孝天" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】祿觀將" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】字另得" },
      { id: 9,  code: "CLUE09", qId: 2, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示9】孝子" },
      { id: 10, code: "CLUE10", qId: 2, type: "angel",  bossCode: "",    bossName: "提示10-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示10】皆由" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】全球人口密度最低的獨立國家，平均每平方公里僅有約兩人" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】傳統飲食中奶茶是鹹味的，且以羊肉和乳製品為主要熱量來源" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】首都的名稱意為「紅色英雄」，且是全球平均氣溫最低的國家首都" },
      { id: 14, code: "CLUE14", qId: 3, type: "folder", bossCode: "",    bossName: "提示14-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示14】世上最大的內陸國家之一，且歷史上的領土曾橫跨亞歐大陸" },
      { id: 15, code: "CLUE15", qId: 3, type: "angel",  bossCode: "",    bossName: "提示15-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示15】成吉思汗曾是這個國家歷史上著名的領導人。" }
    ],

    // 🩷 第 7 小隊 (甘露寺蜜璃)
    7: [
      { id: 1,  code: "CLUE01", qId: 1, type: "folder", bossCode: "",    bossName: "提示1-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示1】冰點（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "folder", bossCode: "",    bossName: "提示2-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示2】手（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "angel",  bossCode: "",    bossName: "提示3-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示3】貓命（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示4】卦象（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示5】A+D=9，C+B=13（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "folder", bossCode: "",    bossName: "提示6-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示6】正純然" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】浩然充塞" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】齋莊清" },
      { id: 9,  code: "CLUE09", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示9】在其中" },
      { id: 10, code: "CLUE10", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示10】中然淨" },
      { id: 11, code: "CLUE11", qId: 3, type: "angel",  bossCode: "",    bossName: "提示11-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示11】國土大部分為沙漠，超過 90% 的人口聚集在僅占國土面積少數的綠洲與河流兩岸" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】雖然地處非洲大陸，但其東北部的西奈半島實質上屬於亞洲" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】歷史上曾建有古代世界七大奇蹟中的「亞歷山大燈塔」" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示14】國旗中央印有一隻金色的鷹徽" },
      { id: 15, code: "CLUE15", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示15】這個國家有很多著名的塔狀古蹟" }
    ],

    // 🩵 第 8 小隊 (泡泡)
    8: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】小矮人（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】吉他（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示3】小提琴（終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "angel",  bossCode: "",    bossName: "提示4-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示4】直笛（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示5】A+D=14，14+11=25（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "folder", bossCode: "",    bossName: "提示6-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示6】貨地" },
      { id: 7,  code: "CLUE07", qId: 2, type: "folder", bossCode: "",    bossName: "提示7-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示7】惡棄於" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】必不於" },
      { id: 9,  code: "CLUE09", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示9】其也" },
      { id: 10, code: "CLUE10", qId: 2, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示10】己藏" },
      { id: 11, code: "CLUE11", qId: 3, type: "folder", bossCode: "",    bossName: "提示11-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示11】全國有接近三分之一的土地低於海平面，全靠工程與堤防維持居住" },
      { id: 12, code: "CLUE12", qId: 3, type: "angel",  bossCode: "",    bossName: "提示12-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示12】成年人平均身高位居世界第一，且腳踏車數量比全國人口總數還多" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】這個國家的鬱金香、風車非常有名，甚至在台灣留下了熱蘭遮城" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示14】國歌是世上歷史最悠久的國歌，歌詞中提到對另一個國家君主的敬意" },
      { id: 15, code: "CLUE15", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示15】雖然憲法規定的首都位於第一大城，但政府機構與王宮卻設在另一座城市" }
    ],

    // 🟤 第 9 小隊 (達菲熊)
    9: [
      { id: 1,  code: "CLUE01", qId: 1, type: "angel",  bossCode: "",    bossName: "提示1-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示1】李白靜夜思（終極密碼）" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】杜甫聞官軍收河南河北（終極密碼）" },
      { id: 3,  code: "CLUE03", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示3】Ya （終極密碼）" },
      { id: 4,  code: "CLUE04", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示4】烏克麗麗（終極密碼）" },
      { id: 5,  code: "CLUE05", qId: 1, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示5】A+C=11，11+7=18（終極密碼）" },
      { id: 6,  code: "CLUE06", qId: 2, type: "folder", bossCode: "",    bossName: "提示6-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示6】心洗真" },
      { id: 7,  code: "CLUE07", qId: 2, type: "angel",  bossCode: "",    bossName: "提示7-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示7】滌慮借" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】修化人" },
      { id: 9,  code: "CLUE09", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示9】心為良" },
      { id: 10, code: "CLUE10", qId: 2, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示10】假善" },
      { id: 11, code: "CLUE11", qId: 3, type: "folder", bossCode: "",    bossName: "提示11-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示11】世上第一個給予女性合法投票權的獨立國家" },
      { id: 12, code: "CLUE12", qId: 3, type: "folder", bossCode: "",    bossName: "提示12-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示12】境內羊隻數量遠多於人口數量，比例高達大約 5 比 1" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】擁有世上名稱最長的地名之一（長達 85 個字母的山丘名稱）" },
      { id: 14, code: "CLUE14", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示14】這個國家的牛奶深受台灣人民的喜愛" },
      { id: 15, code: "CLUE15", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示15】國家原住民將這片土地稱為「長白雲之鄉」" }
    ],

    // ⚫ 第 10 小隊 (酷洛米)
    10: [
      { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "補給站",     taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示1】五指山 (終極密碼)" },
      { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "大家來找碴", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示2】腳踏車 (終極密碼)" },
      { id: 3,  code: "CLUE03", qId: 1, type: "angel",  bossCode: "",    bossName: "提示3-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示3】小提琴 (終極密碼)" },
      { id: 4,  code: "CLUE04", qId: 1, type: "boss",   bossCode: "B03", bossName: "大藝術家",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示4】賓士標誌 (終極密碼)" },
      { id: 5,  code: "CLUE05", qId: 1, type: "boss",   bossCode: "B04", bossName: "動動ABC",    taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示5】根號CXB - (A - B) =3 (終極密碼)" },
      { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B05", bossName: "Emo不Emo",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示6】白陽人" },
      { id: 7,  code: "CLUE07", qId: 2, type: "boss",   bossCode: "B06", bossName: "明爭暗鬥",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示7】休得來識" },
      { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B07", bossName: "平了又平",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示8】聽邪話" },
      { id: 9,  code: "CLUE09", qId: 2, type: "angel",  bossCode: "",    bossName: "提示9-小天使任務", taskDesc: "請向隨隊小天使完成指定任務！", hintText: "【提示9】胡西" },
      { id: 10, code: "CLUE10", qId: 2, type: "folder", bossCode: "",    bossName: "提示10-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示10】子說" },
      { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B08", bossName: "數獨海戰棋", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示11】擁有世上種類最繁多的柑橘類水果產量，且為全球咖啡出口量第一的國家" },
      { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B09", bossName: "默契大挑戰", taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示12】國旗上的星空圖案代表著特定歷史時刻在首都天空看到的星座佈局" },
      { id: 13, code: "CLUE13", qId: 3, type: "boss",   bossCode: "B10", bossName: "八仙過海",   taskDesc: "請找到該關主並完成挑戰以取得提示", hintText: "【提示13】境內有一座被禁止公開登陸的離島，島上每平方米平均棲息著數隻高毒性毒蛇" },
      { id: 14, code: "CLUE14", qId: 3, type: "folder", bossCode: "",    bossName: "提示14-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示14】世上唯一曾將歐洲本土國家的首都搬遷至此處的海外國家" },
      { id: 15, code: "CLUE15", qId: 3, type: "folder", bossCode: "",    bossName: "提示15-雲端資料夾", taskDesc: "請點選你們小隊的專屬資料夾領取提示！", hintText: "【提示15】足球是這個國家的靈魂、民族認同的核心，享有足球王國之稱" }
    ]
  }
};
