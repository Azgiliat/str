<template lang="pug">
  .slide
    picture
      img.slide__img(:src="require(`~/static/photos/solutions/intro/${img}`)")
    .slide__info
      p.text-big.text--white.slide__title(v-show="$slots.title")
        slot(name="title")
      p.text-normal.text--white.slide__description(v-show="$slots.description")
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
.slide {
  position relative

  &__img {
    width 100%
    height auto
  }

  &__info {
    position absolute
    bottom 16px
    left 0
  }

  &__title, &__description {
    text-align center
  }
}
</style>