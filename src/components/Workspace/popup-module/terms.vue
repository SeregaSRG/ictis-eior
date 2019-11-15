<template>
  <div class="terms">
    <div class="terms__wrapper">
      <term
        v-for="term in terms"
        :key=term.word
        :word=term.word
        :definition=term.definition
      ></term>
    </div>
   <div class="add-term" @click="addTerm">Добавить термин</div>
 </div>
</template>

<script>
import term from '../popup-module/terms/Term'
export default {
  name: 'terms',
  components: {
    term
  },
  data () {
    return {
      terms: [
        {
          word: '',
          definition: ''
        }
      ]
    }
  },
  methods: {
    addTerm () {
      this.terms.push("{word: '', definition: ''}")
    }
  }
}
</script>

<style lang="scss" scoped>
  .terms{
    padding: 40px 0 20px 0;
    .add-term {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 49px;
      background: #F3F6FA;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #515151;
      text-transform: uppercase;
    }
  }
</style>
