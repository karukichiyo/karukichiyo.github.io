# Xintong Dang / トウ シンドウ Personal Art Archive

多页面、三语（中文 / 日本語 / English）、银红黑配色的 GitHub Pages 静态作品集网站。

## 页面结构

```text
index.html          首页 / Archive Gate
academic.html       学院档案 / 学校作品
independent.html    校外作品 / 个人创作
characters.html     原创角色档案
notes.html          制作笔记 / 观测记录
about.html          关于我
contact.html        联系方式
assets/css/style.css
assets/js/i18n.js
assets/images/background.jpg
```

## 已加入的设计和交互

- 首页做成 Personal Art Archive / 档案入口
- 银红黑统一配色
- 使用 `background.jpg`，但弱化模糊感，改成较简洁、暗色、清晰的背景层
- 作品页带筛选按钮：ALL / OIL PAINTING / COURSE PROJECT / PROCESS
- 作品卡片做成档案卡视觉
- 新增 Character Archive 页面，适合放原创角色数据库
- 新增 Observation Log 页面，适合放制作笔记、观看记录、过程记录
- 平台链接做成简约图标卡片
- 邮箱显示为 `paperfox4254545544 [at] gmail.com`

## 替换作品图片

把图片放入 `assets/images/`，然后把类似下面的占位代码：

```html
<div class="work-image"><span>01</span></div>
```

替换为：

```html
<img class="work-photo" src="assets/images/work-01.jpg" alt="作品标题">
```

并在 CSS 最后加：

```css
.work-photo{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;border-bottom:1px solid var(--line)}
```

## GitHub Pages 部署

1. 新建仓库，推荐命名为 `你的用户名.github.io`
2. 上传本文件夹内所有文件，不要只上传 zip
3. Settings → Pages
4. Source 选择 Deploy from a branch
5. Branch 选择 main / root
6. 保存并等待生成网站


## Academic image archive

The academic gallery images are stored in:

`assets/images/academic/`

Current mapping:
- `1.jpg`–`3.jpg`: Course Projects 02 / Etching Works
- `10.jpg`–`32.jpg`: Course Projects 02 / １千枚ドローイング
- `4.jpg`–`9.jpg`: Research Notes 03
- `33.jpg`–`43.jpg`: Large-scale Paintings 01

Lightbox metadata is defined in `academic.html` inside each `.gallery-open` button.
