// ==========================================
// 關關難過關關過 - 完整版設定與 10 隊獨立題庫檔 (config.js)
// ==========================================
window.CUSTOM_GAME_CONFIG = {
  // 1. Firebase 雲端即時資料庫網址
  firebaseUrl: "https://gofighting-4d19f-default-rtdb.asia-southeast1.firebasedatabase.app",
  gameTitle: "關關難過關關過",
  teamCount: 10,

  // 2. 總關主與最高權限密碼（共 3 組，皆可登入總關主、解鎖切換身分、開啟萬用切換列）
  superPin: "7062",
  masterPin: "7062",
  masterPins: ["7062", "20040521", "19951004"],
  switchPin: "7062",

  // 3. 懲罰秒數設定
  bossFailPenaltySec: 60,
  folderPeekPenaltySec: 30,

  // 4. 10 小隊名稱與代表色
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

  // 5. 10 大關主關卡名稱與專屬登入代號（僅限登入該關，不可跳關或切換）
  bossStations: [
    { index: 1,  bossCode: "B01", loginPin: "0628",   name: "補給站" },
    { index: 2,  bossCode: "B02", loginPin: "ABC123", name: "大家來找碴" },
    { index: 3,  bossCode: "B03", loginPin: "0615",   name: "大藝術家" },
    { index: 4,  bossCode: "B04", loginPin: "9897",   name: "動動ABC" },
    { index: 5,  bossCode: "B05", loginPin: "2627",   name: "Emo不Emo" },
    { index: 6,  bossCode: "B06", loginPin: "1123",   name: "明爭暗鬥" },
    { index: 7,  bossCode: "B07", loginPin: "1453",   name: "平了又平" },
    { index: 8,  bossCode: "B08", loginPin: "1718",   name: "數獨海戰棋" },
    { index: 9,  bossCode: "B09", loginPin: "0312",   name: "默契大挑戰" },
    { index: 10, bossCode: "B10", loginPin: "0207",   name: "八仙過海" }
  ],

  // 6. 10 隊隨隊小天使專屬登入代號
  angelTeamPins: {
    1:  "301198",
    2:  "321555",
    3:  "02120593",
    4:  "1992041",
    5:  "230905",
    6:  "20261213",
    7:  "103543",
    8:  "0987654321",
    9:  "482153",
    10: "11081357"
  },

  // 7. 各隊小天使綁定與第一題 1A2B 終極密碼設定
  angelCodes: {
    "A01": { teamId: 1,  pin: "301198",     secret1A2B: "7943" },
    "A02": { teamId: 2,  pin: "321555",     secret1A2B: "2318" },
    "A03": { teamId: 3,  pin: "02120593",   secret1A2B: "3942" },
    "A04": { teamId: 4,  pin: "1992041",    secret1A2B: "8372" },
    "A05": { teamId: 5,  pin: "230905",     secret1A2B: "5721" },
    "A06": { teamId: 6,  pin: "20261213",   secret1A2B: "4873" },
    "A07": { teamId: 7,  pin: "103543",     secret1A2B: "9580" },
    "A08": { teamId: 8,  pin: "0987654321", secret1A2B: "6478" },
    "A09": { teamId: 9,  pin: "482153",     secret1A2B: "7245" },
    "A10": { teamId: 10, pin: "11081357",   secret1A2B: "5243" }
  },

  // 8. 最終作答三道題目通用題幹
  questions: [
    { id: 1, title: "第一題：四位數終極密碼", prompt: "請輸入 4 位數密碼：", answer: "7943" },
    { id: 2, title: "第二題：經典句子重組",   prompt: "請輸入重組後的「完整句子＋經典名稱」（前後順序不拘）：", answer: "君子不重則不威論語" },
    { id: 3, title: "第三題：世界國家之謎",   prompt: "請輸入正確的國家名稱：", answer: "法國" }
  ],

  default1A2B: "7943",

  // ==========================================
  // 9. 10 小隊獨立最終答案庫 (teamQuestions)
  // 系統會自動忽略空白與標點符號，第二題支援「句子＋書名」或「書名＋句子」
  // ==========================================
  teamQuestions: {
    1: [
      { qId: 1, answers: ["7943"] },
      { qId: 2, answers: ["君子不重則不威論語", "論語君子不重則不威", "子曰君子不重則不威論語", "論語子曰君子不重則不威"] },
      { qId: 3, answers: ["法國", "法蘭西", "法蘭西共和國"] }
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
      { qId: 2, answers: ["魍魎邪魔化為塵落在中原三星地彌勒救苦真經", "彌勒救苦真經魍魎邪魔化為塵落在中原三星地", "魍魎邪魔化為塵落在中原三星地佛說彌勒救苦經", "佛說彌勒救苦經魍魎邪魔化為塵落在中原三星地", "魍魎邪魔化為塵落在中原三星地彌勒救苦經", "彌勒救苦經魍魎邪魔化為塵落在中原三星地"] },
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
      { qId: 2, answers: ["齋莊中正純然清淨浩然充塞在其中關聖帝君伏魔真經", "關聖帝君伏魔真經齋莊中正純然清淨浩然充塞在其中", "齋莊中正純然清淨浩然充塞在其中伏魔真經", "伏魔真經齋莊中正純然清淨浩然充塞在其中"] },
      { qId: 3, answers: ["埃及", "阿拉伯埃及共和國"] }
    ],
    8: [
      { qId: 1, answers: ["6478"] },
      { qId: 2, answers: ["貨惡其棄於地也不必藏於己禮運大同篇", "禮運大同篇貨惡其棄於地也不必藏於己", "貨惡其棄於地也不必藏於己禮記禮運大同篇", "禮記禮運大同篇貨惡其棄於地也不必藏於己", "貨惡其棄於地也不必藏於己大同篇", "大同篇貨惡其棄於地也不必藏於己"] },
      { qId: 3, answers: ["荷蘭", "尼德蘭"] }
    ],
    9: [
      { qId: 1, answers: ["7245"] },
      { qId: 2, answers: ["洗心滌慮借假修真化人心為良善道之宗旨", "道之宗旨洗心滌慮借假修真化人心為良善"] },
      { qId: 3, answers: ["紐西蘭"] }
    ],
    10: [
      { qId: 1, answers: ["5243"] },
      { qId: 2, answers: ["休聽邪人胡說話識得西來白陽子彌勒救苦真經", "彌勒救苦真經休聽邪人胡說話識得西來白陽子", "休聽邪人胡說話識得西來白陽子佛說彌勒救苦經", "佛說彌勒救苦經休聽邪人胡說話識得西來白陽子", "休聽邪人胡說話識得西來白陽子彌勒救苦經", "彌勒救苦經休聽邪人胡說話識得西來白陽子"] },
      { qId: 3, answers: ["巴西", "巴西聯邦共和國"] }
    ]
  },

  // ==========================================
  // 10. 10 小隊獨立 15 條提示庫 (teamClues)
  // 每隊固定 10 個 boss（對應 B01~B10）、3 個 folder（寶箱卡）、2 個 angel（小天使卡）
  // ==========================================
  teamClues: {
    // 第 1 隊：DoReMi（7943 / 君子不重則不威《論語》 / 法國）
    1: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】彩虹（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】三原色（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】2的倍數（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】3的倍數（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+B=16 16+7=23 （終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】子不" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】則重" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】不君" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】子威" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】曰" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】領土的輪廓形狀酷似一個『正六邊形』，因此在當地常被簡稱為六邊形國" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】國旗的顏色意義，分別象徵著自由、平等與博愛" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】長棍麵包、鵝肝皆是代表性美食" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】它收藏蒙娜麗莎畫像" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】它有著世界知名的鋼鐵建築之一" }
    ],

    // 第 2 隊：史迪奇（2318 / 老者安之朋友信之少者懷之《論語》 / 日本）
    2: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】A+B=5 , C+D>5 （終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】無限（終極密碼）" },
      { id: 3,  qId: 1, type: "folder", hintText: "【提示3】皇帝（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】白陽三聖（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】一雙人（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】懷老者" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】之安" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】之信" },
      { id: 9,  qId: 2, type: "boss",   hintText: "【提示9】少朋友" },
      { id: 10, qId: 2, type: "folder", hintText: "【提示10】之者" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】擁有一座被聯合國教科文組織列為世界遺產的標誌性火山" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】這裡的飲食文化米飯是主食" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】武士和忍者是其歷史上著名的文化形象" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】這個地方曾被稱為『倭』" },
      { id: 15, qId: 3, type: "angel",  hintText: "【提示15】境內完全沒有『省』這個行政區劃" }
    ],

    // 第 3 隊：海王星（3942 / 三年無改於父之道可謂孝矣《論語》 / 冰島）
    3: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】民「眾」（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】二虎的好朋友（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】春夏秋冬（終極密碼）" },
      { id: 4,  qId: 1, type: "boss",   hintText: "【提示4】伯「仲」（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+B=12，C+D=6（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】三年" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】道矣" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】改無" },
      { id: 9,  qId: 2, type: "angel",  hintText: "【提示9】可謂孝" },
      { id: 10, qId: 2, type: "folder", hintText: "【提示10】於父之" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】擁有世上少數可以直接步行進入地下岩漿庫參觀的休眠火山" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】這裡沒有傳統的家族姓氏，大多數人的姓氏源自父親的名字加上「之子」或「之女」" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】全民酷愛熱狗，但境內卻完全沒有半間麥當勞餐廳" },
      { id: 14, qId: 3, type: "folder", hintText: "【提示14】這座島嶼上幾乎沒有成片的森林或高大樹木" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】境內完全沒有火車鐵路系統，也是全世界唯一完全沒有蚊子的國家" }
    ],

    // 第 4 隊：小小兵（8372 / 魍魎邪魔化為塵落在中原三星地《彌勒救苦真經》 / 瑞士）
    4: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】山（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】生氣（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】👓（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】雙胞胎（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+B=10，10+10=20（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】魍魔在" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】魎邪化地" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】落中原" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】三星" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】為塵" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】法律規定養社交型寵物（如天竺鼠、鸚鵡）必須一次養兩隻以上以防牠們孤單" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】這個國家跟巧克力有濃到化不開的關係" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】國旗是全球僅有的兩個正方形國旗之一" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】境內包含四種官方語言，但憲法中寫明的國名使用的是拉丁文縮寫" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】士兵配有一種集多種工具於一體的折疊式萬用小刀" }
    ],

    // 第 5 隊：漩渦鳴人（5721 / 孝子治國萬民安善體親心是孝男《百孝經》 / 新加坡）
    5: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】謝必安（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】義結金蘭（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】朔月（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】吾（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+C=7，B+D=8（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】孝善心" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】子國民" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】孝男萬安" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】治體" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】親是" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】這個國家嚴格禁止進口與販售口香糖" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】國歌歌詞是以馬來語演唱，即使馬來語並非當地大多數人的日常口語" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】建國以來土地面積透過填海造陸擴大了超過 20%" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】這個國家對於毒品犯、性侵犯等重罪會使用鞭刑" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】國旗上的五顆白色五角星分別代表民主、和平、進步、正義與平等" }
    ],

    // 第 6 隊：百變怪（4873 / 福祿皆由孝字得天將孝子另眼觀《百孝經》 / 蒙古）
    6: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】北斗星（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】桃園結義（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】撲克牌（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】眾仙過海（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+C=B+D（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】眼福孝天" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】祿觀將" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】字另得" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】孝子" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】皆由" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】全球人口密度最低的獨立國家，平均每平方公里僅有約兩人" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】傳統飲食中奶茶是鹹味的，且以羊肉和乳製品為主要熱量來源" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】首都的名稱意為「紅色英雄」，且是全球平均氣溫最低的國家首都" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】世上最大的內陸國家之一，且歷史上的領土曾橫跨亞歐大陸" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】成吉思汗曾是這個國家歷史上著名的領導人" }
    ],

    // 第 7 隊：甘露寺蜜璃（9580 / 齋莊中正純然清淨浩然充塞在其中《關聖帝君伏魔真經》 / 埃及）
    7: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】冰點（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】手（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】貓命（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】卦象（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+D=9，C+B=13（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】正純然" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】浩然充塞" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】齋莊清" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】在其中" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】中然淨" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】國土大部分為沙漠，超過 90% 的人口聚集在僅占國土面積少數的綠洲與河流兩岸" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】雖然地處非洲大陸，但其東北部的西奈半島實質上屬於亞洲" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】歷史上曾建有古代世界七大奇蹟中的「亞歷山大燈塔」" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】國旗中央印有一隻金色的鷹徽" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】這個國家有很多著名的塔狀古蹟" }
    ],

    // 第 8 隊：泡泡（6478 / 貨惡其棄於地也不必藏於己《禮運大同篇》 / 荷蘭）
    8: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】小矮人（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】吉他（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】小提琴（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】直笛（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+D=14，14+11=25（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】貨地" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】惡棄於" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】必不於" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】其也" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】己藏" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】全國有接近三分之一的土地低於海平面，全靠工程與堤防維持居住" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】成年人平均身高位居世界第一，且腳踏車數量比全國人口總數還多" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】這個國家的鬱金香、風車非常有名，甚至在台灣留下了熱蘭遮城" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】國歌是世上歷史最悠久的國歌，歌詞中提到對另一個國家君主的敬意" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】雖然憲法規定的首都位於第一大城，但政府機構與王宮卻設在另一座城市" }
    ],

    // 第 9 隊：達菲熊（7245 / 洗心滌慮借假修真化人心為良善《道之宗旨》 / 紐西蘭）
    9: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】李白靜夜思（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】杜甫聞官軍收河南河北（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】Ya （終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】烏克麗麗（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】A+C=11，11+7=18（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】心洗真" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】滌慮借" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】修化人" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】心為良" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】假善" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】世上第一個給予女性合法投票權的獨立國家" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】境內羊隻數量遠多於人口數量，比例高達大約 5 比 1" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】擁有世上名稱最長的地名之一（長達 85 個字母的山丘名稱）" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】這個國家的牛奶深受台灣人民的喜愛" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】國家原住民將這片土地稱為「長白雲之鄉」" }
    ],

    // 第 10 隊：酷洛米（5243 / 休聽邪人胡說話識得西來白陽子《彌勒救苦真經》 / 巴西）
    10: [
      { id: 1,  qId: 1, type: "boss",   hintText: "【提示1】五指山（終極密碼）" },
      { id: 2,  qId: 1, type: "boss",   hintText: "【提示2】腳踏車（終極密碼）" },
      { id: 3,  qId: 1, type: "boss",   hintText: "【提示3】小提琴（終極密碼）" },
      { id: 4,  qId: 1, type: "folder", hintText: "【提示4】賓士標誌（終極密碼）" },
      { id: 5,  qId: 1, type: "angel",  hintText: "【提示5】根號CXB - (A - B) =3（終極密碼）" },
      { id: 6,  qId: 2, type: "boss",   hintText: "【提示6】白陽人" },
      { id: 7,  qId: 2, type: "boss",   hintText: "【提示7】休得來識" },
      { id: 8,  qId: 2, type: "boss",   hintText: "【提示8】聽邪話" },
      { id: 9,  qId: 2, type: "folder", hintText: "【提示9】胡西" },
      { id: 10, qId: 2, type: "angel",  hintText: "【提示10】子說" },
      { id: 11, qId: 3, type: "boss",   hintText: "【提示11】擁有世上種類最繁多的柑橘類水果產量，且為全球咖啡出口量第一的國家" },
      { id: 12, qId: 3, type: "boss",   hintText: "【提示12】國旗上的星空圖案代表著特定歷史時刻在首都天空看到的星座佈局" },
      { id: 13, qId: 3, type: "boss",   hintText: "【提示13】境內有一座被禁止公開登陸的離島，島上每平方米平均棲息著數隻高毒性毒蛇" },
      { id: 14, qId: 3, type: "boss",   hintText: "【提示14】世上唯一曾將歐洲本土國家的首都搬遷至此處的海外國家" },
      { id: 15, qId: 3, type: "folder", hintText: "【提示15】足球是這個國家的靈魂、民族認同的核心，享有足球王國之稱" }
    ]
  }
};
