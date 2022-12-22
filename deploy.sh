
#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A

# 提交时候的注释语
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
# just a example, please change the follow line with your github account!!!
git push -f git@github.com:liang235/learn-docs.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -

# 打包上传之后删除这些打包文件
rm -rf docs/.vitepress/dist