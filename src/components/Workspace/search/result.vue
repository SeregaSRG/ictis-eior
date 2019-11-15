<template>
  <div class="search__result" :class="`search__result--${bgColor}`">
    <p class="search__result-text">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'SerchResult',
  props: {
    name: {
      type: String,
      default: 'Result'
    },
    bgColor: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style lang="scss" scoped>
  // враппер на не нужен, .search-results имеет определенные размеры, но не больше 340px
  // делаем кнопку резиновой, но не более 160px. А ширину берем как половину от родителя, минус отступ
  .search__result {
    max-width: 160px;
    width: calc(100% / 2 - 10px);
    height: 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); // используем тень из фигмы
    text-align: center;
    font-size: 24px;
    color: #fff;
    padding: 5px;
    display: flex;
    flex-shrink: 0;

    // Кастомные отступы для того, чтобы прижать к краям внешнего блока кнопки
    &:nth-child(even) {
      margin: 0 0 20px 10px;
    }
    &:nth-child(odd) {
      margin: 0 10px 20px 0;
    }

    &-text {
      font-family: Ubuntu; // правильынй шрифт
      font-size: 18px;
      text-align: center;
      color: #FFFFFF;
      margin: auto;
      padding-bottom: 2px; // компенсируем визуальную середину блока
    }

    &--blue {
      background: linear-gradient(90deg, #4075D3 0.77%, #6690FF 100%);
    }

    &--purple {
      background: linear-gradient(90deg, #772CAF 0.77%, #A244E2 100%);
    }
    // добавим ещё кастомные цвета из фигмы
  }
  .result__wrapper {
    /* НЕ САМОЕ УДАЧНОЕ РЕШЕНИЕ
    // при ширине экрана меньше чем 360, .search-results сжимается и кнопки не помещаются
    // используем медиареквест
    @media only screen and (max-width: 360px) {
      &:nth-child(even) {
        margin: 0 0 15px 5px;
      }
      &:nth-child(odd) {
        margin: 0 5px 15px 0;
      }
      .search__result {
        width: 145px!important;
      }
    }
    */
  }
</style>
