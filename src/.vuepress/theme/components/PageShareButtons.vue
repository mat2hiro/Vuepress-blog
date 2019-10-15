<template>
  <div class="share-buttons" :style="style">
    <div v-if="options.fb" class="share-fb">
      <div class="fb-share-button" v-bind:data-href="$site.themeConfig.domain + $page.path" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmat2.net%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">シェア</a></div>
    </div>
    <div v-if="options.twitter" class="share-twitter">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
    <div v-if="options.hateb" class="share-hateb">
      <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
    </div>
    <div v-if="options.pocket" class="share-pocket">
      <a data-pocket-label="pocket" data-pocket-count="none" class="pocket-btn" data-lang="en"></a>
    </div>
    <div v-if="options.line" class="share-line">
      <div class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3" data-url="https://mat2.net" data-color="default" data-size="small" data-count="false" style="display: none;"></div>
      <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
    </div>
    <div v-if="options.rss" class="follow-rss">
      <a href="https://mat2.net/feed.atom" class="rss-follow-button" target="_blank"><img src="/icon/rss-solid.svg">RSS</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageShareButtons',
  props: {
    options: Object,
  },
  computed: {
    style() {
      return {
        'justify-content': this.options.justify_content || 'flex-end',
      }
    },
  },
  mounted () {
    !function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"pocket-btn-js");
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.share-buttons
  display flex
  flex-wrap wrap
  justify-content flex-end
  margin-bottom -0.5rem
  >div
    margin-left 1em
    padding-bottom .5rem
    min-height 33px
    min-width 66px
  .rss-follow-button
    display flex
    color $grayTextColor
    img
      width 1em
      margin-right .3em
</style>
