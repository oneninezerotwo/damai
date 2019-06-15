<template>
  <div class="car">
    <div class="dm-empty" v-if="!ticket.length">
      <div class="dm-empty__box">
        <div class="dm-empty__img">
          <div><img src="//gw.alicdn.com/tfs/TB1vfTxsNSYBuNjSsphXXbGvVXa-711-507.png" class="order-list-empty-img"></div>
        </div>
        <div class="dm-empty__tips">
          <div>
            <p class="order-list-empty-text">您暂时没有订单哟~</p>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6ac40e55="" class="order-item" v-if="ticket.length">
      <div data-v-6ac40e55="" class="project-info">
        <div data-v-663ddca6="" class="_item" data-v-6ac40e55="">
          <div data-v-663ddca6="" class="flex-box">
            <div data-v-663ddca6="" class="left">
              <div data-v-663ddca6="" class="project__info">
                <div data-v-663ddca6="" class="title limit_lines_2 black_333 bold">李云迪 奏鸣曲 2019世界巡回钢琴独奏音乐会上海站</div>
                <div data-v-663ddca6="" class="line__item grey_666">2019.12.03 19:30</div>
                <div data-v-663ddca6="" class="line__item grey_666">上海市 / 东方艺术中心-音乐厅</div>
                <!---->
                <div data-v-663ddca6="" class="price-info">
                  <span data-v-663ddca6="" class="black_000">¥
                    <span data-v-663ddca6="" class="price">580.00</span>
                  </span>
                  <span data-v-663ddca6="" class="grey_666">/共1张</span>
                  <!---->
                </div>
              </div>
            </div>
            <div data-v-663ddca6="" class="right">
              <div data-v-663ddca6="" class="text_right mb_42 black_000">待付款</div>
              <div data-v-663ddca6="" class="poster"><img data-v-663ddca6="" src="http://pimg.dmcdn.cn/perform/project/1777/177743_n_171_214.jpg" default-src="https://gw.alicdn.com/tfs/TB1lpyrjnZmx1VjSZFGXXax2XXa-132-178.png" onerror="javascript:this.src=this.getAttribute('default-src')"></div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>

</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      ticket: [],
    };
  },
});
</script>

<style lang="scss" scoped>
.car {
  height: 100%;
  background: #f2f3f4;
  overflow: hidden;
}
.dm-empty {
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.dm-empty__box {
  height: 3.33333rem;
}
.dm-empty__img img {
  display: block;
  margin: 0 auto;
  width: 2.44rem;
  height: 1.84rem;
}
.order-list-empty-img {
  width: 6.352rem !important;
  height: 4.456rem !important;
  position: fixed;
  top: 3.76rem;
  left: 50%;
  margin-left: -3.176rem !important;
}
.dm-empty__tips {
  padding-top: 0.66667rem;
  text-align: center;
  font-size: 0.32rem;
  color: #999;
}
.order-list-empty-text {
  color: #aaa;
  font-size: 0.50667rem;
  margin-top: 0.62933rem;
}
.order-item {
  margin: 0.24rem 0.4rem;
  background: #fff;
  border-radius: 0.05333rem;
}
.order-item .project-info {
  padding: 0.64rem 0.4rem;
}
.flex-box[data-v-663ddca6] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
._item .left[data-v-663ddca6] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin-right: 0.4rem;
}
._item .project__info .title[data-v-663ddca6] {
  height: 1.17333rem;
  line-height: 0.58667rem;
  margin-bottom: 0.32rem;
  font-size: 0.42667rem;
}
.limit_lines_2[data-v-663ddca6] {
  width: 100%;
  line-height: 0.53333rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
.black_333[data-v-663ddca6] {
  color: #333;
}
.bold[data-v-663ddca6] {
  font-weight: 500;
}
.grey_666[data-v-663ddca6] {
  color: #666;
}
._item .project__info .line__item[data-v-663ddca6] {
  font-size: 0.34667rem;
  line-height: 0.34667rem;
}
.grey_666[data-v-663ddca6] {
  color: #666;
}
._item .price-info[data-v-663ddca6] {
  margin-top: 0.4rem;
}
.black_000[data-v-663ddca6] {
  color: #000;
}
._item .price-info .price[data-v-663ddca6] {
  font-size: 0.53333rem;
  line-height: 0.4rem;
  font-weight: 400;
}
.grey_666[data-v-663ddca6] {
  color: #666;
}
._item .right[data-v-663ddca6] {
  width: 1.6rem;
  font-size: 0.34667rem;
}
.text_right[data-v-663ddca6] {
  text-align: right;
}
.mb_42[data-v-663ddca6] {
  margin-bottom: 0.56rem;
}
.black_000[data-v-663ddca6] {
  color: #000;
}
._item .right img[data-v-663ddca6] {
  border-radius: 0.05333rem;
  height: 2.13333rem;
  box-shadow: 0 0.08rem 0.13333rem 0 rgba(0, 0, 0, 0.1);
}

img[data-v-663ddca6] {
  width: 100%;
}
</style>
