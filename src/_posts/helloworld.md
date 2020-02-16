---
category: hello
tags:
  - world
date: 2019-07-30
title: Hello, VuePress!!
vssue-title: Hello, VuePress!!
header-image: /img/posts/theheader.jpeg
description: vuepress + github pages による個人ブログ作成
---

vuepress + github pages による個人ブログ作成

<!-- more -->

こちらに公開過程をまとめました

<OGPCard
  style="margin:0 auto 1em"
  url="https://mat2.net/posts/2020/02/17/vuepress-blog-hosting.html"
  :defaults="{
    title:'VuePress → GitHub Actions → GitHub Pagesで個人ブログ作る | mat2\'s tech blog',
    description: 'VuePressでブログテーマをカスタマイズして、GitHub Pagesで公開するまで（GitHub Actions での自動デプロイ付き）',
    image: ''
  }"
></OGPCard>

## テーマ

[vuepress-theme-meteorlxy](https://vuepress-theme-meteorlxy.meteorlxy.cn/)
- これをカスタマイズする予定

## 作成手順

1. vuepressのプロジェクト作る
  - つくった
2. github pages登録する
  - 登録した
3. テーマをカスタマイズ
  - 投稿ページをちょっと変えた
  - rss feed対応
    - 少なくともatomには対応した
  - sns share button作った
    - ogpはプラグインで対応
  - 固定ページ的なものも用意した
4. ドメインとってSSL化
  - mat2.netで取った

## いろいろ

**bold**

*italic*

> quote
>> nest

`print(str(2))`

***

``` js{2}
  while(trUe) {
    alert('hoge');
  }
```

::: tip
tips
:::

::: warning
warning
:::

::: danger
danger
:::

[Google](https://www.google.co.jp/)

![プロフィール画像](https://pbs.twimg.com/profile_images/1092782177471741952/OnHQf9H2_400x400.jpg)
