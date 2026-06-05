const dict={
 zh:{navHome:'首页',navAcademic:'学院档案',navIndependent:'个人创作',navCharacters:'角色档案',navNotes:'观测记录',navAbout:'关于我',navContact:'联系',homeEyebrow:'Personal Art Archive',homeLead:'一个整理油画、数字图像、原创角色与制作记录的个人创作档案。',enterArchive:'进入档案',viewProfile:'查看简介',signal01:'领域',signal02:'工具',signal03:'状态',portalAcademicTitle:'Academic Archive',portalAcademicDesc:'东京造形大学期间的油画、课程项目与展示记录。',portalIndependentTitle:'Independent Works',portalIndependentDesc:'校外平台作品、数字绘画与个人项目。',portalCharacterTitle:'Character Archive',portalCharacterDesc:'原创角色、服装设计、设定图与世界观记录。',portalNotesTitle:'Observation Log',portalNotesDesc:'制作笔记、观看记录、作品概念和过程思考。',selectedEyebrow:'Selected Works',selectedTitle:'代表作品入口',academicEyebrow:'Academic Archive',academicTitle:'学校里的艺术创作',academicIntro:'整理东京造形大学期间的油画、课程项目、展览记录、研究过程与作品说明。','sectionLargeTitle':'作品标题 / Large-scale Paintings','sectionCourseTitle':'课程项目 / Course Projects','sectionResearchTitle':'研究记录 / Sketch & Research Notes','largeEyebrow':'Large-scale Paintings','largeTitle':'大型作品','largeDesc':'油画与丙烯的大型作品。39、40 是 38 的画面创作节选，43 是 37 的画面创作节选。','courseEyebrow':'Course Projects','courseTitle':'课程项目','courseDesc':'铜版画选修课作品，以及大二课题「１千枚ドローイング」中的精选 drawing。','etchingTitle':'銅版画 / Etching Works','etchingDesc':'选修课中的铜版画创作。','drawingTitle':'１千枚ドローイング / One Thousand Drawings','drawingDesc':'大二课题项目，从 1000 张 drawing 中精选出的作品。','researchEyebrow':'Sketch & Research Notes','researchTitle':'研究记录','researchDesc':'草图、结构尝试、构思记录。这里不和完成作品混在一起，而作为作品生成前的思考层保存。',workTitlePlaceholder:'作品标题 / Work Title',academicCard01:'材料、尺寸、年份、课程名、创作概念可以写在这里。',academicCard02Title:'课程项目',academicCard02:'可放置草图、过程照片、展示现场与最终作品。',academicCard03Title:'研究记录',academicCard03:'用于整理主题研究、文本、实验与创作脉络。',indEyebrow:'Independent Works',indTitle:'校外作品与个人创作',indIntro:'使用 Clip Studio Paint 与 Procreate 进行个人动漫风格原创角色创作，同时整理外部平台发布作品。',platformEyebrow:'External Platforms',platformTitle:'平台链接',platformDesc:'简约图标入口，连接到小红书、Instagram、米画师。',indCard01Title:'原创角色',indCard01:'角色立绘、设定图、服装设计、表情差分与世界观说明。',indCard02Title:'插画作品',indCard02:'完整插画、头像委托、构图练习或系列作品。',charEyebrow:'Character Archive',charTitle:'原创角色档案',charIntro:'这一页用于整理原创角色、服装、设定图、关系图和世界观信息。它不是普通插画页，而是角色数据库。',charFileStatus:'草稿',notesEyebrow:'Observation Log',notesTitle:'制作笔记与观测记录',notesIntro:'这里可以放制作过程、展览观看记录、材料实验、作品概念，以及油画和数字图像之间的思考。',note01Title:'作品概念记录',note01Text:'记录某件作品的主题、结构来源、视觉语言和修改过程。',note02Title:'制作过程',note02Text:'放置草图、色彩试验、失败版本、修改前后对比。',note03Title:'观看记录',note03Text:'整理展览、作品、艺术家和展示空间带来的思考。',aboutEyebrow:'About',aboutLead:'东京造形大学 造形学部 美术学科 絵画専攻領域，专攻油画。',aboutBody1:'我的创作以油画和视觉表达为中心，同时也使用 Clip Studio Paint 与 Procreate 进行个人动漫风格原创角色创作。',aboutBody2:'这个网站作为个人创作档案，整理学校作品、外部平台作品、角色项目、制作笔记与联系方式。',nameLabel:'Name',schoolLabel:'School',majorLabel:'Major',toolsLabel:'Tools',contactEyebrow:'Signal',contactTitle:'联系 / Signal',contactIntro:'如需作品合作、展示、委托或其他交流，可以通过以下方式联系我。',emailLabel:'Email',emailNote:'为减少垃圾邮件，页面中隐藏了 @ 符号。'},
 ja:{navHome:'ホーム',navAcademic:'学内制作',navIndependent:'個人制作',navCharacters:'キャラクター',navNotes:'観測記録',navAbout:'プロフィール',navContact:'連絡先',homeEyebrow:'Personal Art Archive',homeLead:'油画、デジタルイメージ、オリジナルキャラクター、制作記録を整理する個人制作アーカイブ。',enterArchive:'アーカイブへ',viewProfile:'プロフィールを見る',signal01:'領域',signal02:'ツール',signal03:'状態',portalAcademicTitle:'Academic Archive',portalAcademicDesc:'東京造形大学で制作した油画、授業課題、展示記録。',portalIndependentTitle:'Independent Works',portalIndependentDesc:'外部プラットフォームで公開した作品、デジタル作品、個人プロジェクト。',portalCharacterTitle:'Character Archive',portalCharacterDesc:'オリジナルキャラクター、衣装デザイン、設定画、世界観の記録。',portalNotesTitle:'Observation Log',portalNotesDesc:'制作ノート、鑑賞記録、作品コンセプト、制作過程の思考。',selectedEyebrow:'Selected Works',selectedTitle:'代表作品への入口',academicEyebrow:'Academic Archive',academicTitle:'大学での芸術制作',academicIntro:'東京造形大学で制作した油画、授業課題、展示記録、研究プロセス、作品説明を整理する。','sectionLargeTitle':'作品タイトル / Large-scale Paintings','sectionCourseTitle':'授業課題 / Course Projects','sectionResearchTitle':'研究記録 / Sketch & Research Notes','largeEyebrow':'Large-scale Paintings','largeTitle':'大型作品','largeDesc':'油画とアクリルによる大型作品。39、40 は 38 の画面からの制作的な抜粋、43 は 37 の画面からの制作的な抜粋。','courseEyebrow':'Course Projects','courseTitle':'授業課題','courseDesc':'選修授業で制作した銅版画と、大学2年次の課題「１千枚ドローイング」から選んだ drawing。','etchingTitle':'銅版画 / Etching Works','etchingDesc':'選修授業で制作した銅版画。','drawingTitle':'１千枚ドローイング / One Thousand Drawings','drawingDesc':'大学2年次の課題として制作した 1000 枚の drawing から選んだ作品。','researchEyebrow':'Sketch & Research Notes','researchTitle':'研究記録','researchDesc':'スケッチ、構造の試み、構想の記録。完成作品とは分けて、作品が生まれる前の思考の層として保存する。',workTitlePlaceholder:'作品タイトル / Work Title',academicCard01:'素材、サイズ、制作年、授業名、制作コンセプトをここに入れる。',academicCard02Title:'授業課題',academicCard02:'スケッチ、制作過程、展示風景、完成作品を掲載できる。',academicCard03Title:'研究記録',academicCard03:'テーマ研究、テキスト、実験、制作の流れを整理する。',indEyebrow:'Independent Works',indTitle:'外部作品と個人制作',indIntro:'Clip Studio Paint と Procreate を使い、個人でアニメ風のオリジナルキャラクター制作も行い、外部プラットフォームで公開した作品を整理する。',platformEyebrow:'External Platforms',platformTitle:'プラットフォームリンク',platformDesc:'小紅書、Instagram、米画師につながるシンプルなリンク。',indCard01Title:'オリジナルキャラクター',indCard01:'キャラクター立ち絵、設定画、衣装デザイン、表情差分、世界観説明。',indCard02Title:'イラスト作品',indCard02:'完成イラスト、アイコン依頼、構図練習、シリーズ作品。',charEyebrow:'Character Archive',charTitle:'オリジナルキャラクター・アーカイブ',charIntro:'オリジナルキャラクター、衣装、設定画、関係図、世界観情報を整理するページ。単なるイラストページではなく、キャラクターのデータベースとして使う。',charFileStatus:'Draft',notesEyebrow:'Observation Log',notesTitle:'制作ノートと観測記録',notesIntro:'制作過程、展示の鑑賞記録、素材実験、作品コンセプト、油画とデジタルイメージの関係についての思考を置く。',note01Title:'作品コンセプト記録',note01Text:'作品のテーマ、構造の由来、視覚言語、修正過程を記録する。',note02Title:'制作過程',note02Text:'スケッチ、色彩実験、失敗したバージョン、修正前後の比較を置く。',note03Title:'鑑賞記録',note03Text:'展覧会、作品、作家、展示空間から生まれた思考を整理する。',aboutEyebrow:'About',aboutLead:'東京造形大学 造形学部 美術学科 絵画専攻領域で、油画を専攻している。',aboutBody1:'制作は油画と視覚表現を中心にしている。同時に、Clip Studio Paint と Procreate を使って個人のアニメ風オリジナルキャラクター制作も行っている。',aboutBody2:'このサイトは個人制作アーカイブとして、大学での制作、外部プラットフォームで公開した作品、キャラクタープロジェクト、制作ノート、連絡先を整理する。',nameLabel:'Name',schoolLabel:'School',majorLabel:'Major',toolsLabel:'Tools',contactEyebrow:'Signal',contactTitle:'連絡 / Signal',contactIntro:'作品協力、展示、依頼、その他の連絡は以下から。',emailLabel:'Email',emailNote:'迷惑メール対策のため、@ を隠して表示している。'},
 en:{navHome:'Home',navAcademic:'Academic',navIndependent:'Independent',navCharacters:'Character',navNotes:'Notes',navAbout:'About',navContact:'Contact',homeEyebrow:'Personal Art Archive',homeLead:'A personal art archive for oil painting, digital images, original characters, and process notes.',enterArchive:'Enter Archive',viewProfile:'View Profile',signal01:'FIELD',signal02:'TOOLS',signal03:'STATUS',portalAcademicTitle:'Academic Archive',portalAcademicDesc:'Oil paintings, course projects, and exhibition records from Tokyo Zokei University.',portalIndependentTitle:'Independent Works',portalIndependentDesc:'External platform works, digital images, and personal projects.',portalCharacterTitle:'Character Archive',portalCharacterDesc:'Original characters, costume design, character sheets, and world-building notes.',portalNotesTitle:'Observation Log',portalNotesDesc:'Process notes, exhibition records, concepts, and reflections on making.',selectedEyebrow:'Selected Works',selectedTitle:'Entrances to selected works',academicEyebrow:'Academic Archive',academicTitle:'Artworks from School',academicIntro:'An archive of oil paintings, course projects, exhibition records, research processes, and work descriptions from Tokyo Zokei University.','sectionLargeTitle':'Work Title / Large-scale Paintings','sectionCourseTitle':'Course Projects','sectionResearchTitle':'Sketch & Research Notes','largeEyebrow':'Large-scale Paintings','largeTitle':'Large-scale Paintings','largeDesc':'Large-scale works made with oil and acrylic. 39 and 40 are compositional excerpts from 38; 43 is a compositional excerpt from 37.','courseEyebrow':'Course Projects','courseTitle':'Course Projects','courseDesc':'Etching works from an elective course and selected drawings from the sophomore project “One Thousand Drawings”.','etchingTitle':'Etching Works','etchingDesc':'Etching works made in an elective printmaking course.','drawingTitle':'One Thousand Drawings','drawingDesc':'Selected works from 1000 drawings made for a sophomore course project.','researchEyebrow':'Sketch & Research Notes','researchTitle':'Sketch & Research Notes','researchDesc':'Sketches, structural experiments, and idea notes are kept here as a layer of thinking before finished works.',workTitlePlaceholder:'Work Title',academicCard01:'Materials, size, year, course title, and concept can be written here.',academicCard02Title:'Course Project',academicCard02:'Sketches, process photos, installation views, and final works can be placed here.',academicCard03Title:'Research Archive',academicCard03:'For research themes, texts, experiments, and the development of each project.',indEyebrow:'Independent Works',indTitle:'External Works and Personal Projects',indIntro:'I create original anime-style characters using Clip Studio Paint and Procreate, while also archiving works published on external platforms.',platformEyebrow:'External Platforms',platformTitle:'Platform Links',platformDesc:'Minimal links to Xiaohongshu, Instagram, and Mihuashi.',indCard01Title:'Original Characters',indCard01:'Character sheets, costume design, expression variations, and world-building notes.',indCard02Title:'Illustration Works',indCard02:'Finished illustrations, icon commissions, composition studies, and series works.',charEyebrow:'Character Archive',charTitle:'Original Character Archive',charIntro:'A database-style page for original characters, costumes, character sheets, relationship maps, and world-building information.',charFileStatus:'Draft',notesEyebrow:'Observation Log',notesTitle:'Process Notes and Observation Log',notesIntro:'A place for process images, exhibition notes, material experiments, concepts, and thoughts on the relationship between oil painting and digital images.',note01Title:'Concept Record',note01Text:'Notes on theme, structure, visual language, and revision process for each work.',note02Title:'Process',note02Text:'Sketches, color tests, failed versions, and before/after revisions.',note03Title:'Viewing Notes',note03Text:'Reflections on exhibitions, artworks, artists, and display spaces.',aboutEyebrow:'About',aboutLead:'I major in oil painting in the Painting Field, Department of Fine Arts, Faculty of Design, Tokyo Zokei University.',aboutBody1:'My practice centers on oil painting and visual expression. I also create original anime-style characters using Clip Studio Paint and Procreate.',aboutBody2:'This website works as a personal art archive for school works, external platform works, character projects, process notes, and contact information.',nameLabel:'Name',schoolLabel:'School',majorLabel:'Major',toolsLabel:'Tools',contactEyebrow:'Signal',contactTitle:'Contact / Signal',contactIntro:'For collaborations, exhibitions, commissions, or other inquiries, please contact me through the information below.',emailLabel:'Email',emailNote:'The @ symbol is hidden on this page to reduce spam.'}
};

