<template>
  <!-- ............介绍部分............. -->
  <div data-v-b684c5be data-v-5dfd96bd class="cell-content">
    <div data-v-b684c5be style="display: block;">
      <div
        data-v-b684c5be
        id="detail-html-box"
        class="project-detail-html"
        style="overflow: hidden; height: 333.5px;"
      >
        <div data-v-b684c5be class="project-readmore__bg"></div>
        <div
          data-v-b684c5be
          id="item-detail-html-box"
          v-html="dm_detail_info.detailViewComponentMap.item.staticData.itemExtendInfo.itemExtend"
        ></div>
      </div>
    </div>
    <div data-v-b684c5be data-spm="dmoredetail" class="project-readmore">展开更多</div>
  </div>
  <!-- ............介绍部分完............. -->
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
@import "../../../assets/common/common.css";
.cell-content[data-v-b684c5be] {
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
  background-color: #fff;
  .project-detail-html[data-v-b684c5be] {
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding: 0 0 0.58667rem;
    margin: 0;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    word-wrap: break-word;
    word-break: normal;
    font-weight: 300;
    #item-detail-html-box {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;    
        display: block;
        word-wrap: break-word;
        word-break: normal;
        color: #888;
        font-size: 0.34667rem;
        line-height: 0.66667rem;
    }
  }
  .project-readmore[data-v-b684c5be] {
    position: relative;
    height: 1.06667rem;
    line-height: 1.06667rem;
    width: 100%;
    color: #ff2d79;
    font-size: 0.42667rem;
    text-align: center;
  }
}
</style>

