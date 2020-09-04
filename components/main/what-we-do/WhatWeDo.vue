<template lang="pug">
  .what-we-do
    .grid
      p.text-title.column.is-12.what-we-do__title.is-2-tablet.is-offset-5-tablet
        | что
        span.accent &nbsp;мы&nbsp;
        | делаем
    .grid
      p.text-description.column.is-12.what-we-do__description.is-10-tablet.is-offset-1-tablet
        |  Мы&nbsp;предлагаем комплексные программные решения с&nbsp;учетом
        br
        |  потребностей вашего бизнеса, опираясь на&nbsp;передовые информационные
        br
        | технологии и&nbsp;уникальную экспертизу в&nbsp;разработке
    List.what-we-do__list
    Bottom.what-we-do__bottom
</template>

<script>
import List from './List'
import Bottom from './Bottom'

export default {
  name: 'WhatWeDo',
  components: {
    List,
    Bottom
  }
}
</script>

<style lang="stylus" scoped>
.what-we-do
  &__title
    margin-bottom 12px
    @media $tablet
      text-align center
      margin-bottom 24px

  &__description
    margin-bottom 36px

    br
      display none

    @media $tablet
      text-align center
      margin-bottom 72px

      br
        display block

  &__list
    margin-bottom 36px
    @media $tablet {
      margin-bottom 72px
    }
</style>