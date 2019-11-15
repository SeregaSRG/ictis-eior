<template>
  <transition name="modal-classic">
    <div class="modal-wrapper">
      <div class="modal-background"
        @click="closePopup"
      ></div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'popupBack',
  computed: {
    ...mapState('modals', ['popupList'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/MFUIKit/animations";
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
  }

  .modal-content, .modal-background {
     transition: .3s cubic-bezier(0.4, 0, 0.2, 1);;
  }
  .modal-classic-enter-active {
    transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal-classic-leave-active{
    transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modal-wrapper.modal-classic-enter {
    .modal-background {
      opacity: 0;
    }
    .modal-content {
      transform: translateY(100vh);
    }
  }
  .modal-wrapper.modal-classic-leave-to {
    .modal-background {
      opacity: 0;
    }
    .modal-content {
      transform: translateY(100vh);
    }
  }
</style>
