<template>
  <div class="project wrapper" ref="wrapper">
    <div data-v-6ac40e55 class="content project1">
      <router-link to="/detail" class="wrap_projects_content_item" v-for="(i,index) in projectInfo" :key="index">
        <div data-v-442bf385 class="project-item skin project_newhome" data-spm="ditem_0" data-v-6ac40e55>
          <div data-v-442bf385 class="project-item_pic">
            <img data-v-442bf385 class="project-item_pic_poster" :src="i.verticalPic" lazy="loaded">
            <!---->
          </div>
          <div data-v-442bf385 class="project-item_info">
            <div data-v-442bf385 class="project-item_info_title project-item_limit_lines_2 project-item_info_title_line">
              <span data-v-442bf385 v-text="i.name"></span>
            </div>
            <div data-v-442bf385 class="project-item_info_time project-item_limit_lines_1" v-text="i.logicAddress+'/ '+i.showTime+'  '+i.venueName"></div>
            <div data-v-442bf385 class="project-item_info_promotion">
              <span data-v-2d7cf934 data-v-442bf385 class="tag skin project-item_info_tag project-item_info_xuanzuo tag-small project_newhome_tag">可选座</span>
            </div>
            <div data-v-442bf385 class="project-item_info_price">
              <span data-v-442bf385 class="project-item_info_price_str">￥380-2680</span>
              <!---->
              <!---->
            </div>
            <!---->
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BScroll from 'better-scroll';
import { constants } from 'crypto';
// import Vue from "vue";
// import vuescroll from 'vue-scroll'
export default Vue.extend({
  data() {
    return {
      projectInfo: [],
    };
  },
  created() {
    // this.$nextTick(() => {
    //     this.scroll = new Bscroll(this.$refs.wrapper, {})
    //   })
  },
  mounted() {
    this.$nextTick(() => {
        // $refs绑定元素
        if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
            // 开启点击事件 默认为false
            click: true,
        });
        // console.log(this.scroll)
        } else if (!this.$refs.wrapper) {
            return;
        } else {
            this.scroll.refresh();
        }
      });
    this.createds();
    // this.scroll = new Bscroll(this.$refs.wrapper);
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 200) {
    //     console.log("到底部了");
    //   }

    // });

  },
  // created(){
  //     this.createds();
  // },
  computed: {},
  methods: {
    onScroll() {

    },
    async createds() {
      // const data = await this.$axios(
      //   "https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/damai1"
      // );
      // console.log(data);
      // this.projectInfo = data.data.data.projectInfo;

      // // this.menuss[0].imgpath = require(this.menuss[0].imgpath);
      // console.log(this.projectInfo[0].actores);
      this.$axios(
        'https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/damai1',
      ).then((res) => {
        // console.log(res);

        this.projectInfo = res.data.data.projectInfo;
        //  this.projectInfo = this.projectInfo.concat(this.projectInfo);
        //  console.log(this.projectInfo)
        // this.$nextTick(() => {
        //   if (!this.scroll) {
        //     this.scroll = new Bscroll(this.$refs.wrapper, {});
        //     this.scroll.on("touchend", pos => {
        //       // 下拉动作
        //       if (pos.y > 1) {
        //         // console.log(1);
        //         this.createds();
        //       }
        //     });
        //   } else {
        //     this.scroll.refresh();
        //     // console.log(2);
        //     let sh = document.querySelector(".content").scrollHeight;
        //     let st = document.querySelector(".content").scrollTop;
        //     let ch = document.querySelector(".content").clientHeight;
        //     if (Math.ceil(st + ch) === sh) {
        //       // console.log("到底了");
        //       //业务逻辑
        //     }
        //     // const content = document.querySelector(".content");
        //     // if(content.scrollHeight>1500){
        //     //   this.createds();
        //     //   console.log(111);
        //     // }
        //   }
        // });
      });
    },
    // toggle: function(index) {
    //   this.active = index;
    // }
  },
});
</script>
<style lang="scss" scoped>
@import "./../../assets/base.css";
.project {
  height: 1000px;
  overflow: hidden;
}
.project1{
  height: 2000px;
}
.wrapper {
  // padding-top:110px;
}
</style>
