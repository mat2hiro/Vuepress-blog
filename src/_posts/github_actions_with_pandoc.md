---
category: tech
tags:
  - github actions
  - pandoc
  - docker
date: 2020-01-09
title: GitHub actionsでpandocを使ってpdfをコンパイル、そのままpushする
vssue-title: GitHub actionsでpandocを使ってpdfをコンパイル、そのままpushする
header-image: /img/posts/mtpa.jpg
description: markdownでレポートを書き、gitで差分管理しつつpdfへの自動コンパイル
---

## ポイント

- pandocを用いてmarkdownを（tex経由の）pdfにコンパイルするdocker imageを作る
  - documentclassはltjsbookがいいな
  - 自前のテンプレートを使って様々な体裁に対応
  - bibliographyファイルを用意すれば、参考文献も載せられる

- 上記imageを用いて、自動コンパイル+そのままgit pushするgithub actionsを作る

## 動機
レポートや論文をmarkdownで書きたい。texで消耗もしないし、テキストファイルで書ければ差分管理も楽ちんなので。

ただし、markdownで書いたままの落書きでは人様に見せられないので、体裁を整えて然るべき拡張子のファイルにする必要がある。

pandocでmd->tex->pdfとコンパイルすることにした。  
で、[これをやってくれるdocker image](https://github.com/Kumassy/docker-alpine-pandoc-ja)がある。（今回はbibliographyを載せたいので、このイメージをちょっといじるけどね）

実際使ってみたが  
md書く->pdfにコンパイル->git push  
↑この工程のうち、毎回コンパイル挟むのが面倒になってきた。（すぐ面倒臭がる）

なのでpandocによるコンパイルをgit push後に自動でやってもらう事にした。←今回の本題

## pandocを乗っけたdocker image

基本は以下の記事を読んでください。

[まだまだ Word で消耗してるの？ 大学のレポートを Markdown で書こう （Docker 編）](https://qiita.com/Kumassy/items/ffa752da5f7193c4929c)

ただ、上記イメージにはbibliographyを挿入するのに必要なpandoc-citeprocが入っていなかったので、入れ直すついでにpandocのバージョンも上げた。

<details><summary>pandoc入れ直すDockerfile</summary>

``` Docker
FROM kumassy/alpine-pandoc-ja

WORKDIR /src

COPY ./ /src

RUN ls -la

RUN apk update && \
  apk upgrade && \
  apk add --no-cache git

RUN wget https://github.com/jgm/pandoc/releases/download/2.9.1.1/pandoc-2.9.1.1-linux-amd64.tar.gz
RUN tar xvfz pandoc-2.9.1.1-linux-amd64.tar.gz
RUN cp pandoc-2.9.1.1/bin/* /usr/local/bin/

RUN rm -r /usr/bin/pandoc-crossref \
  && wget https://github.com/lierdakil/pandoc-crossref/releases/download/v0.3.6.1a/linux-pandoc_2_9_1.tar.gz -q -O - | tar xz \
  && mv pandoc-crossref /usr/bin/
```
</details>

これをbuildして、

``` shell-session
# イメージ名my-pandoc-jaとしてビルド
$ docker build ./ -t my-pandoc-ja
```

こんな感じで使うとコンパイルできる。

``` shell-session
# input.mdにreferences.bibを付け足してoutput.pdfに書き出す
$ docker run -it --rm -v `pwd`:/src my-pandoc-ja pandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine=lualatex --template mytemplate.tex -N --top-level-division=chapter  --bibliography=references.bib
```

テンプレートは自前のものを用意するか、以下のようにデフォルトのテンプレートを吐き出して使うかする。

``` shell-session
$ docker run -it --rm -v `pwd`:/src my-pandoc-ja pandoc -D latex > mytemplate.tex
```

おそらく目次以前のページに関するレイアウトをいじることになると思う。（表紙とか概要とか）  
自分は標準テンプレートのmaketitle部分をいじって、表紙にいろんな情報を載せられるようにした。

## github actionsで自動コンパイル

基本は以下リンクを参照。

[ワークフローを設定する - GitHub ヘルプ](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)

pushされたらworkflowを起動させたいので、`on: push` を指定。

### 自前imageつかってコンパイルする

各stepの`uses`メンバにDockerfileが置いてあるディレクトリを指定することで、そのDockerfileをもとにしたイメージをビルドする。

`with.args`はビルドしたイメージでrunしたいコマンドを指定する。

今回の場合は上記イメージにpandocによるコンパイルを任せたいので、

``` yml
    - name: pdf compile
      uses: ./path/to/image/
      with:
        args: pandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine=lualatex --template mytemplate.tex -N --top-level-division=chapter  --bibliography=references.bib
```

こんな感じになる。

### コンパイル結果をgit pushする

このままではただコンパイルしただけになってしまうので、結果をどこかに上げるなりしないといけない。

今回はそのままgit pushすることにした。  
（gitに無闇にバイナリを乗せるのもどうかと思うので、多分クラウドストレージにアップロードするなりした方がいい。）

<details><summary>gitにログインして変更をpushするコマンド</summary>

``` shell
# gitユーザー設定
git config --global user.name "your-git-username"
git config --global user.email "your-git-email"

# 追跡
git remote set-url origin https://your-git-username:${GITHUB_TOKEN}@github.com/your-repository.git

git checkout -b master

#
#  なんやかんややる
#

# git push
git status
git add .
git commit -m '[updater] update.'
git push origin HEAD
```
</details>

### ２つをまとめる

まとめて以下のようなshを作った。

``` shell
# gitユーザー設定
echo "set git config."
git config --global user.name "your-git-username"
git config --global user.email "your-git-email"

# 追跡
git remote set-url origin https://your-git-username:${GITHUB_TOKEN}@github.com/your-repository.git

git checkout -b master

# pandocでpdfコンパイル
echo "build pdf."
pandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine=lualatex --template mytemplate.tex -N --top-level-division=chapter -B abstract.tex --bibliography=references.bib

# git push
echo "git push."
git status
git add output.tex
git commit -m '[updater] update pdf.'
git push origin HEAD
```

やっていることは、
1. gitにログイン
2. git追跡開始
3. pdfコンパイル
4. コンパイル結果のcommit, push

該当stepの`with.args`に、このshを実行するようにコマンドを渡せばok.

``` yml
    - name: git update step
      uses: ./.github/images/
      with:
        args: sh ./lib/update.sh
```

### 環境変数

出力結果などのファイル名を変えるのが面倒なので、`env`メンバに然るべき環境変数を置くことで出力ファイル名などの管理を簡単にする。

## できた

[このリポジトリ](https://github.com/mat2hiro/write-report-with-markdown)に完成版があります。

各人のリポジトリで試してみてください。  
pushしたら勝手に後追いでコンパイルしたpdfがpushされるはずです。

## future works

コンパイル結果をgitにpushするのではなく、適当なクラウドストレージにアップロードしたい。google driveでいいかな

また、workflow自体はイメージを毎回ビルドするので遅い。早くするには
- イメージを軽くしてパッケージレポジトリに上げる（多分texのみ入っているalpineイメージでも事足りるはず）
- キャッシュを使う（イメージのキャッシュってどうすればいいんだろう）

といいと思います（投げやり）

遅いなら遅いで、コンパイルできたら通知するようにしてもいいかも
（slack連携なら秒でできるはず）
