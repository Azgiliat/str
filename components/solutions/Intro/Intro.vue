<template lang="pug">
section.intro
  .grid.intro__header
    h1.column.is-12.is-6-tablet.is-offset-3-tablet.intro__title Решения
    p.text-description.column.is-12.intro__description Оказываем полный спектр услуг в&nbsp;области заказной разработки&nbsp;ПО.
  PointsList.instro__list
</template>

<script>
import PointsList from './PointsList'
export default {
  name: 'Intro',
  components: {
    PointsList
  }
}
</script>

<style lang="stylus" scoped>
.intro {
  &__header {
    margin-bottom 120px
  }

  &__title {
    text-align center
    margin-bottom 12px

    @media $tablet {
      margin-bottom 20px
    }
  }

  &__description {
    text-align center
  }
}
</style>