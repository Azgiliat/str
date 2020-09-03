<template lang="pug">
  .intro.grid
    .column.is-12
      .intro__title.title.column.is-4-desktop
        a.intro__email(:href="'mailto:hello@streamtheater.com'") hello@streamtheater.com
        p.text.text-title.title__text
          | Разработка
          span.accent ИТ-решений
          | любой сложности
      .intro__img-wrapper
        picture
          source(media="(min-width: 1440px)" srcset="/photos/intro-desktop.jpg")
          img.intro__img(alt="intro photo" src="/photos/intro.jpg")
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="stylus" scoped>
.intro
  &__email
    font-size: 15px;
    line-height: 24px;
    text-decoration-line underline
    color $text-grey
    @media $desktop
      display none
  .title
    margin-bottom 16px

    @media $desktop
      margin-right auto
      margin-left auto
      margin-bottom 20px

    &__text
      display none
      @media $desktop
        display block
        text-align center

  &__img-wrapper
    height 444px
    width 335px
    margin 0 auto
    @media $desktop
      width 472px
      height 624px

  &__img
    width 100%;
    height 100%;
</style>