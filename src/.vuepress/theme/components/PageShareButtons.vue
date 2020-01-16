<template>
  <div class="share-buttons" :style="style">
    <a v-if="options.fb" class="share-fb" :href="fbLink" rel="nofollow" target="_blank">
      <div><font-awesome-icon :icon="['fab', 'facebook']" /> シェア</div>
    </a>
    <a v-if="options.twitter" class="share-twitter" :href="twitterLink" rel="nofollow" target="_blank">
      <div><font-awesome-icon :icon="['fab', 'twitter']" /> ツイート</div>
    </a>
    <a v-if="options.hateb" class="share-hateb" :href="hatebLink" target="_blank" rel="nofollow">
      <div><Icon name="hateb" /> ブックマーク</div>
    </a>
    <a v-if="options.pocket" class="share-pocket" :href="pocketLink" rel="nofollow" target="_blank">
      <div><font-awesome-icon :icon="['fab', 'get-pocket']" /> Pocket</div>
    </a>
    <a v-if="options.line" class="share-line" :href="lineLink" target='_blank' rel="nofollow">
      <div><font-awesome-icon :icon="['fab', 'line']" /> Lineで送る</div>
    </a>
    <a v-if="options.rss" class="follow-rss" href="https://mat2.net/feed.atom" target="_blank">
      <div><font-awesome-icon icon="rss" /> RSS</div>
    </a>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'PageShareButtons',
  components: {
    Icon,
  },
  props: {
    options: Object,
  },
  data() {
    return {
      site_url: '' ,
      site_title: '',
    }
  },
  computed: {
    style() {
      return {
        'justify-content': this.options.justify_content || 'flex-end',
      }
    },
    fbLink() {
      return `http://www.facebook.com/share.php?u=${this.site_url}`
    },
    twitterLink() {
      return `https://twitter.com/share?url=${this.site_url}&text=${this.site_title}`;
    },
    hatebLink() {
      return `http://b.hatena.ne.jp/add?mode=confirm&url=${this.site_url}&title=${this.site_title}`;
    },
    pocketLink() {
      return `http://getpocket.com/edit?url=${this.site_url}&title=${this.site_title}`;
    },
    lineLink() {
      return `http://line.me/R/msg/text/`
    },
  },
  mounted () {
    this.site_url = encodeURIComponent(this.$themeConfig.domain + this.$page.path);
    this.site_title = encodeURIComponent(this.$title);
    this.site_desription = encodeURIComponent(this.$description);
    this.title_and_description = encodeURIComponent(`${this.$title}\n${this.$description}`)
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
  >a
    margin-left 1em
    margin-bottom .5rem
    min-height 20px
    border-radius 3px
    padding 0 4px
    div
      line-height 18px
      color #fff
      font-size 13px
      font-family -apple-system,BlinkMacSystemFont,sans-serif
    &.share-fb
      background $fbColor
      &:hover
        background: $whiteMask,$fbColor;
    &.share-twitter
      background $twitterColor
      &:hover
        background $whiteMask,$twitterColor
    &.share-hateb
      background $hatebColor
      &:hover
        background $whiteMask,$hatebColor
      .icon
        fill #fff
        font-size 13px
    &.share-pocket
      background $pocketColor
      &:hover
        background $whiteMask,$pocketColor
    &.share-line
      background $lineColor
      &:hover
        background $whiteMask,$lineColor
    &.follow-rss
      padding 0
      div
        color $grayTextColor
        font-size 16px
      svg
        color orange
      &:hover
        opacity .8
</style>
