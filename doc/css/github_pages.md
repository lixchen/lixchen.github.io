# GitHub Pages

GitHub Pages 有两种类型, 一种是 User Pages, 一种是 Organization Pages 和 Project Pages。

User Pages 的创建

```git

```

Project Pages 的创建

首先在github上创建一新的仓库 `new repository`，比如 `blog`。然后克隆到本地

```git
git clone git@github.com:username/blog.git
cd blog
git checkout --orphan gh-pages
git rm -rf .
```

测试
```git
echo "my page" > index.html
git add index.html
git commit -a -m "index"
git push origin gh-pages
```

现在输入`username.github.io/blog`就可以访问了