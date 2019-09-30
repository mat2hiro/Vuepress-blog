module.exports = {
  title: 'mat2\'s tech blog',
  description: 'this is vuepress blog',
  dest: 'docs/',
  base: '/',
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },
  // theme: 'meteorlxy',
  themeConfig: {
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/ja-JP'), {
      posts: '投稿',
    }),
    personalInfo: {
      nickname: 'mat2',
      description: 'エンジニアをしたい',
      email: 'ondriver246.1u@gmail.com',
      link: '/profile/',
      // location: '',
      organization: 'Tokyo Institute of Technology/Techflyer,inc.',
      avatar: 'https://pbs.twimg.com/profile_images/1092782177471741952/OnHQf9H2_400x400.jpg',
      sns: {
        github: {
          account: 'mat2hiro',
          link: 'https://github.com/mat2hiro',
        },
        twitter: {
          account: 'お腹',
          link: 'https://twitter.com/clC41UL',
        },
      },
    },
    header: {
      background: {
        // url: '/assets/img/header_bg.jpg',
        // useGeo: 'true',
      },
      showTitle: true,
    },
    lastUpdated: true,
    nav: [
      {
        text: 'Home',
        link: '/',
        exact: true,
      },
      {
        text: 'Posts',
        link: '/posts/',
        exact: false,
      },
      {
        text: 'Profile',
        link: '/profile/',
        exact: true,
      },
      {
        text: 'Links',
        link: '/links/',
        exact: true,
      },
    ],
    comments: false,
    links: [
      {
        name: 'リンク1',
        link: 'https://twitter.com',
      },
      {
        name: 'リンク2',
        link: 'https://github.com',
      },
    ],
  },
  // plugins
  plugins: {
    'sitemap': {
      hostname: 'https://mat2hiro.github.io/Vuepress-blog'
    },
    'seo': {
      twitterCard: ($page, $site) => {
        const ret = $page.frontmatter['header-image'] || $site.themeConfig.header.background || null;
        return ret ? $site.base.slice(0,-1) + ret : null;
      },
    },
    'feed': {
      canonical_base: 'https://mat2hiro.github.io/Vuepress-blog'
    },
  }
}
