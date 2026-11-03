// ==========================================
// 🎯 【關關難過關關過】獨立題庫與規則設定檔 (config.js)
// 以後只要在 GitHub 點開這個檔案修改中文字與數字，全場就會自動更新！
// ==========================================

window.CUSTOM_GAME_CONFIG = {
  // 1. 活動基本設定與密碼
  gameTitle: "關關難過關關過",
  teamCount: 12,               // 小隊總數 (10~12隊皆可)
  masterPin: "9999",           // 總關主登入密碼
  switchPin: "1234",           // 測試/切換身分密碼

  // 2. 獎懲秒數設定 (單位：秒)
  bossFailPenaltySec: 60,      // 關主按「失敗」懲罰加幾秒 (+60秒)
  bossBonusRewardSec: 30,      // 關主按「加分題」獎勵扣幾秒 (-30秒)
  folderPeekPenaltySec: 45,    // 偷點別隊雲端資料夾懲罰加幾秒 (+45秒)
  folderPeekText: "抓到偷看別隊資料夾！全隊請立刻原地開合跳 20 下，並且系統已自動增加 45 秒懲罰時間！",

  // 3. 最終三大題目與正確答案 (12小隊題目相同，3題答案不同)
  questions: [
    { id: 1, title: "第一題：校園歷史之謎", prompt: "請根據提示 01~05，輸入第一題的最終4字成語答案：", answer: "同心協力" },
    { id: 2, title: "第二題：操場方位密碼", prompt: "請根據提示 06~10，輸入第二題的最終4位數密碼：", answer: "2026" },
    { id: 3, title: "第三題：終極精神口號", prompt: "請根據提示 11~15，輸入第三題的最終答案：", answer: "永不放棄" }
  ],

  // 4. 小天使端設定 (A01~A12 對應第1~12小隊的 1A2B 四位數密碼)
  // 如果全場小隊猜同一組 1A2B 密碼，直接改 default1A2B 即可；若每隊不同可個別修改
  default1A2B: "5280",
  angelCodes: {
    "A01": { teamId: 1,  secret1A2B: "5280" },
    "A02": { teamId: 2,  secret1A2B: "5280" },
    "A03": { teamId: 3,  secret1A2B: "5280" },
    "A04": { teamId: 4,  secret1A2B: "5280" },
    "A05": { teamId: 5,  secret1A2B: "5280" },
    "A06": { teamId: 6,  secret1A2B: "5280" },
    "A07": { teamId: 7,  secret1A2B: "5280" },
    "A08": { teamId: 8,  secret1A2B: "5280" },
    "A09": { teamId: 9,  secret1A2B: "5280" },
    "A10": { teamId: 10, secret1A2B: "5280" },
    "A11": { teamId: 11, secret1A2B: "5280" },
    "A12": { teamId: 12, secret1A2B: "5280" }
  },

  // 5. 15 個提示 QR 碼設定
  // type 分為三種： "boss" (找關主，共7個)、"folder" (雲端資料夾，共4個)、"angel" (小天使任務，共4個)
  clues: [
    // --- 第一題的 5 個提示 (對應題目 qId: 1) ---
    { id: 1,  code: "CLUE01", qId: 1, type: "boss",   bossCode: "B01", bossName: "第一關主(體力關)", taskDesc: "請前往操場司令台旁尋找【第一關主】，全隊完成跳繩考驗！", hintText: "【提示01】第一題答案的第一個字是「同」" },
    { id: 2,  code: "CLUE02", qId: 1, type: "boss",   bossCode: "B02", bossName: "第二關主(默契關)", taskDesc: "請前往籃球場尋找【第二關主】，完成兩人三腳考驗！", hintText: "【提示02】第一題答案的第二個字部首是「心」" },
    { id: 3,  code: "CLUE03", qId: 1, type: "folder", bossCode: "",    bossName: "雲端機密資料夾 A", taskDesc: "請在下方 12 個小隊資料夾中，點選「自己小隊」的資料夾領取提示（嚴禁偷看別隊！）", hintText: "【提示03】第一題答案的第二個字就是「心」" },
    { id: 4,  code: "CLUE04", qId: 1, type: "angel",  bossCode: "",    bossName: "隨隊小天使任務(一)", taskDesc: "請全隊一起對隨隊小天使比出愛心並大喊隊呼，由小天使按下過關！", hintText: "【提示04】第一題答案的第三個字是「協」" },
    { id: 5,  code: "CLUE05", qId: 1, type: "boss",   bossCode: "B03", bossName: "第三關主(觀察關)", taskDesc: "請前往跑道起點尋找【第三關主】接受記憶考驗！", hintText: "【提示05】第一題答案的第四個字是「力」" },

    // --- 第二題的 5 個提示 (對應題目 qId: 2) ---
    { id: 6,  code: "CLUE06", qId: 2, type: "boss",   bossCode: "B04", bossName: "第四關主(腦力關)", taskDesc: "請前往大樹下尋找【第四關主】解開火柴棒謎題！", hintText: "【提示06】第二題密碼的第一個數字是「2」" },
    { id: 7,  code: "CLUE07", qId: 2, type: "angel",  bossCode: "",    bossName: "小天使 1A2B 破譯關", taskDesc: "請向你們的隨隊小天使挑戰【1A2B 猜數字】，猜中 4A0B 後由小天使發送提示！", hintText: "【提示07】第二題密碼的第二個數字是「0」" },
    { id: 8,  code: "CLUE08", qId: 2, type: "boss",   bossCode: "B05", bossName: "第五關主(反應關)", taskDesc: "請前往排球場尋找【第五關主】挑戰猜拳連勝！", hintText: "【提示08】第二題密碼的第三個數字跟第一個數字一樣" },
    { id: 9,  code: "CLUE09", qId: 2, type: "folder", bossCode: "",    bossName: "雲端機密資料夾 B", taskDesc: "請點選自己小隊的專屬資料夾領取提示，點錯將觸發全隊懲罰！", hintText: "【提示09】第二題密碼的第四個數字是「6」" },
    { id: 10, code: "CLUE10", qId: 2, type: "angel",  bossCode: "",    bossName: "隨隊小天使任務(二)", taskDesc: "請全隊 8 人手牽手圍成一圈，單腳站立維持 10 秒鐘，由小天使判定過關！", hintText: "【提示10】第二題的答案正好是今年的西元年份！" },

    // --- 第三題的 5 個提示 (對應題目 qId: 3) ---
    { id: 11, code: "CLUE11", qId: 3, type: "boss",   bossCode: "B06", bossName: "第六關主(團結關)", taskDesc: "請前往沙坑旁尋找【第六關主】完成人體解結任務！", hintText: "【提示11】第三題答案的第一個字是「永」" },
    { id: 12, code: "CLUE12", qId: 3, type: "boss",   bossCode: "B07", bossName: "第七關主(終極關)", taskDesc: "請前往單槓區尋找【第七關主】完成終極比手畫腳！", hintText: "【提示12】第三題答案的第二個字是「不」" },
    { id: 13, code: "CLUE13", qId: 3, type: "folder", bossCode: "",    bossName: "雲端機密資料夾 C", taskDesc: "請點選自己小隊的專屬資料夾，小心別點到隔壁隊！", hintText: "【提示13】第三題答案的第三個字是「放」" },
    { id: 14, code: "CLUE14", qId: 3, type: "folder", bossCode: "",    bossName: "雲端機密資料夾 D", taskDesc: "最後一個雲端資料夾！請點選自己小隊的顏色資料夾！", hintText: "【提示14】第三題答案的第四個字是「棄」" },
    { id: 15, code: "CLUE15", qId: 3, type: "angel",  bossCode: "",    bossName: "隨隊小天使最終任務", taskDesc: "請全隊拍一張最有創意的大合照給小天使看，即可解鎖最後一個提示！", hintText: "【提示15】恭喜集齊！第三題答案就是「永不放棄」，快衝回總關主處答題！" }
  ]
};
