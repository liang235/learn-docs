## 部署到 GitHub
提交代码的时候自动部署到 GitHub 的 GitHub Pages

### 创建 gh-pages 分支
- 需要创建一个 `gh-pages` 的分支(可以用 [gh-pages](https://www.npmjs.com/package/gh-pages) 这个命令行，自动创建分支部署本地的目录)
- 然后我们在仓库的 `setting -> Pages`
- 就可以调整 `gh pages` 的配置，可以采用分支部署，切换到 `gh-pages`

### 非根目录部署
- `github pages` 开启后，如果我们创建一个`<USERNAME>.github.io`的仓库的时候，默认的地址是 `https://<USERNAME>.github.io/`
- 但是当你其他仓库要用 `github pages` 的时候，默认就是 `https://<USERNAME>.github.io/<REPO>/`，所以我们需要配置一下，把起始路由和静态资源的起始路径调整
- 我们把 `base` 和 `publicPath` 都设置成 `/<REPO>/` 就可以了
- 还有一个选择就是你有一个域名，`gh pages` 也是能自定义域名的

### 部署工具
- [gh-pages](https://www.npmjs.com/package/gh-pages) 这是一个可以帮你发布 `gh-pages` 的命令行工具
- 因为就是从你本地调用命令安装的，所以也不会有权限的问题
```
pnpm install gh-pages --save-dev
```
- 我们执行下面的命令就能把指定目录推送到仓库的 `gh-pages` 分支
```
gh-pages -d dist
```

### GitHub Workflow
- 通过 `github workflow`，可以实现自动化流水线
- 使用社区的各种 `actions` 可以帮我们实现重复的自动化需求
- 比如部署 `gh-pages`，我们可以设置触发时机为 `push` 到主分支的时候触发，这样我们每次合并到主分支，就会自动触发部署了

### GitHub Actions 权限设置
- `actions` 要配置相应的权限，比如默认的权限是只能读仓库的内容，而不能写内容
- 这个权限是可以进行详细的设置的，也可以写在 `workflow` 的配置文件里
- 但是目前我只需要开启读写权限，`Setting -> Actions -> General`，然后我们找到 `workflow` 权限修改就可以了。

### node_modules 缓存设置
- `npm install` 有可能很慢，或者 `rust` 的项目编译在没有缓存的情况下是很慢的
- 社区提供了一些可以缓存每次依赖的 `actions`
- 比如我这里用到了 `pnpm/action-setup@v2` 这个 `action`
- `pnpm` 作为包管理器，`install` 速度比 `npm` 快。也能节省我的本地磁盘空间
- 这个 `actions` 也会同时帮你做好缓存

### 配置文件示例
- 创建 `gh-pages.yml` 到 `.github/workflows` 目录，这样这个目录推送到 `github`，就会自动执行里面的配置
```
name: github pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8.6.2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
