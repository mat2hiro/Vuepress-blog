---
category: note
tags:
  - Android
  - Kotlin
  - 和暦表示
date: 2021-02-09
title: 自分的Android和暦表示プラクティス
vssue-title: 自分的Android和暦表示プラクティス
header-image: /img/posts/ajed.jpg
description: LocalDateTimeからSimpleDateFormatを用いて和暦表示に変換する
---

## ポイント

- Android 8以上で使える，令和表示に対応した和暦フォーマッターを作るための備忘録
- ICU4jv64.2のSimpleDateFormatを使う

## 動機

Androidアプリケーションで和暦表示が必要になったが，標準のAPIで「令和」対応するにはAndroid v11が必要．Androidのシェアはv9とか10とかが多いので，標準APIで「令和」と表示できないことが困る．

## 解決策

IBM社製ライブラリのICUでは，[v64.2](http://site.icu-project.org/download/64)から令和に対応している．icu.SimpleDateFormatを用いて和暦をフォーマットすることで「令和」表示を可能にした．まずはapp levelのdependenciesに
```
    implementation 'com.ibm.icu:icu4j:64.2'
```
を追加．

また，SimpleDateFormatはjava.util.Dateやjava.util.Calendarを引数にフォーマットするが，LocalDateTimeを使っていたので[Dateへの変換](https://qiita.com/riekure/items/d83d4ea5d8a19a267453#localdatetime--javautildate)も必要になる．

例えば↓こんなクラスを用意してあげればいい．
```Kotlin
class JPDateFormatter(formatStr: String) {
    private val dateFormatter = SimpleDateFormat(formatStr, Locale("ja", "JP", "JP"))

    private fun toDate(localDateTime: LocalDateTime?): Date? {
        val zone = ZoneId.systemDefault()
        val zonedDateTime = ZonedDateTime.of(localDateTime, zone)
        val instant = zonedDateTime.toInstant()
        return Date.from(instant)
    }

    fun format(ldt: LocalDateTime): String {
        return dateFormatter.format(toDate(ldt))
    }
}
```

例えば

```Kotlin
val jpFormatter = JPDateFormatter(""GGGGy年M月d日（E）"")

val formatted = jpFormatter.format(LocalDateTime.of(2021, 2, 9))
```

とかすると，`"令和3年2月9日（火）"` が得られる．
