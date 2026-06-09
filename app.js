// GPAGES-FIX-V6
const IMGS = {"r0c0": "images/r0c0.jpg", "r0c1": "images/r0c1.jpg", "r0c2": "images/r0c2.jpg", "r0c3": "images/r0c3.jpg", "r0c4": "images/r0c4.jpg", "r1c0": "images/r1c0.jpg", "r1c1": "images/r1c1.jpg", "r1c2": "images/r1c2.jpg", "r1c3": "images/r1c3.jpg", "r1c4": "images/r1c4.jpg", "r2c0": "images/r2c0.jpg", "r2c1": "images/r2c1.jpg", "r2c2": "images/r2c2.jpg", "r2c4": "images/r2c4.jpg", "r3c0": "images/r3c0.jpg", "r3c1": "images/r3c1.jpg", "r3c2": "images/r3c2.jpg", "r3c3": "images/r3c3.jpg", "r3c4": "images/r3c4.jpg", "r4c0": "images/r4c0.jpg", "r4c1": "images/r4c1.jpg", "r4c2": "images/r4c2.jpg"};
const EQ = [{"id": 1, "key": "r0c0", "name": "連續攀爬網", "tag": "攀爬設備", "photos": ["r0c0", "r0c0", "r0c0"], "bullets": ["分為攀爬網、攀爬架、攀爬牆三種", "手腦並用、體能與判斷力兼顧", "一次挑戰成功就不有趣了！", "全台最高攀繩組總高8.7公尺"], "videoId": "dQw4w9WgXcQ", "videoLabel": "連續攀爬網挑戰影片", "zhuyin": "ㄌㄧㄢˊ ㄒㄩˋ ㄆㄢ ㄆㄚ ㄨㄤˇ"}, {"id": 2, "key": "r0c1", "name": "磨石子溜滑梯", "tag": "傳統設施", "photos": ["r0c1", "r0c1"], "bullets": ["台灣公園最具代表性的傳統設施", "水磨石材質耐久性強", "坡面光滑，下滑速度感十足", "近年復古風潮，成為打卡熱點"], "videoId": null, "zhuyin": "ㄇㄛˊ ㄕˊ ㄗˇ ㄌㄧㄡ ㄏㄨㄚˊ ㄊㄧ"}, {"id": 3, "key": "r0c2", "name": "扮家家酒", "tag": "角色扮演", "photos": ["r0c2", "r0c2"], "bullets": ["激發兒童創意與豐富想像力", "設有模擬廚房、購物台及窗戶", "培養社交互動與語言溝通能力", "適合2–8歲兒童使用"], "videoId": null, "zhuyin": "ㄅㄢˋ ㄐㄧㄚ ㄐㄧㄚ ㄐㄧㄡˇ"}, {"id": 4, "key": "r0c3", "name": "翹翹板", "tag": "互動遊戲", "photos": ["r0c3", "r0c3", "r0c3"], "bullets": ["需兩人或多人合作體驗重力平衡", "彈簧緩衝設計，保護關節安全", "鍛鍊核心肌群與腿部爆發力", "造型多元：動物款、彩虹款"], "videoId": null, "zhuyin": "ㄑㄧㄠˋ ㄑㄧㄠˋ ㄅㄢˇ"}, {"id": 5, "key": "r0c4", "name": "旋轉飛輪", "tag": "旋轉類", "photos": ["r0c4", "r0c4"], "bullets": ["大型圓盤旋轉飛輪設施", "站立或坐姿皆可乘坐", "訓練全身協調能力與平衡感", "鋼索支撐結構安全耐用"], "videoId": null, "zhuyin": "ㄒㄩㄢˊ ㄓㄨㄢˇ ㄈㄟ ㄌㄨㄣˊ"}, {"id": 6, "key": "r1c0", "name": "搖動平衡木", "tag": "平衡訓練", "photos": ["r1c0", "r1c0"], "bullets": ["訓練身體平衡與動態協調能力", "木製橫梁高度約30–50公分", "適合幼兒及學齡前兒童", "可搭配搖搖橋、跳樁組合使用"], "videoId": null, "zhuyin": "ㄧㄠˊ ㄉㄨㄥˋ ㄆㄧㄥˊ ㄏㄥˊ ㄇㄨˋ"}, {"id": 7, "key": "r1c1", "name": "攀爬架", "tag": "攀爬設備", "photos": ["r1c1", "r1c1", "r1c1"], "bullets": ["多格鋼管攀爬框架結構", "鍛鍊全身協調能力與肌耐力", "可設計多種難度路線", "建議6歲以上兒童使用"], "videoId": null, "zhuyin": "ㄆㄢ ㄆㄚ ㄐㄧㄚˋ"}, {"id": 8, "key": "r1c2", "name": "溜索", "tag": "速度挑戰", "photos": ["r1c2", "r1c2"], "bullets": ["架空滑行鋼索，速度感強烈", "鋼索長度可達15–25公尺", "大齡兒童最愛的刺激設施", "需設置安全緩衝落地區"], "videoId": null, "zhuyin": "ㄌㄧㄡ ㄙㄨㄛˇ"}, {"id": 9, "key": "r1c3", "name": "滑軌", "tag": "速度挑戰", "photos": ["r1c3", "r1c3"], "bullets": ["架空式鋼管懸掛滑軌", "訓練上肢握力與手臂耐力", "長度約10–20公尺可客製", "地面需鋪設橡膠防護墊"], "videoId": null, "zhuyin": "ㄏㄨㄚˊ ㄍㄨㄟˇ"}, {"id": 10, "key": "r1c4", "name": "管狀溜滑梯", "tag": "滑梯", "photos": ["r1c4", "r1c4", "r1c4"], "bullets": ["全封閉管狀設計安全感高", "傾斜角度25–35度", "兼具速度感與探險樂趣", "適合5歲以上兒童"], "videoId": null, "zhuyin": "ㄍㄨㄢˇ ㄓㄨㄤˋ ㄌㄧㄡ ㄏㄨㄚˊ ㄊㄧ"}, {"id": 11, "key": "r2c0", "name": "音階敲擊", "tag": "感官遊戲", "photos": ["r2c0", "r2c0"], "bullets": ["七音階金屬音管戶外音樂體驗", "開啟兒童音樂啟蒙與創意", "採戶外耐候烤漆塗裝", "全年齡層皆適合使用"], "videoId": null, "zhuyin": "ㄧㄣ ㄐㄧㄝ ㄑㄧㄠ ㄐㄧˊ"}, {"id": 12, "key": "r2c1", "name": "彈跳床", "tag": "彈跳設施", "photos": ["r2c1", "r2c1", "r2c1"], "bullets": ["高彈性床面提升跳躍體能", "地面嵌入式設計邊緣更安全", "訓練下肢肌力與跳躍節奏感", "適合全年齡層"], "videoId": null, "zhuyin": "ㄊㄢˊ ㄊㄧㄠˋ ㄔㄨㄤˊ"}, {"id": 13, "key": "r2c2", "name": "旋轉塔", "tag": "旋轉類", "photos": ["r2c2", "r2c2"], "bullets": ["多層旋轉平台複合設計", "不同高度帶來不同視角體驗", "訓練前庭覺與空間認知", "注意轉速與同時使用人數"], "videoId": null, "zhuyin": "ㄒㄩㄢˊ ㄓㄨㄢˇ ㄊㄚˇ"}, {"id": 14, "key": "r2c4", "name": "繩網鑽籠", "tag": "攀爬設備", "photos": ["r2c4", "r2c4", "r2c4"], "bullets": ["立體鋼架搭配繩網設計", "多入口、多路徑自由探索", "訓練空間認知與攀爬協調", "適合4–12歲兒童"], "videoId": null, "zhuyin": "ㄕㄥˊ ㄨㄤˇ ㄗㄨㄢ ㄌㄨㄥˊ"}, {"id": 15, "key": "r3c0", "name": "攀盪大索", "tag": "攀爬設備", "photos": ["r3c0", "r3c0"], "bullets": ["大型垂吊繩索複合設施", "訓練上肢握力與核心穩定", "高度可依場地需求調整", "建議8歲以上兒童使用"], "videoId": null, "zhuyin": "ㄆㄢ ㄉㄤˋ ㄉㄚˋ ㄙㄨㄛˇ"}, {"id": 16, "key": "r3c1", "name": "旋轉盤", "tag": "旋轉類", "photos": ["r3c1", "r3c1"], "bullets": ["圓形旋轉盤可3–8人同時乘坐", "中心軸承設計保持流暢旋轉", "訓練前庭覺及平衡感知", "須注意使用人數與轉速安全"], "videoId": null, "zhuyin": "ㄒㄩㄢˊ ㄓㄨㄢˇ ㄆㄢˊ"}, {"id": 17, "key": "r3c2", "name": "組合遊具B", "tag": "綜合型", "photos": ["r3c2", "r3c2", "r3c2"], "bullets": ["中型組合遊具，適合社區公園", "含溜滑梯、爬梯及攀繩配件", "安裝面積約6×6公尺", "通過CNS 12642安全認證"], "videoId": null, "zhuyin": "ㄗㄨˇ ㄏㄜˊ ㄧㄡˊ ㄐㄩˋ B"}, {"id": 18, "key": "r3c3", "name": "組合遊具A", "tag": "綜合型", "photos": ["r3c3", "r3c3"], "bullets": ["經典款入門型組合遊具", "含平台、滑梯及攀爬功能", "適合幼兒園與社區使用", "色彩鮮豔，吸引幼童注意"], "videoId": null, "zhuyin": "ㄗㄨˇ ㄏㄜˊ ㄧㄡˊ ㄐㄩˋ A"}, {"id": 19, "key": "r3c4", "name": "組合遊具C", "tag": "綜合型", "photos": ["r3c4", "r3c4", "r3c4"], "bullets": ["特大型多功能遊具組合", "整合隧道、橋墩、攀岩牆", "適合不同年齡層分區使用", "符合EN1176國際安全規範"], "videoId": null, "zhuyin": "ㄗㄨˇ ㄏㄜˊ ㄧㄡˊ ㄐㄩˋ C"}, {"id": 20, "key": "r4c0", "name": "梅花樁平衡木", "tag": "平衡訓練", "photos": ["r4c0", "r4c0"], "bullets": ["高低錯落的梅花樁陣列設計", "訓練跳躍能力與落點判斷", "多種間距提供不同難度", "適合4–12歲兒童使用"], "videoId": null, "zhuyin": "ㄇㄟˊ ㄏㄨㄚ ㄓㄨㄤ ㄆㄧㄥˊ ㄏㄥˊ ㄇㄨˋ"}, {"id": 21, "key": "r4c1", "name": "手動遊戲版", "tag": "益智遊戲", "photos": ["r4c1", "r4c1"], "bullets": ["迷宮、連連看等益智面板", "訓練手眼協調與專注力", "靜態遊具適合多人圍聚互動", "全天候戶外耐候設計"], "videoId": null, "zhuyin": "ㄕㄡˇ ㄉㄨㄥˋ ㄧㄡˊ ㄒㄧˋ ㄅㄢˇ"}, {"id": 22, "key": "r4c2", "name": "鞦韆", "tag": "鞦韆", "photos": ["r4c2", "r4c2", "r4c2"], "bullets": ["標準座式鞦韆高度2.3–2.5公尺", "橡膠座椅嬰兒型附護欄", "訓練核心平衡與前後擺動節奏", "安全落地區需鋪設橡膠地墊"], "videoId": null, "zhuyin": "ㄑㄧㄡ ㄑㄧㄢ"}];
const TOTAL = EQ.length;
const visited = new Set();
const grid = document.getElementById('equipGrid');


