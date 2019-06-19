<template>
  <div id="moreshow">
    <div class="title" :class="{'towithbo':tofix}">
      <p>更多演出</p>
    </div>
    <div :class="{'tofix':tofix}">
      <ul class="nav" ref="nav">
        <li :class="{'act':isup}" @click="downsshow">{{sort[whichsnum]}}
          <i class="iconfont " :class="{
            'icon-shangla-tianchong':isup,
            'icon-xiala':!isup
          }"></i>
        </li>
        <li :class="{'act':itup}" @click="downtshow">{{time[whichtnum]}}
          <i class="iconfont" :class="{
            'icon-shangla-tianchong':itup,
            'icon-xiala':!itup
          }"></i>
        </li>
        <li>推荐排序</li>
        <li>距离最近</li>
      </ul>
    </div>
    <div class="down" :class="{'downon':isup}">
      <div class="curtain">
        <ul>
          <li v-for="(j,index) in sort" :key="index" v-text="j" @click="changesnum(index)" :class="{'act':whichsnum===index}"></li>
        </ul>
      </div>
    </div>
    <div class="down" :class="{'downon':itup}">
      <div class="curtain">
        <ul>
          <li v-for="(j,index) in time" :key="index" v-text="j" @click="changetnum(index)" :class="{'act':whichtnum===index}"></li>
        </ul>
      </div>
    </div>

    <div class="listbox">
      <router-link to="/detail" class="eachlist" v-for="(i,index) in listarr" :key="index">
        <img :src="i.verticalPic" alt="">
        <div class="listcontent">
          <p class="name" v-text="i.name"></p>
          <p class="time">{{i.logicAddress}} / {{i.showTime}} / {{i.venueName}}</p>
          <div class="choice" v-if="i.isSelectSeat">可选座</div>
          <p class="price">￥ {{i.priceStr}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      listarr: [],
      isup: false,
      itup: false,
      whichsnum: 0,
      whichtnum: 0,
      getlistok: true,
      sort: [
        '全部分类',
        '演唱会',
        '话剧歌剧',
        '音乐会',
        '曲苑杂坛',
        '舞蹈芭蕾',
        '体育比赛',
        '儿童亲子',
        '展览休闲',
        '二次元',
        '旅游展览',
      ],
      time: ['全部时间', '今天', '明天', '本周末', '一周内', '一月内'],
    };
  },
  methods: {
    async getlist() {
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/more1',
      );
      this.listarr = data.data.data.nearByCity;
    },
    async morelist() {
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/more1',
      );
      this.listarr = this.listarr.concat(data.data.data.nearByCity);
      this.getlistok = true;
    },
    downsshow() {
      this.isup = !this.isup;
      this.itup = false;
    },
    downtshow() {
      this.itup = !this.itup;
      this.isup = false;
    },
    changesnum(i) {
      this.whichsnum = i;
      this.isup = false;
    },
    changetnum(i) {
      this.whichtnum = i;
      this.itup = false;
    },
  },
  computed: {
    scrollernum() {
      return this.$store.state.scrollernum;
    },
    tofix() {
      return this.$store.state.tofix;
    },
    offtop() {
      return this.$store.state.offtop;
    },
  },
  watch: {
    scrollernum() {
      if (this.getlistok) {
        this.getlistok = false;
        this.morelist();
      }
    },
  },
  mounted() {
    this.getlist();
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
#moreshow {
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
  }
  .nav {
    display: flex;
    padding: 0 0.18667rem;
    background: #fff;

    li {
      flex: 1;
      height: 1.38667rem;
      text-align: center;
      line-height: 1.38667rem;
      font-size: 0.37333rem;
      i {
        color: #ddd;
        font-size: 0.10667rem;
        vertical-align: middle;
      }
      .icon-shangla-tianchong {
        color: #ff1268;
      }
    }
    li:nth-child(3) {
      color: #ff1268;
    }
  }
  .listbox {
    .eachlist {
      margin: 0.48rem;
      margin-bottom: 0.96rem;
      display: flex;
      color: #000;
      img {
        width: 2.4rem;
        height: 3.2rem;
        border-radius: 0.08rem;
        border: 1px solid rgba(0, 0, 0, 0.06);
      }
      .listcontent {
        flex: 1;
        margin-left: 0.32rem;
        padding-bottom: 0;
        position: relative;
        .name {
          width: 6.32rem;
          font-size: 0.42667rem;
          color: #111;
          font-weight: 700;
          overflow: hidden;
        }
        .time {
          width: 6.32rem;
          font-size: 0.32rem;
          color: #aaa;
          padding-top: 0.16rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .choice {
          padding: 0.01333rem 0.08rem 0.04rem;
          font-size: 0.29333rem;
          border-radius: 0.08rem 0.08rem 0.21333rem 0.08rem;
          line-height: normal;
          border: none;
          background: #eee;
          margin-top: 0.26667rem;
          display: inline-block;
        }
        .price {
          position: absolute;
          bottom: 0;
          width: 98%;
          margin-top: 0.26667rem;
          font-size: 0.37333rem;
          color: #ff1268;
        }
      }
    }
  }
  .tofix {
    width: 100%;
    position: fixed;
    top: 1.333333rem;
    left: 0;
    z-index: 9999999;
  }
  .towithbo {
    margin-bottom: 1.81334rem;
  }

  .down {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;
    .curtain {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    ul {
      padding: 2.72rem 0 0 0.29333rem;
      background: #fff;
      max-height: 7.46667rem;
      overflow-y: auto;
      li {
        position: relative;
        height: 1.33333rem;
        line-height: 1.33333rem;
        font-size: 0.32rem;
        color: #111;
        border-bottom: 1px solid #e7e7e7;
      }
      .act {
        color: #ff1268;
      }
    }
  }
  .downon {
    display: block;
  }
  .act {
    color: #ff1268;
  }
}
</style>
