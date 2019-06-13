<template>
  <div id="bannerbox">
    <div class="swiper-container" id="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(i,index) in imgPath" :key="index" class="swiper-slide">
          <img :src="i.pic" alt="">
        </div>
      </div>
      <!--分页-->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>
<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
export default Vue.extend({
  data() {
    return {
      imgPath: []
    };
  },
  mounted() {
    setTimeout(function() {
      new Swiper("#swiper-container", {
        autoplay: {
          //自动轮播
          delay: 1000, //延时，每隔两秒再切下一张
          disableOnInteraction: false //设置成拖拽后还能继续运行
        },
        loop: true, //回路
        speed: 500, //切换速度
        pagination: {
          //显示焦点
          el: ".swiper-pagination"
        }
      });
    }, 30);
  },
  methods: {
    async getlist() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/banner-nav"
      );
      this.imgPath = data.data.data.focusPicList;
    }
  },
  created() {
    this.getlist();
  }
});
</script>
<style lang="scss">
@import "../../node_modules/swiper/dist/css/swiper.css";
#bannerbox {
  padding-top: 1.333333rem;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet {
    width: 0.133333rem;
    height: 0.133333rem;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
}
</style>
