<template>
  <div id="recent">
    <div class="title">
      <p>近期演出</p>
      <span>演出日历
        <i class="iconfont icon-gengduo"></i>
      </span>
    </div>
    <ul class="week">
      <li>今天</li>
      <li>今天</li>
      <li>今天</li>
      <li>今天</li>
      <li>今天</li>
      <li>今天</li>
      <li>今天</li>
    </ul>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      weekday: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ],
      myddy: 0
    };
  },
  mounted() {
    const mydate = new Date();
    this.myddy = mydate.getDay();
  }
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
    span {
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
      color: #fff;
    }
  }
}
</style>
