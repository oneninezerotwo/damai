<template>
  <div id="bigshot">
    <div class="title">
      <p>大咖在大麦</p>
      <router-link to="/artistlist" class="span">查看更多
        <i class="iconfont icon-gengduo"></i>
      </router-link>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <router-link to="/activity" @click.native="setppid(i.artistId)" v-for="(i,index) in bigshotcontent" :key="index" class="listitem">
          <div class="top">
            <img :src="i.artPic" alt="">
            <div class="nbox">
              <p v-text="i.artistName" class="name"></p>
              <p class="fansnum">{{(i.artFans/10000).toFixed(2)}}万粉丝</p>
            </div>
            <div class="follow">+关注</div>
          </div>
          <div class="bottom">
            <p>最近{{i.performanceTotal}}场演出</p>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import BScroll from "better-scroll";
import "../assets/iconfont/iconfont.js";
export default Vue.extend({
  data() {
    return {
      bigshotcontent: []
    };
  },
  methods: {
    async getlist() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/bigshot"
      );
      this.bigshotcontent = data.data.data.artistProjectList;
    },
    setppid(id) {
      this.$store.state.passportid = id;
    }
  },
  created() {
    this.getlist();
    this.$nextTick(function() {
      new BScroll(this.$refs.wrapper, {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false
      });
    });
  }
});
</script>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
#bigshot {
  margin-top: 0.56rem;
  .title {
    height: 0.586667rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.48rem;
    margin-bottom: 0.42667rem;
    p {
      font-weight: 700;
      font-size: 0.453333rem;
    }
    .span {
      font-size: 0.32rem;
      color: #999;
      display: flex;
      align-items: flex-end;
      i {
        font-size: 0.133333rem;
        margin-left: 0.026667rem;
        margin-bottom: 0.053333rem;
      }
    }
  }
  .wrapper {
    overflow: hidden;
    margin-left: 0.48rem;
  }
  .content {
    width: 29rem;
    height: 3.4rem;
    margin-left: 0.48rem;
    white-space: nowrap;
    .listitem {
      color: #000;
      display: inline-block;
      width: 6.08rem;
      padding: 0 0.32rem;
      margin-right: 0.4rem;
      border: 0.013333rem solid #eee;
      box-shadow: 0 0.08rem 0.4rem 0 rgba(0, 0, 0, 0.05);
      .top {
        display: flex;
        align-items: center;
        border-bottom: 0.013333rem solid #eee;
        img {
          width: 1.333333rem;
          height: 1.333333rem;
          border-radius: 50%;
          margin: 0.37333rem 0.24rem 0.37333rem 0;
        }
        .nbox {
          flex: 2;
          .name {
            font-size: 0.42667rem;
          }
          .fansnum {
            font-size: 0.26667rem;
            color: #888;
          }
        }
        .follow {
          padding: 0 0.24rem;
          width: 1.52rem;
          height: 0.69333rem;
          box-sizing: border-box;
          line-height: 0.69333rem;
          font-size: 0.32rem;
          text-align: center;
          color: #ff1268;
          border: 0.026667rem solid #ff1268;
          border-radius: 1.33333rem;
        }
      }
      .bottom {
        height: 1.02667rem;
        line-height: 1.02667rem;
        display: flex;
        justify-content: space-between;
        i {
          font-size: 0.133333rem;
        }
      }
    }
  }
}
</style>