function applyLang(lang){
  const data=dict[lang]||dict.zh;
  document.documentElement.lang=lang==='ja'?'ja':lang==='en'?'en':'zh';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(data[key]) el.textContent=data[key];
  });
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  localStorage.setItem('siteLang',lang);
}

function initFilters(){
  const buttons=document.querySelectorAll('[data-filter]');
  const cards=document.querySelectorAll('[data-category]');
  if(!buttons.length)return;
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    cards.forEach(card=>{
      const cats=card.dataset.category.split(' ');
      card.style.display=(f==='all'||cats.includes(f))?'':'none';
    });
  }));
}

function initMenu(){
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(!toggle||!nav)return;
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
}

const accentPresets=[
  {h:0,name:'Red',label:'Pure red'},
  {h:30,name:'Coral',label:'Warm coral'},
  {h:60,name:'Amber',label:'Golden amber'},
  {h:120,name:'Emerald',label:'Cold green'},
  {h:180,name:'Cyan',label:'Signal cyan'},
  {h:240,name:'Azure',label:'Deep blue'},
  {h:300,name:'Violet',label:'Electric violet'},
  {h:352,name:'Crimson',label:'Default red'}
];

function getAccentInfo(value){
  return accentPresets.reduce((best,item)=>Math.abs(item.h-value)<Math.abs(best.h-value)?item:best,accentPresets[0]);
}

