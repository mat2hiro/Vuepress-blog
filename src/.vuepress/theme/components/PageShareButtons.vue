<template>
  <div class="share-buttons" :style="style">
    <div v-if="options.fb" class="share-fb">
      <a :href="fbLink" rel="nofollow" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" /> シェア</a>
    </div>
    <div v-if="options.twitter" class="share-twitter">
      <a :href="twitterLink" rel="nofollow" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /> ツイート</a>
    </div>
    <div v-if="options.hateb" class="share-hateb">
      <a :href="hatebLink" target="_blank" rel="nofollow"><Icon name="hateb" /> ブックマーク</a>
    </div>
    <div v-if="options.pocket" class="share-pocket">
      <a :href="pocketLink" rel="nofollow" target="_blank"><font-awesome-icon :icon="['fab', 'get-pocket']" /> Pocket</a>
    </div>
    <div v-if="options.line" class="share-line">
      <a :href="lineLink" target='_blank' rel="nofollow"><font-awesome-icon :icon="['fab', 'line']" /> Lineで送る</a>
    </div>
    <div v-if="options.rss" class="follow-rss">
      <a href="https://mat2.net/feed.atom" target="_blank"><font-awesome-icon icon="rss" /> RSS</a>
    </div>
    <!--
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
      <div class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3" v-bind:data-url="$site.themeConfig.domain + $page.path" data-color="default" data-size="small" data-count="false" style="display: none;"></div>
      <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
    </div>
    <div v-if="options.rss" class="follow-rss">
      <a href="https://mat2.net/feed.atom" class="rss-follow-button" target="_blank"><img src="/icon/rss-solid.svg">RSS</a>
    </div>
    -->
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
      return `https://twitter.com/share?url=${this.site_url}&text=${this.title_and_description}`;
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
  align-items baseline
  margin-bottom -0.5rem
  >div
    margin-left 1em
    margin-bottom .5rem
    min-height 21px
    border-radius 3px
    padding 0 4px
    a
      color #fff
      font-size 13px
      font-family -apple-system,BlinkMacSystemFont,sans-serif
    &.share-fb
      background $fbColor
    &.share-twitter
      background $twitterColor
    &.share-hateb
      background $hatebColor
      .icon
        fill #fff
        font-size 13px
    &.share-pocket
      background $pocketColor
    &.share-line
      background $lineColor
    &.follow-rss
      padding 0
      a
        color $grayTextColor
        font-size 16px
      svg
        color orange
</style>
