<template>
  <div id="vuepress-theme-meteorlxy">
    <TheHeader />

    <TheMain />

    <TheFooter />
    <!--
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v4.0"></script>
    -->
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'ThemeMeteorlxy',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
}
</script>

<style lang="stylus" src="../styles/index.styl" />
