<template>
  <div class="main mf-page">
    <recommended></recommended>
    <div class="summary">
      <app-header></app-header>
      <user></user>
      <cards></cards>
    </div>
    <search></search>
    <popup-module></popup-module>
    <createModule></createModule>
  </div>
</template>

<script>
import recommended from '../components/Workspace/recommended'
import appHeader from '../components/Workspace/header'
import user from '../components/Workspace/user'
import cards from '../components/Workspace/cards'
import search from '../components/Workspace/search'
import popupModule from '../components/Workspace/popup-module'
import createModule from '../components/Workspace/popup-module/create-module'
export default {
  name: 'Main',
  components: {
    recommended,
    appHeader,
    user,
    cards,
    search,
    popupModule,
    createModule
  }
}
</script>

<style lang="scss" scoped>

  .main {
    font-family: "Hattori Hanzo", sans-serif;
    font-weight: 300;
    height: 100%;
    .summary {
      position: absolute;
      top: 0;
      min-width: 300px;
      width: 100%;
      background: #F3F6FA;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 45px 45px;
      padding-bottom: 28px;
      padding-top: 40px;
    }
  }
</style>
