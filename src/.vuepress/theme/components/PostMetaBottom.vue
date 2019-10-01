<template>
  <section class="post-meta main-div">
    <PageFollowButtons />
    <section class="post-links">
      <RouterLink
        v-if="prevPost"
        :to="prevPost.path"
        class="post-link"
      >
        {{ `${$themeConfig.lang.prevPost} : ${prevPost.title}` }}
      </RouterLink>

      <RouterLink
        v-if="nextPost"
        :to="nextPost.path"
        class="post-link"
      >
        {{ `${$themeConfig.lang.nextPost} : ${nextPost.title}` }}
      </RouterLink>
    </section>
  </section>
</template>

<script>
import PageFollowButtons from './PageFollowButtons'

export default {
  name: 'PostMetaBottom',

  components: {
    PageFollowButtons,
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
  .post-links
    .post-link
      display block
      line-height 1.7
      color lighten($grayTextColor, 20%)
      font-weight normal
      transition all 0.2s
      &:hover
        color $accentColor
</style>
