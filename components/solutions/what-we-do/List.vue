<template lang="pug">
  ul.list.column.is-12
    li.list__item
      ListPoint
        template(slot="title") Составление техзадания, оценка сроков и&nbsp;стоимости разработки
        template(slot="description") На&nbsp;основе анализа ваших задач мы&nbsp;разрабатываем спецификации, оцениваем сроки и&nbsp;стоимость реализации проектов, проектируем решение и&nbsp;формулируем техническое задание для команды разработчиков.
      ListPoint
        template(slot="title") Отказоустойчивые сервисы
        template(slot="description") Надежные, горизонтально масштабируемые сервисы, способные поддерживать высокую частоту запросов и&nbsp;обрабатывать большие объемы мультимедийных данных, с&nbsp;гибкой облачной инфраструктурой на&nbsp;основе контейнеров.
      ListPoint
        template(slot="title") Высоконагруженные бэкэнд-приложения
        template(slot="description") REST API, разработанный на&nbsp;платформе SpringBoot с&nbsp;использованием системы PostgresSQL и&nbsp;базой данных ClickHouse.
      ListPoint
        template(slot="title") Десктопные приложения
        template(slot="description") Современные приложения для операционных систем Windows и&nbsp;macOS с&nbsp;качественным пользовательским интерфейсом, выполненные с&nbsp;помощью веб-технологий.
      ListPoint
        template(slot="title") Веб-приложения
        template(slot="description") Приложения, с которыми удобно работать как на дисплее ноутбука или настольного компьютера, так и на экране телефона или планшета. Актуальный дизайн и современные технологии.
      ListPoint
        template(slot="title") Блокчейн
        template(slot="description") Защищенные сервисы на&nbsp;основе технологии блокчейн, позволяющие автоматизировать бизнес-процессы для двух и&nbsp;более организаций без необходимости создания единого центра
      ListPoint
        template(slot="title") Мобильные приложения
        template(slot="description") Решения, созданные на&nbsp;основе кроссплатформенного SDK Flutter с&nbsp;реактивной архитектурой и&nbsp;кастомными встроенными плагинами для поддержки функций камеры, обработки видео и&nbsp;стриминга.
</template>

<script>
import ListPoint from './ListPoint'
export default {
  name: 'List',
  components: {
    ListPoint
  }
}
</script>

<style lang="stylus" scoped>
.list {
  list-style none

  &__item {

  }
}
</style>