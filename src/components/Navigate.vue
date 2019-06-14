<template>
  <div id="navbox">
    <router-link to="/car" class="navbtn" v-for="(n,index) in navlist" :key="index">
      <img :src="n.pic" alt="">
      <p v-text="n.title"></p>
    </router-link>
    <div>
      <img :src="adpath" alt="" class="ad">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      navlist: [],
      adpath: ""
    };
  },
  methods: {
    async getlist() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/banner-nav"
      );
      this.navlist = data.data.data.navigationList;
      this.adpath = data.data.data.bannerList[0].pic;
    }
  },
  created() {
    this.getlist();
  }
});
</script>
<style lang="scss" scoped>
#navbox {
  display: flex;
  flex-wrap: wrap;
  padding: 0.48rem 0 0.24rem;
  .navbtn {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.4rem;
    color: #000;
    img {
      width: 0.853333rem;
      height: 0.853333rem;
      margin-bottom: 0.133333rem;
    }
  }
}
.ad {
  width: 10rem;
}
</style>
