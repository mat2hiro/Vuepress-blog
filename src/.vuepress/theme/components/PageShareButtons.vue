<template>
  <div class="share-buttons">
    <div class="share-twitter">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
    <div class="share-hateb">
      <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageShareButtons',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.share-buttons
  display flex
  justify-content flex-end
  >div
    margin-left 1em
</style>
