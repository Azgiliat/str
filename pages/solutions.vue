<template lang="pug">
  .solutions
    Intro.solutions__intro
    WhatWeDo.solutions__what-we-do
    Standards.solutions__standards
</template>

<script>
import Standards from '@/components/solutions/standarts/Standards'
import Intro from '@/components/solutions/Intro/Intro'
import WhatWeDo from '@/components/solutions/what-we-do/WhatWeDo'

export default {
  name: 'Solutions',
  components: {
    Intro,
    WhatWeDo,
    Standards
  }
}
</script>

<style lang="stylus" scoped>
.solutions {
  &__intro {
    margin-bottom 192px

    @media $tablet {
      margin-bottom 240px
    }
  }

  &__what-we-do {
    margin-bottom 224px

    @media $tablet {
      margin-bottom 296px
    }
  }

  &__standards {
    margin-bottom 192px

    @media $tablet {
      margin-bottom 84px
    }
  }
}
</style>