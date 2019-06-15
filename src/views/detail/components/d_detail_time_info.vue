<template>
  <div data-v-87786d5e data-v-5dfd96bd class="detail-time-info">
    <div data-v-87786d5e class="left">
      <div data-v-87786d5e class="time">
        <span
          data-v-87786d5e
          class="time-str"
        >{{dm_detail_info.detailViewComponentMap.item.staticData.itemBase.showTime}}</span>
        <i data-v-87786d5e class="iconfont icon-jiantouyou icon-arrow"></i>
      </div>
      <div
        data-v-87786d5e
        class="time-desc single-line"
      >{{dm_detail_info.detailViewComponentMap.item.staticData.itemBase.showDuration}}</div>
    </div>
    <div data-v-87786d5e class="right">
      <i data-v-87786d5e class="iconfont iconzuoweitu_ icon-seat"></i>
      <span data-v-87786d5e class="seat-text">座位图</span>
    </div>
    <div data-v-87786d5e class="bottom-line"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    //映射数据
    ...mapState(["dm_detail_info"])
  },
  mounted() {
    //获取数据
    console.log(this.dm_detail_info);
    this.getDetailInfo();
  },
  methods: {
    ...mapActions(["getDetailInfo"])
  }
};
</script>

<style lang="less" scoped>
.detail-time-info[data-v-87786d5e] {
  display: flex;
  -webkit-box-direction: normal;
  min-height: 1.73333rem;
  position: relative;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  background-color: #fff;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  .left[data-v-87786d5e] {
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    display: flex;
    -webkit-box-direction: normal;
    .time[data-v-87786d5e] {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      font-size: 0.42667rem;
      line-height: 0.42667rem;
      color: #000;
      font-weight: 700;
      margin-top: 0.48rem;
      -webkit-box-align: center;
      align-items: center;
      .icon-arrow[data-v-87786d5e] {
        margin-left: 0.13333rem;
        font-size: 0.29333rem;
      }
      .iconfont {
        font-family: iconfont !important;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
      }
      .icon-jiantouyou {
        &:before {
          content: "\E611";
        }
      }
    }
    .single-line[data-v-87786d5e] {
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .time-desc[data-v-87786d5e] {
      height: 0.34667rem;
      font-size: 0.34667rem;
      color: #999;
      margin-top: 0.24rem;
      margin-bottom: 0.48rem;
      line-height: 0.34667rem;
    }
  }
  .right[data-v-87786d5e] {
    height: 100%;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    .icon-seat[data-v-87786d5e] {
      color: #ff2d79;
      font-size: 0.46667rem;
    }
    .iconfont {
      font-family: iconfont !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
    }
    .iconzuoweitu_ {
      &:before {
        content: "\E60F";
      }
    }
    .seat-text[data-v-87786d5e] {
      margin-top: 0.13333rem;
      color: #ff2d79;
      font-size: 0.34667rem;
    }
  }
  .bottom-line[data-v-87786d5e] {
    position: absolute;
    bottom: 0;
    left: 0.4rem;
    right: 0.4rem;
    border-bottom: 1px solid #eee;
  }
}
</style>

