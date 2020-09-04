<template lang="pug">
  header.header
    nav.grid.d-flex.f-ai-c.f-jc-sp.header__nav
      p.text.header__title.column.is-6.is-2-laptop
          |  StreamTheater
          sup &reg;
      p.text.text-title.column.is-4-laptop.header__mid-item Студия цифровых продуктов
      a.text.text-normal.column.is-3-laptop.header__mid-item(href="mailto:hello@streamtheater.com") hello@streamtheater.com
      .header__mid-item.column.is-2-laptop.d-flex
        nuxt-link.text.text-normal.header__solutions.header__link(to="/solutions") Решения
        p.text.text-normal Кейсы
          sup 4
      p.text.header__menu.column.is-2 Menu
      p.text.text-normal.header__contacts.column.is-1-laptop Контакты
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

  &__contacts {
    display none

    @media $tablet {
      display block
    }
  }

  &__mid-item {
    display none

    @media $tablet {
      display flex
      align-items center
    }
  }

  &__solutions {
    margin-right 34px
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