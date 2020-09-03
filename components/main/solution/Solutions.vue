<template lang="pug">
  section.solutions
    .solutions__header
      marquee-text.solutions__marquee
        h2.solutions__header-text &nbsp;Эффективное решение. Продуманный дизайн. Надежный продукт.&nbsp;
    .solutions__slider-wrapper
      p.text.text-title.solutions__slider-title Наши
        span.accent &nbsp;последние&nbsp;
        | проекты
      Slider.solutions__slider
    .solutions__circle-logo
      CircleLogo
</template>

<script>
import CircleLogo from './CircleLogo'
import Slider from './Slider'
export default {
  name: 'Solution',
  components: {
    Slider,
    CircleLogo
  }
}
</script>

<style lang="stylus" scoped>
.solutions
  &__slider-wrapper
    padding-left $column-gap
    margin-bottom 190px

    @media $desktop {
      max-width 1600px
      padding-left $laptop-column-gap
      margin-left auto
      margin-right auto
      margin-bottom 240px
    }

  &__header
    display flex
    flex-direction column
    height 83vh
    padding-left $column-gap
    margin-bottom 26px

    @media $desktop {
      height 94vh
      margin-bottom 10px
    }

  &__header-text {
    text-transform uppercase
  }

  &__slider-title
    margin-bottom 16px

    @media $desktop {
      margin-bottom 24px
    }

  &__marquee
    margin-top auto
    margin-bottom auto
</style>