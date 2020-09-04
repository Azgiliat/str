<template lang="pug">
  .grid
    .point
      .point__image-wrapper.column.is-2.is-offset-1-tablet
        img.point__image()
      .point__details.column.is-12.is-6-tablet
        p.text-big.point__title
          slot(name="title")
        p.text-normal.text--grey
          slot(name="description")
      .point__category.is-2
</template>

<script>
export default {
  name: 'ListPoint'
}
</script>

<style lang="stylus" scoped>
.point {
  padding-top 16px
  padding-bottom 16px
  position relative

  &::before {
    pseudo-element()
    height 2px
    background-color $text-grey
    width calc(100% + 20px)
  }

  @media $tablet {
    padding-top 20px
    padding-bottom 20px
  }

  &__image-wrapper {
    display none

    @media $tablet {
      display block
    }
  }

  &__image {
    width 100%
    height auto
  }

  &__title {
    margin-bottom 8px
  }
}
</style>