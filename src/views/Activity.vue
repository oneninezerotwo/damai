<template>
  <div class="passport page-content">
    <div class="passport-banner"><img img-type="headbgimg" :src="passport.headBgImg" lazy="loaded"></div>
    <div data-spm="icon" class="passport-heads" :style="{'background-image': 'url('+passport.headImg+')'}">
      <div data-spm="dfollow" class="add" style="">
        <p class="add__line"></p>
      </div>
      <div data-spm="dfollow" class="add__ok" style="display: none;">
        <p class="add__line"></p>
      </div>
    </div>
    <div class="passport-heads-big" style="display: none;"><img :src="passport.headImg"></div>
    <div class="passport-name">{{passport.nickname}}
      <span></span>
    </div>
    <div class="passport-fans">{{(passport.fansNum/10000).toFixed(2)}}万 粉丝</div>
    <div class="passport-attention"></div>
    <div data-spm="list" class="route-list">
      <div class="route-list-item" v-for="(i,index) in show" :key="index">
        <div class="time">
          <div class="time__week">{{getdate(i.showTime.substring(0,11)).week}}</div>
          <div class="time__day">{{i.showTime.substring(8,10)}}</div>
          <div class="time__month">{{getdate(i.showTime.substring(0,11)).month}}月</div>
          <!---->
        </div>
        <div class="content">
          <div class="content__title">慈溪杨梅节 告白青春巨星演唱会</div>
          <div class="content__detail">
            <span class="detail__area">宁波 · 慈溪市体育中心体育场</span>
            <span class="detail__distance" style="display: none;">宁波</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      passport: {},
      show: [],
      weeklis: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    };
  },
  computed: {
    passportid() {
      return this.$store.state.passportid;
    }
  },
  methods: {
    async getpassport() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/activity" +
          this.passportid
      );
      this.passport = data.data.data;
    },
    async getshow() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/activityshow" +
          this.passportid
      );
      this.show = data.data.data.projectInfo;
    },
    getdate(str) {
      const date = new Date(str);
      const month = date.getMonth();
      const week = date.getDay();
      const showtime = {};
      showtime.week = this.weeklis[week];
      showtime.month = month + 1;
      console.log(showtime);
      return showtime;
    }
  },
  mounted() {
    this.getpassport();
    this.getshow();
    this.getdate();
  }
});
</script>

<style lang="scss" scoped>
.passport {
  width: 10rem;
  margin: 0 auto;
  font-size: 0;
  position: relative;
}
.passport .passport-banner {
  height: 4.8rem;
  margin-bottom: 1.65rem;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.passport .passport-heads {
  position: absolute;
  top: 3.41rem;
  left: 3.6rem;
  width: 2.8rem;
  height: 2.8rem;
  background-size: 2.8rem auto;
  border-radius: 100%;
  border: 0.053333rem solid #fff;
}
.passport .passport-heads .add,
.passport .passport-heads .add__ok {
  position: absolute;
  top: 1.84rem;
  left: 1.84rem;
  width: 0.96rem;
  height: 0.96rem;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.passport .passport-heads .add__line,
.passport .passport-heads .add__ok__line {
  position: relative;
  width: 0.96rem;
  height: 0.96rem;
  background-image: url(../assets/follow.png);
  -webkit-background-size: 0.96rem 0.96rem;
  -moz-background-size: 0.96rem 0.96rem;
  background-size: 0.96rem 0.96rem;
  background-repeat: no-repeat;
}
.passport .passport-heads .add__ok {
  background-color: #ddd;
}
.passport .passport-heads .add__ok .add__line {
  position: relative;
  width: 0.96rem;
  height: 0.96rem;
  background-image: url(../assets/followed.png);
  -webkit-background-size: 0.96rem 0.96rem;
  -moz-background-size: 0.96rem 0.96rem;
  background-size: 0.96rem 0.96rem;
  background-repeat: no-repeat;
}
.passport .passport-name {
  font-family: PingFang-SC-Bold;
  font-size: 0.53rem;
  color: #111;
  text-align: center;
}
.passport .passport-name span {
  vertical-align: top;
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  margin: 0.16rem 0 0 0.16rem;
  background-image: url(../assets/v.png);
  -webkit-background-size: 0.48rem 0.48rem;
  -moz-background-size: 0.48rem 0.48rem;
  background-size: 0.48rem 0.48rem;
}
.passport .passport-fans {
  font-family: PingFangSC-Regular;
  margin-top: 0.16rem;
  font-size: 0.43rem;
  color: #111;
  text-align: center;
  line-height: 0.59rem;
}
.passport .passport-attention {
  font-family: PingFangSC-Regular;
  font-size: 0.37rem;
  color: #aaa;
  text-align: center;
  line-height: 0.53rem;
  margin-top: 0.64rem;
}
.passport .route-list {
  margin-top: 0.48rem;
  border-top: 0.24rem solid #f5f5f5;
}
.passport .route-list .route-list-item {
  margin: 0.64rem 0.48rem;
  padding-bottom: 0.64rem;
  border-bottom: 0.026667rem solid #eee;
  position: relative;
  display: flex;
  height: 1.71rem;
}
.passport .route-list .route-list-item .time {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular;
  color: #888;
  width: 0.8rem;
  text-align: center;
}
.passport .route-list .route-list-item .time .time__day {
  font-family: PingFang-SC-Bold;
  color: #111;
  font-size: 0.59rem;
}
.passport .route-list .route-list-item .content {
  position: absolute;
  top: 0.21rem;
  left: 0.69rem;
  padding: 0 0 0 0.64rem;
  width: 7.68rem;
}
.passport .route-list .route-list-item .content .content__title {
  font-family: PingFangSC-Medium;
  font-size: 0.43rem;
  color: #111;
  line-height: 0.59rem;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.passport .route-list .route-list-item .content .content__detail {
  font-family: PingFangSC-Regular;
  font-size: 0.37rem;
  margin-top: 0.24rem;
  color: #888;
}
.passport .route-list .route-list-item .content .content__detail .detail__area {
  display: inline-block;
  margin-right: 0.16rem;
  max-width: 4.21rem;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.passport
  .route-list
  .route-list-item
  .content
  .content__detail
  .detail__distance {
  display: inline-block;
  width: 1.28rem;
  line-height: 0.32rem;
  height: 0.32rem;
  background-image: url(../assets/location.png);
  -webkit-background-size: 0.27rem 0.32rem;
  -moz-background-size: 0.27rem 0.32rem;
  background-size: 0.27rem 0.32rem;
  background-repeat: no-repeat;
  background-position: 0;
  padding-left: 0.43rem;
  font-size: 0.32rem;
  color: #ff1268;
  vertical-align: top;
  margin-top: 0.11rem;
}
</style>
