<template>
  <!-- 详情页头部 -->
  <div>
    <div data-v-16af04c0 data-v-5dfd96bd class="detail-top">
      <div
        data-v-61361ba2
        data-v-16af04c0
        class="bg-default"
        :style="{backgroundImage: 'url('+dm_detail_info.detailViewComponentMap.item.staticData.itemBase.itemPic+')'}"
      ></div>
      <div data-v-16af04c0 class="container">
        <div data-v-45189236 data-v-16af04c0 class="imgframe">
          <div
            data-v-45189236
            class="img"
            :style="{backgroundImage: 'url('+dm_detail_info.detailViewComponentMap.item.staticData.itemBase.itemPic+')'}"
          ></div>
          <!---->
          <div data-v-45189236 class="label">总票代</div>
        </div>
        <div data-v-16af04c0 class="right-content">
          <div data-v-28867862 data-v-16af04c0 class="right-content-top">
            <p
              data-v-28867862
              class="title"
            >{{dm_detail_info.detailViewComponentMap.item.staticData.itemBase.itemName}}</p>
            <!---->
          </div>
          <div data-v-3ec8ecbe data-v-16af04c0 class="right-content-bottom">
            <div data-v-3ec8ecbe class="price-section">
              <span
                data-v-3ec8ecbe
                class="price"
              >{{dm_detail_info.detailViewComponentMap.item.item.priceRange}}</span>
              <span data-v-3ec8ecbe class="dashprice"></span>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <!---->
      <!---->
      <!---->
    </div>
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
.detail-top[data-v-16af04c0] {
  position: relative;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-bottom: 0.48rem;
  .bg-default[data-v-61361ba2],
  .bg-mi8[data-v-61361ba2] {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    filter: saturate(1) brightness(1.1) blur(0.6rem) contrast(0.8);
  }
  .container[data-v-16af04c0] {
    display: flex;
    -webkit-box-direction: normal;
  }
  .container[data-v-16af04c0] {
    position: relative;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding-top: 0.48rem;
    .imgframe[data-v-45189236] {
      position: relative;
      width: 3.16rem;
      height: 4.26667rem;
      margin-left: 0.4rem;
      .img[data-v-45189236] {
        width: 100%;
        height: 100%;
        border-radius: 0.08rem;
        background: hsla(0, 0%, 100%, 0.1) no-repeat;
        background-size: cover;
      }
      .label[data-v-45189236] {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0.32rem;
        color: #fff;
        padding: 0.08rem 0.08rem 0.13333rem;
        background-size: 100% 100%;
        background-image: url(https://gw.alicdn.com/tfs/TB171PvNMHqK1RjSZFPXXcwapXa-126-60.png);
        transform: scale(0.83333333) translate(-0.10667rem, -0.06667rem);
      }
    }
    .right-content[data-v-16af04c0] {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      -webkit-box-orient: vertical;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      height: 4.26667rem;
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      display: flex;
      -webkit-box-direction: normal;
      .right-content-top[data-v-28867862] {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        .title[data-v-28867862] {
          font-weight: 700;
          font-size: 0.42667rem;
          letter-spacing: 0;
          line-height: 0.53333rem;
          text-align: justify;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          color: #fff;
        }
      }
      .right-content-bottom[data-v-3ec8ecbe] {
        display: flex;
        -webkit-box-direction: normal;
        width: 100%;
        -webkit-box-orient: vertical;
        flex-direction: column;
        .price-section[data-v-3ec8ecbe] {
          -webkit-box-orient: horizontal;
          flex-direction: row;
          display: flex;
          -webkit-box-direction: normal;
          .price[data-v-3ec8ecbe] {
            font-size: 0.42667rem;
            line-height: 0.42667rem;
            color: #fff;
          }
          .dashprice[data-v-3ec8ecbe] {
            font-size: 0.32rem;
            line-height: 0.42667rem;
            color: hsla(0, 0%, 100%, 0.6);
            margin-left: 0.13333rem;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>

