<template>
  <div
    v-if="showContents"
    class="home-links-card"
    :style="style"
  >
    <span>ブックマーク</span>

    <ul>
      <li
        v-for="(link, i) in links"
      >
        <a :href="link.link" target="_blank"> {{ link.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import Icon from './Icon.vue'

export default {
  name: 'LinksCard',

  components: {
    Icon,
  },

  data () {
    return {
      fixed: false,
      width: 0,
      scrollListener: throttle(() => {
        this.fixed = this.infoCardDom.getBoundingClientRect().bottom < this.navbarHeight
      }, 100),
      resizeListener: debounce(() => {
        this.width = this.getWidth()
      }, 100),
    }
  },

  computed: {
    links () {
      return this.$themeConfig.links || []
    },

    style () {
      return {
        position: this.fixed ? 'fixed' : 'relative',
        top: this.fixed ? `${this.navbarHeight}px` : 0,
        width: `${this.width}px`,
      }
    },

    infoCardDom () {
      return document.querySelector('#app .info-card')
    },

    navbarHeight () {
      return document.querySelector('.navbar').clientHeight
    },

    showContents () {
      return this.links && this.links.length > 0
    },

  },

  mounted () {
    this.width = this.getWidth()

    window.addEventListener('scroll', this.scrollListener)
    window.addEventListener('resize', this.resizeListener)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('resize', this.resizeListener)
  },

  methods: {
    getWidth () {
      return this.infoCardDom.clientWidth
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.home-links-card
  padding 1rem
  color $grayTextColor
  word-break break-all
  line-height 160%
  .icon
    fill $grayTextColor
  > ul
    word-break normal
    margin 0.5rem 0
    padding-left 2rem
    max-height calc(100vh - 16rem)
    // separate overflow to be compatible with Safari
    overflow-x hidden
    overflow-y auto
    scrollbar-width thin
    &::-webkit-scrollbar
      width 3px
    &::-webkit-scrollbar-track
      background-color $borderColor
    &::-webkit-scrollbar-thumb
      background-color $lightTextColor
</style>
