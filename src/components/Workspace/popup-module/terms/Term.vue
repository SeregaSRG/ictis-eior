<template>
  <div class="term">
    <input v-model="word" placeholder="Термин" class="term-input">
    <input v-model="definition" placeholder="Определение" class="term-input">
  </div>
</template>

<script>
export default {
  name: 'term',
  props: {
    word: {
      type: String
    },
    definition: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .term {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 89px;
    width: 100%;
    background: #F3F6FA;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 15px;
    }
    .term-input {
      border: none;
      border-bottom: 1px solid rgba(130, 135, 147, 0.5);
      background: inherit;
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #515151;
      padding: 3px;
      &::placeholder {
        color: rgba(81, 81, 81, 0.3);
      }
      &:focus {
        outline-width: 0;
      }
    }
  }
</style>
