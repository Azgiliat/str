<template lang="pug">
  .slide
    picture
      source(media="(min-width: 1440px)" :srcset="require(`~/static/photos/solutions-slider/desktop/${img}.jpg`) + ' 1x, ' + require(`../../../static/photos/solutions-slider/desktop/${img}@2x.jpg`) + ' 2x'")
      img.slide__img(:src="require(`~/static/photos/solutions-slider/${img}.jpg`)")
    p.slide__title-title--white(v-show="$slots.title")
      slot(name="title")
    p.slide__description--white(v-show="$slots.description")
      slot(name="description")
</template>

<script>
export default {
  name: 'Slide',
  props: {
    img: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide
  position relative

  &__img
    width 100%
    height auto

  &__title
    position absolute
    top 16px
    left 20px

  &__description
    position absolute
    bottom 16px;
    left 20px
    max-width 200px
    font-weight: 500
    font-size: 20px;
    line-height: 24px;
</style>