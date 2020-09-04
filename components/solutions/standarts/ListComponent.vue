<template lang="pug">
  .list-component(:class="isActive && 'list-component--active'" @click="onClickHandler")
    .grid
      .column.is-12.is-4-tablet.is-offset-4-tablet
        .list-component__title-wrapper.d-flex.f-jc-sp.f-ai-c
          p.text-big {{info.title}}
          svg-icon.list-component__icon(name="angle_down" width="12" height="12")
    transition(:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave")
      .list-component__point.points(v-show="isActive")
        .grid(ref="heightCalculator")
          .column.is-12.is-4-tablet.is-offset-4-tablet
            ul.points__list
              li.points__item(v-for="point in info.points" :key="point")
                p.text-normal {{point}}
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    info: {
      type: Object,
      require: true
    },
    isActive: {
      type: Boolean,
      require: true
    },
    index: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      totalHeight: -1
    }
  },
  methods: {
    onClickHandler () {
      this.$emit('tabClicked', this.index)
    },
    beforeEnter (el) {
      el.style.height = 0
    },
    enter (el, done) {
      const doneCallback = function () {
        done()
        el.removeEventListener('transitionend', doneCallback)
      }
      el.style.height = `${this.$refs.heightCalculator.clientHeight}px`
      el.addEventListener('transitionend', doneCallback)
    },
    leave (el, done) {
      const doneCallback = function () {
        done()
        el.removeEventListener('transitionend', doneCallback)
      }
      el.style.height = 0
      el.addEventListener('transitionend', doneCallback)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-component {
  padding-top 8px
  padding-bottom 16px

  &--active {
    background-color $super-white

    .list-component__icon {
      transform rotate(180deg)
    }
  }

  @media $tablet {
    padding-top 26px
    padding-bottom 34px
  }

  &__icon {
    transition transform 0.5s
  }

  &__title-wrapper {
    margin-bottom 8px

    @media $tablet {
      margin-bottom 16px
    }
  }

  .points {
    transition height 0.5s
    overflow hidden

    &__list {
      list-style none
    }

    &__item:not(:last-child) {
      margin-bottom 8px
    }
  }
}
</style>