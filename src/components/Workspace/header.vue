<template>
  <div class="header">
    <div class="header__menu-button" :class="{ active: menu }" @click="openMenu">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
     <div class="header__change-button" @click="openPopup('create')">
      <img src="../../assets/header/create.svg" class="header__change-button-icon">
    </div>
    <div class="header__search-button" @click="openPopup('search')">
      <img src="../../assets/header/search.svg" class="header__search-button-icon">
    </div>
    <div class="header__notifications-button"  @click="openNotifications">
      <img src="../../assets/header/notification.svg" class="header__notifications-button-icon">
      <div class="header__notifications-button-new"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      menu: false
    }
  },
  methods: {
    openMenu () {
      this.menu = !this.menu
      this.$router.push('/profile')
    },
    openFind () {
      alert('Открывается popup поиска')
    },
    openNotifications () {
      alert('Открывается окно с уведомлениями')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 37px;
    padding-left: 26px;
    padding-right: 26px;
    width: 100%;
    display: flex;
    align-items: center;
    .header__menu-button {
      width: 20px;
      height: 20px;
      position: relative;
      .dot {
        width: 6px;
        height: 6px;
        background-color: black;
        border-radius: 3px;
        position: absolute;
        transition: .3s;
      }
      &.active {
        .dot {
          border-radius: 0;
        }
        :nth-child(1) {
          transform: translate3d(-4px, 4px, 0);
          border-radius: 0 6px 0 0;
        }
        :nth-child(2) {
          transform: translate3d(4px, 4px, 0);
          border-radius: 6px 0 0 0;
        }
        :nth-child(3) {
          transform: translate3d(4px, -4px, 0);
          border-radius: 0 0 0 6px;
        }
        :nth-child(4) {
          transform: translate3d(-4px, -4px, 0);
          border-radius: 0 0 6px 0;
        }
      }
      :nth-child(1) {
        top: 0;
        right: 0;
      }
      :nth-child(2) {
        top: 0;
        left: 0;
      }
      :nth-child(3) {
        bottom: 0;
        left: 0;
      }
      :nth-child(4) {
        bottom: 0;
        right: 0;
      }
    }
    .header__change-button {
      width: 22px;
      height: 22px;
      margin-left: auto;
      margin-right: 30px;
      .header__change-button-icon {
        height: 100%;
      }
    }
    .header__search-button {
      width: 22px;
      height: 22px;
      margin-right: 30px;
      .header__search-button-icon {
        height: 100%;
      }
    }
    .header__notifications-button {
      width: 37px;
      height: 37px;
      background-color: #ffffff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .header__notifications-button-icon {
        height: 10px;
      }
      .header__notifications-button-new {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #e72d2c;
        position: absolute;
        top: 13px;
        left: 19px;
      }
    }
  }

</style>
