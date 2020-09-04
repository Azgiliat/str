<template lang="pug">
  section.main
    .main__top
      .grid
        h1.main__header.column.is-12 Мобильные, десктоп и&nbsp;веб приложения
      .grid
        p.main__sub-header.text-description.column.is-12.is-6-laptop.is-offset-3-tablet Разработка программного обеспечения для стартапов и&nbsp;большого бизнеса
    Intro.main__intro
    WhatWeDo.main__what-we-do
    Solutions.main__solutions
</template>

<script>
import Intro from '@/components/main/Intro'
import WhatWeDo from '@/components/main/what-we-do/WhatWeDo'
import Solutions from '@/components/main/solution/Solutions'

export default {
  name: 'MainPage',
  components: {
    Intro,
    WhatWeDo,
    Solutions
  }
}
</script>

<style scoped lang="stylus">
.main
  &__top
    min-height calc(100vh - 132px - 16px - 24px - 20px)

    @media $tablet
      min-height calc(100vh - 136px - 20px - 18px - 20px)

  &__intro
    margin-bottom 240px
    @media $tablet
      margin-bottom 320px

  &__solutions {
    margin-bottom 192px
    overflow hidden

    @media $tablet {
      margin-bottom 316px
    }
  }

  &__header
    text-transform uppercase
    margin-bottom 12px

    @media $tablet
      text-align center
      margin-bottom 24px

  &__sub-header
    margin-bottom auto
    @media $tablet
      text-align center

  &__what-we-do {
    margin-bottom 320px
  }
</style>
