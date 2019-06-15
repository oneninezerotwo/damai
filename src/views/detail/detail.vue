<template>
  <div>
    <dm-head></dm-head>
    <dm-service></dm-service>
    <dm-time-info></dm-time-info>
    <dm-main-info></dm-main-info>
    <dm-main-content></dm-main-content>
    <dm-artist></dm-artist>
    <dm-notice></dm-notice>
    <dm-recommend></dm-recommend>
    <div class="fixedBottom">
      <dm-bottom></dm-bottom>
    </div>
  </div>
</template>
<script>
import dmHead from "./components/d_detail_top.vue";
import dmService from "./components/d_service_bar.vue";
import dmTimeInfo from "./components/d_detail_time_info.vue";
import dmMainInfo from "./components/d_main_info.vue";
import dmMainContent from "./components/d_about_introduce.vue";
import dmArtist from "./components/d_artist.vue";
import dmNotice from "./components/d_notice-section.vue";
import dmRecommend from "./components/d_recommend.vue";
import dmBottom from "./components/d_bottom.vue";

export default {
  components: {
    dmHead,
    dmService,
    dmTimeInfo,
    dmMainInfo,
    dmMainContent,
    dmArtist,
    dmNotice,
    dmRecommend,
    dmBottom
  }
};
</script>
<style lang="less" scoped>
.fixedBottom {
  position: fixed;
  bottom: 1px;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>


