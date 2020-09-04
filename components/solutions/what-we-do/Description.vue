<template functional lang="pug">
  .description.what-we-do__description
    .description__icon-wrapper
      img.description__icon(src="/photos/circle-letters.png")
    .grid.description__title
      p.column.is-12.text-title
        | Что
        span.accent &nbsp;мы&nbsp;
        |  делаем
    .grid
      p.column.is-12.text-description
        | Мы&nbsp;предлагаем комплексные программные решения с&nbsp;учетом потребностей вашего бизнеса, опираясь на&nbsp;передовые информационные технологии и&nbsp;уникальную экспертизу в&nbsp;разработке
</template>

<script>
export default {
  name: 'Description'
}
</script>

<style lang="stylus" scoped>
.description
  &__icon-wrapper
    margin 0 auto 62px auto

    @media $tablet {
      margin-bottom 90px
    }

  &__icon {
    display block
    margin 0 auto
  }

  &__title {
    margin-bottom 12px
  }
</style>