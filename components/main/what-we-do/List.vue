<template lang="pug">
  .grid
    ul.list.column.is-12.is-8-tablet.is-offset-2-tablet
      li.list__item.list__item--services
        svg-icon.list__icon.list-icon--services(name="services")
        p.text.text-normal Отказоустойчивые системы
      li.list__item.list__item--cloud
        svg-icon.list__icon.list-icon--cloud(name="cloud")
        p.text.text-normal Веб-приложения
      li.list__item.list__item--monitor
        svg-icon.list__icon.list-icon--monitor(name="monitor")
        p.text.text-normal Десктопные приложения
      li.list__item.list__item--console
        svg-icon.list__icon.list-icon--console(name="console")
        p.text.text-normal Бэкэнд-приложения
      li.list__item.list__item--cube
        svg-icon.list__icon.list-icon--cube(name="cube")
        p.text.text-normal Блокчейн-проект
      li.list__item.list__item--mobile-app
        svg-icon.list__icon.list-icon--mobile-app(name="mobile-app")
        p.text.text-normal Мобильные приложения
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="stylus" scoped>
.list
  list-style none
  padding 0

  @media $tablet
    display grid
    grid-template-areas 'services console' 'cloud cube' 'monitor mobile-app'
    column-gap 80px
    grid-template-columns 1fr 1fr

  &__item
    display flex
    align-items center
    padding 20px 0
    position relative

    &--services
      grid-area services

    &--cloud
      grid-area cloud

    &--monitor {
      grid-area monitor
      @media $tablet {
        &::before {
          display none
        }
      }
    }

    &--console {
      grid-area console
    }

    &--cube {
      grid-area cube
    }

    &--mobile-app {
      grid-area mobile-app
    }

    &:not(:last-child)&::before
      pseudo-element()
      width calc(100% + 20px)
      height 1px
      background-color $black
      top 100%

      @media $tablet {
        width 100%
      }

  &__icon
    width 30px
    height 24px
    margin-right 20px

    &--cloud
      height 20px

    &--cube
      height 34.5px

    &--mobile-app
      height 30px
</style>