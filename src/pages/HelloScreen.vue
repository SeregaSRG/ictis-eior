<template>
  <!-- Временное решение с router-link, чтобы перескочить сразу на вход -->
  <router-link tag="div" to="/auth/login" class="hello-wrapper">
    <div class="triangles-layer">
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
    </div>
    <div class="advantages-container">
      <div class="advantages__header">
        <h1>Я полиглот</h1>
      </div>
      <div class="advantages__carusel">
        <div class="advantages__text">
          <p>Быстрое запоминание<span>Ubuntu</span></p>
        </div>
        <div class="advantages__img">
          <img src="../assets/HelloScreen/hello-screen-phone.png">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'HelloScreen'
}
</script>

<style lang="scss" scoped>
  @import "../css/triangles";

  .hello-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff url(../assets/HelloScreen/hello-screen-bg.png) center center no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .advantages__header {
    position: relative;;
    text-align: center;
    margin-bottom: 5px;
    color: #fff;
    font-family: "PF Centro Slab Pro";
    z-index: 2;

    h1 {
      font-size: 58px;
      letter-spacing: 1px;
    }
  }

  .advantages__carusel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .advantages__text {
    font-family: "PF Centro Slab Pro";
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    z-index: 2;

    p {
      line-height: 35px;
      font-size: 28px;
      font-weight: 100;
      letter-spacing: 1px;
    }

    span {
      display: block;
      font-family: "Ubuntu";
      font-size: 24px;
      font-weight: 100;
    }
  }

  .triangles-layer {
    :nth-child(1) {
      top: 70px;
      right: -10px;
    }

    :nth-child(2) {
      top: 125px;
      right: -10px;
    }

    :nth-child(3) {
      top: 25px;
      left: 5px;
    }

    :nth-child(4) {
      top: 53px;
      left: 55px;
    }
  }
</style>
