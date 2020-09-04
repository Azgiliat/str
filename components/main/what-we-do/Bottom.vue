<template lang="pug">
  .bottom.grid
    p.column.is-12.bottom__text.text-normal.text--grey.is-8-tablet.is-offset-2-tablet Также мы можем разработать спецификации, оценить сроки и стоимость
      | реализации проекта,
      br
      |  спроектировать решение и составить техзадание для вашей команды разработчиков
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
  &__text
    margin-bottom 24px

    br {
      display none
    }

    @media $desktop {
      margin-bottom 40px
      text-align center

      br {
        display block
      }
    }

  &__link {
    @media $desktop {
      margin 0 auto
    }
  }
</style>