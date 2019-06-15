<template>
  <div>
    <div data-v-3f42c687 data-v-5dfd96bd data-spm="artist" class="artist-card-wrapper">
      <div data-v-026c0cd9 data-v-3f42c687 class="section-title">
        <div data-v-026c0cd9 class="title-text">演出阵容</div>
        <!---->
      </div>
      <div data-v-3f42c687 class="artist-card-scroller">
        <ul data-v-3f42c687 class="artist-card-multi">
          <li data-v-3f42c687 class="artist-card-multi-item">
            <div
              data-v-3f42c687
              class="artist-card-multi-img"
              :style="{backgroundImage: 'url('+dm_detail_info.detailViewComponentMap.item.dynamicExtData.artists[0].picUrl+')'}"
            ></div>
            <span
              data-v-3f42c687
              class="name"
            >{{dm_detail_info.detailViewComponentMap.item.dynamicExtData.artists[0].artistName}}</span>
            <span
              data-v-3f42c687
              class="tag"
            >{{dm_detail_info.detailViewComponentMap.item.dynamicExtData.artists[0].tag}}</span>
          </li>
          <li data-v-3f42c687 class="artist-card-multi-item">
            <div
              data-v-3f42c687
              class="artist-card-multi-img"
              :style="{backgroundImage: 'url('+dm_detail_info.detailViewComponentMap.item.dynamicExtData.artists[1].picUrl+')'}"
            ></div>
            <span
              data-v-3f42c687
              class="name"
            >{{dm_detail_info.detailViewComponentMap.item.dynamicExtData.artists[1].artistName}}</span>
            <span
              data-v-3f42c687
              class="tag"
            >{{dm_detail_info.detailViewComponentMap.item.dynamicExtData.artists[1].tag}}</span>
          </li>
        </ul>
      </div>
      <div data-v-163d9d0c data-v-3f42c687 class="section-padding"></div>
    </div>
    <!-- ---------------------分割线------------------------- -->
    <div data-v-163d9d0c data-v-3f42c687 class="section-padding"></div>
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
.section-title[data-v-026c0cd9] {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0.64rem 0.4rem;
  .title-text[data-v-026c0cd9] {
    font-size: 0.64rem;
    color: #000;
    font-weight: 700;
  }
}
.artist-card-scroller[data-v-3f42c687] {
  margin: 0.48rem 0;
  display: flex;
  overflow: hidden;
  .artist-card-multi {
    display: flex;
    overflow: scroll;
    .artist-card-multi-item {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      margin-right: 0.48rem;
      // &:first-child {
      //   margin-left: 0.48rem;
      // }
      .artist-card-multi-img {
        width: 2.13333rem;
        height: 2.13333rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        border: 1px solid #eee;
      }
      .name {
        margin-top: 0.32rem;
        margin-bottom: 0.24rem;
        color: #000;
        font-size: 0.37333rem;
        font-weight: 700;
      }
      .tag {
        font-size: 0.34667rem;
        color: #666;
      }
    }
  }
}
.section-padding[data-v-163d9d0c] {
  width: 100%;
  height: 0.24rem;
  background-color: #f8f8f8;
}
</style>

