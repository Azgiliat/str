<template lang="pug">
  section.what-we-do
    Description.what-we-do__description
    List.what-we-do__list
</template>

<script>
import Description from './Description'
import List from './List'

export default {
  name: 'WhatWeDo',
  components: {
    Description,
    List
  }
}
</script>

<style lang="stylus" scoped>
.what-we-do {
  &__description {
    margin-bottom 48px
    @media $tablet {
      margin-bottom 120 xp
    }
  }
}
</style>