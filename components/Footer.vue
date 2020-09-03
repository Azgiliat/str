<template lang="pug">
  footer.footer
    nav.grid.d-flex.f-ai-c.f-jc-sp.footer__nav
      .footer__left
        p.text.text--white.footer__title StreamTheater
          svg-icon.footer__copyright(name="copyright")
      .footer__mid
        p.text.text-title.footer__mid-item.text--white Студия цифровых продуктов
        a.text.text-normal.footer__mid-item.text--white(href="mailto:hello@streamtheater.com") hello@streamtheater.com
        p.text.text-normal.footer__mid-item.text--white Решения
        p.text.text-normal.footer__mid-item.text--white Кейсы
      .footer__right
        p.text.footer__menu Menu
        p.text.text-normal.footer__contacts.text--white О нас
        p.text.text-normal.footer__contacts.text--white Контакты
    .footer__content.grid.content
      h2.text--white.column.is-6.content__header.is-12-deskop Свяжитесь с нами
      a(href="mailto:hello@streamtheater.com").text--white.content__email.column.is-12 hello@streamtheater.com
      p.content__description.text.text--grey.column.is-11.is-4-desktop Расскажите нам о своей компании и проектах, для которых хотите заказать разработку
    .footer__bottom.grid.bottom
      p.text.text-title.text--grey.bottom__text &copy;2019. Все
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
  height: 100vh;
  display: flex;
  flex-direction: column;

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
      flex-grow 1
      display flex
      margin-left 40px
      justify-content space-between
    }
  }

  &__mid {
    display none

    @media $desktop {
      display flex
      align-items center

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
}
</style>