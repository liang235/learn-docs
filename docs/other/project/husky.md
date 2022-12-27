# husky
- [husky](https://github.com/typicode/husky): 用来管理 git hook 的工具
- 虽然上面已经配置好了 `eslint`、`preitter` 与 `stylelint`，但是还是存在以下问题
- 对于不使用 `vscode` 的，或者没有安装 `eslint`、`preitter` 与 `stylelint` 插件的同学来说，就不能实现在保存的时候自动的去修复与和格式化代码
- 这样提交到 `git` 仓库的代码还是不符合要求的。因此需要引入强制的手段来保证提交到 `git` 仓库的代码时符合我们的要求的
- `husky` 是一个用来管理 `git hook` 的工具，`git hook` 即在我们使用 `git` 提交代码的过程中会触发的钩子

## 安装
```
pnpm add husky -D
```

## 在 package.json 中的 script 中添加一条脚本命令
``` js
{
    "scripts": {
        "prepare": "husky install"
    },
}
```

- 该命令会在 `pnpm install` 之后运行，这样其他克隆该项目的同学就在装包的时候就会自动执行该命令来安装 `husky`。这里我们就不重新执行 `pnpm install了`
- 直接执行 `pnpm prepare`，这个时候你会发现多了一个 `.husky` 目录
- 然后使用 `husky` 命令添加 `pre-commit` 钩子，运行

```
pnpm husky add .husky/pre-commit "pnpm lint:eslint && pnpm format && pnpm lint:stylelint"
```

- 执行完上面的命令后，会在 `.husky` 目录下生成一个 `pre-commit` 文件
``` js
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 格式化并提交代码
pnpm run pnpm format && pnpm run lint:eslint && pnpm run lint:stylelint
```

- 现在当我们执行 `git commit` 的时候就会执行 `run pnpm format` 与 `pnpm run lint:eslint` 与 `pnpm run lint:stylelint`，当这三条命令出现报错，就不会提交成功。以此来保证提交代码的质量和格式