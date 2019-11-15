<template>
  <popup-wrapper v-if="popupList.change">
    <div class="change-profile module">
      <div class="module__wrapper">
        <div class="header">
          <h1 class="header-title">Изменить профиль</h1>
          <div class="header-link">Готово</div>
        </div>
        <div class="form-module">
          <input v-model=name class="form-module__input" placeholder="Имя">
          <input v-model=phone class="form-module__input" placeholder="Телефон">
          <input v-model=email class="form-module__input" placeholder="Email">
        </div>
      </div>
    </div>
  </popup-wrapper>
</template>

<script>
import popupWrapper from '../global/popupWrapper'
import { mapState } from 'vuex'
export default {
  name: 'changeProfile',
  components: {
    popupWrapper
  },
  props: {
    name: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    }
  },
  computed: {
    ...mapState('modals', ['popupList'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/popup";
</style>
