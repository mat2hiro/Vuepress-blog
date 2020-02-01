<template>
  <div>
    <nav
      class="navbar"
      :class="navbarClass"
      :style="style"
    >
      <div class="container">
        <RouterLink :to="$localePath">
          <span
            v-if="$siteTitle"
            class="navbar-site-name"
          >
            {{ $siteTitle }}
          </span>
        </RouterLink>

        <div
          class="navbar-toggler"
          @click="showNavLinks = !showNavLinks"
        >
          <Icon
            name="menu"
            size="1.2em"
          />
        </div>

        <div
          class ="navbar-closer-bg"
          @click="showNavLinks = !showNavLinks"
          :class="{
            'show': showNavLinks,
          }"
        ></div>

        <div
          class="navbar-links"
          :class="{
            'show': showNavLinks,
          }"
        >
          <div
            class="navbar-closer"
            @click="showNavLinks = !showNavLinks"
          >
            <Icon
              name="menu"
              size="1.2em"
            />
          </div>
          <template v-for="nav of $themeConfig.nav">
            <RouterLink
              v-if="!isExternal(nav.link)"
              :key="nav.text"
              :to="nav.link"
              class="navbar-link"
              :exact="nav.exact || false"
              @click.native="showNavLinks = false"
            >
              {{ nav.text }}
            </RouterLink>

            <a
              v-else
              :key="nav.text"
              :href="nav.link"
              class="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ nav.text }}
            </a>
          </template>
        </div>
      </div>
    </nav>

    <div
      v-show="fixed"
      class="navbar-holder"
    />
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import Icon from './Icon.vue'

export default {
  name: 'TheHeaderNavbar',

  components: {
    Icon,
  },

  data () {
    return {
      fixed: false,
      showNavLinks: false,
    }
  },

  computed: {
    navbarClass () {
      return {
        fixed: this.fixed,
      }
    },

    style () {
      if (this.fixed && this.$frontmatter['header-image']) {
        let url = this.$site.base.slice(0,-1) + this.$frontmatter['header-image']

        return {
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-attachment': 'scroll',
          'background-image': `linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,.75),rgba(255,255,255,1)),
          url(${url})`,
        }
      }
      return {}
    }
  },

  mounted () {
    window.addEventListener('scroll', throttle(() => {
      this.fixed = window.scrollY !== 0
    }), 100)
  },

  methods: {
    isExternal (link) {
      return /^(https?:|mailto:|tel:)/.test(link)
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

$gutter = 0.7rem
$lineHeight = $navbarHeight - ($gutter * 2)

.navbar-holder
  position relative
  height $navbarHeight
.navbar
  position relative
  z-index 20
  top 0
  left 0
  right 0
  box-sizing border-box
  height $navbarHeight
  line-height $lineHeight
  padding $gutter $gutter * 2
  border-bottom 1px solid $borderColor
  color $textColor
  background-color alpha($navbarColor, 0.8)
  transition all 0.5s ease-out
  @media (max-width $MQMobile - 1px)
    padding: $gutter .5rem $gutter 1rem
  &.fixed
    position fixed
    background-color $navbarColor
    @media (max-width $MQMobile - 1px)
      .navbar-links
        background-color $navbarColor
  .navbar-site-name
    display inline-block
    position relative
    font-size 1.2rem
    font-weight 600
    color $titleColor
    max-width 'calc(100% - %s)' % $lineHeight
    max-height $lineHeight
    overflow hidden
  .navbar-toggler
    float right
    cursor pointer
    box-sizing border-box
    width $lineHeight
    border-radius 50%
    border solid 2px transparent
    text-align center
    z-index 100
    .icon
      fill $titleColor
    @media (max-width $MQMobile - 1px)
      display inline
    @media (min-width $MQMobile)
      display none
  .navbar-closer
    cursor pointer
    box-sizing border-box
    width $lineHeight
    border-radius 50%
    border solid 2px transparent
    text-align center
    z-index 100
    margin-right calc(-0.7px - 1rem)
    margin-left auto
    .icon
      fill $accentColor
    @media (max-width $MQMobile - 1px)
      display block
    @media (min-width $MQMobile)
      display none
  .navbar-closer-bg
    display none
    z-index 99
    position fixed
    top 0
    bottom 0
    right 0
    left 0
    background rgba(0,0,0,.5)
    @media (max-width $MQMobile - 1px)
      &.show
        display block
  .navbar-links
    @media (max-width $MQMobile - 1px)
      right -100%
      visibility none
      &.show
        visibility inherit
        right 0
      position fixed
      top $navbarHeight
      text-align center
      padding $gutter 2rem
      border 1px solid $borderColor
      border-top none
      background-color alpha($navbarColor, 0.8)
      transition all 0.25s ease-out
      z-index 100
      width 60vw
      height 100vh
      top 0
    @media (min-width $MQMobile)
      float right
      margin 0
      padding 0
      line-height $lineHeight
      list-style none
  .navbar-link
    color $textColor
    transition all 0.3s
    border-bottom 2px solid transparent
    &:hover
    &.router-link-active
      border-bottom 2px solid $accentColor
    @media (max-width $MQMobile - 1px)
      display block
    @media (min-width $MQMobile)
      display inline-block
      height 100%
      padding 0 0.25rem
      margin-left 1rem
      margin-bottom -10px
</style>
