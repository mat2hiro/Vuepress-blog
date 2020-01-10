<template>
  <div class="post">
    <div
      class="post-header-banner"
    >
      <h1>
        {{ $page.frontmatter.title || $page.title || $site.title || '' }}
      </h1>
    </div>
    <PostMetaTop v-if="meta" />

    <article class="main-div">
      <Content
        :key="$page.path"
        class="post-content content"
      />
    </article>

    <PostMetaBottom v-if="meta" />

    <PostDisqus />
  </div>
</template>

<script>
import PostMetaTop from '../components/PostMetaTop.vue';
import PostMetaBottom from '../components/PostMetaBottom.vue';
import PostDisqus from '../components/PostDisqus';

export default {
  name: 'Post',

  components: {
    PostMetaTop,
    PostMetaBottom,
    PostDisqus,
  },

  computed: {
    meta () {
      return this.$frontmatter['meta'] !== false
    },

    vssue () {
      return this.$themeConfig.comments !== false && this.$frontmatter['vssue'] !== false && (this.vssueTitle || this.vssueId)
    },

    vssueTitle () {
      return this.$frontmatter['vssue-title'] || this.$frontmatter['title'] || undefined
    },

    vssueId () {
      return this.$frontmatter['vssue-id'] || undefined
    },
  },
}
</script>

<style lang="stylus">
.post-header-banner h1
  text-align center
.post-content h2
  text-align center
@media only screen and (max-width: $MQMobile - 1px)
  .post-header-banner h1
    text-align left
  .post-content h2
    text-align left
  .content
    padding-left 0
.banner h1
  text-shadow 1px 0 10px black
</style>
