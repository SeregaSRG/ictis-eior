<template>
  <router-link to="/profile" tag="div" class="user">
    <div class="user__avatar">
      <img class="user__image" src="https://pbs.twimg.com/media/D5f_bs_UIAANqHk?format=jpg&name=small">
    </div>
    <div class="user__text">
      <div class="user__hello">Hello,</div>
      <div class="user__name">Sergei J</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style lang="scss" scoped>
  .user {
    padding-left: 26px;
    padding-right: 26px;
    display: flex;
    margin-top: 43px;
    .user__avatar {
      width: 54px;
      height: 54px;
      .user__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .user__text {
      margin-left: 16px;
      font-family: "Ubuntu";
      .user__hello {
        font-size: 16px;
        color: #cacbcd;
      }
      .user__name {
        font-size: 28px;
        line-height: 32px;
        color: #000000;
      }
    }
  }
</style>
