---
category: tech
tags:
  - vue.js
  - vuepress
  - github pages
  - github actions
date: 2020-02-16
title: VuePress → GitHub Actions → GitHub Pagesで個人ブログ作る
vssue-title: VuePress → GitHub Actions → GitHub Pagesで個人ブログ作る
header-image: /img/posts/vbh.jpg
description: VuePressでブログテーマをカスタマイズして、GitHub Pagesで公開するまで（GitHub Actions での自動デプロイ付き）
---

## ポイント

- VuePressで個人ブログを作った
- GitHub Pagesで静的ページホスティング
- GitHub Actionsで自動ビルド、push

## 動機

個人ブログを書きたくなった。特にネタはないけど。  
markdownで記事が書けるタイプのウェブサイトビルダーなら[Hugo](https://gohugo.io/)とか[Hexo](https://hexo.io/)とかあるけど、Vue.jsが好きなので、そのプラグインである[VuePress](https://vuepress.vuejs.org/)を導入することにした。

ホスティングサービスは今のところネタも無いし多くのアクセス数も見込めないしということで、手っ取り早くGitHub Pagesで。

で、VuePressはHugoと比べてビルドがそこまで爆速ではないし、毎回記事修正するたびにビルドするのも手間なのでGitHub Actionsで自動化したくなった。

## VuePressでサイト作る

[Introduction | VuePress](https://vuepress.vuejs.org/guide/#how-it-works)

基本は公式のドキュメントどおりに作れば出来ます。説明終わり。

### サイトテーマ

サードパーティが提供しているいろんなサイトテーマがある。

このサイトは[meteorlxy](https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/27/theme-guide-en.html)を基本に作られているが、ところどころテーマのコンポーネントをカスタマイズした。

例えば記事本文上下の記事メタ情報領域や共有ボタン、コメント機能の埋め込みとか。また中華フォントから別のフォントも変更したり、翻訳ファイルを一部カスタマイズした。

以下を参考

- テーマコンポーネントのカスタマイズ
  - [Theme Inheritance](https://vuepress.vuejs.org/theme/inheritance.html#theme-inheritance)
- 翻訳のカスタマイズ
  - [Translate to your own language](https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/27/theme-guide-en.html#translate-to-your-own-language)

### ブログに必要そうなプラグインを導入

- seo 
  - [lorisleiva/vuepress-plugin-seo](https://github.com/lorisleiva/vuepress-plugin-seo)
- sitemap
  - [ekoeryanto/vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)
- feed
  - [webmasterish/vuepress-plugin-feed](https://github.com/webmasterish/vuepress-plugin-feed)
- analytics
  - [@vuepress/plugin-google-analytics](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)

### テーマにfont-awesomeを使う

Vueでfont-awesomeを使うにはコンポーネントを用意するのが良さそう。別記事でまとめる予定。

### markdownで記事を書く

[markdown-it](https://github.com/markdown-it/markdown-it)が入っているので、基本はその記法でok.

さらにmarkdownで書いた記事の中にVueコンポーネントを埋め込んだり出来るし、独自のカスタムコンテナを用意できる。

- markdown記事内でVueコンポーネントを使う
  - [Using Vue in Markdown](https://vuepress.vuejs.org/guide/using-vue.html#using-vue-in-markdown)
- カスタムコンテナを作る
  - [vuepress-plugin-container](https://vuepress.github.io/en/plugins/container/)

## GitHub Pagesで公開

[GitHub Pages について](https://help.github.com/ja/github/working-with-github-pages/about-github-pages)

公式ドキュメントを参考にして、ビルド内容をdocsに吐き出して、githubのレポジトリで設定したらok

ねんがんの　こじんぶろぐを　かいせつしたぞ！

## GitHub Actionsで自動ビルド、push

workflowはこんな感じ。

<details><summary>.github/workflows/main.yml</summary>

``` yml
on:
  push:
    branches:
    - develop

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
    - name: Get yarn cache
      id: yarn-cache
      run: echo "::set-output name=dir::$(yarn cache dir)"
    - uses: actions/cache@v1
      with:
        path: ${{ steps.yarn-cache.outputs.dir }}
        key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
        restore-keys: |
          ${{ runner.os }}-yarn-
    - name: Install Dependancies
      run: yarn --frozen-lockfile
    - name: Login To Github
      run: ./lib/git-login.sh
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        GITHUB_BRANCH: "master"
        GITHUB_USERNAME: "your-github-name"
        GITHUB_USEREMAIL: "your-github-email"
    - name: build to docs
      run: yarn build && echo 'your-domain' > docs/CNAME
    - name: Push To Github
      run: ./lib/git-push.sh
```
</details>

### 手順の概要

1. node-setup
2. nodeモジュールのキャッシュを探る
3. nodeモジュールインストール
4. gitログイン

   <details><summary>git-login.sh</summary>

   ``` bash
   echo "set git config."
   git config --global user.name "${GITHUB_USERNAME}"
   git config --global user.email "${GITHUB_USEREMAIL}"

   git remote set-url origin https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git

   git checkout -b ${GITHUB_BRANCH}
   git branch -a

   ls -la
   ```
   </details>

5. サイトをビルド
6. dist以下を追跡し、`master` branchにforce push

   <details><summary>git-push.sh</summary>

   ``` bash
   echo "git push."
   git status
   git add ./docs
   git commit -m '[updater] update pdf.'
   git push -f origin HEAD
   ```
   </details>

GitHub Pagesは主ブランチの内容をホスティングするみたいなので、基本はmaster以外のブランチで作業して、masterにビルド内容をforce pushすることになった。致し方なし。

ともあれ、これでmdで記事書いてpushするだけで自動的にホスティングするようになった。めでたい。

## future works

このサイトは随時テーマやコンテナをカスタマイズする予定。

あとGitHub Pagesにこだわる必要もないので、そのうちホスティングサービスを別のに変えるかもしれない。
