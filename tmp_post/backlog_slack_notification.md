---
category: tech
tags:
  - backlog
  - slack bot
  - google cloud functions
date: 2020-01-16
title: backlogの通知をslackに流すbot
vssue-title: backlogの通知をslackに流すbot
header-image: /img/posts/bsn.jpg
description: backlogに追加した課題をslackに通知する
---

## ポイント

- backlogのwebhook機能を使って、課題作成、更新などの通知をslackに流す
- Google cloud functionsで運用
<!-- - circleciによる自動デプロイ付き -->

## 動機

slackでチャットして、backlogでタスク管理や要件のスタックをしている。

基本slackのチャンネルにいるので、タスクが割り振られたときや更新されたときはslackで確認したい。

公式の連携サービスもあるが、もう少し機能を限定してカスタマイズしたかったのでbotを作った。

## 要件

各backlogプロジェクトの通知を流すslackチャンネルが存在し、課題追加などの通知を（知らせたい人へのメンション付きで）そのチャンネルに流したい

尚、slackアカウントのメールアドレスとnulabアカウントのメールアドレスは同一のものとする

backlogのwebhookへの登録も手間なので、通知流したいチャンネルからのスラッシュコマンド一発でwebhookの登録もしたい

## できた

このリポジトリ

### 導入方法

1. slack app

    slack appの追加、slash commandの追加を参照  
    appのトークンと、slash commandの秘密鍵をメモっとく

2. backlog

    自身の属するbacklog groupのurlと、backlog api tokenをメモ

3. Google cloud functions

    上記リポジトリをcloneして、READMEのとおりにgoogle cloud functionsにデプロイする  
    この際の環境変数はさっきメモしたやつら  
    デプロイしたら、トリガーとなるurlをメモ

4. slack

    先程追加したslash commandのurlに3.のurl+/setupを記入

これで導入は完了

### 使い方

通知を連携したいチャンネルにslack appを招待し、スラッシュコマンドを実行する

すると、チャンネル名と一致する名前のプロジェクトに、通知をこのチャンネルに飛ばすような設定がなされる

あとはbacklogの該当するプロジェクトで課題追加したりすると通知メッセが飛ぶのが確認できる

## 実装

### backlog -> slack (via webhook)

基本はこのコードを使っている

これをいくらかカスタマイズして、

1. リクエストのクエリによって通知メッセージを飛ばすチャンネルを変える
2. 通知したいユーザーにメンションを付ける
3. 課題の状態に合わせたメッセージの色付けをする
4. 課題の状態が変化したことを通知する場合は、変化前->変化後のように表示する

機能を追加したり、node slack sdkからslack apiを叩くようにしたりした。（エラーが減る）

結果（関数名bl2sl）

## slack -> backlog webhook setup (via slash command)

まあよくあるスラッシュコマンドのやつ

コマンドからリクエストが飛んだら、

1. リクエスト送信元が認証済みのものか確認
2. slackのチャンネル名から該当のbacklogプロジェクトを探す
3. backlog apiを叩いてプロジェクトにwebhookを登録

上記をしている。（関数名setup）

## future works

backlogではbold表記が*2個囲みだったりして、slackとずれているので、そのへんを置換したい（正規表現で頑張る他ないか）

また、機能はいろいろ調整したいが、その都度functions deployするのも面倒なので、デプロイ部分はciに丸投げしたい。<!-- （→やった） -->

あと、リクエスト元がbacklogだったりslackだったりするので、functionsを別々にしたほうがいいのかな
