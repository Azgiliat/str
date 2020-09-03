<template lang="pug">
  .what-we-do.grid
    p.text.text-title.column.is-12.what-we-do__title.is-2-desktop
      | что
      span.accent &nbsp;мы&nbsp;
      | делаем
    p.text.text-description.column.is-12.what-we-do__description Мы&nbsp;предлагаем комплексные программные решения с&nbsp;учетом потребностей вашего бизнеса, опираясь на&nbsp;передовые информационные технологии и&nbsp;уникальную экспертизу в&nbsp;разработке
    List.what-we-do__list
    Bottom.column.is-12.is-8-desktop
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
    @media $desktop
      center-text()
      margin-bottom 24px
  &__description
    margin-bottom 36px
    @media $desktop
      center-text()
      padding 0 15%
      margin-bottom 72px
  &__list
    margin-bottom 34px
    @media $desktop {
      margin-bottom 72px
    }
</style>