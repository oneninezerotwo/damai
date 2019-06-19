<template>
  <div class="my">
    <router-link to="/login" class="my-hd" v-if="!islogined">
      <div
        class="my-hd__photo"
        style='background-image: url("//gw.alicdn.com/tfs/TB1o4Bodr_I8KJjy1XaXXbsxpXa-150-150.png");'
      ></div>
      <p class="my-hd__name" ref="phone">登录/注册</p>
    </router-link>
    <div class="my-hd" v-if="islogined">
      <div
        class="my-hd__photo"
        style='background-image: url("//perico.damai.cn/userheadphotos/671293/134258687.jpg");'
      ></div>
      <p class="my-hd__name" v-text="username"></p>
    </div>
    <!---->
    <div class="my-list">
      <div data-spm="list" class="my-bd">
        <div class="my-bd__order">
          <router-link
            to="/car"
            class="mine__list cell cell-bottom-border"
            data-spm="dorder"
          >
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-dingdan iconfontleft"></i>
                <span class="car">我的订单</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </router-link>
          <div class="mine__list cell cell-bottom-border" data-spm="dcoupon">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-coupon iconfontleft"></i>
                <span>优惠券</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
          <div class="mine__list cell" data-spm="dpiaojia">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-qiaquan iconfontleft"></i>
                <span>我的票</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div class="my-bd__want">
          <div class="mine__list cell" data-spm="dmyfollow">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-guanzhu iconfontleft"></i>
                <span>我的关注</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div class="my-bd__want">
          <div class="mine__list cell cell-bottom-border" data-spm="dreceipt">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-dingwei1 iconfontleft"></i>
                <span>收货地址</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
          <div class="mine__list cell cell-bottom-border" data-spm="dcontact">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-wode1 iconfontleft"></i>
                <span>常用购票人</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
          <div class="mine__list cell cell-bottom-border" data-spm="dinfoauth">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-shimingrenzheng iconfontleft"></i>
                <span>实名认证</span>
              </div>
            </div>
            <div class="body">
              <span style="color: rgb(153, 153, 153);">未认证</span>
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
          <div class="mine__list cell" data-spm="dfeedback">
            <div class="title">
              <div class="mine-cell__box">
                <i class="iconfont icon-fankuiguanli iconfontleft"></i>
                <span>意见反馈</span>
              </div>
            </div>
            <div class="body">
              <i class="iconfont icon-gengduo icon-right-arrow"></i>
            </div>
          </div>
          <div class="mine__list">
            <div class="mine__phone">
              <i class="iconfont icon-kefu iconfontleft"></i>
              <span>客服电话</span>
              <span class="mine__phone_number">1010-3721</span>
            </div>
          </div>
        </div>
      </div>
      <div class="my-login-out" @click="removecookie()" v-if="islogined">
        退出登录
      </div>
      <div class="about-section">
        <div class="about-link" @click="gohome">关于大麦</div>
        <div class="about-line">|</div>
        <div class="about-link">联系我们</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      islogined: false,
      username: ""
    };
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
    checklogin() {
      // const phone = localStorage.getItem("phone");
      // if (phone) {
      //   this.islogined = true;
      //   this.username = phone;
      // }
      // 判断是否登录
      const str = document.cookie;
      const arr = str.split("; ");
      for (const ele of arr) {
        const arr2 = ele.split("=");
        if (arr2[0] == "uname") {
          this.islogined = true;
          this.username = arr2[1];
        }
      }
    },
    setcookie(value, day) {
      // 登录储存cookie
      const now = new Date();
      now.setDate(now.getDate() + day);
      document.cookie = "uname=" + value + ";expires=" + now + ";path=/";
    },
    removecookie() {
      // 退出登录
      this.setcookie("", -1);
      // localStorage.removeItem('phone');
      this.$router.go(0);
    }
    // renderName() {
    //   let phone = localStorage.getItem("phone");
    //   console.log(phone);
    //   if (phone) {
    //     this.$refs.phone.innerHTML = phone;
    //   } else {
    //     this.$refs.phone.innerHTML = "登录/注册";
    //   }
    // }
  },

  created() {
    this.checklogin();
  },
  mounted() {
    // this.renderName();
  }
});
</script>

<style lang="scss" scoped>
.my,
.my-hd {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.my {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 100%;
  max-width: 10rem;
  margin: 0 auto;
  background: #f2f3f4;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.my-hd {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 2.66667rem;
  background: #ff1268;
}
.my-hd__photo {
  display: block;
  margin: 0 0.33333rem 0 0.32rem;
  width: 1.6rem;
  height: 1.6rem;
  background-size: 100% auto;
  background-position: top center;
  border-radius: 100%;
  border: 0.04rem solid #fff;
}
.my-hd__name {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 0.4rem;
  color: #fff;
  padding-right: 0.8rem;
  word-break: break-all;
  height: 0.50667rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.my-list {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.my-bd__order,
.my-bd__want {
  padding-left: 0.33333rem;
  background: #fff;
  border-top: 0.013333rem solid #e7e7e7;
  border-bottom: 0.013333rem solid #e7e7e7;
}
.my-bd__order {
  margin: 0.26667rem 0;
}
.cell-bottom-border {
  border-bottom: 0.013333rem solid #e7e7e7;
}
.cell {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 0.33333rem 0.32rem;
  text-decoration: none;
  font-size: inherit;
  color: inherit;
}
.cell,
.center-children {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.mine__list {
  height: 1.46667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  line-height: 1.46667rem;
  padding: 0 0.32rem 0 0 !important;
}
.cell {
  padding-left: 0 !important;
}
.cell .title {
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mine-cell__box span {
  float: left;
  font-size: 0.37333rem;
}
.cell .body {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin-left: 0.13333rem;
  text-align: right;
}
.cell-bottom-border {
  border-bottom: 0.013333rem solid #e7e7e7;
}
.my-bd__want {
  margin-bottom: 0.26667rem;
}
.my-bd__order,
.my-bd__want {
  padding-left: 0.33333rem;
  background: #fff;
  border-top: 0.013333rem solid #e7e7e7;
  border-bottom: 0.013333rem solid #e7e7e7;
}
.mine__phone {
  height: 100%;
  width: 100%;
  border-top: 0.013333rem solid #e7e7e7;
  color: #666;
  font-size: 0.37333rem;
}
.icon-kefu {
  float: left;
  margin: 0 -0.02667rem 0 0.02667rem;
  width: 0.66667rem;
  text-align: left;
  color: #ff1268;
  font-size: 0.37333rem;
}
.mine__phone_number {
  color: #999;
  float: right;
  font-size: 0.32rem;
}
.my-login-out {
  width: 100%;
  height: 1.17333rem;
  line-height: 1.17333rem;
  text-align: center;
  border: 0.013333rem solid #e7e7e7;
  background-color: #fff;
  font-size: 0.42667rem;
  color: #666;
}
.about-section {
  font-size: 0.32rem;
  color: #999;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  padding-top: 0.53333rem;
}
.about-link {
  height: 1.06667rem;
  margin: 0 0.10667rem;
}
.about-line {
  padding-top: 0.04rem;
}
.about-link {
  height: 1.06667rem;
  margin: 0 0.10667rem;
}
.car {
  float: left;
  font-size: 0.37333rem;
  color: #666;
}
.iconfontleft {
  font-size: 0.45rem;
  color: #ff1268;
  float: left;
  width: 0.66667rem;
  text-align: left;
}
.cell .icon-right-arrow {
  font-size: 0.24rem;
  color: #999;
  font-weight: 400;
}
</style>
