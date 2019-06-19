<template>
  <div>
    <div data-v-6ac40e55>
      <div data-v-6ac40e55 class="wrap_projects_content_item" v-for="(i,index) in damai" :key="index">
        <div
          data-v-442bf385
          class="project-item skin project_newhome"
          data-spm="ditem_0"
          data-v-6ac40e55
        >
          <div data-v-442bf385 class="project-item_pic">
            <img
              data-v-442bf385
              class="project-item_pic_poster"
              src="//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01t4X1Uy2GdSAxNZxRM_!!0-item_pic.jpg_q60.jpg_.webp"
              lazy="loaded"
            >
            <!---->
          </div>
          <div data-v-442bf385 class="project-item_info">
            <div
              data-v-442bf385
              class="project-item_info_title project-item_limit_lines_2 project-item_info_title_line"
            >
              <span data-v-442bf385>慈溪杨梅节 告白青春巨星演唱会</span>
            </div>
            <div
              data-v-442bf385
              class="project-item_info_time project-item_limit_lines_1"
            >宁波 / 2019.06.16 周日 19:30 / 慈溪市体育中心体育场</div>
            <div data-v-442bf385 class="project-item_info_promotion">
              <span
                data-v-2d7cf934
                data-v-442bf385
                class="tag skin project-item_info_tag project-item_info_xuanzuo tag-small project_newhome_tag"
              >可选座</span>
            </div>
            <div data-v-442bf385 class="project-item_info_price">
              <span data-v-442bf385 class="project-item_info_price_str">￥380-2680</span>
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
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
    return {
      damai: [],


    };
  },
  mounted() {
    this.created();
  },
  // created(){
  //     this.createds();
  // },
  computed: {},
  methods: {
    async created() {
      const data = await this.$axios(
        'https://mtop.damai.cn/h5/mtop.damai.wireless.search.search/1.0/?jsv=2.5.0&appKey=12574478&t=1560387487816&sign=bd71f27208fa70eabb0df6ae15429326&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search&data=%7B%22cityId%22%3A%220%22%2C%22longitude%22%3A0%2C%22latitude%22%3A0%2C%22pageIndex%22%3A%221%22%2C%22pageSize%22%3A10%2C%22sortType%22%3A%223%22%2C%22categoryId%22%3A%220%22%2C%22startDate%22%3A%22%22%2C%22endDate%22%3A%22%22%2C%22option%22%3A31%2C%22sourceType%22%3A21%2C%22returnItemOption%22%3A4%2C%22dmChannel%22%3A%22damai%40damaih5_h5%22%7D',
      );
      console.log(data);
      this.damai = data.data.data.damai;

      // this.menuss[0].imgpath = require(this.menuss[0].imgpath);
      console.log(this.damai.name);
    },
    // toggle: function(index) {
    //   this.active = index;
    // }
  },
});
</script>
<style lang="scss" scoped>

</style>
