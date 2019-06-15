<template>
  <div class="artistlist">
    <div class="bg"></div>
    <div class="content">
      <div class="artis">
        <div class="header">
          <div class="top">大咖在大麦
            <div class="artissearch">
              <i class="iconfont icon-sousuo"></i>
              <router-link to="/search" class="search">搜大咖</router-link>
            </div>
          </div>
          <div class="bottom">
            <span>目前共196位大咖有上架演出</span>
            <span>我的关注
              <i class="iconfont icon-gengduo"></i>
            </span>

          </div>
        </div>
        <div class="tags">
          <div>
            <span class="listitem" v-for="(i,index) in subtypeList" :key="index" v-text="i" :class="{'aitc':index===isaitc}" @click="changeaitc(index)"></span>
          </div>
        </div>
        <div class="artislistbox">
          <div class="listitem" v-for="(i,index) in baccounts" :key="index">
            <div class="item">
              <div class="top">
                <div class="detail">
                  <img :src="i.headPic" alt="">
                  <div>
                    <span class="name" v-text="i.name"></span>
                    <span class="tag" v-text="i.subtype"></span>
                    <br>
                    <span class="fans">{{(i.fansCount/1000).toFixed(1)}}万粉丝</span>
                  </div>
                </div>
                <div class="follow">
                  <span>+</span>
                  关注
                </div>
              </div>
              <div class="bottom">
                <div class="main" :class="{'hidden':i.performanceCount>2 && ismore[index]}">
                  <div class="perform-cell" v-for="(j,ink) in i.performanceInfo" :key="ink">
                    <div class="celltitle" v-text="j.projectName"></div>
                    <div class="info-box">
                      <div class="info">{{j.venueCity}} / {{j.showTime}} / {{j.venueName}}</div>
                    </div>
                  </div>
                </div>
                <div class="more" v-if="i.performanceCount>2&&ismore[index]" @click="showmore(index)">共{{i.performanceCount}}个演出
                  <i class="iconfont icon-tubiao-"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      subtypeList: [],
      baccounts: [],
      ismore: [],
      isaitc: 0,
    };
  },
  methods: {
    async getartislist() {
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/artis',
      );
      console.log(data);
      this.baccounts = data.data.data.baccounts;
      this.subtypeList = data.data.data.subtypeList;
      const arr = [];
      for (let i = 0; i < this.baccounts.length; i++) {
        arr.push(true);
      }
      this.ismore = arr;
    },
    showmore(i) {
      this.$set(this.ismore, i, false);
    },
    changeaitc(i) {
      this.isaitc = i;
    },
  },
  mounted() {
    this.getartislist();
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
.bg {
  position: fixed;
  top: 0.66667rem;
  width: 100%;
  height: 50%;
  background: url(//img.alicdn.com/tfs/TB1VdgJlMHqK1RjSZJnXXbNLpXa-748-497.png)
    no-repeat;
  background-size: 100%;
  background-color: #000;
}
.bg:after {
  position: relative;
  display: block;
  bottom: 0.66667rem;
  content: "";
  width: 100%;
  height: 0.66667rem;
  background: #1f0453;
}
.content {
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100%;
  margin-bottom: 1.33333rem;
  .artis {
    display: flex;
    flex-direction: column;
    .header {
      height: 3.33333rem;
      overflow: hidden;
      color: hsla(0, 0%, 100%, 0.75);
      .top {
        display: flex;
        padding: 0 0.48rem;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 700;
        margin-top: 1rem;
        justify-content: space-between;
        .artissearch {
          width: 2.66667rem;
          height: 0.96rem;
          border-radius: 0.48rem;
          color: #111;
          background: hsla(0, 0%, 100%, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          .icon-sousuo {
            margin-right: 0.16rem;
            font-size: 0.5rem;
            font-weight: normal;
          }
          .search {
            font-size: 0.32rem;
            font-weight: normal;
            color: #000;
          }
        }
      }
      .bottom {
        display: flex;
        padding: 0 0.48rem;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        margin-top: 0.26667rem;
        .icon-gengduo {
          font-size: 0.32rem;
          margin-left: -0.1rem;
          font-weight: 700;
        }
      }
    }
    .tags {
      border-bottom: 1px solid #eee;
      border-radius: 0.16rem 0.16rem 0 0;
      background: #fff;
      div {
        height: 1.89333rem;
        padding-left: 0.48rem;
        margin-right: 0.48rem;
        white-space: nowrap;
        overflow-x: scroll;
        span {
          display: inline-block;
          margin-top: 0.64rem;
          height: 0.8rem;
          background: #eee;
          padding: 0 0.42667rem;
          margin-right: 0.32rem;
          color: #111;
          text-align: center;
          line-height: 0.8rem;
          border-radius: 0.4rem;
        }
      }
      .aitc {
        background: #ff1268;
        color: #fff;
      }
    }
    .artislistbox {
      position: relative;
      background: #fff;
      overflow: auto;
      min-height: 6.66667rem;
      max-height: 100%;
      .listitem {
        margin-top: 0.24rem;
        position: relative;
        overflow: hidden;
        .item {
          margin: 0.24rem 0.48rem;
          padding: 0 0.32rem;
          border: 1px solid #eee;
          box-shadow: 0 0.08rem 0.4rem 0 rgba(0, 0, 0, 0.05);
          border-radius: 0.12rem;
          .top {
            display: flex;
            height: 1.94667rem;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            overflow: hidden;
            align-items: center;
            .detail {
              display: flex;
              align-items: center;
              flex-direction: row;
              img {
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                width: 1.33333rem;
                height: 1.33333rem;
                border-radius: 50%;
                border: 0.5px solid #eee;
                margin-right: 0.32rem;
              }
              .name {
                display: inline-block;
                font-size: 0.42667rem;
                font-weight: 700;
              }
              .tag {
                position: relative;
                bottom: 0.05333rem;
                left: 0.05333rem;
                display: inline-block;
                height: 0.48rem;
                padding: 0.01333rem 0.16rem;
                border-radius: 0.10667rem 0.10667rem 0.26667rem 0.10667rem;
                background: rgba(255, 18, 104, 0.1);
                color: #ff1268;
                font-size: 0.29333rem;
                text-align: center;
                line-height: 0.48rem;
                margin-left: 0.1rem;
              }
              .fans {
                display: inline-block;
                margin-top: 0.08rem;
                font-size: 0.32rem;
                color: #888;
              }
            }
            .follow {
              position: relative;
              display: block;
              width: 1.52rem;
              height: 0.69333rem;
              border: 0.026667rem solid #ff1268;
              border-radius: 0.34667rem;
              text-align: center;
              font-size: 0.32rem;
              color: #ff1268;
              line-height: 0.69333rem;
              padding-left: 0.26667rem;
              box-sizing: border-box;
              span {
                position: absolute;
                left: 0.2rem;
                bottom: 0.005rem;
                font-size: 0.45333rem;
              }
            }
          }
          .bottom {
            padding: 0.08rem 0 0.48rem;
            font-size: 0.37333rem;
            color: #111;
            .main {
              overflow: hidden;
              .perform-cell {
                display: flex;
                flex-direction: column;
                margin-top: 0.32rem;
                .celltitle {
                  font-size: 0.37333rem;
                  white-space: nowrap;
                  color: #111;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  margin-bottom: 0.06667rem;
                }
                .info-box {
                  position: relative;
                  margin-top: 0.08rem;
                  font-size: 0.32rem;
                  overflow: hidden;
                  padding-bottom: 0.37333rem;
                  border-bottom: 1px solid #eee;
                  color: #888;
                  .info {
                    max-width: 90%;
                    width: 90%;
                    float: left;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                  .only {
                    padding-bottom: 0;
                    border-bottom: none;
                  }
                }
              }
            }
            .hidden {
              max-height: 3.86667rem;
            }
            .more {
              margin-top: 0.32rem;
              text-align: center;
              font-size: 0.29333rem;
              color: #888;
              .icon-tubiao- {
                font-size: 0.45rem;
                margin-left: 0.08rem;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>
