(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{421:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"ポイント"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ポイント"}},[t._v("#")]),t._v(" ポイント")]),t._v(" "),a("ul",[a("li",[t._v("VuePressで個人ブログを作った")]),t._v(" "),a("li",[t._v("GitHub Pagesで静的ページホスティング")]),t._v(" "),a("li",[t._v("GitHub Actionsで自動ビルド、push")])]),t._v(" "),a("h2",{attrs:{id:"動機"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#動機"}},[t._v("#")]),t._v(" 動機")]),t._v(" "),a("p",[t._v("個人ブログを書きたくなった。特にネタはないけど。"),a("br"),t._v("\nmarkdownで記事が書けるタイプのウェブサイトビルダーなら"),a("a",{attrs:{href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hugo"),a("OutboundLink")],1),t._v("とか"),a("a",{attrs:{href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo"),a("OutboundLink")],1),t._v("とかあるけど、Vue.jsが好きなので、そのプラグインである"),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),a("OutboundLink")],1),t._v("を導入することにした。")]),t._v(" "),a("p",[t._v("ホスティングサービスは今のところネタも無いし多くのアクセス数も見込めないしということで、手っ取り早くGitHub Pagesで。")]),t._v(" "),a("p",[t._v("で、VuePressはHugoと比べてビルドがそこまで爆速ではないし、毎回記事修正するたびにビルドするのも手間なのでGitHub Actionsで自動化したくなった。")]),t._v(" "),a("h2",{attrs:{id:"vuepressでサイト作る"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepressでサイト作る"}},[t._v("#")]),t._v(" VuePressでサイト作る")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/#how-it-works",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction | VuePress"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("基本は公式のドキュメントどおりに作れば出来ます。説明終わり。")]),t._v(" "),a("h3",{attrs:{id:"サイトテーマ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#サイトテーマ"}},[t._v("#")]),t._v(" サイトテーマ")]),t._v(" "),a("p",[t._v("サードパーティが提供しているいろんなサイトテーマがある。")]),t._v(" "),a("p",[t._v("このサイトは"),a("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/27/theme-guide-en.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteorlxy"),a("OutboundLink")],1),t._v("を基本に作られているが、ところどころテーマのコンポーネントをカスタマイズした。")]),t._v(" "),a("p",[t._v("例えば記事本文上下の記事メタ情報領域や共有ボタン、コメント機能の埋め込みとか。また中華フォントから別のフォントに変更したり、翻訳ファイルを一部カスタマイズした。")]),t._v(" "),a("p",[t._v("以下を参考")]),t._v(" "),a("ul",[a("li",[t._v("テーマコンポーネントのカスタマイズ\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/inheritance.html#theme-inheritance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Theme Inheritance"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("翻訳のカスタマイズ\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/27/theme-guide-en.html#translate-to-your-own-language",target:"_blank",rel:"noopener noreferrer"}},[t._v("Translate to your own language"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"ブログに必要そうなプラグインを導入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ブログに必要そうなプラグインを導入"}},[t._v("#")]),t._v(" ブログに必要そうなプラグインを導入")]),t._v(" "),a("ul",[a("li",[t._v("seo\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/lorisleiva/vuepress-plugin-seo",target:"_blank",rel:"noopener noreferrer"}},[t._v("lorisleiva/vuepress-plugin-seo"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("sitemap\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ekoeryanto/vuepress-plugin-sitemap",target:"_blank",rel:"noopener noreferrer"}},[t._v("ekoeryanto/vuepress-plugin-sitemap"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("feed\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webmasterish/vuepress-plugin-feed",target:"_blank",rel:"noopener noreferrer"}},[t._v("webmasterish/vuepress-plugin-feed"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("analytics\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-google-analytics"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"テーマにfont-awesomeを使う"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#テーマにfont-awesomeを使う"}},[t._v("#")]),t._v(" テーマにfont-awesomeを使う")]),t._v(" "),a("p",[t._v("Vueでfont-awesomeを使うにはコンポーネントを用意するのが良さそう。別記事でまとめる予定。")]),t._v(" "),a("h3",{attrs:{id:"markdownで記事を書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdownで記事を書く"}},[t._v("#")]),t._v(" markdownで記事を書く")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v("が入っているので、基本はその記法でok.")]),t._v(" "),a("p",[t._v("さらにmarkdownで書いた記事の中にVueコンポーネントを埋め込んだり出来るし、独自のカスタムコンテナを用意できる。")]),t._v(" "),a("ul",[a("li",[t._v("markdown記事内でVueコンポーネントを使う\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html#using-vue-in-markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Vue in Markdown"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("カスタムコンテナを作る\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.github.io/en/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-container"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"github-pagesで公開"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pagesで公開"}},[t._v("#")]),t._v(" GitHub Pagesで公開")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/ja/github/working-with-github-pages/about-github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages について"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("公式ドキュメントを参考にして、ビルド内容をdocsに吐き出して、githubのレポジトリで設定したらok")]),t._v(" "),a("p",[t._v("ねんがんの　こじんぶろぐを　かいせつしたぞ！")]),t._v(" "),a("h2",{attrs:{id:"github-actionsで自動ビルド、push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actionsで自動ビルド、push"}},[t._v("#")]),t._v(" GitHub Actionsで自動ビルド、push")]),t._v(" "),a("p",[t._v("workflowはこんな感じ。")]),t._v(" "),a("details",[a("summary",[t._v(".github/workflows/main.yml")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" develop\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Get yarn cache\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' echo "'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output name=dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('$(yarn cache dir)"\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" steps.yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache.outputs.dir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/yarn.lock')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          ${{ runner.os }}-yarn-")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install Dependancies\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frozen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lockfile\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Login To Github\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./lib/git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("login.sh\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-github-name"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_USEREMAIL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-github-email"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build to docs\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn build "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" echo 'your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain' "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" docs/CNAME\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Push To Github\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./lib/git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("push.sh\n")])])])]),t._v(" "),a("h3",{attrs:{id:"手順の概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手順の概要"}},[t._v("#")]),t._v(" 手順の概要")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("node-setup")])]),t._v(" "),a("li",[a("p",[t._v("nodeモジュールのキャッシュを探る")])]),t._v(" "),a("li",[a("p",[t._v("nodeモジュールインストール")])]),t._v(" "),a("li",[a("p",[t._v("gitログイン")]),t._v(" "),a("details",[a("summary",[t._v("git-login.sh")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set git config."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_USERNAME}")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_USEREMAIL}")]),t._v('"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_USERNAME}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_TOKEN}")]),t._v("@github.com/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_REPOSITORY}")]),t._v(".git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_BRANCH}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -la\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("サイトをビルド")])]),t._v(" "),a("li",[a("p",[t._v("dist以下を追跡し、"),a("code",[t._v("master")]),t._v(" branchにforce push")]),t._v(" "),a("details",[a("summary",[t._v("git-push.sh")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git push."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" ./docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[updater] update pdf.'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin HEAD\n")])])])])])]),t._v(" "),a("p",[t._v("GitHub Pagesは主ブランチの内容をホスティングするみたいなので、基本はmaster以外のブランチで作業して、masterにビルド内容をforce pushすることになった。致し方なし。")]),t._v(" "),a("p",[t._v("ともあれ、これでmdで記事書いてpushするだけで自動的にホスティングするようになった。めでたい。")]),t._v(" "),a("h2",{attrs:{id:"future-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-works"}},[t._v("#")]),t._v(" future works")]),t._v(" "),a("p",[t._v("このサイトは随時テーマやコンテナをカスタマイズする予定。")]),t._v(" "),a("p",[t._v("あとGitHub Pagesにこだわる必要もないので、そのうちホスティングサービスを別のに変えるかもしれない。")])])}),[],!1,null,null,null);s.default=e.exports}}]);