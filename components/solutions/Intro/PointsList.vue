<template lang="pug">
  .grid
    ul.list.column.is-12.is-4-tablet.is-offset-4-tablet
      li.list__item
        Slide(:img="'first-point.jpg'")
          template(slot="title") Киберспорт
          template(slot="description") Приложения для мобильного киберспорта и&nbsp;стриминга
      li.list__item
        Slide(:img="'second-point.jpg'")
          template(slot="title") Видеоигры
          template(slot="description") Приложения для мобильного киберспорта и&nbsp;стриминга
      li.list__item
        Slide(:img="'third-point.jpg'")
          template(slot="title") Стримирнговые сервисы
          template(slot="description") Приложения для стримеров с&nbsp;редактирования видео и&nbsp;социального
</template>

<script>
import Slide from './SLide'

export default {
  name: 'PointsList',
  components: {
    Slide
  }
}
</script>

<style lang="stylus" scoped>
.list {
  list-style none

  &__item {
    width 100%
  }

  &__item:not(:last-child) {
    margin-bottom 20px
  }
}
</style>