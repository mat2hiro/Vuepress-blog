(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{296:function(t,e,s){},297:function(t,e,s){},298:function(t,e,s){},299:function(t,e,s){},315:function(t,e,s){"use strict";var a=s(296);s.n(a).a},316:function(t,e,s){"use strict";var a=s(297);s.n(a).a},317:function(t,e,s){"use strict";var a=s(298);s.n(a).a},318:function(t,e,s){"use strict";var a=s(299);s.n(a).a},320:function(t,e,s){"use strict";s.r(e);var a=s(113),n={name:"PageShareButtons",props:{options:Object},computed:{style:function(){return{"justify-content":this.options.justify_content||"flex-end"}}}},o=(s(315),s(0)),i=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"share-buttons",style:t.style},[t.options.fb?s("div",{staticClass:"share-fb"},[s("div",{staticClass:"fb-share-button",attrs:{"data-href":t.$site.themeConfig.domain+t.$page.path,"data-layout":"button_count","data-size":"small"}},[s("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmat2.net%2F&src=sdkpreparse"}},[t._v("シェア")])])]):t._e(),t._v(" "),t.options.twitter?s("div",{staticClass:"share-twitter"},[s("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Tweet")]),s("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})]):t._e(),t._v(" "),t.options.hateb?s("div",{staticClass:"share-hateb"},[t._m(0),s("script",{attrs:{type:"text/javascript",src:"https://b.st-hatena.com/js/bookmark_button.js",charset:"utf-8",async:"async"}})]):t._e(),t._v(" "),t.options.rss?s("div",{staticClass:"follow-rss"},[t._m(1)]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"hatena-bookmark-button",attrs:{href:"https://b.hatena.ne.jp/entry/","data-hatena-bookmark-layout":"basic-label","data-hatena-bookmark-lang":"ja",title:"このエントリーをはてなブックマークに追加"}},[e("img",{staticStyle:{border:"none"},attrs:{src:"https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png",alt:"このエントリーをはてなブックマークに追加",width:"20",height:"20"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"rss-follow-button",attrs:{href:"https://mat2.net/feed.atom",target:"_blank"}},[e("img",{attrs:{src:"/icon/rss-solid.svg"}}),this._v("RSS")])}],!1,null,"164f30b0",null).exports,r={name:"PostMetaTop",components:{IconInfo:a.a,PageShareButtons:i},data:function(){return{options:{twitter:!0,hateb:!0}}},computed:{style:function(){if(this.$frontmatter["header-image"]){var t=this.$site.base.slice(0,-1)+this.$frontmatter["header-image"];return{"background-size":"cover","background-repeat":"no-repeat","background-position":"center","background-attachment":"scroll","background-image":"linear-gradient(0,rgba(255,255,255,.5),rgba(255,255,255,.8)),\n          url(".concat(t,")")}}return{}}}},c=(s(316),Object(o.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"post-meta main-div",style:t.style},[s("section",{staticClass:"post-breadcrumbs"},[t.$page.category?s("span",{staticClass:"post-info-item"},[s("RouterLink",{attrs:{to:t.$categories.getItemByName(t.$page.category).path}},[s("IconInfo",{attrs:{type:"category",title:t.$page.category}},[t._v("\n          "+t._s(t.$page.category)+"\n        ")])],1)],1):t._e(),t._v(" "),t.$page.tags.length?s("span",{staticClass:"post-info-item"},[s("IconInfo",{attrs:{type:"tags"}},t._l(t.$page.tags,function(e,a){return s("RouterLink",{key:e,attrs:{to:t.$tags.getItemByName(e).path,title:e}},[t._v("\n          "+t._s(e+(a===t.$page.tags.length-1?"":", "))+"\n        ")])}),1)],1):t._e()]),t._v(" "),s("section",{staticClass:"post-date clearfix"},[t.$page.createdAt?s("span",{staticClass:"create-date"},[t._v("\n      "+t._s(t.$themeConfig.lang.createdAt+" : "+t.$page.createdAt)+"\n    ")]):t._e(),t._v(" "),t.$page.updatedAt?s("span",{staticClass:"update-date"},[t._v("\n      "+t._s(t.$themeConfig.lang.updatedAt+" : "+t.$page.updatedAt)+"\n    ")]):t._e()]),t._v(" "),s("PageShareButtons",{attrs:{options:t.options}})],1)},[],!1,null,"6aacf05a",null).exports),l=(s(171),{name:"PostMetaBottom",components:{PageShareButtons:i},data:function(){return{options:{twitter:!0,hateb:!0,rss:!0,justify_content:"center"}}},computed:{thisIndex:function(){return this.$posts.indexOf(this.$page)},prevPost:function(){var t=this.thisIndex+1;return t>this.$posts.length-1?null:this.$posts[t]},nextPost:function(){var t=this.thisIndex-1;return t<0?null:this.$posts[t]}}}),u=(s(317),{name:"PostDisqus",mounted:function(){var t,e;t=document,(e=t.createElement("script")).src="https://mat2-vuepress-blog.disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}}),p={name:"Post",components:{PostMetaTop:c,PostMetaBottom:Object(o.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"post-meta main-div"},[s("div",[s("div",{staticClass:"metas-title"},[t._v("Share & Follow")]),t._v(" "),s("PageShareButtons",{attrs:{options:t.options}})],1),t._v(" "),t.prevPost||t.nextPost?s("div",{staticClass:"mt1"},[s("div",{staticClass:"metas-title"},[t._v("Prev & Next")]),t._v(" "),s("section",{staticClass:"post-links"},[t.prevPost?s("RouterLink",{staticClass:"post-link prev-post",attrs:{to:t.prevPost.path}},[s("div",[s("span",[t._v(t._s(t.$themeConfig.lang.prevPost+" :"))]),t._v(" "),s("span",[t._v(t._s(t.prevPost.title))])])]):t._e(),t._v(" "),t.nextPost?s("RouterLink",{staticClass:"post-link next-post",attrs:{to:t.nextPost.path}},[s("div",[s("span",[t._v(t._s(t.$themeConfig.lang.nextPost+" :"))]),t._v(" "),s("span",[t._v(t._s(t.nextPost.title))])])]):t._e()],1)]):t._e()])},[],!1,null,"3f1c1970",null).exports,PostDisqus:Object(o.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})},[],!1,null,null,null).exports},computed:{meta:function(){return!1!==this.$frontmatter.meta},vssue:function(){return!1!==this.$themeConfig.comments&&!1!==this.$frontmatter.vssue&&(this.vssueTitle||this.vssueId)},vssueTitle:function(){return this.$frontmatter["vssue-title"]||this.$frontmatter.title||void 0},vssueId:function(){return this.$frontmatter["vssue-id"]||void 0}}},h=(s(318),Object(o.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("div",{staticClass:"post-header-banner"},[s("h1",[t._v("\n      "+t._s(t.$page.frontmatter.title||t.$page.title||t.$site.title||"")+"\n    ")])]),t._v(" "),t.meta?s("PostMetaTop"):t._e(),t._v(" "),s("article",{staticClass:"main-div"},[s("Content",{key:t.$page.path,staticClass:"post-content content"})],1),t._v(" "),t.meta?s("PostMetaBottom"):t._e(),t._v(" "),s("PostDisqus")],1)},[],!1,null,null,null));e.default=h.exports}}]);