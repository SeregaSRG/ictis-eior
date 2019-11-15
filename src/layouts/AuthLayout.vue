<template>
  <div class="authorization">
    <div class="triangles-layer">
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
    </div>
    <div class="authorization__container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authorization'
}
</script>

<style lang="scss" scoped>
  @import "../css/triangles";
  .authorization {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background: #fff url(../assets/AuthLayout/authorization-bg.png) center center no-repeat;
    background-size: cover;
    position: relative;

    .authorization__container {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content:flex-start;
      align-items: flex-start;
      width: 100%;
      max-width: 300px;
      height: 100%;
      max-height: 554px;
      position: relative;
      overflow-y: scroll;
      overflow-x: auto;
    }
  }
  .triangles-layer {
    :nth-child(1) {
      top: 52px;
      right: 21px;
    }

    :nth-child(2) {
      top: 80px;
      right: -29px;
    }

    :nth-child(3) {
      top: 140px;
      right: -29px;
    }

    :nth-child(4) {
      top: 200px;
      left: 0;
    }
  }
</style>
