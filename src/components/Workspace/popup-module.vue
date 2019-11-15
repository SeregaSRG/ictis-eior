<template>
  <popup-wrapper v-if="popupList.module">
    <div class="module popup-bottom">
      <div class="popup-bottom__wrapper">
        <div class="popup-bottom__header">
          <div class="line"></div>
          <div class="card-information">
            <h1 class="card__title">Module name</h1>
            <p class="card__words-amount">14 терминов</p>
            <p class="card__author">authorname</p>
          </div>
          <img src="../../assets/module/brit.png" class= "popup-bottom__image">
          <div class="triangles-layer">
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
          </div>
        </div>
        <div class="module__words">
          <word></word>
          <word></word>
          <word></word>
        </div>
      </div>
    </div>
  </popup-wrapper>
</template>

<script>
import word from '../Workspace/popup-module/card-word'
import popupWrapper from '../global/popupWrapper'
import { mapState } from 'vuex'
export default {
  name: 'popup-module',
  components: {
    word, popupWrapper
  },
  computed: {
    ...mapState('modals', ['popupList'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/triangles";
  $dark: #efaf5b;
  $light:#ffc069;
  $shadow:#f9ba63;
  .popup-bottom {
    position: absolute;
    bottom: 0;
    height: 420px;
    width: 100vw;
    background: #fff;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    overflow-y: auto;
    .popup-bottom__wrapper {
      min-width: 300px;
      .popup-bottom__header {
        position: relative;
        height: 130px;
        background: $light;
        padding: 30px;
        .line {
        position: absolute;
        height: 5px;
        width: 100px;
        top: 5px;
        left: 50%;
        margin-left: -50px;
        background: $dark;
        border: 1px solid $shadow;
        border-radius: 10px;
        }
        p {
          margin-bottom: 8px;
        }
        .card-information {
          position: absolute;
          font-family: Ubuntu;
          font-size: 14px;
          line-height: 16px;
          color: #fff;
          z-index: 2;
          .card__title {
            width: 145px;
            height: 30px;
            font-family: PF Centro Slab Pro;
            font-size: 24px;
            line-height: 30px;
          }
          .card__words-amount {
            width: 84px;
            height: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .card__author {
            width: 78px;
            height: 16px;
            font-style: normal;
            font-weight: normal;
          }
        }
        .popup-bottom__image {
          position: absolute;
          right: 0;
          top: 15px;
          z-index: 1;
        }
        .triangles-layer {
          top: 0;
          left: 0;
          :nth-child(1) {
            top: 0;
            right: 20px;
            transform: scale(1.5, .7);
            &::after {
              background: linear-gradient(135deg, $dark 0.16%, $shadow 55%);
            }
          }
          :nth-child(2) {
            top: 20px;
            right: -20px;
            transform: scale(1.5, .7);
            &::after {
              background: linear-gradient(135deg, $dark 0.16%, $shadow 55%);
            }
          }
          :nth-child(3) {
            bottom: 10px;
            right: -20px;
            transform: scale(1.5, .7);
            &::after {
              background: linear-gradient(135deg, $dark 0.16%, $shadow 55%);
            }
          }
        }
      }
      .module__words {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px 50px 0 60px;
      }
    }
  }
</style>
