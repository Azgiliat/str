<template lang="pug">
  .default
    Header
    Nuxt
    Footer
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'default',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.default {
  position relative
  padding-top 132px

  @media $tablet {
    padding-top 136px
  }
}
</style>