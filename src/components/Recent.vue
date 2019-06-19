<template>
  <div id="recent">
    <div class="title">
      <p>近期演出</p>
      <router-link to="/lists" class="span">演出日历
        <i class="iconfont icon-gengduo"></i>
      </router-link>
    </div>
    <ul class="week">
      <li v-for="(i,index) in weekday" :key="index" v-text="i" :class="{'today':today===index}" @click="changeday(index)"></li>
    </ul>
    <router-view name="recent" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      myddy: 0,
      today: 0,
      changekey: 0,
    };
  },
  created() {
    const mydate = new Date();
    this.myddy = mydate.getDay();
    this.$store.state.weeknum = this.myddy;
  },
  mounted() {
    const dayarr = this.weekday.slice(this.myddy);
    this.weekday.splice(this.myddy);
    this.weekday = dayarr.concat(this.weekday);
    this.weekday.splice(0, 2);
    this.weekday.unshift('今天', '明天');
  },
  methods: {
    changeday(i) {
      this.today = i;
      if (i === 0) {
        this.$store.state.weeknum = this.myddy;
      } else {
        if (this.$store.state.weeknum < 6 && i <= this.myddy - 2) {
          this.$store.state.weeknum = this.myddy + i;
        } else {
          this.myddy = this.changekey;
          this.$store.state.weeknum = this.myddy;
          this.changekey++;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#recent {
  margin-top: 0.65333rem;
  .title {
    height: 0.586667rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.48rem;
    margin-bottom: 0.42667rem;
    p {
      font-weight: 700;
      font-size: 0.453333rem;
    }
    .span {
      font-size: 0.32rem;
      color: #999;
      display: flex;
      align-items: flex-end;
      i {
        font-size: 0.133333rem;
        margin-left: 0.026667rem;
        margin-bottom: 0.053333rem;
      }
    }
  }
  .week {
    overflow: hidden;
    margin: 0 0.48rem 0.64rem;
    display: flex;
    li {
      text-align: center;
      float: left;
      flex: 1;
      font-size: 0.37333rem;
      color: #999;
    }
    .today {
      color: #000;
    }
  }
}
</style>
