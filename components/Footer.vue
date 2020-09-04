<template lang="pug">
  footer.footer
    nav.grid.d-flex.f-ai-c.f-jc-sp.footer__nav
      p.footer__title.column.is-6.is-2-laptop.text--white
        |  StreamTheater
        sup &reg;
      p.text-title.text--white.column.is-4-laptop.footer__mid-item Студия цифровых продуктов
      a.text-normal.text--white.column.is-3-laptop.footer__mid-item(href="mailto:hello@streamtheater.com") hello@streamtheater.com
      .footer__mid-item.column.is-3-laptop.d-flex.f-ai-c.f-jc-sp
        nuxt-link.text-normal.text--white.footer__solutions.footer__link(to="/solutions") Решения
        p.text-normal.text--white Кейсы
          sup 4
        p.text-normal.text--white О нас
        p.text-normal.footer__contacts.text--white Контакты
      p.footer__menu.column.is-2.text--white Menu
    .footer__content.grid.content
      h2.text--white.column.is-6.content__header.is-12-deskop Свяжитесь с нами
      a(href="mailto:hello@streamtheater.com").text--white.content__email.column.is-12 hello@streamtheater.com
      p.content__description.text--grey.column.is-11.is-4-desktop Расскажите нам о своей компании и проектах, для которых хотите заказать разработку
    .footer__bottom.grid.bottom
      p.text-title--grey.bottom__text &copy;2019. Все
        span.accent &nbsp;права&nbsp;
        | защищены
        br
        | 129344, Москва, ул. Верхоянская, д.18, корпус&nbsp;2, помещение&nbsp;2, комната&nbsp;1
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
.footer {
  background-color: $footer-back;
  padding-top: 36px;
  padding-bottom: 16px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 100%;

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
    fill $white
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
    margin-bottom 96px

    @media $desktop {
      margin-bottom 128px
    }
  }

  .content {

    &__header {
      margin-bottom 34px;
      text-transform: uppercase;

      @media $desktop {
        center-text()
        margin-bottom 84px
      }
    }

    &__email {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-decoration-line: underline;
      margin-bottom: 12px;

      @media $desktop {
        text-align center
        font-weight: 500;
        font-size: 36px;
        line-height: 40px;
        margin-bottom 18px
      }
    }

    &__description {
      font-size: 15px;
      line-height: 20px;
      color: $dark-grey;

      @media $desktop {
        center-text()
        padding 0 1.6%
      }
    }
  }

  &__bottom {
    margin-top: auto;
  }

  .bottom {
    text-align: center;

    &__text {
      @media $desktop {
        center-text()
      }
    }
  }

  &__link {
    text-decoration none

    &:hover {
      cursor pointer
    }
  }
}
</style>