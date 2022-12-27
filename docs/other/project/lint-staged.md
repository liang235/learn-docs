# lint-staged
- [lint-staged](https://github.com/okonet/lint-staged): 对 git 暂存的文件进行 lint 检查
- 接入 `husky` 之后大部分代码自动校验以及代码拦截都已经完成了，一般小型项目已经足够使用。但对于大型项目而言，新的问题又出现了，如果项目中代码特别特别的多，但本次修改只是改了其中一两个文件，提交代码的时候会怎么样呢？很显然，`husky` 会将全部代码都检查一遍，理论上而言，以前的代码默认都是校验完成的（除非是在项目中间加的 `husky`，或者有人提交的时候跳过了校验），所以本质上只需要校验本次修改之后的代码是否符合 `lint` 规则就好，这个，就是 `lint-staged` 的作用所在

## 安装
```
pnpm add lint-staged -D
```

## 在 package.json 中的 script 中添加一条脚本命令
``` js
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "format": "prettier --write \"./**/*.{html,css,js,cjs,vue,.sass,json,md}\"",
        "lint:eslint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --cache --fix",
        "lint:stylelint": "stylelint src/**/*.{css,scss,vue} --cache --fix",
        "lint:lint-staged": "lint-staged",
        "prepare": "husky install"
    },
    "lint-staged": {
        "*.{js,jsx,ts,tsx}": [
            "eslint --fix",
            "prettier --write"
        ],
        "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
            "prettier --write--parser json"
        ],
        "package.json": [
            "prettier --write"
        ],
        "*.vue": [
            "eslint --fix",
            "prettier --write",
            "stylelint --fix"
        ],
        "*.{css,scss,less,styl,html}": [
            "stylelint --fix",
            "prettier --write"
        ],
        "*.md": [
            "prettier --write"
        ]
    }
}
```

- 修改 pre-commit
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 格式化并提交代码
pnpm run lint:lint-staged
```