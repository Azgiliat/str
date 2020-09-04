<template lang="pug">
section.standards
  Title.standards__title
  StandardsList.standards__list
  Bottom.standards__bottom
</template>

<script>
import Bottom from './Bottom'
import StandardsList from './StandardsList'
import Title from './Title'
export default {
  name: 'Standards',
  components: {
    Title,
    StandardsList,
    Bottom
  }
}
</script>

<style lang="stylus" scoped>
.standards {
  &__title {
    margin-bottom 48px
  }

  &__list {
    margin-bottom 48px

    @media $tablet {
      margin-bottom 138px
    }
  }
}
</style>