<template lang="pug">
  swiper( ref="mySwiper" :options="swiperOptions" @click.native="tmp")
    swiper-slide
      Slide(:img="'slide-3'")
    swiper-slide
      Slide(:img="'slide-2'")
    swiper-slide
      Slide(:img="'slide-1'")
</template>

<script>
import Slide from './Slide'
export default {
  name: 'Slider',
  components: {
    Slide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1.1,
        spaceBetween: 24,
        breakpoints: {
          1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: -22
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>

<style lang="stylus">
</style>