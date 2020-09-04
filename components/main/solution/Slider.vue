<template lang="pug">
  swiper.slider( ref="mySwiper" :options="swiperOptions")
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
  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        speed: 1000,
        grabCursor: false,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        centeredSlides: true,
        breakpoints: {
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            speed: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            centeredSlides: false
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>

<style lang="stylus">
.slider {
  overflow visible
}
</style>