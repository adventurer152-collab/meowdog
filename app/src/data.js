import heroCat from './assets/hero-cat.jpg';

// Placeholder content from the design handoff — swap for real stores / photos.
export const hero = {
  location: '松江南京',
  tagline: ['帶毛孩出門，', '哪裡都是好去處'],
  photo: heroCat,
  // Keep the cat's face above the tagline sign in the 440px-tall crop.
  photoPosition: 'center 25%',
};

export const categories = [
  { id: 'restaurant', label: '餐廳', icon: 'fork-knife', bg: 'var(--apricot-100)' },
  { id: 'cafe', label: '咖啡', icon: 'coffee', bg: 'var(--honey-200)' },
  { id: 'park', label: '公園', icon: 'tree', bg: 'var(--matcha-100)' },
  { id: 'filter', label: '篩選', icon: 'sliders-horizontal', bg: 'var(--lavender-100)' },
];

// 今日寵物友善店家優惠 · 查詢中心：捷運松江南京站 · 查詢日：2026-10-17（六）
// 2km 內只找到 4 家，第 5 家（松松咖啡）為擴大到 5km 的結果。
// 距離為依地址估算的直線距離。沒有任何一家查到「今日有效」的公開優惠。
export const dealsQuery = {
  center: '捷運松江南京站',
  date: '2026/10/17（六）',
  radius: '2km（第 5 家擴大至 5km）',
};

export const deals = [
  {
    id: 'qingmu-nanjing',
    name: '青沐初食 南京店',
    icon: 'bowl-food',
    iconBg: 'var(--matcha-100)',
    distance: '約 400m',
    petRule: '寵物友善（落地規定未查到）',
    hours: '每日 10:00–21:00',
    deal: null,
    items: [
      { name: '雙人套餐（干貝海膽BOBO麵＋蟹黃青檸軟殼蟹燉飯）', price: 1280 },
      { name: '煙燻鮭魚沙拉、松露醬炸薯' },
    ],
    source: 'https://travel.yam.com/article/132680',
  },
  {
    id: 'jetlag',
    name: '時差 Jetlag',
    icon: 'coffee',
    iconBg: 'var(--honey-200)',
    distance: '約 0.5–1km',
    petRule: '可落地（牽繩／推車非必要）',
    hours: '營業時間未查到',
    deal: null,
    items: [
      { name: '大理石奶油起司貝果', price: 110 },
      { name: '杞子蒸雞腿、香港湯麵' },
    ],
    source: 'https://livia1028.pixnet.net/blog/post/563263298',
  },
  {
    id: 'second-floor-nanxi',
    name: '貳樓 中山南西店',
    icon: 'hamburger',
    iconBg: 'var(--sakura-100)',
    distance: '約 1.1km',
    petRule: '可落地、大型犬 OK（訂位時告知）',
    hours: '週六 10:00–21:30',
    deal: { status: 'pending', label: '日期待確認', text: '毛孩免費炒蛋一份' },
    items: [
      { name: '毛孩炒嫩蛋＋小雞肉', price: 30, note: '加價' },
      { name: '毛孩專屬炒蛋', note: '免費' },
    ],
    source: 'https://supertaste.tvbs.com.tw/food/359383',
  },
  {
    id: 'happy-buddha-pizza',
    name: '批薩謎勒 Happy Buddha Pizza',
    icon: 'pizza',
    iconBg: 'var(--apricot-100)',
    distance: '約 1.8km',
    petRule: '可落地・小～大型犬',
    hours: '營業時間未查到',
    deal: null,
    items: [],
    source: 'https://www.petview.app/zhongshan-xinyi-pet-friendly-restaurant/',
  },
  {
    id: 'songsong-coffee',
    name: '松松咖啡',
    icon: 'coffee',
    iconBg: 'var(--lavender-100)',
    distance: '約 3km（擴大範圍）',
    petRule: '寵物友善、有店狗（建議預約）',
    hours: '營業時間未查到',
    deal: null,
    items: [
      { name: '抹茶烤磅蛋糕', price: 120 },
      { name: '抹茶巴斯克蛋糕', price: 180 },
      { name: '小山園抹茶歐蕾', price: 160 },
    ],
    source: 'https://upssmile.com/263742/song-song-coffee',
  },
];

export const stars = [
  { id: 'douhua-nap', caption: '武狀元的午睡臉', likes: 128, liked: true, tilt: -3, offset: 0, photo: null },
  { id: 'mochi-box', caption: '麻糬卡在紙箱裡', likes: 96, liked: false, tilt: 2.5, offset: 14, photo: null },
  { id: 'tangyuan-swim', caption: '湯圓第一次游泳', likes: 74, liked: false, tilt: -2, offset: 0, photo: null },
  { id: 'heitang-socks', caption: '黑糖偷穿主人的襪子', likes: 61, liked: false, tilt: 3, offset: 10, photo: null },
];

export const tabs = [
  { id: 'home', label: '首頁', icon: 'house' },
  { id: 'map', label: '地圖', icon: 'map-trifold' },
  { id: 'community', label: '社群', icon: 'chat-circle-dots' },
  { id: 'me', label: '我的', icon: 'paw-print' },
];
