<template>
  <div class="about">
    <div class="top">
      <div class="aboutsearch">
        <i class="iconfont icon-sousuo"></i>
        <input v-model="what" type="text" placeholder="搜索明星、演出比赛、场馆">
      </div>
      <span @click="goblack">取消</span>
    </div>
    <div class="main">
      <div class="hot">热搜</div>
      <ul>
        <li v-for="(i,index) in hotlist" :key="index" v-text="i.word"></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      hotlist: [],
      what: '',
    };
  },
  methods: {
    async gethotlist() {
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/search',
      );
      this.hotlist = data.data.data.result.data;
    },
    goblack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.gethotlist();
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
.top {
  height: 1.17333rem;
  line-height: 1.17333rem;
  display: flex;
  justify-content: space-between;
  margin: 0 0.48rem;
  margin-top: 0.24rem;
  .aboutsearch {
    flex: 1;
    position: relative;
    margin-right: 0.26667rem;
    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0.42667rem;
      font-size: 0.5rem;
      color: #ccc;
    }
    input {
      display: inline-block;
      text-indent: 0.98667rem;
      width: 100%;
      height: 0.72rem;
      border-radius: 0.4rem;
      background: #f2f3f4;
      border: none;
    }
    ::-webkit-input-placeholder {
      color: #999;
    }
  }
  span {
    margin-left: 0.21333rem;
    font-size: 0.37333rem;
    color: #222;
  }
}
.main {
  margin: 0 0.48rem;
  margin-top: 0.24rem;
  font-size: 0.32rem;
  .hot {
    color: #999;
  }
  ul {
    margin-top: 0.4rem;
    zoom: 1;
    li {
      float: left;
      border-radius: 0.68rem;
      border: 1px solid #e7e7e7;
      padding: 0.18667rem 0.4rem;
      margin-right: 0.26667rem;
      margin-bottom: 0.24rem;
      color: #222;
    }
  }
}
</style>
