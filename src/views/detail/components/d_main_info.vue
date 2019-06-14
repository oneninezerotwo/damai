<template>
  <div>
    <!-- ........地址部分............ -->
    <div data-v-066083e9 data-v-5dfd96bd class="location-info">
      <div data-v-066083e9 class="location-left">
        <p
          data-v-066083e9
          class="location-left-city single-line"
        >{{dm_detail_info.detailViewComponentMap.item.staticData.venue.venueCityName}}| {{dm_detail_info.detailViewComponentMap.item.staticData.venue.venueName}}</p>
        <p
          data-v-066083e9
          class="location-left-address single-line"
        >{{dm_detail_info.detailViewComponentMap.item.staticData.venue.venueAddr}}</p>
      </div>
      <div data-v-066083e9 class="location-right">
        <div data-v-066083e9 class="dm-venue-amap dm-venue-map location-right-icon"></div>
      </div>
    </div>
    <!-- ..........地址部分完............. -->

    <!-- ...........分割线部分.............. -->
    <div data-v-163d9d0c data-v-5dfd96bd class="section-padding"></div>
    <!-- ............分割线部分完............. -->

    <!-- ..........标题部分............... -->
    <div data-v-026c0cd9 data-v-5dfd96bd class="section-title">
      <div
        data-v-026c0cd9
        class="title-text"
      >{{dm_detail_info.detailViewComponentMap.item.staticData.itemExtendInfo.itemDescTitle}}</div>
      <!---->
    </div>
    <!-- ...........标题部分完.............. -->
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
.location-info[data-v-066083e9] {
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 0.48rem;
  padding-bottom: 0.48rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  .location-left[data-v-066083e9] {
    -webkit-box-orient: vertical;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex: 1;
    border-right: 1px solid #eee;
    display: flex;
    -webkit-box-direction: normal;
    .single-line[data-v-066083e9] {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .location-left-city[data-v-066083e9] {
      font-size: 0.42667rem;
      color: #000;
      font-weight: 700;
    }
    .location-left-address[data-v-066083e9] {
      font-size: 0.34667rem;
      color: #999;
      margin-top: 0.24rem;
    }
  }
  .location-right[data-v-066083e9] {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    padding-left: 0.4rem;
    .location-right-icon[data-v-066083e9] {
      width: 0.53333rem;
      height: 0.53333rem;
      background-image: url(https://img.alicdn.com/tfs/TB1gDBCLHvpK1RjSZFqXXcXUVXa-54-54.png);
    }
    .dm-venue-amap {
      width: 100%;
      height: 100%;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAC+lBMV…0GqAzZcv/Xx27yiT5B6kptszTLW7Ro3ublKmZPk5zpE/1vcPtsujwgjsIAAAAASUVORK5CYII=)
        no-repeat right;
      background-size: contain;
    }
  }
}
.section-padding[data-v-163d9d0c] {
  width: 100%;
  height: 0.24rem;
  background-color: #f8f8f8;
}

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
</style>

