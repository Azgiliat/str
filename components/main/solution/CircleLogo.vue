<template functional lang="pug">
.grid.circle-logo
  .circle-logo__icon-wrapper
    img.circle-logo__icon(src="/photos/circle-letters.png")
  p.column.is-12.text.text-description.circle-logo__description Мы&nbsp;&mdash; эксперты в&nbsp;создании кастомизированных программных
    br
    | продуктов. Наша команда трансформирует любые идеи в&nbsp;готовые ИТ-решения, исходя из&nbsp;вашего стратегического видения
  p.column.is-10.text.text-title.circle-logo__sub-description
    span.accent разработаем лучшее продуктовое решение для вас
</template>

<script>
export default {
name: "CircleLogo"
}
</script>

<style lang="stylus" scoped>
.circle-logo
  &__icon-wrapper
    margin 0 auto 68px auto

    @media $desktop {
      margin-bottom 90px
    }
  &__description
    margin-bottom 16px

    br {
      display none
    }

    @media $desktop {
      text-align center
      padding 0 10%

      br {
        display block
      }
    }
  & &__sub-description
    font-weight 300

    @media $desktop {
      text-align center
      margin 22px auto 0 auto
    }
</style>