<template>
  <popup-wrapper v-if="popupList.create">
    <div class="create-module module">
      <div class="module__wrapper">
        <div class="header">
          <h1 class="header-title">Создание модуля</h1>
          <div class="header-link">Готово</div>
        </div>
        <div class="form-module">
          <input type="text" class="form-module__input form-name" placeholder="Название модуля">
          <input type="text" class="form-module__input form-description" placeholder="Краткое описание">
          <input type="text" class="form-description-translate form-module__input" placeholder="Краткое описание">
          <terms></terms>
        </div>
      </div>
    </div>
  </popup-wrapper>
</template>

<script>
import terms from '../popup-module/terms'
import popupWrapper from '../../global/popupWrapper'
import { mapState } from 'vuex'
export default {
  name: 'createModule',
  components: {
    terms,
    popupWrapper
  },
  computed: {
    ...mapState('modals', ['popupList'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/popup";
  .module .module__wrapper .form-module .form-module__input:nth-child(3) {
    margin-bottom: 0;
  }
</style>
