<template lang="pug">
.title
  .grid
    p.title__header.text-extra-big.column.is-12.is-6-tablet.is-offset-3-tablet СТАНДАРТЫ и&nbsp;ТЕХНОЛОГИИ
  .grid
    p.text-normal.column.is-12.is-6-tablet.is-offset-3-tablet Основные языки программирования и&nbsp;наборы инструментов: Наш технологический стек:
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="stylus" scoped>
.title {
  &__header {
    text-transform uppercase
    margin-bottom 8px

    @media $tablet {
      margin-bottom 24px
      text-align center
    }
  }
}
</style>