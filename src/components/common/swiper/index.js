import Swiper from './Swiper'
import SwiperItem from './SwiperItem'

//以对象的方式一起导出有什么好处呢?
//在Home.vue可以一起导入，而不用分开导入了import {Swiper,SwiperItem} from '@/components/common/swiper'
export {
  Swiper, SwiperItem
}
