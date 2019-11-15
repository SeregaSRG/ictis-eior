<template>
  <div class="card" @click="openPopup('module')">
    <h1 class="card__title">
      Recomended module
    </h1>
    <h2 class="card__author">
      Author: Name
    </h2>
    <div class="card__information">
      <div class="card__words-amount">16 слов</div>
    </div>
    <img class="polygon" src="../../../assets/purple-polygon.svg">
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style lang="scss" scoped>
.card {
  width: 323px;
  height: 125px;
  background: linear-gradient(90deg, rgba(162, 68, 226, 0.5) 0.77%, #772CAF 71.12%);
  box-shadow: 0px 4px 20px rgba(127, 189, 230, 0.8);
  border-radius: 18px;
  padding: 17px 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

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

  .polygon {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
