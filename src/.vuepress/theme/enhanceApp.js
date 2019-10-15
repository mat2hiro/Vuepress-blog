import Iconfont from './components/Iconfont.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faThumbsUp, faHeart, faRss, faRssSquare } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faPinterestP, faLinkedinIn, faRedditAlien, faFacebook, faFacebookMessenger, faGetPocket, faLine } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({ Vue }) => {
  Vue.component('Iconfont', {
    functional: true,

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { parent }) {
      if (parent._isMounted) {
        return h(Iconfont)
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })

  library.add(faEnvelope, faTwitter, faPinterestP, faLinkedinIn, faRedditAlien, faFacebook, faThumbsUp, faHeart, faFacebookMessenger, faRss, faRssSquare, faGetPocket, faLine)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