function renderZhuyinRuby(text, zhuyin) {
  const chars = Array.from(text || '');
  const notes = (zhuyin || '').trim().split(/\s+/).filter(Boolean);
  if (!chars.length || chars.length !== notes.length) {
    return text || '';
  }
  return chars.map((char, index) => `<span class="zy-char">${char}<span class="zy-note">${notes[index]}</span></span>`).join('');
}

// build grid
EQ.forEach(eq => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = eq.id;
  card.innerHTML = `
    <div class="card-img"><img src="${IMGS[eq.key]}" alt="${eq.name}" loading="lazy"></div>
    <div class="card-label">
      <span class="card-name">${renderZhuyinRuby(eq.name, eq.zhuyin)}</span>
    </div>`;
  card.addEventListener('click', () => openModal(eq.id));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(eq.id);
    }
  });
  card.tabIndex = 0;
  grid.appendChild(card);
});

function updateProgress(){
  const p = visited.size / TOTAL * 100;
  document.getElementById('progFill').style.width = p + '%';
  document.getElementById('progCount').textContent = visited.size + ' / ' + TOTAL;
}

// ── lightbox state ──
let _lbPhotos = [], _lbIdx = 0;

function openLightbox(photos, idx) {
  _lbPhotos = photos; _lbIdx = idx;
  renderLightbox();
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('open');
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('open');
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
  // restore body scroll only if modal is still open
  if (!document.getElementById('overlay').classList.contains('open'))
    document.body.style.overflow = '';
  else
    document.body.style.overflow = 'hidden';
}
function renderLightbox() {
  document.getElementById('lbImg').src = _lbPhotos[_lbIdx];
  document.getElementById('lbCounter').textContent = (_lbIdx+1) + ' / ' + _lbPhotos.length;
  document.getElementById('lbPrev').style.opacity = _lbIdx === 0 ? '.3' : '1';
  document.getElementById('lbNext').style.opacity = _lbIdx === _lbPhotos.length-1 ? '.3' : '1';
}
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => { if(_lbIdx>0){ _lbIdx--; renderLightbox(); }});
document.getElementById('lbNext').addEventListener('click', () => { if(_lbIdx<_lbPhotos.length-1){ _lbIdx++; renderLightbox(); }});
document.getElementById('lightbox').addEventListener('click', e => { if(e.target===document.getElementById('lightbox')) closeLightbox(); });
document.getElementById('lbImg').addEventListener('click', e => e.stopPropagation());
document.getElementById('lbClose').addEventListener('click', e => e.stopPropagation());
document.getElementById('lbPrev').addEventListener('click', e => e.stopPropagation());
document.getElementById('lbNext').addEventListener('click', e => e.stopPropagation());
// ── 鍵盤 / 簡報筆控制 ──
// 操作邏輯：
//   單按 → / ←  = 移動高亮（自由跳選）
//   雙擊 →      = 開啟目前高亮的卡片（400ms 內連按兩下）
//   Esc         = Modal 開啟時關閉；列表時取消高亮
let _focusIdx = -1;
let _lastRightTime = 0;
let _lastFocusBeforeMove = -1;

