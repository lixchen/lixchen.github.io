# Leanote 服务器搭建

[官方安装教程](https://github.com/leanote/leanote/wiki)

`Leanote` 本地服务器搭建需要安装 `MongoDB` 数据库，安装起来很简单。但是因为要把`MongoDB`做为系统服务项更方便，所以我一开始照着各种教程安装的时候，总是在最后启动不了服务，我也不知道为什么，后来我就将 `MongoDB` 和 `Leanote` 单独来安装，省的中间出错。

cmd命令我全程用的是管理员打开，我也不懂管理员跟普通有什么区别，因为有些需要管理员权限，所以我就全程管理员了

下面是MongoDB的安装步骤：

 1. 下载MongoDB（这里是[官网地址](https://www.mongodb.com/download-center?jmp=nav#community)）
 2. 下载完成后安装，选择自定义安装，你也可以一直下一步，但是因为我的C盘没那么充足，所以我是自定义（custom）安装
 3. 选择目录，我的目录是 `D:\note\MongoDB`
 4. 安装完成后建立数据文件夹，我的路径是`D:\note\data`
 5. `data` 目录下建立在建立三个文件夹 `config` 和 `log` 以及 `leanote`
 6. `config` 文件夹里面建一个mongodb.config文件，`log` 文件夹里面建一个文件 `mongodb.log`
 7. 记事本或者其它编辑器打开 `mongodb.config` 写入
```js 
dbpath=D:\note\data\leanote
logpath=D:\note\data\log\mongodb.log
//（这个confing文件夹以及里面的文件是可以放在mongodb的安装目录下的， 我不懂这些东西，我这样建文件夹是为了自己好找，你如果是放在别的地方，注意在下面操作的时候改好路径）
```

 8. 进入`MongoDB`文件夹bin目录下 `D:\note\MongoDB\bin`（这是我的路径），管理员身份运行cmd，然后输入 `mongod --config d:\note\data\config\mongodb.config --install --serviceName "MongoDB"` （注意改为你自己的路径）
 9. 上面的命令完成后，不出意外的话，就已经将MongoDB添加到了系统服务，现在就可以在cmd里面输入`net start mongodb` 来启动服务了，也可以在服务里面去找 （win键+R，然后输入`services.msc`打开服务）
 
下面是Leanote（二进制版）的安装步骤：

 1. `leanote` 二进制版[下载](http://leanote.org/#download)
 2. 解压到 `D:\note` 下（注意自己选自己的路径）
 3. 这一步是导入Leanote的数据，`leanote\mongodb_backup\leanote_install_data`。进入 `MongoDB` 文件夹bin目录下 `D:\note\MongoDB\bin`（这是我的路径），管理员身份运行cmd，然后输入 `mongorestore -h localhost -d leanote --dir D:\note\leanote\mongodb_backup\leanote_install_data`（注意修改为自己的路径）
 4. 导入之后接着输入 `mongo`，再输入`show dbs` 可以看到一些信息 `admin 0.0000G....`
 5. 导入成功的数据已经包含2个用户
```js
user1 username: admin, password: abc123 (管理员, 只有该用户可以管理后台)  
user2 username: demo@leanote.com, password: demo@leanote.com (仅供体验使用)
```
 6. leanote的配置存储在文件 `conf/app.conf` 中,打开这个文件，找到`app.secret`这一行，随便修改后面的一个字符，为什么我也不知道
 7. 进入leanote的bin目录下，管理员身份运行cmd，`run.bat`
 8. 前面都没错的话，现在就可以在浏览器中输入 [http://localhost:9000/](http://localhost:9000/)（直接点击这个就可以）了，就会看到Leanote的登录页面
 9. 这就就完成了
 10. 下载[桌面客户端](http://app.leanote.com/)，找个地方解压，运行程序，选择自建服务器登录
 
        地址：http://localhost:9000
        账号：admin
        密码：abc123
        
    


