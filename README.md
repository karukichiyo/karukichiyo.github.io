# Karuki Portfolio Site

这是一个可直接部署到 GitHub Pages 的三语个人艺术作品集网站模板。

## 文件结构

```text
index.html
assets/css/style.css
assets/js/i18n.js
assets/images/
```

## 如何替换内容

1. 把作品图片放进 `assets/images/`。
2. 在 `index.html` 中，把 `.image-placeholder` 替换成图片，例如：

```html
<img src="assets/images/work-01.jpg" alt="作品标题" />
```

3. 在 `assets/js/i18n.js` 中修改中日英三种语言的标题、介绍、作品说明。
4. 把联系方式里的 `your-email@example.com` 改成你的邮箱。
5. 把平台链接的 `href="#"` 改成 Instagram、Pixiv、ArtStation、X、个人项目页等真实链接。

## GitHub Pages 部署方法

1. 新建仓库，仓库名可以是：`你的用户名.github.io`。
2. 上传本文件夹里的全部文件，不要只上传 zip。
3. 进入 GitHub 仓库的 Settings → Pages。
4. Source 选择 Deploy from a branch，Branch 选择 `main` / root。
5. 保存后等待页面生成。

如果仓库名是 `你的用户名.github.io`，网站地址通常是：

```text
https://你的用户名.github.io/
```
