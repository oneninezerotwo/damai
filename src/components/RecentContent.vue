<template>
  <div id="RecentContent" ref="cardwrapper">
    <ul class="card" :style="ulwidth">
      <li v-for="(i,index) in alist" :key="index">
        <img :src="i.verticalPic" alt="">
        <p v-text="i.name" class="name"></p>
        <p class="price">￥{{i.priceLow}} 起</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BScroll from 'better-scroll';
export default Vue.extend({
  data() {
    return {
      alist: [],
      ulwidth: {
        width: '',
      },
      // myddy: 0
    };
  },
  computed: {
    myddy() {
      return this.$store.state.weeknum;
    },
  },
  methods: {
    async getalist() {
      // const mydate = new Date();
      // this.myddy = this.$store.state.weeknum;
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/list' +
          this.myddy,
      );
      this.alist = data.data.data.currentCity;
      this.ulwidth.width = this.alist.length * 4.33 + 'rem';
    },
  },
  watch: {
    myddy() {
      this.getalist();
    },
  },
  mounted() {
    this.getalist();
    this.$nextTick(function() {
      new BScroll(this.$refs.cardwrapper, {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false,
      });
    });
  },
});
</script>

<style lang="scss" scoped>
#RecentContent {
  margin: 0 0 0.64rem 0.48rem;
  height: 7.37333rem;
  overflow: hidden;
  .card {
    width: 3000px;
    white-space: nowrap;
    overflow: hidden;
    li {
      float: left;
      margin-right: 0.32rem;
      img {
        display: inline-block;
        width: 4rem;
        height: 5.84rem;
        border-radius: 0.10667rem;
      }
      .name {
        width: 4rem;
        font-size: 0.37333rem;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 0.32rem;
        margin-bottom: 0.16rem;
      }
      .price {
        font-size: 0.37333rem;
        line-height: 0.37333rem;
        margin-left: -0.05333rem;
      }
    }
  }
}
</style>
