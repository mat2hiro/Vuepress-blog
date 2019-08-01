<template>
  <section class="post-meta main-div">
    <section class="post-breadcrumbs">
      <span
        v-if="$page.category"
        class="post-info-item"
      >
        <RouterLink :to="$categories.getItemByName($page.category).path">
          <IconInfo
            type="category"
            :title="$page.category"
          >
            {{ $page.category }}
          </IconInfo>
        </RouterLink>
      </span>

      <span
        v-if="$page.tags.length"
        class="post-info-item"
      >
        <IconInfo type="tags">
          <RouterLink
            v-for="(tag, i) in $page.tags"
            :key="tag"
            :to="$tags.getItemByName(tag).path"
            :title="tag"
          >
            {{ `${tag}${i === $page.tags.length - 1 ? '' : ', '}` }}
          </RouterLink>
        </IconInfo>
      </span>
    </section>

    <section class="post-date clearfix">
      <span
        v-if="$page.createdAt"
        class="create-date"
      >
        {{ `${$themeConfig.lang.createdAt} : ${$page.createdAt}` }}
      </span>

      <span
        v-if="$page.updatedAt"
        class="update-date"
      >
        {{ `${$themeConfig.lang.updatedAt} : ${$page.updatedAt}` }}
      </span>
    </section>
    <PageShareButtons />
  </section>
</template>

<script>
import IconInfo from './IconInfo'
import PageShareButtons from './PageShareButtons'

export default {
  name: 'PostMetaTop',

  components: {
    IconInfo,
    PageShareButtons,
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.post-meta
  .post-breadcrumbs
    margin-bottom 1em
    .post-info-item
      cursor default
      &:not(:first-child)
        margin-left 0.5em
      a
        color $lightTextColor
        font-weight normal
      .icon
        fill $lightTextColor
  .post-date
    color lighten($grayTextColor, 50%)
    margin-bottom 1rem
    .create-date
      float left
    .update-date
      float right
</style>
