<template>
  <div class="word" :class="{ active: card }" @click="openCard">
    <div class="word__wrapper">
       <div class="check-mark">
          <div class="check-mark__left"></div>
          <div class="check-mark__right"></div>
      </div>
      <p class="word__text">{{ word }}</p>
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {
  name: 'card-word',
  props: {
    word: {
      type: String,
      default: 'Word'
    },
    studied: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: 'url'
    }
  },
  data () {
    return {
      card: false
    }
  },
  methods: {
    openCard () {
      this.card = !this.card
    }
  }
}
</script>

<style lang="scss" scoped>
  .word {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 268px;
    height: 52px;
    background: #F3F6FA;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin-bottom: 20px;
    text-align: center;
    flex-shrink: 0;
    transition: .3s;
    .word__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 5px 0 5px;
      .word__text {
        width: 121px;
        height: 21px;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        padding-bottom: 0px;
        text-align: center;
        color: #515151;
      }
      .check-mark {
        position: relative;
        width: 30px;
        height: 21px;
        .check-mark__left {
          position: absolute;
          right: 21px;
          top: 6px;
          height: 3px;
          width: 14px;
          background: linear-gradient(90deg, #FF8F1F 0%, #FF4743 64.58%);
          border-radius: 2px;
          transform: rotate(45deg);
        }
        .check-mark__right {
          top: 2px;
          right: 0;
          position: absolute;
          height: 3px;
          width: 28px;
          background: linear-gradient(90deg, #FF4743 12.5%, #AE007A 28.13%, #AE007A 41.67%, #668BFF 87.5%);
          border-radius: 2px;
          transform: rotate(-45deg);
        }
      }
    }
    &.active {
      height: 115px;
      .word__wrapper {
        flex-direction: column;
        height: 100%;
        width: 35%;
        .check-mark__left {
          right: 26px;
          background: #ccc;
        }
        .check-mark__right {
          right: 5px;
          background: #ccc;
        }
      }
      .image {
        height: 100%;
        width: 65%;
        background: #F3F6FA url(../../../assets/module/word-bg.png) no-repeat center center;
        background-size: 90%;
        border-radius: 0 12px 12px 0;
      }
    }
  }
</style>
