import Swiper from './swiper.vue'
import SwiperItem from './swiper-item.vue'

const install = Vue => {
  Vue.component(Swiper.name, Swiper)
  Vue.component(SwiperItem.name, SwiperItem)
}

const VueSwiper = { Swiper, SwiperItem, install }

export default VueSwiper
export { Swiper, SwiperItem, install }
