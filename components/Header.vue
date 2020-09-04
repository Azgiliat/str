<template lang="pug">
  header.header
    nav.grid.d-flex.f-ai-c.f-jc-sp.header__nav
      p.header__title.column.is-6.is-2-laptop
          |  StreamTheater
          sup &reg;
      p.text-title.column.is-4-laptop.header__mid-item Студия цифровых продуктов
      a-normal.column.is-3-laptop.header__mid-item(href="mailto:hello@streamtheater.com") hello@streamtheater.com
      .header__mid-item.column.is-3-laptop.d-flex.f-ai-c.f-jc-sp
        nuxt-link-normal.header__solutions.header__link(to="/solutions") Решения
        p.text-normal Кейсы
          sup 4
        p.text-normal.header__contacts Контакты
      p.header__menu.column.is-2 Menu
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus">
.header {
  padding-top: 36px;
  margin-bottom: 72px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    position: relative;
  }

  &__menu {
    font-size: 15px;
    line-height: 24px;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }

    @media $tablet {
      display none
    }
  }

  &__mid-item {
    display none

    @media $tablet {
      display flex
      align-items center
    }
  }

  &__nav {
    align-items center
  }

  &__link {
    text-decoration none

    &:hover {
      cursor pointer
    }
  }
}
</style>