<template lang="pug">
  ul.list
    li.list__item(v-for="(tab, index) in tabs" :key="tab.title")
      ListComponent.list__component(:info="tab" :index="index"
        :isActive="index === activeTabIndex" @tabClicked="changeActiveTab($event)")
</template>

<script>
import ListComponent from './ListComponent'

export default {
  name: 'StandardsList',
  components: {
    ListComponent
  },
  data () {
    return {
      tabs: [
        {
          title: 'Мобильная разработка',
          points: [
            'Кроссплатформенная разработка на Flutter',
            'Нативная iOS разработка на Objective-C/Swift',
            'Нативная Android разработка на Java/Kotlin'
          ]
        },
        {
          title: 'Десктоп/Web разработка',
          points: [
            'C/C++',
            'C#'
          ]
        },
        {
          title: 'Системы 3D визуализации',
          points: [
            'DirectX',
            'OpenGL'
          ]
        },
        {
          title: 'Серверная разработка',
          points: [
            'Java',
            'Scala'
          ]
        }
      ],
      activeTabIndex: -1
    }
  },
  methods: {
    changeActiveTab (evt) {
      this.activeTabIndex === evt ? this.activeTabIndex = -1 : this.activeTabIndex = evt
    }
  }
}
</script>

<style lang="stylus" scoped>
.list {
  &__component {
    margin-bottom 16px

    @media $tablet {
      margin-bottom 24px
    }
  }
}
</style>