# TBS Studio

做这个博客之前没有关注过移动端，初步完成后发现手机上显示一片空白，也就是移动端有些 es6 语法不支持。折腾了两天，发现了 [TBS](https://x5.tencent.com/tbs/)，这中间又遇到了好些不懂的词语，什么 sdk、abd 之类的。闲话不多说, [调试指南](https://x5.tencent.com/tbs/guide/debug.html) 的教程比我讲的好多了，具体可以去论坛看。

## 快速步骤如下 :

- TBS [下载](https://x5.tencent.com/tbs/guide/debug/download.html) (免安装)

- 下载完成后解压 ( 最好是英文目录 ) ，打开软件，手机和电脑连接，打开开发者模式并打开 USB 调试

- 启动检测，我一开始是检测不到的，第二天也没检测到

- 如果检测不到的话打开错误指引，打开 [FAQ](https://x5.tencent.com/tbs/guide/debug/faq.html)，下拉找到下载 [abd](http://adbshell.com/downloads"跟安卓有关的东西，这个地址我也不知道是不是官方的") 的链接，下载解压，文件解压的目录下打开命令行运行 `abd devices`

- 然后再重置、检测，我是走到这一步就 OK 的

- 接着按照提示做就可以了

- 详细还是看 [官方指南](https://x5.tencent.com/tbs/guide/debug.html)，自己记录下，备忘

- [官网](https://x5.tencent.com/tbs/)、[论坛](http://bbs.mb.qq.com/)

- 至于 [安卓官网](
https://www.android.com/)  需要全局才能进去，pac 的话是进不去的。