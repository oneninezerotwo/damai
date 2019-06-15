<template>
  <div class="city">
    <div class="city-location">
      <div class="title">定位城市</div>
      <div>
        <span class="item">定位失败</span>
      </div>
    </div>
    <div class="city-hot">
      <div class="title">热门城市/区域</div>
      <div>
        <span class="item" v-for="(j,jd) in topcity" :key="jd" v-text="j.name" @click="tohome(j.name)"></span>
      </div>
    </div>
    <div class="city-hot" v-for="(i,index) in hotcity" :key="index" v-if="index!=0">
      <div class="title" v-text="i.prefix.toUpperCase()"></div>
      <div>
        <ul>
          <li v-for="(j,jd) in i.cities" :key="jd" v-text="j.name" @click="tohome(j.name)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      hotcity: [],
      topcity: [],
      cityname: '',
    };
  },
  methods: {
    async gethotcity() {
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/location',
      );
      this.hotcity = data.data.data.areas;
      this.topcity = this.hotcity[0].cities;
    },
    tohome(ru) {
      this.cityname = ru;
      this.$router.push({
        name: 'home',
        params: {
          cityname: this.cityname,
        },
      });
      this.$store.state.locationcity = ru;
    },
  },
  mounted() {
    this.gethotcity();
  },
});
</script>

<style lang="scss" scoped>
.city {
  position: relative;
  font-size: 0.34667rem;
  color: #333;
  height: 100%;
  .title {
    height: 0.66667rem;
    line-height: 0.66667rem;
    background: #f2f3f4;
    padding-left: 0.26667rem;
  }
  .item {
    display: inline-block;
    box-sizing: border-box;
    width: 2.8rem;
    height: 0.96rem;
    text-align: center;
    line-height: 0.96rem;
    border: 1px solid #e7e7e7;
    border-radius: 0.08rem;
    margin: 0.21333rem 0 0.21333rem 0.4rem;
  }
  ul {
    padding-left: 0.32rem;
    li {
      border-bottom: 1px solid #e7e7e7;
      height: 1.2rem;
      line-height: 1.2rem;
    }
  }
}
</style>
