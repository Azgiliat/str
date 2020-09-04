<template lang="pug">
  section.solutions
    .solutions__header
      marquee-text.solutions__marquee
        h2.solutions__header-text &nbsp;Эффективное решение. Продуманный дизайн. Надежный продукт.&nbsp;
    .solutions__slider-header.grid
      p.text.text-title.solutions__slider-title.column.is-12 Наши
        span.accent &nbsp;последние&nbsp;
        | проекты
    .solutions__slider-wrapper.grid
      Slider.solutions__slider.column.is-12
    .solutions__circle-logo
      CircleLogo
</template>

<script>
import CircleLogo from './CircleLogo'
import Slider from './Slider'
import Solutions from '@/pages/solutions'
export default {
  name: 'Solution',
  components: {
    Solutions,
    Slider,
    CircleLogo
  }
}
</script>

<style lang="stylus" scoped>
.solutions
  &__header
    width 100%
    margin-bottom 340px

  &__header-text {
    text-transform uppercase
  }

  &__slider-title
    margin-bottom 16px

    @media $tablet {
      margin-bottom 24px
    }

  &__slider-wrapper {
    margin-bottom 196px
  }
</style>