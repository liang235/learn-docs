# [nvm](https://github.com/nvm-sh/nvm)
`node` 版本管理器

## 查看 node 版本
| 命令        |      作用      |
| ------------- | :----------- |
| nvm ls | 查看可用的 node 版本 |
| nvm use 18 | 切换 node 版本 |
| nvm alias default 18 | 设置默认 node 版本 |

## 切换 node 版本安装包丢失的问题
- 一般是全局安装包的路径不对，只安装在了当前 `node` 版本的路径下，切换 `node` 版本之后就丢失了

```js
// 1.新建一个全局安装的路径
mkdir ~/.npm-global 

// 2.配置 npm 使用新的路径
npm config set prefix '~/.npm-global'

// 3.打开或者新建~/.profile，（vi ~/.profile）加入下面一行
export PATH=~/.npm-global/bin:$PATH

// 4、更新系统环境变量
source ~/.profile 

// 5.执行完第四部之后，有时候在打开终端还是需要再执行一下才会生效
// 6.打开 ~/.zshrc 这个文件，在 .zshrc 文件里后面添加 source ~/.profile
```

- 不过上面的操作会提示 与 `nvm` 版本不兼容
```
Your user’s .npmrc file (${HOME}/.npmrc)
has a `globalconfig` and/or a `prefix` setting, which are incompatible with nvm.
Run `nvm use --delete-prefix v18.18.2 --silent` to unset it.
```
