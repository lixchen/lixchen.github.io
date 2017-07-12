## Node.js 安装

因为Node.js的版本很多，而且更新速度快，我们需要经常切换不同版本，所以我们需要通过`nvm`来安装Node.js。

下面是安装步骤:

 1. 下载 `nvm` [windows版](https://github.com/coreybutler/nvm-windows/releases), 选择第一个 `[nvm-noinstall.zip]`

 2. 选择好路径解压,我的路径是 `D:\dev\nvm` ,此时该目录下有5个文件 `elevate.cmd`、`elevate.vbs`、`install.cmd`、`LICENSE`、`nvm.exe`

 3. 以管理员方式打开 `install.cmd`, 然后直接敲回车,会显示 `成功: 指定的值以保存`, 同时还会跳出来一个txt文件, 该文件会出现在D盘的根目录下(如果你安装在C盘, 那就是在C盘的根目录下), 将该文件剪切到 `nvm` 目录下

 4. 修改 `settings.txt` 文件内容为
```js
root: D:\dev\nvm
path: D:\dev\nodejs 
arch: 64 
proxy: none
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/ 
```

 5. 设置环境变量, 在第三步点击`install.cmd`的时候会环境变量的`系统变量`中生成两个变量`NVM_HOME` `NVM_SYMLINK` 打开环境变量(计算机-->右键属性-->高级系统设置-->环境变量)删除这两个变量(检查下有时候系统变量中的path变量后面也会自动添加`D:\dev\nvm`或`D:\dev\nodejs`,如果有就删掉), 然后在上面的用户变量那里添加两个变量`NVM_HOME` `NVM_SYMLINK`, 并且将 `%NVM_HOME%;%NVM_SYMLINK%;` 添加到path变量后面(注意新加的变量要用分号与以前的内容隔开),如果没有path变量,自己新建一个.
```js
变量名:NVM_HOME  变量值:D:\dev\nvm
变量名:NVM_SYMLINK  变量值:D:\dev\nodejs
```
 6. 上一步完成后, 管理员身份打开cmd窗口输入命令: `nvm`, 就可以看到nvm的一些信息.
 7. 现在就可以安装Node.js了, 继续输入命令 `nvm install latest`, 会开始下载Node.js的最新版本以及npm(默认安装的是64位的,如果电脑为32位,那么在安装的时候需要在后面添加32,比如: `nvm install 7.8.0 32`)
 8. 等待安装完成之后, 输入命令 `nvm use x.x.x` x.x.x(为版本号)
 9. 此时在 `D:\dev` 目录下会出现一个nodejs的快捷方式, Node.js的安装就完成了.需要哪个版本可以直接在命令行输入 `nvm install x.x.x` 来进行安装

## npm安装

因为我们可能用到几个版本的Node.js, 所以安装一个全局的npm更好.
下面是安装步骤:

 1. 打开cmd命令行,输入命令 `npm config set prefix "d:\dev\nvm\npm"`, 这是配置npm的全局安装路径
 2. 这时用户目录下会出现一个 `.npmrc` 文件, 里面的内容为 `prefix=d:\dev\nvm\npm`
 3. 配置npm的环境变量, 变量名: `NPM_HOME` 变量值: `D:dev\nvm\npm`, 再将变量名添加到path变量中
 3. 现在输入命令 `npm install npm -g`, 就可以安装一个全局的 `npm`, 以后我们在安装其他包的时候加上 `-g` 就可以全局安装了

 
