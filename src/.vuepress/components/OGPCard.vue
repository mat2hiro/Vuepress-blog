<template>
  <div>
    <img :src="image" />
    <p>{{ title }}</p>
    <p>{{ description }}</p>
  </div>

</template>

<script>
export default {
  name: 'OGPCard',

  props: {
    url: String
  },

  data(){
    return{
      title: "",
      description: "",
      image: "",
      set_url: ""
    }
  },

  computed: {
  },

  watch: {
    set_url: async function(val){
      console.log('watch:', val);
      const res = await (await fetch(this.url)).text();
      const el = new DOMParser().parseFromString(res, "text/html");
      const headEls = (el.head.children);
      Array.from(headEls).forEach(v => {
        const prop = v.getAttribute('property');
        if (!(prop && prop.split("og:").length > 1)) return;
        const content = v.getAttribute("content");
        console.log(content);
        switch(prop.split("og:")[1]){
          case "site_name":
          case "title":
            this.title = content;
            break;
          case "description":
            this.description = content;
            break;
          case "image":
            this.image = content;
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

</style>
