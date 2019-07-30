module.exports = {
  title: 'mat2 vuepress blog',
  description: 'this is vuepress blog',
  dest: 'docs/',
  base: '/Vuepress-blog/',
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },
  // theme: 'meteorlxy',
  themeConfig: {
    lang: require('vuepress-theme-meteorlxy/lib/langs/ja-JP'),
    personalInfo: {
      nickname: 'お腹',
      description: 'エンジニアをしたい',
      email: 'ondriver246.1u@gmail.com',
      // location: '',
      // organization: '',
      // avatar: '',
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
    ],
    comments: false,
  },
}
