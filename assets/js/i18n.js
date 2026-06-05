const dict={
 zh:{navHome:'首页',navAcademic:'学院档案',navIndependent:'个人创作',navCharacters:'角色档案',navNotes:'观测记录',navAbout:'关于我',navContact:'联系',homeEyebrow:'Personal Art Archive',homeLead:'一个整理油画、数字图像、原创角色与制作记录的个人创作档案。',enterArchive:'进入档案',viewProfile:'查看简介',signal01:'领域',signal02:'工具',signal03:'状态',portalAcademicTitle:'Academic Archive',portalAcademicDesc:'东京造形大学期间的油画、课程项目与展示记录。',portalIndependentTitle:'Independent Works',portalIndependentDesc:'校外平台作品、数字绘画与个人项目。',portalCharacterTitle:'Character Archive',portalCharacterDesc:'原创角色、服装设计、设定图与世界观记录。',portalNotesTitle:'Observation Log',portalNotesDesc:'制作笔记、观看记录、作品概念和过程思考。',selectedEyebrow:'Selected Works',selectedTitle:'代表作品入口',academicEyebrow:'Academic Archive',academicTitle:'学校里的艺术创作',academicIntro:'整理东京造形大学期间的油画、课程项目、展览记录、研究过程与作品说明。',workTitlePlaceholder:'作品标题 / Work Title',academicCard01:'材料、尺寸、年份、课程名、创作概念可以写在这里。',academicCard02Title:'课程项目',academicCard02:'可放置草图、过程照片、展示现场与最终作品。',academicCard03Title:'研究记录',academicCard03:'用于整理主题研究、文本、实验与创作脉络。',indEyebrow:'Independent Works',indTitle:'校外作品与个人创作',indIntro:'使用 Clip Studio Paint 与 Procreate 进行个人动漫风格原创角色创作，同时整理外部平台发布作品。',platformEyebrow:'External Platforms',platformTitle:'平台链接',platformDesc:'简约图标入口，连接到小红书、Instagram、米画师。',indCard01Title:'原创角色',indCard01:'角色立绘、设定图、服装设计、表情差分与世界观说明。',indCard02Title:'插画作品',indCard02:'完整插画、头像委托、构图练习或系列作品。',charEyebrow:'Character Archive',charTitle:'原创角色档案',charIntro:'这一页用于整理原创角色、服装、设定图、关系图和世界观信息。它不是普通插画页，而是角色数据库。',charFileStatus:'草稿',notesEyebrow:'Observation Log',notesTitle:'制作笔记与观测记录',notesIntro:'这里可以放制作过程、展览观看记录、材料实验、作品概念，以及油画和数字图像之间的思考。',note01Title:'作品概念记录',note01Text:'记录某件作品的主题、结构来源、视觉语言和修改过程。',note02Title:'制作过程',note02Text:'放置草图、色彩试验、失败版本、修改前后对比。',note03Title:'观看记录',note03Text:'整理展览、作品、艺术家和展示空间带来的思考。',aboutEyebrow:'About',aboutLead:'东京造形大学 造形学部 美术学科 絵画専攻領域，专攻油画。',aboutBody1:'我的创作以油画和视觉表达为中心，同时也使用 Clip Studio Paint 与 Procreate 进行个人动漫风格原创角色创作。',aboutBody2:'这个网站作为个人创作档案，整理学校作品、外部平台作品、角色项目、制作笔记与联系方式。',nameLabel:'Name',schoolLabel:'School',majorLabel:'Major',toolsLabel:'Tools',contactEyebrow:'Signal',contactTitle:'联系 / Signal',contactIntro:'如需作品合作、展示、委托或其他交流，可以通过以下方式联系我。',emailLabel:'Email',emailNote:'为减少垃圾邮件，页面中隐藏了 @ 符号。'},
 ja:{navHome:'ホーム',navAcademic:'学内制作',navIndependent:'個人制作',navCharacters:'キャラクター',navNotes:'観測記録',navAbout:'プロフィール',navContact:'連絡先',homeEyebrow:'Personal Art Archive',homeLead:'油画、デジタルイメージ、オリジナルキャラクター、制作記録を整理する個人制作アーカイブ。',enterArchive:'アーカイブへ',viewProfile:'プロフィールを見る',signal01:'領域',signal02:'ツール',signal03:'状態',portalAcademicTitle:'Academic Archive',portalAcademicDesc:'東京造形大学で制作した油画、授業課題、展示記録。',portalIndependentTitle:'Independent Works',portalIndependentDesc:'外部プラットフォームで公開した作品、デジタル作品、個人プロジェクト。',portalCharacterTitle:'Character Archive',portalCharacterDesc:'オリジナルキャラクター、衣装デザイン、設定画、世界観の記録。',portalNotesTitle:'Observation Log',portalNotesDesc:'制作ノート、鑑賞記録、作品コンセプト、制作過程の思考。',selectedEyebrow:'Selected Works',selectedTitle:'代表作品への入口',academicEyebrow:'Academic Archive',academicTitle:'大学での芸術制作',academicIntro:'東京造形大学で制作した油画、授業課題、展示記録、研究プロセス、作品説明を整理する。',workTitlePlaceholder:'作品タイトル / Work Title',academicCard01:'素材、サイズ、制作年、授業名、制作コンセプトをここに入れる。',academicCard02Title:'授業課題',academicCard02:'スケッチ、制作過程、展示風景、完成作品を掲載できる。',academicCard03Title:'研究記録',academicCard03:'テーマ研究、テキスト、実験、制作の流れを整理する。',indEyebrow:'Independent Works',indTitle:'外部作品と個人制作',indIntro:'Clip Studio Paint と Procreate を使い、個人でアニメ風のオリジナルキャラクター制作も行い、外部プラットフォームで公開した作品を整理する。',platformEyebrow:'External Platforms',platformTitle:'プラットフォームリンク',platformDesc:'小紅書、Instagram、米画師につながるシンプルなリンク。',indCard01Title:'オリジナルキャラクター',indCard01:'キャラクター立ち絵、設定画、衣装デザイン、表情差分、世界観説明。',indCard02Title:'イラスト作品',indCard02:'完成イラスト、アイコン依頼、構図練習、シリーズ作品。',charEyebrow:'Character Archive',charTitle:'オリジナルキャラクター・アーカイブ',charIntro:'オリジナルキャラクター、衣装、設定画、関係図、世界観情報を整理するページ。単なるイラストページではなく、キャラクターのデータベースとして使う。',charFileStatus:'Draft',notesEyebrow:'Observation Log',notesTitle:'制作ノートと観測記録',notesIntro:'制作過程、展示の鑑賞記録、素材実験、作品コンセプト、油画とデジタルイメージの関係についての思考を置く。',note01Title:'作品コンセプト記録',note01Text:'作品のテーマ、構造の由来、視覚言語、修正過程を記録する。',note02Title:'制作過程',note02Text:'スケッチ、色彩実験、失敗したバージョン、修正前後の比較を置く。',note03Title:'鑑賞記録',note03Text:'展覧会、作品、作家、展示空間から生まれた思考を整理する。',aboutEyebrow:'About',aboutLead:'東京造形大学 造形学部 美術学科 絵画専攻領域で、油画を専攻している。',aboutBody1:'制作は油画と視覚表現を中心にしている。同時に、Clip Studio Paint と Procreate を使って個人のアニメ風オリジナルキャラクター制作も行っている。',aboutBody2:'このサイトは個人制作アーカイブとして、大学での制作、外部プラットフォームで公開した作品、キャラクタープロジェクト、制作ノート、連絡先を整理する。',nameLabel:'Name',schoolLabel:'School',majorLabel:'Major',toolsLabel:'Tools',contactEyebrow:'Signal',contactTitle:'連絡 / Signal',contactIntro:'作品協力、展示、依頼、その他の連絡は以下から。',emailLabel:'Email',emailNote:'迷惑メール対策のため、@ を隠して表示している。'},
 en:{navHome:'Home',navAcademic:'Academic',navIndependent:'Independent',navCharacters:'Character',navNotes:'Notes',navAbout:'About',navContact:'Contact',homeEyebrow:'Personal Art Archive',homeLead:'A personal art archive for oil painting, digital images, original characters, and process notes.',enterArchive:'Enter Archive',viewProfile:'View Profile',signal01:'FIELD',signal02:'TOOLS',signal03:'STATUS',portalAcademicTitle:'Academic Archive',portalAcademicDesc:'Oil paintings, course projects, and exhibition records from Tokyo Zokei University.',portalIndependentTitle:'Independent Works',portalIndependentDesc:'External platform works, digital images, and personal projects.',portalCharacterTitle:'Character Archive',portalCharacterDesc:'Original characters, costume design, character sheets, and world-building notes.',portalNotesTitle:'Observation Log',portalNotesDesc:'Process notes, exhibition records, concepts, and reflections on making.',selectedEyebrow:'Selected Works',selectedTitle:'Entrances to selected works',academicEyebrow:'Academic Archive',academicTitle:'Artworks from School',academicIntro:'An archive of oil paintings, course projects, exhibition records, research processes, and work descriptions from Tokyo Zokei University.',workTitlePlaceholder:'Work Title',academicCard01:'Materials, size, year, course title, and concept can be written here.',academicCard02Title:'Course Project',academicCard02:'Sketches, process photos, installation views, and final works can be placed here.',academicCard03Title:'Research Archive',academicCard03:'For research themes, texts, experiments, and the development of each project.',indEyebrow:'Independent Works',indTitle:'External Works and Personal Projects',indIntro:'I create original anime-style characters using Clip Studio Paint and Procreate, while also archiving works published on external platforms.',platformEyebrow:'External Platforms',platformTitle:'Platform Links',platformDesc:'Minimal links to Xiaohongshu, Instagram, and Mihuashi.',indCard01Title:'Original Characters',indCard01:'Character sheets, costume design, expression variations, and world-building notes.',indCard02Title:'Illustration Works',indCard02:'Finished illustrations, icon commissions, composition studies, and series works.',charEyebrow:'Character Archive',charTitle:'Original Character Archive',charIntro:'A database-style page for original characters, costumes, character sheets, relationship maps, and world-building information.',charFileStatus:'Draft',notesEyebrow:'Observation Log',notesTitle:'Process Notes and Observation Log',notesIntro:'A place for process images, exhibition notes, material experiments, concepts, and thoughts on the relationship between oil painting and digital images.',note01Title:'Concept Record',note01Text:'Notes on theme, structure, visual language, and revision process for each work.',note02Title:'Process',note02Text:'Sketches, color tests, failed versions, and before/after revisions.',note03Title:'Viewing Notes',note03Text:'Reflections on exhibitions, artworks, artists, and display spaces.',aboutEyebrow:'About',aboutLead:'I major in oil painting in the Painting Field, Department of Fine Arts, Faculty of Design, Tokyo Zokei University.',aboutBody1:'My practice centers on oil painting and visual expression. I also create original anime-style characters using Clip Studio Paint and Procreate.',aboutBody2:'This website works as a personal art archive for school works, external platform works, character projects, process notes, and contact information.',nameLabel:'Name',schoolLabel:'School',majorLabel:'Major',toolsLabel:'Tools',contactEyebrow:'Signal',contactTitle:'Contact / Signal',contactIntro:'For collaborations, exhibitions, commissions, or other inquiries, please contact me through the information below.',emailLabel:'Email',emailNote:'The @ symbol is hidden on this page to reduce spam.'}
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

function setAccentHue(hue){
  const value=Math.max(0,Math.min(360,Number(hue)||352));
  document.documentElement.style.setProperty('--accent-h',value);
  localStorage.setItem('accentHue',String(value));
  const slider=document.querySelector('.hue-slider');
  const valueLabel=document.querySelector('.theme-value');
  if(slider) slider.value=String(value);
  if(valueLabel) valueLabel.textContent=`${value}°`;
  document.querySelectorAll('.preset-swatch').forEach(btn=>{
    btn.classList.toggle('active',Math.abs(Number(btn.dataset.h)-value)<=2);
  });
}

function createThemeWidget(){
  const widget=document.createElement('div');
  widget.className='theme-widget';
  widget.innerHTML=`
    <div class="theme-panel" aria-hidden="true">
      <div class="theme-label"><span>Accent hue</span><span class="theme-value">352°</span></div>
      <input class="hue-slider" type="range" min="0" max="360" value="352" aria-label="Accent hue" />
      <div class="preset-swatches">
        <button class="preset-swatch" data-h="352" style="background:hsl(352,72%,58%)" aria-label="Crimson"></button>
        <button class="preset-swatch" data-h="12" style="background:hsl(12,72%,58%)" aria-label="Coral"></button>
        <button class="preset-swatch" data-h="38" style="background:hsl(38,72%,58%)" aria-label="Amber"></button>
        <button class="preset-swatch" data-h="206" style="background:hsl(206,72%,58%)" aria-label="Azure"></button>
        <button class="preset-swatch" data-h="282" style="background:hsl(282,72%,58%)" aria-label="Violet"></button>
        <button class="preset-swatch" data-h="146" style="background:hsl(146,72%,58%)" aria-label="Emerald"></button>
      </div>
      <p class="theme-note">Change the accent glow in the background and interface. Silver and black stay fixed.</p>
    </div>
    <button class="theme-toggle" type="button" aria-label="Accent color settings" aria-expanded="false">
      <span class="color-wheel" aria-hidden="true"></span>
    </button>`;
  document.body.appendChild(widget);

  const panel=widget.querySelector('.theme-panel');
  const toggle=widget.querySelector('.theme-toggle');
  const slider=widget.querySelector('.hue-slider');
  const presets=widget.querySelectorAll('.preset-swatch');

  toggle.addEventListener('click',e=>{
    e.stopPropagation();
    const open=panel.classList.toggle('open');
    panel.setAttribute('aria-hidden',open?'false':'true');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  slider.addEventListener('input',()=>setAccentHue(slider.value));
  presets.forEach(btn=>btn.addEventListener('click',()=>setAccentHue(btn.dataset.h)));
  document.addEventListener('click',e=>{
    if(!widget.contains(e.target)){
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden','true');
      toggle.setAttribute('aria-expanded','false');
    }
  });

  setAccentHue(localStorage.getItem('accentHue')||352);
}

document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year');
  if(y)y.textContent=new Date().getFullYear();
  applyLang(localStorage.getItem('siteLang')||'zh');
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>applyLang(btn.dataset.lang)));
  initFilters();
  initMenu();
  createThemeWidget();
});
