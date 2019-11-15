<template>
  <div class="registration">
    <h1 class>Создать аккаунт</h1>
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Логин">
    <input type="password" placeholder="Пароль">
    <div class="link-wrapper">
      <router-link to="/workspace" class="authorization__link authorization__link-button"
      @click="register">Зарегистрироваться</router-link>
      <router-link to="/auth/login" class="authorization__link authorization__link--minor">Вход</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      credentials: {
        email: '',
        login: '',
        pass: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('auth/register', this.credentials)
        .then(() => {
          this.$store.dispatch('user/getData')
            .then(() => {
              this.$emit('closeAuth')
            })
            .catch((e) => {
              window.bus.$emit('alert-popup', {
                title: 'Ошибка!',
                message: JSON.stringify(e.error)
              })
              this.$emit('closeAuth')
            })
        })
        .catch(e => {
          window.bus.$emit('alert-popup', {
            title: 'Ошибка!',
            message: JSON.stringify(e.errors.error)
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/authorization";
</style>
