<template>
  <section class="post-meta main-div">
    <div>
      <div class="metas-title">Share & Follow</div>
      <PageShareButtons v-bind:options="options" />
    </div>
    <div v-if="prevPost || nextPost" class="mt1">
      <div class="metas-title">Prev & Next</div>
      <section class="post-links">
        <RouterLink
          v-if="prevPost"
          :to="prevPost.path"
          class="post-link prev-post"
        >
          <div>
            <span>{{ `${$themeConfig.lang.prevPost} :` }}</span>
            <span>{{ prevPost.title }}</span>
          </div>
        </RouterLink>

        <RouterLink
          v-if="nextPost"
          :to="nextPost.path"
          class="post-link next-post"
        >
          <div>
            <span>{{ `${$themeConfig.lang.nextPost} :` }}</span>
            <span>{{ nextPost.title }}</span>
          </div>
        </RouterLink>
      </section>
    </div>
  </section>
</template>

<script>
import PageShareButtons from './PageShareButtons'

export default {
  name: 'PostMetaBottom',

  components: {
    PageShareButtons,
  },

  data () {
    return {
      options: {
        fb: true,
        twitter: true,
        hateb: true,
        pocket: true,
        line: true,
        rss: true,
        justify_content: 'center',
      }
    }
  },

  computed: {
    thisIndex () {
      return this.$posts.indexOf(this.$page)
    },

    prevPost () {
      const nextIndex = this.thisIndex + 1
      return nextIndex > this.$posts.length - 1 ? null : this.$posts[nextIndex]
    },

    nextPost () {
      const prevIndex = this.thisIndex - 1
      return prevIndex < 0 ? null : this.$posts[prevIndex]
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.post-meta
  .metas-title
    text-align center
    margin-bottom 1rem
    color $grayTextColor
  .post-links
    display flex
    justify-content space-between
    .post-link
      display flex
      align-items center
      line-height 1.7
      color lighten($grayTextColor, 20%)
      font-weight normal
      transition all 0.2s
      >div
        display flex
        flex-direction column
        span:last-child
          margin-left 1em
      &.prev-post::before
        content '<<'
        margin-right 1em
      &.next-post
        margin-right 0
        margin-left auto
        &::after
          content '>>'
          margin-left 1em
      &:hover
        color $accentColor
  .mt1
    margin-top 1rem
</style>
