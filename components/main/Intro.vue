<template lang="pug">
  .intro
    .grid
      .intro__title.title.column.is-12.is-4-tablet.is-offset-4-tablet
        a.intro__email(:href="'mailto:hello@streamtheater.com'") hello@streamtheater.com
        p.text.text-title.title__text
          | Разработка
          span.accent &nbsp;ИТ-решений&nbsp;
          | любой сложности
    .grid
      .intro__img-wrapper.column.is-12.is-4-tablet.is-offset-4-tablet
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
    @media $tablet
      display none

  .title
    margin-bottom 16px

    @media $tablet
      margin-bottom 20px

    &__text
      display none
      @media $tablet
        display block
        text-align center

  &__img
    width 100%
    height auto
</style>