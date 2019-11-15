<template>
  <div class="cards">
    <card
      v-for="card in cards"
      :key="card.name"
      :name="card.name"
      :numberOfTerms="card.numberOfTerms"
      :numberStudied="card.numberStudied"
    ></card>
  </div>
</template>

<script>
import card from './cards/Card'
export default {
  name: 'cards',
  components: {
    card
  },
  data () {
    return {
      cards: [
        {
          name: 'Travelling',
          numberOfTerms: 24,
          numberStudied: 4
        },
        {
          name: 'Professional sport',
          numberOfTerms: 16,
          numberStudied: 14
        },
        {
          name: 'Fashion',
          numberOfTerms: 6,
          numberStudied: 0
        },
        {
          name: 'Football',
          numberOfTerms: 44,
          numberStudied: 16
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .cards {
    display: flex;
    overflow-y: auto;
    margin-top: 40px;
    height: 180px;
  }
</style>