function setFocus(idx) {
  const cards = [...document.querySelectorAll('.card')];
  cards.forEach(c => c.classList.remove('focused'));
  if (idx < 0 || idx >= cards.length) { _focusIdx = -1; return; }
  _focusIdx = idx;
  cards[idx].classList.add('focused');
  cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function isModalOpen() {
  return document.getElementById('overlay').classList.contains('open');
}
function isLightboxOpen() {
  return document.getElementById('lightbox').classList.contains('open');
}

document.addEventListener('keydown', e => {
  if (isLightboxOpen()) {
    if (e.key === 'ArrowLeft' && _lbIdx > 0) { _lbIdx--; renderLightbox(); }
    if (e.key === 'ArrowRight' && _lbIdx < _lbPhotos.length - 1) { _lbIdx++; renderLightbox(); }
    if (e.key === 'Escape') closeLightbox();
    return;
  }

  if (isModalOpen()) {
    if (e.key === 'Escape') { e.preventDefault(); closeModal(); }
    return;
  }

  const cards = [...document.querySelectorAll('.card')];
  const total = cards.length;

  if (e.key === 'ArrowRight' || e.key === 'PageDown') {
    e.preventDefault();
    const now = Date.now();
    const gap = now - _lastRightTime;
    _lastRightTime = now;

    if (gap < 400 && _lastFocusBeforeMove >= 0) {
      // 雙擊：開啟第一下按之前所在的那格
      _lastRightTime = 0;
      openModal(parseInt(cards[_lastFocusBeforeMove].dataset.id));
    } else {
      // 單擊：記住目前位置，再往右移一格
      _lastFocusBeforeMove = _focusIdx;
      setFocus(_focusIdx < total - 1 ? _focusIdx + 1 : 0);
    }
  }

  if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    _lastRightTime = 0;
    _lastFocusBeforeMove = -1;
    setFocus(_focusIdx > 0 ? _focusIdx - 1 : total - 1);
  }

  if (e.key === 'Escape') { setFocus(-1); _lastRightTime = 0; _lastFocusBeforeMove = -1; }
});
// ── modal ──
function openModal(id) {
  const eq = EQ.find(e => e.id === id);

  // hero
  document.getElementById('mHeroImg').src = IMGS[eq.key];
  document.getElementById('mHeroImg').alt = eq.name;
  document.getElementById('mTag').textContent = eq.tag;
  document.getElementById('mTitle').innerHTML = renderZhuyinRuby(eq.name, eq.zhuyin);
  document.getElementById('mZhuyin').textContent = '';
  document.getElementById('mBullets').innerHTML = eq.bullets.map(b => `<li>${b}</li>`).join('');

  // photo strip
  const strip = document.getElementById('photosStrip');
  strip.innerHTML = '';
  const photoSrcs = eq.photos.map(k => IMGS[k]);
  eq.photos.forEach((k, i) => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.innerHTML = `<img src="${IMGS[k]}" alt="照片${i+1}" loading="lazy">`;
    item.addEventListener('click', () => openLightbox(photoSrcs, i));
    strip.appendChild(item);
  });
  strip.scrollLeft = 0;

  // video
  const vs = document.getElementById('videoSection');
  const vw = document.getElementById('videoWrap');
  if (eq.videoId) {
    vw.innerHTML = `<iframe src="https://www.youtube.com/embed/${eq.videoId}?rel=0" allowfullscreen></iframe>`;
    vs.style.display = 'block';
  } else {
    vw.innerHTML = '';
    vs.style.display = 'none';
  }

  const overlay = document.getElementById('overlay');
  const modalBox = document.getElementById('modalBox');
  overlay.classList.add('open');
  overlay.style.display = 'flex';
  overlay.setAttribute('aria-hidden', 'false');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.background = 'rgba(107,63,26,.6)';
  overlay.style.zIndex = '9999';
  modalBox.style.display = 'block';
  modalBox.style.width = 'min(760px, calc(100vw - 32px))';
  modalBox.style.maxHeight = '92vh';
  modalBox.style.overflowY = 'auto';
  modalBox.style.background = '#fff';
  modalBox.style.border = '3px solid #C8934A';
  modalBox.style.borderRadius = '22px';
  modalBox.style.boxShadow = '8px 12px 0 #8B5C2A';
  modalBox.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  window._cid = id;
}

function closeModal() {
  closeLightbox();
  // stop video
  document.getElementById('videoWrap').innerHTML = '';
  if (window._cid) {
    visited.add(window._cid);
    document.querySelector(`.card[data-id="${window._cid}"]`)?.classList.add('visited');
    updateProgress();
  }
  const overlay = document.getElementById('overlay');
  const modalBox = document.getElementById('modalBox');
  overlay.classList.remove('open');
  overlay.style.display = 'none';
  overlay.setAttribute('aria-hidden', 'true');
  modalBox.style.display = 'none';
  document.body.style.overflow = '';
  // 關閉後自動高亮下一張，讓簡報筆可以直接 → 開啟
  const cards = [...document.querySelectorAll('.card')];
  const nextIdx = _focusIdx + 1 < cards.length ? _focusIdx + 1 : -1;
  window._cid = null;
  setFocus(nextIdx);
}

document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('backBtn').addEventListener('click', closeModal);

document.getElementById('overlay').addEventListener('click', e => { if(e.target===document.getElementById('overlay')) closeModal(); });
document.getElementById('modalBox').addEventListener('click', e => e.stopPropagation());

updateProgress();
