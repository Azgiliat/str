<template lang="pug">
  section.main
    .main__top.grid
      .column.is-12
        h2.main__header Мобильные, десктоп и веб приложения
        p.main__sub-header.text.text-description.column.is-6-desktop Разработка программного обеспечения для стартапов и большого бизнеса
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
    height 76.35vh
    @media $desktop
      height 71.2vh

  &__intro
    margin-bottom 240px
    @media $desktop
      margin-bottom 320px

  &__solutions {
    margin-bottom 192px

    @media $desktop {
      margin-bottom 316px
    }
  }

  &__header
    text-transform uppercase
    margin-bottom 12px

    @media $desktop
      margin-bottom 24px

  &__sub-header
    @media $desktop
      text-align center
      margin 0 auto
      padding 0 90px
</style>
