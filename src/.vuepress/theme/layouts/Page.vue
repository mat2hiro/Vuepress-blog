<template>
  <div class="page">
    <div class="main-div">
      <Content
        :key="$page.path"
        class="page-content content"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
}
</script>

<style lang="stylus">
.page-content h2
  text-align center
@media only screen and (max-width: $MQMobile - 1px)
  .page-content h2
    text-align left
</style>
