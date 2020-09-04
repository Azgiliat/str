<template lang="pug">
  .bottom.grid
    p.column.is-12.bottom__text.text.text-normal.text-normal--grey Также мы можем разработать спецификации, оценить сроки и стоимость
      | реализации проекта, спроектировать решение и составить техзадание для вашей команды разработчиков
    .bottom__constrols.column.is-12
      SiteLink.bottom__link(:to="'solutions'")
        template(slot="text") Подробнее
</template>

<script>
import SiteLink from '@/components/UI/SiteLink'
export default {
  name: 'Bottom',
  components: {
    SiteLink
  }
}
</script>

<style lang="stylus" scoped>
.bottom
  @media $desktop {
    center-text()
  }
  &__text
    margin-bottom 24px

    @media $desktop {
      padding 0 10%
      margin-bottom 40px
    }
  &__link {
    @media $desktop {
      margin 0 auto
    }
  }
</style>