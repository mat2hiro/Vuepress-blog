<template>
  <div class="page admin">
    <div class="main-div">
      <div v-if="!isLoggedIn">
        <form>
          <input type="password" v-model="authKey">
          <button type="button" v-on:click="login">Log In</button>
        </form>
      </div>
      <div v-else>
        <mavon-editor language="ja" />
      </div>
    </div>
  </div>
</template>

<script>
// import { Octokit } from '@octokit/core'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'Admin',
  components: {
    mavonEditor
  },
  data() {
    return {
      isLoggedIn: false,
      authKey: "",
      octokit: null,
      mavonEditor: null,
    }
  },
  methods: {
    login: () => {
      // this.octokit = new Octokit({ auth: this.authKey })
      // console.log(this.octokit)
    }
  },
  mounted() {
  },
}
</script>

<style lang="stylus">
.page-content h2
  text-align center
@media only screen and (max-width: $MQMobile - 1px)
  .page-content h2
    text-align left
.auto-textarea-wrapper .auto-textarea-input
  font-family -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif !important;
</style>
