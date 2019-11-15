<template>
  <div class="card__wrapper">
    <div class="card"
      @click="openModule"
    >
      <div class="card__name">
        {{ name }}
      </div>
      <div class="card__description">
        {{ numberOfTerms }} терминов
      </div>
      <div class="card__progress">
        <div class="card__progress-text">{{ numberStudied }}/{{ numberOfTerms }}</div>
        <div class="card__progress-line">
          <div class="card__progress-line-fill"
            :style="`width: ${lineFillWidth}%`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      default: 'Module name'
    },
    numberOfTerms: {
      type: Number,
      default: 14
    },
    numberStudied: {
      type: Number,
      default: 0
    }
  },
  methods: {
    openModule () {
      alert('Открывается попап модуля')
    }
  },
  computed: {
    lineFillWidth () {
      return (this.numberStudied / this.numberOfTerms) * 100
    }
  }
}
</script>

<style lang="scss" scoped>
  .card__wrapper {
    padding-left: 25px;
    padding-right: 25px;
  }
  .card {
    width: 163px;
    height: 163px;
    background: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    flex-shrink: 0;
    .card__name {
      height: 88px; // 2 line
      padding: 16px 20px 0 20px;
      font-size: 27px;
      line-height: 36px;
      font-family: "PF Centro Slab Pro";
      word-wrap: break-word;
    }
    .card__description {
      font-size: 14px;
      line-height: 16px;
      color: #A5A5A5;
      padding: 0 20px;
      margin-top: 9px;
      font-family: Ubuntu;
      font-weight: 300;
    }
    .card__progress {
      padding: 0 10px;
      margin-top: 10px;
      .card__progress-text {
        font-size: 9px;
        line-height: 11px;
        color: #C7C8CC;
        text-align: right;
        padding-right: 8px;
        font-family: Ubuntu;
      }
      .card__progress-line {
        width: 100%;
        height: 4px;
        background-color: #eeeff1;
        border-radius: 2px;
        .card__progress-line-fill {
          height: 100%;
          background: linear-gradient(90deg, #FF8F1F 0%, #FF4743 21.88%, #AE007A 43.75%, #AE007A 78.13%, #668BFF 100%);
          border-radius: 2px;
        }
      }
    }
  }
</style>
