(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{293:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"ポイント"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ポイント"}},[t._v("#")]),t._v(" ポイント")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("pandocを用いてmarkdownを（tex経由の）pdfにコンパイルするdocker imageを作る")]),t._v(" "),a("ul",[a("li",[t._v("documentclassはltjsbookがいいな")]),t._v(" "),a("li",[t._v("自前のテンプレートを使って様々な体裁に対応")]),t._v(" "),a("li",[t._v("bibliographyファイルを用意すれば、参考文献も載せられる")])])]),t._v(" "),a("li",[a("p",[t._v("上記imageを用いて、自動コンパイル+そのままgit pushするgithub actionsを作る")])])]),t._v(" "),a("h2",{attrs:{id:"動機"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#動機"}},[t._v("#")]),t._v(" 動機")]),t._v(" "),a("p",[t._v("レポートや論文をmarkdownで書きたい。texで消耗もしないし、テキストファイルで書ければ差分管理も楽ちんなので。")]),t._v(" "),a("p",[t._v("ただし、markdownで書いたままの落書きでは人様に見せられないので、体裁を整えて然るべき拡張子のファイルにする必要がある。")]),t._v(" "),a("p",[t._v("pandocでmd->tex->pdfとコンパイルすることにした。"),a("br"),t._v("\nで、"),a("a",{attrs:{href:"https://github.com/Kumassy/docker-alpine-pandoc-ja",target:"_blank",rel:"noopener noreferrer"}},[t._v("これをやってくれるdocker image"),a("OutboundLink")],1),t._v("がある。（今回はbibliographyを載せたいので、このイメージをちょっといじるけどね）")]),t._v(" "),a("p",[t._v("実際使ってみたが"),a("br"),t._v("\nmd書く->pdfにコンパイル->git push"),a("br"),t._v("\n↑この工程のうち、毎回コンパイル挟むのが面倒になってきた。（すぐ面倒臭がる）")]),t._v(" "),a("p",[t._v("なのでpandocによるコンパイルをgit push後に自動でやってもらう事にした。←今回の本題")]),t._v(" "),a("h2",{attrs:{id:"pandocを乗っけたdocker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pandocを乗っけたdocker-image"}},[t._v("#")]),t._v(" pandocを乗っけたdocker image")]),t._v(" "),a("p",[t._v("基本は以下の記事を読んでください。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://qiita.com/Kumassy/items/ffa752da5f7193c4929c",target:"_blank",rel:"noopener noreferrer"}},[t._v("まだまだ Word で消耗してるの？ 大学のレポートを Markdown で書こう （Docker 編）"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("ただ、上記イメージにはbibliographyを挿入するのに必要なpandoc-citeprocが入っていなかったので、入れ直すついでにpandocのバージョンも上げた。")]),t._v(" "),a("details",[a("summary",[t._v("pandoc入れ直すDockerfile")]),t._v(" "),a("div",{staticClass:"language-Docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" kumassy/alpine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ja\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /src\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ./ /src\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" ls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("la\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apk update && \\\n  apk upgrade && \\\n  apk add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache git\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" wget https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/jgm/pandoc/releases/download/2.9.1.1/pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2.9.1.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" tar xvfz pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2.9.1.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" cp pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2.9.1.1/bin/* /usr/local/bin/\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("r /usr/bin/pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref \\\n  && wget https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/lierdakil/pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref/releases/download/v0.3.6.1a/linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pandoc_2_9_1.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("O "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" tar xz \\\n  && mv pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref /usr/bin/\n")])])])]),t._v(" "),a("p",[t._v("これをbuildして、")]),t._v(" "),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("イメージ名my-pandoc-jaとしてビルド")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("docker build ./ -t my-pandoc-ja")])]),t._v("\n")])])]),a("p",[t._v("こんな感じで使うとコンパイルできる。")]),t._v(" "),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("input.mdにreferences.bibを付け足してoutput.pdfに書き出す")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("docker run -it --rm -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(":/src my-pandoc-ja pandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lualatex --template mytemplate.tex -N --top-level-division"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chapter  --bibliography"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("references.bib")])]),t._v("\n")])])]),a("p",[t._v("テンプレートは自前のものを用意するか、以下のようにデフォルトのテンプレートを吐き出して使うかする。")]),t._v(" "),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("docker run -it --rm -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(":/src my-pandoc-ja pandoc -D latex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mytemplate.tex")])]),t._v("\n")])])]),a("p",[t._v("おそらく目次以前のページに関するレイアウトをいじることになると思う。（表紙とか概要とか）"),a("br"),t._v("\n自分は標準テンプレートのmaketitle部分をいじって、表紙にいろんな情報を載せられるようにした。")]),t._v(" "),a("h2",{attrs:{id:"github-actionsで自動コンパイル"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actionsで自動コンパイル"}},[t._v("#")]),t._v(" github actionsで自動コンパイル")]),t._v(" "),a("p",[t._v("基本は以下リンクを参照。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/configuring-a-workflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("ワークフローを設定する - GitHub ヘルプ"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("pushされたらworkflowを起動させたいので、"),a("code",[t._v("on: push")]),t._v(" を指定。")]),t._v(" "),a("h3",{attrs:{id:"自前imageつかってコンパイルする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自前imageつかってコンパイルする"}},[t._v("#")]),t._v(" 自前imageつかってコンパイルする")]),t._v(" "),a("p",[t._v("各stepの"),a("code",[t._v("uses")]),t._v("メンバにDockerfileが置いてあるディレクトリを指定することで、そのDockerfileをもとにしたイメージをビルドする。")]),t._v(" "),a("p",[a("code",[t._v("with.args")]),t._v("はビルドしたイメージでrunしたいコマンドを指定する。")]),t._v(" "),a("p",[t._v("今回の場合は上記イメージにpandocによるコンパイルを任せたいので、")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pdf compile\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./path/to/image/\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pandoc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("F pandoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref input.md "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o output.pdf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pdf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine=lualatex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template mytemplate.tex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("N "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("division=chapter  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bibliography=references.bib\n")])])]),a("p",[t._v("こんな感じになる。")]),t._v(" "),a("h3",{attrs:{id:"コンパイル結果をgit-pushする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コンパイル結果をgit-pushする"}},[t._v("#")]),t._v(" コンパイル結果をgit pushする")]),t._v(" "),a("p",[t._v("このままではただコンパイルしただけになってしまうので、結果をどこかに上げるなりしないといけない。")]),t._v(" "),a("p",[t._v("今回はそのままgit pushすることにした。"),a("br"),t._v("\n（gitに無闇にバイナリを乗せるのもどうかと思うので、多分クラウドストレージにアップロードするなりした方がいい。）")]),t._v(" "),a("details",[a("summary",[t._v("gitにログインして変更をpushするコマンド")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitユーザー設定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-username"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-email"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追跡")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://your-git-username:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_TOKEN}")]),t._v("@github.com/your-repository.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  なんやかんややる")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[updater] update.'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD\n")])])])]),t._v(" "),a("h3",{attrs:{id:"２つをまとめる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#２つをまとめる"}},[t._v("#")]),t._v(" ２つをまとめる")]),t._v(" "),a("p",[t._v("まとめて以下のようなshを作った。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitユーザー設定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set git config."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-username"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-email"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追跡")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://your-git-username:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_TOKEN}")]),t._v("@github.com/your-repository.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pandocでpdfコンパイル")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build pdf."')]),t._v("\npandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lualatex --template mytemplate.tex -N --top-level-division"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chapter -B abstract.tex --bibliography"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("references.bib\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git push."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" output.tex\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[updater] update pdf.'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD\n")])])]),a("p",[t._v("やっていることは、")]),t._v(" "),a("ol",[a("li",[t._v("gitにログイン")]),t._v(" "),a("li",[t._v("git追跡開始")]),t._v(" "),a("li",[t._v("pdfコンパイル")]),t._v(" "),a("li",[t._v("コンパイル結果のcommit, push")])]),t._v(" "),a("p",[t._v("該当stepの"),a("code",[t._v("with.args")]),t._v("に、このshを実行するようにコマンドを渡せばok.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git update step\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./.github/images/\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sh ./lib/update.sh\n")])])]),a("h3",{attrs:{id:"環境変数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#環境変数"}},[t._v("#")]),t._v(" 環境変数")]),t._v(" "),a("p",[t._v("出力結果などのファイル名を変えるのが面倒なので、"),a("code",[t._v("env")]),t._v("メンバに然るべき環境変数を置くことで出力ファイル名などの管理を簡単にする。")]),t._v(" "),a("h2",{attrs:{id:"できた"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#できた"}},[t._v("#")]),t._v(" できた")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mat2hiro/write-report-with-markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("このリポジトリ"),a("OutboundLink")],1),t._v("に完成版があります。")]),t._v(" "),a("p",[t._v("各人のリポジトリで試してみてください。"),a("br"),t._v("\npushしたら勝手に後追いでコンパイルしたpdfがpushされるはずです。")]),t._v(" "),a("h2",{attrs:{id:"future-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-works"}},[t._v("#")]),t._v(" future works")]),t._v(" "),a("p",[t._v("コンパイル結果をgitにpushするのではなく、適当なクラウドストレージにアップロードしたい。google driveでいいかな")]),t._v(" "),a("p",[t._v("また、workflow自体はイメージを毎回ビルドするので遅い。早くするには")]),t._v(" "),a("ul",[a("li",[t._v("イメージを軽くしてパッケージレポジトリに上げる（多分texのみ入っているalpineイメージでも事足りるはず）")]),t._v(" "),a("li",[t._v("キャッシュを使う（イメージのキャッシュってどうすればいいんだろう）")])]),t._v(" "),a("p",[t._v("といいと思います（投げやり）")]),t._v(" "),a("p",[t._v("遅いなら遅いで、コンパイルできたら通知するようにしてもいいかも\n（slack連携なら秒でできるはず）")])])}),[],!1,null,null,null);s.default=e.exports}}]);