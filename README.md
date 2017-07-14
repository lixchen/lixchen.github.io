# Lxc's Blog

简单的博客，初步达到我理想的状态，没有繁琐的依赖，没有一大堆的库。

## 使用说明

需安装 `Node.js`

- 源码下载

```bash
npm install browser-sync -g
```

- 写的东西放在 `doc` 目录下，可以在该目录下新建目录，会作为分类。比如 `js` 目录下的文章会自动显示类别为 `js`，再深层的目录结构暂时不支持。

- 文章写完，运行命令 `node run build`，就 OK 了。

- `npm run server`，本地查看

- 最后推送到你的 `page` 仓库就可以了。