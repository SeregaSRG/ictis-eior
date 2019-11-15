<template>
  <div class="login">
    <h1 class>Войти в аккаунт</h1>
    <input type="text" placeholder="Логин">
    <input type="password" placeholder="Пароль">
    <div class="link-wrapper">
      <router-link to="/workspace" class="authorization__link authorization__link-button"
       @click="login">Вход</router-link>
      <router-link to="/auth/registration" class="authorization__link authorization__link--minor">Регистрация</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        login: '',
        pass: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', this.credentials)
        .then(() => {
          this.$store.dispatch('user/getData')
            .then(() => {
              this.$emit('closeAuth')
            })
            .catch(() => {
              this.$emit('closeAuth')
            })
        })
        .catch(e => {
          window.bus.$emit('alert-popup', {
            title: 'Ошибка!',
            message: JSON.stringify(e.error),
            callback: () => {
              window.bus.$emit('auth-open')
            }
          })
        })
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "../../css/authorization";
</style>
