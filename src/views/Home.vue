<template>
  <div class="home">
    <HomeHeader/>
    <scroller ref="my-scrooler">
      <HomeBanner/>
      <Navigate/>
      <BigShot/>
      <Recent/>
    </scroller>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeHeader from "@/components/HomeHeader.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import Navigate from "@/components/Navigate.vue";
import BigShot from "@/components/BigShot.vue";
import Recent from "@/components/Recent.vue";

import VueScroller from "vue-scroller";
Vue.use(VueScroller);

@Component({
  components: {
    HomeHeader,
    HomeBanner,
    Navigate,
    BigShot,
    Recent
  }
})
export default class Home extends Vue {}
</script>