function setAccentHue(hue){
  const value=((Number(hue)%360)+360)%360;
  document.documentElement.style.setProperty('--accent-h',value);
  document.documentElement.style.setProperty('--marker-angle',value);
  localStorage.setItem('accentHue',String(value));
  const current=getAccentInfo(value);
  const valueLabel=document.querySelector('.theme-value');
  const centerName=document.querySelector('.theme-current-name');
  const centerLabel=document.querySelector('.theme-current-label');
  if(valueLabel) valueLabel.textContent=`${Math.round(value)}°`;
  if(centerName) centerName.textContent=current.name;
  if(centerLabel) centerLabel.textContent=`${Math.round(value)}° · ${current.label}`;
  const wheel=document.querySelector('.theme-wheel-large');
  if(wheel) wheel.setAttribute('aria-valuenow',String(Math.round(value)));
}


function updateHueFromPointer(event, wheel){
  const rect=wheel.getBoundingClientRect();
  const cx=rect.left + rect.width/2;
  const cy=rect.top + rect.height/2;
  const dx=event.clientX - cx;
  const dy=event.clientY - cy;
  const angle=(Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
  setAccentHue(angle);
}

function createThemeWidget(){
  const widget=document.createElement('div');
  widget.className='theme-widget';
  widget.innerHTML=`
    <div class="theme-panel" aria-hidden="true">
      <div class="theme-label"><span>Accent color</span><span class="theme-value">352°</span></div>
      <div class="theme-wheel-wrap">
        <div class="theme-wheel-large" aria-label="Accent color wheel" role="slider" aria-valuemin="0" aria-valuemax="359" aria-valuenow="352" tabindex="0"></div>
        <div class="wheel-guide" aria-hidden="true"></div>
        <div class="wheel-marker" aria-hidden="true"></div>
        <div class="theme-center">
          <div>
            <small>accent</small>
            <strong class="theme-current-name">Crimson</strong>
            <em class="theme-current-label">352° · Default red</em>
          </div>
        </div>
      </div>
      <p class="theme-note">Click or drag on the ring to change the accent color. Silver and black stay fixed.</p>
    </div>
    <button class="theme-toggle" type="button" aria-label="Accent color settings" aria-expanded="false">
      <span class="color-wheel" aria-hidden="true"></span>
    </button>`;
  document.body.appendChild(widget);

  const panel=widget.querySelector('.theme-panel');
  const toggle=widget.querySelector('.theme-toggle');
  const wheel=widget.querySelector('.theme-wheel-large');

  toggle.addEventListener('click',e=>{
    e.stopPropagation();
    const open=panel.classList.toggle('open');
    panel.setAttribute('aria-hidden',open?'false':'true');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  let dragging=false;
  const onPointerMove=e=>{ if(dragging) updateHueFromPointer(e,wheel); };
  wheel.addEventListener('pointerdown',e=>{ dragging=true; wheel.setPointerCapture(e.pointerId); updateHueFromPointer(e,wheel); });
  wheel.addEventListener('pointermove',onPointerMove);
  wheel.addEventListener('pointerup',e=>{ dragging=false; wheel.releasePointerCapture?.(e.pointerId); });
  wheel.addEventListener('pointercancel',()=>{ dragging=false; });
  wheel.addEventListener('click',e=>updateHueFromPointer(e,wheel));
  wheel.addEventListener('keydown',e=>{
    const current=Number(localStorage.getItem('accentHue')||352);
    if(e.key==='ArrowRight' || e.key==='ArrowUp'){ e.preventDefault(); setAccentHue(current+2); }
    if(e.key==='ArrowLeft' || e.key==='ArrowDown'){ e.preventDefault(); setAccentHue(current-2); }
  });
  document.addEventListener('click',e=>{
    if(!widget.contains(e.target)){
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden','true');
      toggle.setAttribute('aria-expanded','false');
    }
  });

  setAccentHue(localStorage.getItem('accentHue')||352);
}


function initLightbox(){
  const lightbox=document.getElementById('lightbox');
  if(!lightbox)return;
  const triggers=[...document.querySelectorAll('.gallery-open')];
  const img=lightbox.querySelector('img');
  const title=lightbox.querySelector('.lightbox-title');
  const meta=lightbox.querySelector('.lightbox-meta');
  const caption=lightbox.querySelector('.lightbox-caption');
  const close=lightbox.querySelector('.lightbox-close');
  const prev=lightbox.querySelector('.prev');
  const next=lightbox.querySelector('.next');
  let current=0;
  function captionKey(){
    const lang=localStorage.getItem('siteLang')||document.documentElement.lang||'zh';
    if(lang.startsWith('ja')) return 'captionJa';
    if(lang.startsWith('en')) return 'captionEn';
    return 'captionZh';
  }
  function openAt(index){
    current=(index+triggers.length)%triggers.length;
    const item=triggers[current];
    img.src=item.dataset.src;
    img.alt=item.dataset.title || '';
    title.textContent=item.dataset.title || '';
    meta.textContent=item.dataset.meta || '';
    caption.textContent=item.dataset[captionKey()] || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeBox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    img.src='';
  }
  triggers.forEach((btn,i)=>btn.addEventListener('click',()=>openAt(i)));
  close.addEventListener('click',closeBox);
  prev.addEventListener('click',()=>openAt(current-1));
  next.addEventListener('click',()=>openAt(current+1));
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox();});
  document.addEventListener('keydown',e=>{
    if(!lightbox.classList.contains('open'))return;
    if(e.key==='Escape')closeBox();
    if(e.key==='ArrowLeft')openAt(current-1);
    if(e.key==='ArrowRight')openAt(current+1);
  });
  document.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(lightbox.classList.contains('open')){
        const item=triggers[current];
        setTimeout(()=>{caption.textContent=item.dataset[captionKey()] || '';},0);
      }
    });
  });
}


function initEditorialMotion(){
  const root=document.documentElement;
  window.addEventListener('pointermove',e=>{
    const x=(e.clientX/window.innerWidth*100).toFixed(2);
    const y=(e.clientY/window.innerHeight*100).toFixed(2);
    root.style.setProperty('--pointer-x',`${x}%`);
    root.style.setProperty('--pointer-y',`${y}%`);
  },{passive:true});
}

document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year');
  if(y)y.textContent=new Date().getFullYear();
  applyLang(localStorage.getItem('siteLang')||'zh');
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>applyLang(btn.dataset.lang)));
  initFilters();
  initMenu();
  createThemeWidget();
  initLightbox();
  initEditorialMotion();
});
