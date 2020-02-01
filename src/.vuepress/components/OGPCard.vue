<template>
  <div class="ogp-card">
    <a :href="url" target="_blank">
      <div class="ogp-image-wrapper">
        <span :style="style"></span>
      </div>
      <div class="ogp-text-container">
        <p class="ogp-title">{{ title }}</p>
        <p class="ogp-description">{{ description }}</p>
      </div>
    </a>
  </div>

</template>

<script>
export default {
  name: 'OGPCard',

  props: {
    url: String,
    defaults: Object
  },

  data(){
    return{
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      set_url: ""
    }
  },

  computed: {
    title(){
      return this.ogTitle || (this.defaults && this.defaults.title);
    },
    description(){
      return this.ogDescription || (this.defaults && this.defaults.description);
    },
    style(){
      return {
        'background-image': `url(${this.ogImage || (this.defaults && this.defaults.image)})`
      }
    }
  },

  watch: {
    set_url: async function(val){
      const res = await (await fetch(this.url)).text();
      const el = new DOMParser().parseFromString(res, "text/html");
      const headEls = (el.head.children);
      Array.from(headEls).forEach(v => {
        const prop = v.getAttribute('property');
        if (!(prop && prop.split("og:").length > 1)) return;
        const content = v.getAttribute("content");
        switch(prop.split("og:")[1]){
          case "site_name":
          case "title":
            this.ogTitle = content;
            break;
          case "description":
            this.ogDescription = content;
            break;
          case "image":
            this.ogImage = content;
        }
        // const og = this.og;
        // og[prop.split("og:")[1]] = v.getAttribute("content");
        // this.og = og;
      });
    }
  },

  mounted(){
    this.set_url = this.url;
  },

  methods: {
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.ogp-card
  margin-bottom 1em
  max-width 400px
  border 1px solid $borderColor
  border-radius 10px
  overflow hidden
  cursor pointer
  .ogp-image-wrapper
    overflow hidden
    span
      width 100%
      padding-bottom 50%
      background-size cover
      background-position center
      display block
      transition-duration 0.2s
  .ogp-text-container
    padding 0.8rem 1.5rem 1rem
    line-height 1.5
    @media only screen and (max-width: $MQMobile - 1px)
      padding 0.3rem 1rem 0.5rem
    .ogp-title
      margin 0.3em 0
      font-size 1.3em
      font-weight 600
      color $textColor
      transition-duration 0.2s
    .ogp-description
      margin 0.3em 0
      font-size 0.9em
      color $grayTextColor
      transition-duration 0.2s
      display -webkit-box
      overflow hidden
      -webkit-line-clamp 2
      -webkit-box-orient vertical
  a:hover
    text-decoration none
    .ogp-image-wrapper span
      transform scale(1.05)
    .ogp-text-container
      .ogp-title, .ogp-description
        color $accentColor
</style>
