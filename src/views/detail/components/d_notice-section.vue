<template>
  <div
    data-v-3b3aea34
    data-v-5dfd96bd
    class="notice-section"
    noticelist="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
  >
    <div data-v-026c0cd9 data-v-3b3aea34 class="section-title" data-spm="dmore">
      <div
        data-v-026c0cd9
        class="title-text"
      >{{dm_detail_info.detailViewComponentMap.item.staticData.noticeMatter.title}}</div>
      <!---->
    </div>
    <div
      data-v-3b3aea34
      class="subtitle"
    >{{dm_detail_info.detailViewComponentMap.item.staticData.noticeMatter.noticeList[0].noteTitle}}</div>
    <div data-v-3b3aea34 class="notice-content">
      <div
        data-v-26981003
        data-v-3b3aea34
        class="info-item"
        v-for="(item,index) in (dm_detail_info.detailViewComponentMap.item.staticData.noticeMatter.noticeList[0].ticketNoteList)"
        :key="index"
      >
        <div data-v-26981003 class="item-title">
          <i data-v-26981003 class="iconfont icon icondagou_"></i>
          <div data-v-26981003 class="text">{{item.title}}</div>
        </div>
        <div data-v-26981003 class="item-text">{{item.content}}</div>
      </div>
      <div data-v-3b3aea34 class="read-more">
        <div data-v-3b3aea34 class="text">全部7条观演须知</div>
      </div>
    </div>
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
.notice-section[data-v-3b3aea34] {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  .section-title[data-v-026c0cd9] {
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
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin: 0.64rem 0.4rem;
    .title-text[data-v-026c0cd9] {
      font-size: 0.64rem;
      color: #000;
      font-weight: 700;
    }
  }
  .subtitle[data-v-3b3aea34] {
    font-size: 0.42667rem;
    color: #000;
    font-weight: 700;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
  .notice-content[data-v-3b3aea34] {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    .info-item[data-v-26981003] {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      -webkit-flex-direction: column;
      flex-direction: column;
      .item-title[data-v-26981003] {
        height: 1.2rem;
        -webkit-box-orient: horizontal;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-right: 0.2rem;
        display: flex;
        -webkit-box-direction: normal;
        .icon[data-v-26981003] {
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
        .text[data-v-26981003] {
          font-size: 0.37333rem;
          color: #000;
          margin-left: 0.2rem;
        }
      }
      .item-text[data-v-26981003] {
        font-size: 0.34667rem;
        line-height: 0.53333rem;
        color: #666;
        margin-left: 0.53333rem;
      }
    }
    .read-more[data-v-3b3aea34] {
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.66667rem;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      .text[data-v-3b3aea34] {
        font-size: 0.42667rem;
        color: #ff2d79;
        padding-top: 0.66667rem;
      }
    }
  }
}
</style>

