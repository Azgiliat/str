<template lang="pug">
  .default
    Header
    .default
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

</style>