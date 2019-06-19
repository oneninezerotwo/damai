<template>
  <div class="homeheader">
    <router-link to="/location" class="location">
      <i class="iconfont icon-dingwei"></i>
      <span v-text="citylocation">全国</span>
    </router-link>
    <router-link to="/search" class="search">
      <i class="iconfont icon-sousuo"></i>
      <span>搜索明星、演出比赛、场馆</span>
    </router-link>
    <router-link to="/mine" class="iconfont icon-wode"></router-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import '../assets/iconfont/iconfont.js';
export default Vue.extend({
  data() {
    return {
      citylocation: '',
    };
  },
  mounted() {
    // this.$route.params.cityname
    this.citylocation = this.$store.state.locationcity;
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
.homeheader {
  width: 100%;
  height: 1.333333rem;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999999;
  top: 0;
}
.location,
.search {
  float: left;
}
.location {
  font-size: 0.426667rem;
  line-height: 1.32rem;
  margin: 0 0.466667rem;
  color: #000;
  .icon-dingwei {
    font-size: 30px;
    vertical-align: middle;
    margin-right: -0.093333rem;
  }
  span {
    vertical-align: middle;
  }
}
.search {
  flex: 1;
  background: #fff;
  padding-left: 0.48rem;
  height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.373333rem;
  color: #999;
  border-radius: 0.4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .icon-sousuo {
    font-size: 18px;
    margin-right: 0.24rem;
  }
}
.icon-wode {
  color: #000;
  font-size: 22px;
  margin: 0 0.48rem 0 0.32rem;
}
</style>
