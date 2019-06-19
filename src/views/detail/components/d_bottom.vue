<template>
  <div data-v-5dfd96bd class="bottom">
    <div data-v-d0cc7b08 data-v-5dfd96bd class="detail-bar">
      <!---->
      <div data-v-d0cc7b08 class="button-outline">
        <div data-v-d0cc7b08 class="left">
          <i data-v-d0cc7b08 class="left__icon2 icon-home"></i>
          <router-link to="/" data-v-d0cc7b08 class="left__msg"
            >大麦首页</router-link
          >
        </div>
        <div data-v-d0cc7b08 class="left">
          <i data-v-d0cc7b08 class="left__icon left__icon-disfavor"></i>
          <p data-v-d0cc7b08 class="left__msg">想看</p>
        </div>
        <!---->
        <div data-v-d0cc7b08 class="detail-button">
          <div data-v-3be445e2 data-v-d0cc7b08 class="button button-primary">
            <div data-v-d0cc7b08 data-v-3be445e2 class="buy">
              <!---->
              <div
                data-v-d0cc7b08
                data-v-3be445e2
                class="buy__button"
                @click="isFixedCart"
              >
                <p data-v-d0cc7b08 data-v-3be445e2 class="buy__button__text">
                  选座购买
                </p>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <!---->
      <!---->
      <!-- 底部购物车弹窗组件 -->
      <buy-it v-if="showCart"></buy-it>
      <div data-v-d0cc7b08 class="dm-dialog point-auth" style="display: none;">
        <div class="dm-dialog__box">
          <!---->
          <div class="dm-dialog__bd">
            由于未获得您的支付宝积分授权，本次交易无法享受支付宝积分优惠。
          </div>
          <div class="dm-dialog__ft">
            <!---->
            <div class="dm-dialog__confirm">
              <span class="dm-dialog__ft__item dm-dialog__confirm_cancel"
                >确定</span
              >
              <span class="dm-dialog__ft__item dm-dialog__confirm_true"
                >重新授权</span
              >
            </div>
          </div>
        </div>
      </div>
      <div data-v-d0cc7b08 class="dm-dialog point-auth" style="display: none;">
        <div class="dm-dialog__box">
          <!---->
          <div class="dm-dialog__bd">
            抱歉，您当前剩余支付宝积分或等级暂不满足享受积分优惠的条件。
          </div>
          <div class="dm-dialog__ft">
            <span class="dm-dialog__ft__item">知道了</span>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buyIt from "./d_shop.vue";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    //映射数据
    ...mapState(["showCart"])
  },
  methods: {
    ...mapActions(["isFixedCart"])
  },
  // watch: {
  //   $route(to, from) {
  //     //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
  //     console.log(to);
  //     if (to.name == "book" || to.name == "my") {
  //       //to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
  //       this.$store.dispatch("showFooter"); //利用派发全局state.showFooter的值来控制
  //     } else {
  //       this.$store.dispatch("hideFooter");
  //     }
  //   }
  // },
  components: {
    buyIt
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/common/common.css";
.bottom[data-v-5dfd96bd] {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;

  .detail-bar[data-v-d0cc7b08] {
    display: flex;
    -webkit-box-direction: normal;
    width: 100%;
    -webkit-box-orient: vertical;
    flex-direction: column;
    background-color: #fff;
    padding-bottom: calc(env(safe-area-inset-bottom) * 3);
    .button-outline[data-v-d0cc7b08] {
      display: flex;
      -webkit-box-direction: normal;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-orient: horizontal;
      flex-direction: row;
      width: 100%;
      height: 1.6rem;
      background-color: #fff;
      border-top: 1px solid #eee;
      .left[data-v-d0cc7b08] {
        -webkit-box-orient: vertical;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        width: 1.33333rem;
        border-left: 1px solid #eee;
        display: flex;
        -webkit-box-direction: normal;
        -webkit-box-align: center;
        align-items: center;
        .icon-home[data-v-d0cc7b08] {
          background-image: url(https://gw.alicdn.com/tfs/TB1BfBPM3HqK1RjSZFEXXcGMXXa-64-64.png);
        }
        .left__icon2[data-v-d0cc7b08] {
          width: 0.53333rem;
          height: 0.53333rem;
          background-size: 100% 100%;
          line-height: 0.57333rem;
          font-size: 0.57333rem;
          color: #888;
        }
        .left__msg[data-v-d0cc7b08] {
          font-size: 0.24rem;
          color: #000;
          line-height: 0.4rem;
        }
        .left__icon-disfavor[data-v-d0cc7b08] {
          background-image: url(https://gw.alicdn.com/tfs/TB1ck0MM7voK1RjSZFDXXXY3pXa-64-64.png);
        }
        .left__icon[data-v-d0cc7b08] {
          width: 0.53333rem;
          height: 0.53333rem;
          background-size: 100% 100%;
        }
      }
      .detail-button[data-v-d0cc7b08] {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        margin-right: 0.4rem;
        margin-left: 0;
        .button[data-v-3be445e2] {
          height: 1.17333rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -webkit-flex-direction: row;
          flex-direction: row;
          color: #fff;
          font-size: 0.42667rem;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          border-radius: 0.58667rem;
          background-image: -webkit-linear-gradient(left, #ff7f81, #ff2d79);
          background-image: linear-gradient(90deg, #ff7f81, #ff2d79);
        }
        .button-primary[data-v-3be445e2] {
          opacity: 1;
          .buy[data-v-d0cc7b08] {
            -webkit-box-flex: 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-direction: normal;
            height: 100%;
            -webkit-flex: 1;
            -webkit-box-flex: 1;
            flex: 1;
            -webkit-box-orient: horizontal;
            -webkit-flex-direction: row;
            flex-direction: row;
            width: 100%;
            .buy__button[data-v-d0cc7b08] {
              -webkit-box-orient: vertical;
              -webkit-flex-direction: column;
              flex-direction: column;
              -webkit-box-align: center;
              -webkit-align-items: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-flex: 1;
              -webkit-box-flex: 1;
              flex: 1;
              display: flex;
              -webkit-box-direction: normal;
              height: 100%;
              .buy__button__text[data-v-d0cc7b08] {
                font-style: normal;
                font-size: 0.4rem;
                color: #fff;
                line-height: 0.4rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>

