/* jshint ignore:start*/
<template>
  <div class="main">
    <div class="themes">
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
      <div class="themes__item">
        <div class="theme">
          <div class="theme__title">
            Traveling
          </div>
        </div>
      </div>
    </div>
    <div class="summary">
      <app-header></app-header>
      <user></user>
      <cards></cards>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    appHeader: () => import('../components/Main/header'),
    user: () => import('../components/Main/user'),
    cards: () => import('../components/Main/cards')
  }
}
</script>

<style lang="scss" scoped>

  .main {
    font-family: "Hattori Hanzo", sans-serif;
    font-weight: 300;
    height: 100%;
    .themes {
      padding-top: 440px;
      overflow-x: auto;
      height: 100%;
      position: relative;
      top: 0;
      .themes__item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 25px;
        &:first-child {
          margin-top: 0;
        }
        .theme {
          width: 90%;
          height: 85px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          background-color: #ffc3c3;
          border-radius: 20px 0 0 20px;
          display: flex;
          align-content: center;
          .theme__title {
            color: #ac3d46;
            font-size: 20px;
            font-weight: 800;
            margin-left: 30px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .summary {
      position: absolute;
      top: 0;
      width: 100%;
      background: #F3F6FA;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 45px 45px;
      padding-bottom: 28px;
      padding-top: 40px;
    }
  }
</style>
/* jshint ignore:end */
