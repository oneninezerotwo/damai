<template>
  <div data-v-7fd36d5e data-v-5dfd96bd class="service-bar">
    <div data-v-7fd36d5e class="service-item">
      <i data-v-7fd36d5e class="iconfont icon icondagou_"></i>
      <div
        data-v-7fd36d5e
        class="text"
      >{{dm_detail_info.detailViewComponentMap.item.staticData.itemBase.serviceNotes[0].tagName}}</div>
    </div>
    <div data-v-7fd36d5e class="service-item">
      <i data-v-7fd36d5e class="iconfont icon icondagou_"></i>
      <div
        data-v-7fd36d5e
        class="text"
      >{{dm_detail_info.detailViewComponentMap.item.staticData.itemBase.serviceNotes[1].tagName}}</div>
    </div>
    <div data-v-7fd36d5e class="service-item">
      <i data-v-7fd36d5e class="iconfont icon icondagou_"></i>
      <div
        data-v-7fd36d5e
        class="text"
      >{{dm_detail_info.detailViewComponentMap.item.staticData.itemBase.serviceNotes[2].tagName}}</div>
    </div>
    <div data-v-7fd36d5e class="last-mask"></div>
    <!---->
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
    //获取图片列表
    console.log(this.dm_detail_info);
    this.getDetailInfo();
  },
  methods: {
    ...mapActions(["getDetailInfo"])
  }
};
</script>


<style lang="less" scoped>
@import "../../../assets/iconfont/iconfont.css";
.service-bar[data-v-7fd36d5e] {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 0.98667rem;
  background-color: #f8f8f8;
  border-top-left-radius: 0.13333rem;
  border-top-right-radius: 0.13333rem;
  margin-top: -0.10667rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow: hidden;
  .service-item[data-v-7fd36d5e] {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    .icon[data-v-7fd36d5e] {
      font-size: 0.34667rem;
      color: #ff2d79;
    }
    .iconfont {
      font-family: iconfont !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
    }
    .icondagou_ {
      &:before {
        content: "\E60C";
      }
    }
    .text[data-v-7fd36d5e] {
      color: #000;
      margin-left: 0.06667rem;
      white-space: nowrap;
      font-size: 0.34667rem;
    }
  }
  .last-mask[data-v-7fd36d5e] {
    position: absolute;
    z-index: 0;
    right: 0;
    top: 0.26667rem;
    width: 0.66667rem;
    height: 0.53333rem;
    background: linear-gradient(90deg, hsla(0, 0%, 97%, 0), #f8f8f8);
  }
}
</style>

