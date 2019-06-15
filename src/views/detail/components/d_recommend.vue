<template>
  <div data-v-702278e7 data-v-5dfd96bd data-spm="recommend" class="detail-suggest">
    <h4 data-v-702278e7 class="detail-suggest-title">为你推荐</h4>
    <div data-v-702278e7>
      <div data-v-702278e7 class="detail-suggest-item" v-for="(v,k) in dm_detail_list" :key="k">
        <div
          data-v-442bf385
          data-v-702278e7
          class="project-item skin project_newhome"
          data-spm="ditem_0"
        >
          <div data-v-442bf385 class="project-item_pic">
            <img
              data-v-442bf385
              class="project-item_pic_poster"
              :src="v.verticalPic"
              lazy="loaded"
            >
            <!---->
          </div>
          <div data-v-442bf385 class="project-item_info">
            <div
              data-v-442bf385
              class="project-item_info_title project-item_limit_lines_2 project-item_info_title_line"
            >
              <span data-v-442bf385>{{v.name}}</span>
            </div>
            <div
              data-v-442bf385
              class="project-item_info_time project-item_limit_lines_1"
            >{{v.cityName}} / 2019.07.18 周四 19:30 / {{v.venueName}}</div>
            <div data-v-442bf385 class="project-item_info_promotion">
              <span
                data-v-2d7cf934
                data-v-442bf385
                class="tag skin project-item_info_tag project-item_info_xuanzuo tag-small project_newhome_tag"
              >可选座</span>
            </div>
            <div data-v-442bf385 class="project-item_info_price">
              <span data-v-442bf385 class="project-item_info_price_str">￥{{v.priceStr}}</span>
              <!---->
              <!---->
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    //映射数据
    ...mapState(["dm_detail_list"])
  },
  created() {},
  mounted() {
    console.log(this.dm_detail_list);
    //获取图片列表
    this.getDetailList();
  },
  methods: {
    ...mapActions(["getDetailList"])
  }
};
</script>

<style lang="less" scoped>
.detail-suggest {
  font-size: 0.58667rem;
  color: #222;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  margin-top: 0.64rem;
  .detail-suggest-item {
    margin-top: 0.64rem;
    margin-bottom: 0.32rem;
    .project-item[data-v-442bf385] {
      position: relative;
      display: flex;
      .project-item_pic[data-v-442bf385] {
        font-size: 0;
        height: 3.2rem;
        position: relative;
        .project-item_pic_poster[data-v-442bf385] {
          width: 2.4rem;
          height: 3.2rem;
          border-radius: 0.08rem;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
      }
      .project-item_info[data-v-442bf385] {
        margin-left: 0.32rem;
        padding-bottom: 0;
        position: relative;
        flex: 1;
        .project-item_info_title[data-v-442bf385] {
          width: 6.32rem;
          font-size: 0.42667rem;
          color: #111;
          font-weight: 700;
        }
        .project-item_limit_lines_1[data-v-442bf385],
        .project-item_limit_lines_2[data-v-442bf385] {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-break: break-all;
        }
        .project-item_limit_lines_2[data-v-442bf385] {
          -webkit-line-clamp: 2;
        }
        .project-item_info_title[data-v-442bf385] {
          margin-top: -0.06667rem;
          line-height: 0.6rem;
          letter-spacing: 0;
        }
        .project_newhome .project-item_info_time[data-v-442bf385] {
          width: 6.32rem;
          font-size: 0.32rem;
          color: #aaa;
          padding-top: 0.16rem;
        }
        .project-item_limit_lines_1[data-v-442bf385] {
          -webkit-line-clamp: 1;
        }
        .project-item_limit_lines_1[data-v-442bf385],
        .project-item_limit_lines_2[data-v-442bf385] {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-break: break-all;
        }
        .project-item_info_time[data-v-442bf385] {
          width: 7.14667rem;
          padding-top: 0.18667rem;
          font-size: 0.32rem;
          color: #999;
          letter-spacing: 0;
        }
        .project-item_info_promotion[data-v-442bf385] {
          font-size: 0;
          .project_newhome_tag[data-v-442bf385] {
            padding: 0.01333rem 0.08rem 0.04rem;
            font-size: 0.29333rem;
            border-radius: 0.08rem 0.08rem 0.21333rem 0.08rem;
            line-height: normal;
            border: none;
          }
          .tag[data-v-2d7cf934] {
            display: inline-block;
            box-sizing: border-box;
            letter-spacing: 0.01333rem;
          }
          .project-item_info_xuanzuo[data-v-442bf385] {
            background: #eee !important;
            color: #111 !important;
          }
          .project-item_info_tag[data-v-442bf385] {
            margin-top: 0.26667rem;
            margin-right: 0.08rem;
          }
        }
        .project-item_info_price[data-v-442bf385] {
          position: absolute;
          bottom: 0;
          width: 98%;
          .project-item_info_price_str[data-v-442bf385] {
            font-size: 0.37333rem;
            color: #ff1268;
            display: inline-block;
            box-sizing: border-box;
            line-height: 0.42667rem;
          }
        }
      }
    }
  }
}
</style>

