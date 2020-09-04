<template lang="pug">
  nuxt-link.site-link(:to="to")
    p.text-normal.text--white
      slot(name="text")
</template>

<script>
export default {
  name: 'SiteLink',
  props: {
    to: {
      type: String,
      require: true,
      default: () => '/'
    }
  }
}
</script>

<style lang="stylus" scoped>
.site-link
  display flex
  width fit-content
  background-color $black
  padding 9px 24px 11px 24px
  text-decoration none
  border none
  outline none

  @media $desktop {
    padding 11px 32px 13px 32px
  }

  &:hover
    cursor pointer
</style>