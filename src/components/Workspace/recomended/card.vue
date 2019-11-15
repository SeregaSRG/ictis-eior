<template>
  <div class="card" @click="openPopup">
    <h1 class="card__title">
      Recomended course
    </h1>
    <h2 class="card__author">
      Author: Name
    </h2>
    <div class="card__information">
      <div class="card__modules-amount">12 модулей</div>
      <div class="card__words-amount">165 слов</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  methods: {
    openPopup () {
      alert('открывается рекомендуемый курс')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 323px;
  height: 125px;
  background: linear-gradient(90deg, rgba(102, 144, 255, 0.65) 0.77%, #4075D3 71.12%);
  box-shadow: 0px 4px 20px rgba(127, 189, 230, 0.8);
  border-radius: 18px;
  padding: 17px 20px;

  .card__title {
    font-family: Hattori Hanzo;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 27px;
    color: #FFFFFF;
  }

  .card__author {
    margin-top: 6px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;
  }

  .card__information {
    margin-top: 22px;
    display: flex;

    .card__modules-amount, .card__words-amount {
      width: 100px;
      font-family: Hattori Hanzo;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #FFFFFF;
    }
  }
}
</style>
