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
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.share-buttons
  display flex
  justify-content flex-end
  >div
    margin-left 1em
  .rss-follow-button
    display flex
    color $grayTextColor
    img
      width 1em
      margin-right .3em
</style>
