<template>
<div class="recommended">
  <module></module>
  <course></course>
</div>
</template>

<script>
import module from './recomended/module'
import course from './recomended/course'
export default {
  name: 'recommended',
  components: { module, course }
}
</script>

<style lang="scss" scoped>
.recommended {
  padding-top: 450px;
  padding-bottom: 20px;
  overflow-x: auto;
  height: 100%;
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card:not(:first-child) {
    margin-top: 22px;
  }
}
</style>
