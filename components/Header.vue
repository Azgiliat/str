<template lang="pug">
  header.header
    h1.visually-hidden StreamTheater Site
    nav.grid.d-flex.f-ai-c.f-jc-sp.header__nav
      .header__left
        p.text.header__title StreamTheater
          svg-icon.header__copyright(name="copyright")
      .header__mid
        p.text.text-title.header__mid-item Студия цифровых продуктов
        a.text.text-normal.header__mid-item(href="mailto:hello@streamtheater.com") hello@streamtheater.com
        p.text.text-normal.header__mid-item Решения
        p.text.text-normal.header__mid-item Кейсы
      .header__right
        p.text.header__menu Menu
        p.text.text-normal.header__contacts Контакты
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

  &__copyright {
    pseudo-element()
    width 9px
    height 10px
    left 100%
  }

  &__menu {
    font-size: 15px;
    line-height: 24px;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }

    @media $desktop {
      display none
    }
  }

  &__contacts {
    display none

    @media $desktop {
      display block
    }
  }

  &__left {
    @media $desktop {
      margin-right 91px
    }
  }

  &__right {
    @media $desktop {
      margin-left 100px
    }
  }

  &__mid {
    display none

    @media $desktop {
      display flex
      align-items center
      flex-grow 1

      &-item:first-child {
        margin-right 280px
      }

      &-item:nth-child(2) {
        margin-right 180px
      }

      &-item:nth-child(3) {
        margin-right 20px
      }
    }
  }

  &__nav {
    align-items center
  }
}
</style>