<template functional lang="pug">
  .circle-logo
    .circle-logo__icon-wrapper
      img.circle-logo__icon(src="/photos/circle-letters.png")
    .grid
      p.column.is-12-description.circle-logo__description.is-10-tablet.is-offset-1-tablet Мы&nbsp;&mdash; эксперты в&nbsp;создании кастомизированных программных
        br
        | продуктов. Наша команда трансформирует любые идеи в&nbsp;готовые ИТ-решения, исходя из&nbsp;вашего стратегического видения
    .grid
      p.column.is-10.is-4-tablet.is-offset-4-tablet.text-title.circle-logo__sub-description
        span.accent разработаем лучшее продуктовое решение для вас
</template>

<script>
export default {
  name: 'CircleLogo'
}
</script>

<style lang="stylus" scoped>
.circle-logo
  &__icon-wrapper
    margin 0 auto 62px auto

    @media $tablet {
      margin-bottom 90px
    }

  &__icon {
    display block
    margin 0 auto
  }

  &__description
    margin-bottom 16px

    @media $tablet {
      text-align center
    }

  & &__sub-description
    font-weight 300

    @media $tablet {
      text-align center
    }
</style>