---
title: Hexo博客搭建记录
tags:
    - Hexo
    - 动动小手
categories:
    - [动动小手, Hexo]
---

此博客的搭建记录，使用了Hexo，Icarus

<!-- more -->

## 教程

- [Hexo官方文档](https://hexo.io/zh-cn/)
- [Icarus官方文档](https://ppoffice.github.io/hexo-theme-icarus/tags/Icarus%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97/)
- 第三方教程
    - [从零开始免费搭建自己的博客](https://yushuaige.github.io/categories/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/)
    - [活用 Bulma 美化 Icarus 文章](https://www.imaegoo.com/2020/icarus-with-bulma/)
    - [Hexo Icarus 顯示瀏覽量](https://www.howardsnotes.tw/hexo-view-count-how-to-record/)

## 常用命令

```bash
# 编译 & 预览
make

# 创建新文章
hexo new '<file-name>'

# 在新环境上初始化 （假设已经安装好npm）
make init_workspace
```

推送到`main`分支后自动通过github actions部署

## TODOs

- 记忆滚动位置
- 目录栏自动滚动到当前标题
- 目录栏显示上一层标题
- donate 或 ads :)
- CDN
- 同步发布文章到CSDN等其他平台

