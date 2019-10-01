<template>
  <div class="follow-buttons">
    <div class="follow-rss">
      <a href="https://mat2.net/feed.atom" class="rss-follow-button" target="_blank"><i class="fas fa-rss"></i> RSS</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFollowButtons',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.follow-buttons
  display flex
  justify-content flex-end
  >div
    margin-left 1em
  .rss-follow-button
    color $grayTextColor
    i
      color orange
</style>
