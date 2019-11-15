<template>
    <popup-wrapper v-if="popupList.search">
      <div class="search popup-bottom">
        <div class="popup-bottom__wrapper">
          <div class=" title">
            <p>Поиск</p>
          </div>
          <div class="search-input__wrapper">
            <input type="text" class="search-input">
            <img src="../../assets/search/search.png" class="search-image">
          </div>
          <div class="search-results">
            <result bgColor="blue" :name="'Travelling'"></result>
            <result bgColor="purple" :name="'Sport'"></result>
            <result :name="'Fashion'"></result>
          </div>
        </div>
      </div>
    </popup-wrapper>
</template>

<script>
import result from '../Workspace/search/result'
import popupWrapper from '../global/popupWrapper'
import { mapState } from 'vuex'
export default {
  name: 'Search',
  components: {
    result, popupWrapper
  },
  computed: {
    ...mapState('modals', ['popupList'])
  }
}
</script>

<style lang="scss" scoped>
  .popup-bottom{
    position: absolute;
    bottom: 0;
    height: 300px;
    width: 100vw;
    background: #fff;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    overflow-y: auto;
    .popup-bottom__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 10px 0 10px;
      min-width: 300px;
      .title {
        width: 300px;
        height: 50px;
        font-family: "PF Centro Slab Pro";
        font-size: 24px;
        line-height: 30px;
        padding-left: 5px;
      }
    }
  }
  .search-input__wrapper {
    display: flex;
    align-items: center;
    background: rgb(231, 227, 227);
    border-radius: 8px;
    .search-input {
      width: 270px;
      height: 40px;
      background: inherit;
      border: none;
      border-radius: 8px;
      padding: 5px 3px 5px 10px;
      font-size: 24px;
      &:focus {
        outline-width: 0;
      }
    }
    .search-image {
      width: 30px;
      height: 30px;
      padding: 5px;
    }
  }
  .search-results {
    width: 100%;
    max-width: 340px;
    display: flex;
    // justify-content: flex-start;
    // align-items: center;
    flex-wrap: wrap;
    padding-top: 30px;
  }
</style>
