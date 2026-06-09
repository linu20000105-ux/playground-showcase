const IMGS = {"r0c0": "images/r0c0.jpg", "r0c1": "images/r0c1.jpg", "r0c2": "images/r0c2.jpg", "r0c3": "images/r0c3.jpg", "r0c4": "images/r0c4.jpg", "r1c0": "images/r1c0.jpg", "r1c1": "images/r1c1.jpg", "r1c2": "images/r1c2.jpg", "r1c3": "images/r1c3.jpg", "r1c4": "images/r1c4.jpg", "r2c0": "images/r2c0.jpg", "r2c1": "images/r2c1.jpg", "r2c2": "images/r2c2.jpg", "r2c4": "images/r2c4.jpg", "r3c0": "images/r3c0.jpg", "r3c1": "images/r3c1.jpg", "r3c2": "images/r3c2.jpg", "r3c3": "images/r3c3.jpg", "r3c4": "images/r3c4.jpg", "r4c0": "images/r4c0.jpg", "r4c1": "images/r4c1.jpg", "r4c2": "images/r4c2.jpg"};
const EQ = [{"id": 1, "key": "r0c0", "name": "?????祉雯", "tag": "??祈身??, "photos": ["r0c0", "r0c0", "r0c0"], "bullets": ["???祉雯???祆???祉?銝車", "?銝衣???質??斗?憿?, "銝甈⊥??唳??停銝?頞??嚗?, "?典?擃?蝜拍?蝮賡?8.7?砍偕"], "videoId": "dQw4w9WgXcQ", "videoLabel": "?????祉雯?敶梁?", "zhuyin": "??〩??? ? ?? ?具?"}, {"id": 2, "key": "r0c1", "name": "蝤函摮?皛０", "tag": "?喟絞閮剜", "photos": ["r0c1", "r0c1"], "bullets": ["?啁?砍???瑚誨銵冽抒??喟絞閮剜", "瘞渡ㄗ?單?鞈芾??批撥", "?⊿??嚗?皛漲??頞?, "餈僑敺拙憸冽蔭嚗??箸??∠暺?], "videoId": null, "zhuyin": "??? ???????????"}, {"id": 3, "key": "r0c2", "name": "?桀振摰園?", "tag": "閫?格?", "photos": ["r0c2", "r0c2"], "bullets": ["瞈?澆?蝡亙??鞊??喳???, "閮剜?璅⊥撱?頃?拙????, "?寥?蝷曆漱鈭???閮皞??, "?拙?2??甇脣?蝡乩蝙??], "videoId": null, "zhuyin": "?? ????????﹌?}, {"id": 4, "key": "r0c3", "name": "蝧寧蕨??, "tag": "鈭??", "photos": ["r0c3", "r0c3", "r0c3"], "bullets": ["??拐犖??鈭箏?雿?撽??像銵?, "敶飢蝺抵?閮剛?嚗?霅琿?蝭摰", "???詨??黎??函??澆?", "??憭?嚗??拇狡?蔗?寞狡"], "videoId": null, "zhuyin": "????????"}, {"id": 5, "key": "r0c4", "name": "??憌憚", "tag": "??憿?, "photos": ["r0c4", "r0c4"], "bullets": ["憭批????憌憚閮剜", "蝡???憪輻??臭???, "閮毀?刻澈?矽?賢??像銵⊥?", "?潛揣?舀?蝯?摰?"], "videoId": null, "zhuyin": "??〩???〩??? ????}, {"id": 6, "key": "r1c0", "name": "??撟唾﹛??, "tag": "撟唾﹛閮毀", "photos": ["r1c0", "r1c0"], "bullets": ["閮毀頨恍?撟唾﹛????隤輯??, "?刻ˊ璈急?擃漲蝝?0??0?砍?", "?拙?撟澆??飛朣∪??咱", "?舀?????歲璅??蝙??], "videoId": null, "zhuyin": "?扼?? ??瓦???瓦??? ??"}, {"id": 7, "key": "r1c1", "name": "??祆", "tag": "??祈身??, "photos": ["r1c1", "r1c1", "r1c1"], "bullets": ["憭?潛恣??祆??嗥?瑽?, "???刻澈?矽?賢?????", "?航身閮?蝔桅摨西楝蝺?, "撱箄降6甇脖誑銝?蝡乩蝙??], "videoId": null, "zhuyin": "? ?? ???}, {"id": 8, "key": "r1c2", "name": "皞揣", "tag": "?漲?", "photos": ["r1c2", "r1c2"], "bullets": ["?嗥征皛??潛揣嚗漲?撥??, "?潛揣?瑕漲?舫?15??5?砍偕", "憭折翩?咱????箸?閮剜", "?閮剔蔭摰蝺抵??賢?"], "videoId": null, "zhuyin": "??????}, {"id": 9, "key": "r1c3", "name": "皛?", "tag": "?漲?", "photos": ["r1c3", "r1c3"], "bullets": ["?嗥征撘蝞⊥??頠?, "閮毀銝?∪?????", "?瑕漲蝝?0??0?砍偕?臬恥鋆?, "?圈??芾身璈∟??脰風憓?], "videoId": null, "zhuyin": "??????}, {"id": 10, "key": "r1c4", "name": "蝞∠?皞?璇?, "tag": "皛０", "photos": ["r1c4", "r1c4", "r1c4"], "bullets": ["?典??恣?閮剛?摰??", "?暹?閫漲25??5摨?, "?澆?漲???ａ璅閎", "?拙?5甇脖誑銝?蝡?], "videoId": null, "zhuyin": "??〩???卞????????"}, {"id": 11, "key": "r2c0", "name": "?喲??脫?", "tag": "???", "photos": ["r2c0", "r2c0"], "bullets": ["銝??撅祇蝞⊥憭璅?撽?, "???咱?單??????, "?⊥憭瞍?鋆?, "?典僑朣∪惜??蝙??], "videoId": null, "zhuyin": "?扼 ????????"}, {"id": 12, "key": "r2c1", "name": "敶歲摨?, "tag": "敶歲閮剜", "photos": ["r2c1", "r2c1", "r2c1"], "bullets": ["擃??批??Ｘ??歲頨???, "?圈撋撘身閮?蝺?摰", "閮毀銝???歲頨?憟?", "?拙??典僑朣∪惜"], "videoId": null, "zhuyin": "?? ?????卞?}, {"id": 13, "key": "r2c2", "name": "??憛?, "tag": "??憿?, "photos": ["r2c2", "r2c2"], "bullets": ["憭惜??撟喳銴?閮剛?", "銝?擃漲撣嗡?銝?閬?擃?", "閮毀?滬閬箄?蝛粹?隤", "瘜冽?頧???雿輻鈭箸"], "videoId": null, "zhuyin": "??〩???〩????"}, {"id": 14, "key": "r2c4", "name": "蝜拍雯?賜?", "tag": "??祈身??, "photos": ["r2c4", "r2c4", "r2c4"], "bullets": ["蝡??潭?剝?蝜拍雯閮剛?", "憭???頝臬??芰?Ｙ揣", "閮毀蝛粹?隤???砍?隤?, "?拙?4??2甇脣?蝡?], "videoId": null, "zhuyin": "?? ?具? ?????瓦?}, {"id": 15, "key": "r3c0", "name": "??芸之蝝?, "tag": "??祈身??, "photos": ["r3c0", "r3c0"], "bullets": ["憭批???蝜拍揣銴?閮剜", "閮毀銝?∪??敹帘摰?, "擃漲?臭??游?瘙矽??, "撱箄降8甇脖誑銝?蝡乩蝙??], "videoId": null, "zhuyin": "? ?? ??? ???}, {"id": 16, "key": "r3c1", "name": "????, "tag": "??憿?, "photos": ["r3c1", "r3c1"], "bullets": ["?耦???文3??鈭箏?????, "銝剖?頠豢閮剛?靽?瘚??", "閮毀?滬閬箏?撟唾﹛?", "?釣?蝙?其犖?貉?頧???], "videoId": null, "zhuyin": "??〩???〩???"}, {"id": 17, "key": "r3c2", "name": "蝯??B", "tag": "蝬???, "photos": ["r3c2", "r3c2", "r3c2"], "bullets": ["銝剖?蝯??嚗?冗??砍?", "?急?皛０?璇臬??蝜拚?隞?, "摰??Ｙ?蝝??6?砍偕", "??CNS 12642摰隤?"], "videoId": null, "zhuyin": "?? ??? ?扼? ?? B"}, {"id": 18, "key": "r3c3", "name": "蝯??A", "tag": "蝬???, "photos": ["r3c3", "r3c3"], "bullets": ["蝬甈曉???????, "?怠像?啜?璇臬???砍???, "?拙?撟澆???蝷曉?雿輻", "?脣蔗擙株?嚗撘匱蝡交釣??], "videoId": null, "zhuyin": "?? ??? ?扼? ?? A"}, {"id": 19, "key": "r3c4", "name": "蝯??C", "tag": "蝬???, "photos": ["r3c4", "r3c4", "r3c4"], "bullets": ["?孵之????蝯?", "?游??折???憓押?撗拍?", "?拙?銝?撟湧翩撅文??雿輻", "蝚血?EN1176??摰閬?"], "videoId": null, "zhuyin": "?? ??? ?扼? ?? C"}, {"id": 20, "key": "r4c0", "name": "璇璅像銵⊥", "tag": "撟唾﹛閮毀", "photos": ["r4c0", "r4c0"], "bullets": ["擃??航???望????閮剛?", "閮毀頝唾??賢??暺??, "憭車????銝???漲", "?拙?4??2甇脣?蝡乩蝙??], "videoId": null, "zhuyin": "??? ????????瓦??? ??"}, {"id": 21, "key": "r4c1", "name": "?????, "tag": "??", "photos": ["r4c1", "r4c1"], "bullets": ["餈瑕悅????蝑??粹??, "閮毀??矽??瘜典?", "????拙?憭犖??鈭?", "?典予?憭身閮?], "videoId": null, "zhuyin": "?? ??瓦??扼? ?? ??"}, {"id": 22, "key": "r4c2", "name": "?阡?", "tag": "?阡?", "photos": ["r4c2", "r4c2", "r4c2"], "bullets": ["璅?摨批??阡?擃漲2.3??.5?砍偕", "璈∟?摨扳?戭啣???霅瑟?", "閮毀?詨?撟唾﹛??敺??憟?, "摰?賢???芾身璈∟??啣?"], "videoId": null, "zhuyin": "??????}];
const TOTAL = EQ.length;
const STORAGE_KEY = 'playground_v9_visited';
const visited = new Set();
let lastTrigger = null;
const grid = document.getElementById('equipGrid');
try {
  const savedVisited = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (Array.isArray(savedVisited)) savedVisited.forEach(id => visited.add(id));
} catch (error) {
  console.warn('visited state restore failed', error);
}

// build grid
EQ.forEach(eq => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = eq.id;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${eq.name} \u8a73\u7d30\u4ecb\u7d39`);
  if (visited.has(eq.id)) card.classList.add('visited');
  card.innerHTML = `
    <div class="card-img"><img src="${IMGS[eq.key]}" alt="${eq.name}" loading="lazy"></div>
    <div class="card-label">
      <span class="card-name">${eq.name}</span>
      <span class="card-zhuyin">${eq.zhuyin}</span>
    </div>`;
  card.addEventListener('click', () => openModal(eq.id, card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(eq.id, card);
    }
  });
  grid.appendChild(card);
});

function updateProgress(){
  const p = visited.size / TOTAL * 100;
  document.getElementById('progFill').style.width = p + '%';
  document.getElementById('progCount').textContent = visited.size + ' / ' + TOTAL;
}

// ?? lightbox state ??
let _lbPhotos = [], _lbIdx = 0;

function openLightbox(photos, idx) {
  _lbPhotos = photos; _lbIdx = idx;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('lbClose').focus();
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
  if (!document.getElementById('overlay').classList.contains('open')) {
    document.body.classList.remove('modal-open');
  } else {
    document.body.classList.add('modal-open');
    document.getElementById('closeBtn').focus();
  }
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
// ?? ?萇 / 蝪∪蝑????
// ???摩嚗?//   ?格? ??/ ?? = 蝘餃?擃漁嚗?梯歲?賂?
//   ?? ??     = ???桀?擃漁???400ms ?折???拐?嚗?//   Esc         = Modal ???????”??瘨?鈭?let _focusIdx = -1;
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
      // ??嚗??洵銝銝?銋???函???
      _lastRightTime = 0;
      openModal(parseInt(cards[_lastFocusBeforeMove].dataset.id));
    } else {
      // ?格?嚗?雿??蝵殷????喟宏銝??      _lastFocusBeforeMove = _focusIdx;
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
// ?? modal ??
function openModal(id, trigger = null) {
  lastTrigger = trigger;
  const eq = EQ.find(e => e.id === id);

  // hero
  document.getElementById('mHeroImg').src = IMGS[eq.key];
  document.getElementById('mHeroImg').alt = eq.name;
  document.getElementById('mTag').textContent = eq.tag;
  document.getElementById('mTitle').textContent = eq.name;
  document.getElementById('mZhuyin').textContent = eq.zhuyin;
  document.getElementById('mBullets').innerHTML = eq.bullets.map(b => `<li>${b}</li>`).join('');

  // photo strip
  const strip = document.getElementById('photosStrip');
  strip.innerHTML = '';
  const photoSrcs = eq.photos.map(k => IMGS[k]);
  eq.photos.forEach((k, i) => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `\u958b\u555f\u7b2c ${i + 1} \u5f35\u7167\u7247`);
    item.innerHTML = `<img src="${IMGS[k]}" alt="\u7167\u7247 ${i + 1}" loading="lazy" decoding="async">`;
    item.addEventListener('click', () => openLightbox(photoSrcs, i));
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(photoSrcs, i);
      }
    });
    strip.appendChild(item);
  });
  strip.scrollLeft = 0;

  // video
  const vs = document.getElementById('videoSection');
  const vw = document.getElementById('videoWrap');
  if (eq.videoId) {
    vw.innerHTML = `<iframe src="https://www.youtube.com/embed/${eq.videoId}?rel=0" title="${eq.name} \u793a\u7bc4\u5f71\u7247" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    vs.style.display = 'block';
  } else {
    vw.innerHTML = '';
    vs.style.display = 'none';
  }

  document.getElementById('overlay').classList.add('open');
  document.getElementById('overlay').setAttribute('aria-hidden', 'false');
  document.getElementById('modalBox').scrollTop = 0;
  document.body.classList.add('modal-open');
  document.getElementById('closeBtn').focus();
  window._cid = id;
}

function closeModal() {
  // stop video
  document.getElementById('videoWrap').innerHTML = '';
  if (window._cid) {
    visited.add(window._cid);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...visited]));
    } catch (error) {
      console.warn('visited state save failed', error);
    }
    document.querySelector(`.card[data-id="${window._cid}"]`)?.classList.add('visited');
    updateProgress();
  }
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('overlay').setAttribute('aria-hidden', 'true');
  if (!isLightboxOpen()) document.body.classList.remove('modal-open');
  if (lastTrigger) lastTrigger.focus();
  // ??敺??鈭桐?銝撘蛛?霈陛?梁??臭誑?湔 ????
  const cards = [...document.querySelectorAll('.card')];
  const nextIdx = _focusIdx + 1 < cards.length ? _focusIdx + 1 : -1;
  window._cid = null;
  setFocus(nextIdx);
}

document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('backBtn').addEventListener('click', closeModal);

document.getElementById('overlay').addEventListener('click', e => { if(e.target===document.getElementById('overlay')) closeModal(); });

updateProgress();

