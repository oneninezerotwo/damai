<template>
  <div class="home" ref="home">
    <HomeHeader/>
    <!-- <scroller ref="my_scroller" :on-infinite="infinite"> -->
    <HomeBanner/>
    <Navigate/>
    <BigShot/>
    <Recent/>
    <MoreShow ref="moreshow" />
    <!-- </scroller> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeHeader from "@/components/HomeHeader.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import Navigate from "@/components/Navigate.vue";
import BigShot from "@/components/BigShot.vue";
import Recent from "@/components/Recent.vue";
import MoreShow from "@/components/MoreShow.vue";

// import VueScroller from "vue-scroller";
// Vue.use(VueScroller);

@Component({
  mounted() {
    const _this = this;
    document.addEventListener("scroll", function() {
      // console.log(_this.$refs.home.offsetHeight);
      if (_this.$refs.moreshow) {
        if (window.scrollY > 1100) {
          _this.$store.state.tofix = true;
          // _this.$store.state.offtop = _this.$refs.my_scroller.getPosition(
          //   window
          // ).top;
        } else {
          _this.$store.state.tofix = false;
        }

        if (
          window.scrollY >=
          _this.$refs.home.offsetHeight - window.innerHeight
        ) {
          _this.infinite();
        }
      }
    });
  },
  methods: {
    infinite() {
      this.$store.state.scrollernum++;
    }
  },
  components: {
    HomeHeader,
    HomeBanner,
    Navigate,
    BigShot,
    Recent,
    MoreShow
  }
})
export default class Home extends Vue {}
</script>
