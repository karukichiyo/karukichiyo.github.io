# Xintong Dang / トウ シンドウ Portfolio Site

这是一个多页面、深色主题、三语（中文 / 日本語 / English）的 GitHub Pages 静态个人作品集网站。

## 页面结构

```text
index.html          首页
school.html         学校作品
independent.html    校外作品 / 个人原创角色创作
about.html          关于我
contact.html        联系方式
assets/css/style.css
assets/js/i18n.js
assets/images/      放作品图片的位置
```

## 已写入的信息

- Name: Xintong Dang / トウ シンドウ
- School: Tokyo Zokei University / 東京造形大学
- Major: 造形学部 美術学科 絵画専攻領域
- Practice: 油画；同时使用 Clip Studio Paint 与 Procreate 进行个人动漫风格原创角色创作
- Email: `paperfox4254545544 [at] gmail.com`，页面中没有直接显示 @
- Links: 小红书 / Instagram / 米画师

## 替换作品图片的方法

把图片放入 `assets/images/`，然后把页面里的占位块：

```html
<div class="work-image"><span>01</span></div>
```

替换为：

```html
<img class="work-photo" src="assets/images/work-01.jpg" alt="作品标题">
```

如果要让图片样式更完整，可以在 `assets/css/style.css` 最后加入：

```css
.work-photo { width: 100%; border-radius: 18px; display: block; object-fit: cover; aspect-ratio: 4 / 3; }
```

## GitHub Pages 部署

1. 新建 GitHub 仓库，推荐命名为：`你的用户名.github.io`
2. 上传本文件夹内所有文件，不要只上传 zip
3. 进入仓库 Settings → Pages
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main` 和 `/root`
6. 保存后等待 GitHub Pages 生成网站



## Background image
The site uses `assets/images/background.jpg` as the shared dark background image. Replace that file to change the background across all pages.
