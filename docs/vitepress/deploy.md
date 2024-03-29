# 自动部署到 GitHub 和 Gitee
提交代码的时候自动部署到 GitHub 的 GitHub Pages

## 创建 GitHub 仓库并创建 gh-pages 分支
- 在有 `master` 分支的基础上，需要在创建一个 `gh-pages` 的分支，然后我们在仓库的 `setting -> Pages`，就可以调整 `gh pages` 的配置，可以采用分支部署，切换到 `gh-pages`

## GitHub Workflow
- 通过 `github workflow`，可以实现自动化流水线
- 使用社区的各种 `actions` 可以帮我们实现重复的自动化需求
- 比如部署 `gh-pages`，我们可以设置触发时机为 `push` 到主分支的时候触发，这样我们每次合并到主分支，就会自动触发部署了

## GitHub Actions 权限设置
- `actions` 要配置相应的权限，比如默认的权限是只能读仓库的内容，而不能写内容
- 这个权限是可以进行详细的设置的，也可以写在 `workflow` 的配置文件里
- 但是目前我只需要开启读写权限，`Setting -> Actions -> General`，然后我们找到 `workflow` 权限修改就可以了。

## node_modules 缓存设置
- `npm install` 有可能很慢，或者 `rust` 的项目编译在没有缓存的情况下是很慢的
- 社区提供了一些可以缓存每次依赖的 `actions`
- 比如我这里用到了 `pnpm/action-setup@v2` 这个 `action`
- `pnpm` 作为包管理器，`install` 速度比 `npm` 快。也能节省我的本地磁盘空间
- 这个 `actions` 也会同时帮你做好缓存

## 同步到 Gitee
- 获取私钥，复制私钥内容，
```
cat ~/.ssh/id_rsa
```
- 然后在要同步的 Github 仓库中，选择 "Setting" -> "Secrets" -> "New repository secret"，填入 Secret 内容，Name 命名为 "GITEE_PRIVATE_KEY"，Value 为复制的内容
- 还需创建 GITEE_PASSWORD 内容为 Gitee 登录密码

<ZoomImg src="/1691723425489.jpg" />

## 配置文件示例
```yaml
name: deploy-docs-site

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs-github:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v3
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          # 选择要使用的 node 版本
          node-version: 18
          # registry-url: https://registry.npmmirror.com/

      - uses: pnpm/action-setup@v2.2.4
        name: Install pnpm
        id: pnpm-install
        with:
          version: 8
          run_install: false

      - name: Get pnpm store directory
        id: pnpm-cache
        run: |
          echo "::set-output name=pnpm_cache_dir::$(pnpm store path)"
      - uses: actions/cache@v3
        name: Setup pnpm cache
        with:
          path: ${{ steps.pnpm-cache.outputs.pnpm_cache_dir }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-
      - name: Install antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: ni --frozen

      # 运行构建脚本
      - name: Build VitePress site
        run: nr build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v3
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VitePress 的默认输出目录
          build_dir: .vitepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

  docs-gitee:
    needs: docs-github
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}
        with:
          # 注意替换为你的 GitHub 源仓库地址
          source-repo: GitHub 源仓库地址
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: Gitee 目标仓库地址

      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          # 注意替换为你的 Gitee 用户名
          gitee-username: Gitee 用户名
          # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: Gitee 用户名/分支名称
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: gh-pages
```