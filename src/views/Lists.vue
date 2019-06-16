<template>
  <div class="ding">
    <div class="ding_t">
      <div class="ding_cao" :class="navBarFixed == true ? 'navBarWrap' :''">
        <div class="ding_top">
          <ul class="ding_top_list">
            <router-link v-for="(k,index) in ding" :key="index" :to="ding[index].path" v-text="ding[index].name" @click.native="tabss()"></router-link>
          </ul>
        </div>
        <div class="ding_bottom">
          <ul class="ding_bottom_list">
            <li data-ccc="1" v-for="(i,ids) in sort" :key="ids" :class="i.show ? 'select-factor_selected':''" @click="tab(ids);tabs(ids)">
              <span v-text="i.title"></span>

              <i class="iconfont icon-gengduo"></i>
            </li>
          </ul>
        </div>
      </div>

      <div class="home-factor_mask" v-show="chulaiba || chulaiba1"></div>

      <div data-v-2b15884a class="select-factor skin home-factor_select" v-show="chulaiba || chulaiba1">
        <div v-show="chulaiba && chulaiba22">
          <div data-v-58766511="" data-v-54495319="" class="select-factor skin">
            <ul data-v-58766511="" class="select-factor_wrap">
              <li data-v-58766511="" data-spm="dtimetype" class="select-factor_item select-factor_selected">
                全部时间
              </li>
              <li data-v-58766511="" data-spm="dtimetype" class="select-factor_item">
                本周
              </li>
              <li data-v-58766511="" data-spm="dtimetype" class="select-factor_item">
                本月
              </li>
              <li data-v-58766511="" data-spm="dtimetype" class="select-factor_item">
                周末
              </li>
            </ul>
            <div data-v-4144b15c="" data-v-58766511="" class="dm-calendar">
              <div data-v-4144b15c="" class="dm-calendar__header">
                <i data-v-4144b15c="" class="iconfont icon-jiantouyou icon-dingwei nav"></i>
                <span data-v-4144b15c="" class="dm-calendar__header__month-name">2019年6月</span>
                <i data-v-4144b15c="" class="iconfont icon-dingwei nav"></i>
              </div>
              <div data-v-4144b15c="" class="dm-calendar__body">
                <div data-v-4144b15c="" class="dm-calendar__week">
                  <ul data-v-4144b15c="" class="week-list">
                    <li data-v-4144b15c="" class="week-list__dow">日</li>
                    <li data-v-4144b15c="" class="week-list__dow">一</li>
                    <li data-v-4144b15c="" class="week-list__dow">二</li>
                    <li data-v-4144b15c="" class="week-list__dow">三</li>
                    <li data-v-4144b15c="" class="week-list__dow">四</li>
                    <li data-v-4144b15c="" class="week-list__dow">五</li>
                    <li data-v-4144b15c="" class="week-list__dow">六</li>
                  </ul>
                </div>
                <div data-v-4144b15c="" class="dm-calendar__date">
                  <div data-v-4144b15c="" class="day-list">
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        26
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        27
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        28
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        29
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        30
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        31
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        1
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        2
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        3
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        4
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        5
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        6
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        7
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        8
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        9
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        10
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        11
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        12
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day outdate">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        13
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day selected">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        14
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day festival">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        15
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day festival">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        16
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        17
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        18
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        19
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        20
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        21
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day festival">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        22
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day festival">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        23
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        24
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        25
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        26
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        27
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        28
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day festival">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        29
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day festival">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        30
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        1
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        2
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        3
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        4
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        5
                      </span>
                      <!---->
                    </div>
                    <div data-v-4144b15c="" class="day-list__day disable">
                      <span data-v-4144b15c="" class="day-list__day__item">
                        6
                      </span>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="chulaiba1 && chulaiba11" class="cities" ref="wrapper" >
          <div class="content cities11">
              <div data-v-ce3e2f64 data-v-6ac40e55 class="select-city_location">
                <div data-v-ce3e2f64 data-v-6ac40e55 class="select-city_title">定位城市</div>
                <div data-v-ce3e2f64 data-v-6ac40e55 class="select_city_caonima">
                  <span data-v-ce3e2f64 data-v-6ac40e55 data-spm="dcity" class="select-city_item">定位失败</span>
                </div>
              </div>
              <div data-v-ce3e2f64 data-v-6ac40e55 class="select-city_hot">
                <div data-v-ce3e2f64 data-v-6ac40e55 class="select-city_title">热门城市/区域</div>
                <div data-v-ce3e2f64 data-v-6ac40e55 class="select-city_hot_list">
                  <router-link to="/lists/all" data-v-ce3e2f64 data-v-6ac40e55 data-spm="dcity" class="selected select-city_item" v-for="(a,index) in citys" :key="index" v-text="a.name"  @click.native="tabss();tohome(a.name)"></router-link >
                </div>
              </div>
              <div class="select-city_list">

                <div v-for="(q,ids) in dingwei" :key="ids" :style="{display:(ids==0 ? 'none':'block')}">
                  <div class="select-city_title" v-text="q.prefix"></div>
                  <ul data-v-ce3e2f64 data-v-6ac40e55 class="select-city_list_citys">
                    <router-link  to="/lists/concert" data-v-ce3e2f64 data-v-6ac40e55 data-spm="dcity" class="select-city_list_item" v-for="(w,idd) in dingwei[ids].cities" :key="idd" v-text="w.name"  @click.native="tabss();tohome(w.name)"></router-link>
                  </ul>
                </div>
              </div>
          </div>
          
        </div>

      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import vuescroll from 'vue-scroll'
Vue.use(vuescroll)
 import BScroll from 'better-scroll'
export default Vue.extend({
  data() {
    return {
      ding: [],
      actives: 0,
      dingwei: [],
      chulaiba: false,
      chulaiba1: false,
      chulaiba11: true,
      chulaiba22: true,
      citys: [],
      cityname: '',
      sort: [
        {
          title: "全国",
          show: true
        },
        {
          title: "全部时间",
          show: false
        },
        {
          title: "推荐排序",
          show: false
        },
        {
          title: "距离最近",
          show: false
        }
      ],
      rout: [""],
      navBarFixed: true
    };
  },
  created() {
 
  },
  mounted() {
    this.created();
    window.addEventListener("scroll", this.hidemenu);
    this.positions();
    this.$nextTick(() => {
        //$refs绑定元素
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
            click:true
        })
        // console.log(this.scroll)
        }else if(!this.$refs.wrapper){
            return
        }
        else{
            this.scroll.refresh()
        }
      });
  },
 
  computed: {},
  methods: {
    tohome(ru) {
      this.cityname = ru;
      // this.$router.push({
      //   name: 'all', 
      //   params: {
      //     cityname: this.cityname,
      //   },
      // });
      this.$store.state.locationcity = ru;
      this.sort[0].title = this.cityname;
    },
    dianji(e) {
      
    },

    async created() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/damai"
      );
      //   console.log(data);
      this.ding = data.data.data.ding;

      // this.menuss[0].imgpath = require(this.menuss[0].imgpath);
      //   console.log(this.ding.name);
    },
    async positions() {
      "";
      const data1 = await this.$axios(
        "https://www.easy-mock.com/mock/5cf65fe009bd2e7650a89837/example/position_damai"
      );
      // console.log(data1);
      this.dingwei = data1.data.data.areas;
      this.citys = this.dingwei[0].cities;
      // this.menuss[0].imgpath = require(this.menuss[0].imgpath);
      // console.log(this.dingwei[0].prefix);
    },
    toggle: function(index) {
      this.actives = index;
      // for (var i = 0; i < this.ding.length; i++) {
      //   this.ding[i].show = false;
      //   if (i == index) {
      //     this.ding[index].show = true;
      //   }
      // }
      console.log(this.actives);
    },
    hidemenu() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        
      //当滚动超过50时，实现吸顶效果（导航高度为50）
      if (scrollTop > 0) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    tab: function(ids) {
      for (var i = 0; i < this.sort.length; i++) {
        this.sort[i].show = false;
        if (i == ids) {
          this.sort[ids].show = true;
        }
      }
    },
    tabs(ids) {
      if (ids == 0) {
        this.chulaiba1 = !this.chulaiba1;
        this.chulaiba = false;
      } else if (ids == 1) {
        this.chulaiba = !this.chulaiba;
        this.chulaiba1 = false;
      }
      else if (ids == 2) {
        this.chulaiba = !this.chulaiba;
        this.chulaiba1 = false;
      }
      else if (ids == 3) {
        this.chulaiba = !this.chulaiba;
        this.chulaiba1 = false;
      }
    },
    tabss(){
      this.chulaiba = false;
      this.chulaiba1 = false;
      console.log(111)
    }
  }
});
</script>
<style lang="scss" scoped>
.cities{
  // height: 440px;
  width: 100%;
  position: absolute;
  top:55px;
  bottom:45px;
overflow: hidden;
  // overflow: hidden;
  height: 640px;
}
.cities11{
  // height: 100%;
  // min-height: 600px;
  height: 8000px;
}
.select-factor[data-v-58766511] {
  padding-bottom: 0.4rem;
  .select-factor_wrap[data-v-58766511] {
    padding: 0 0 0 0.29333rem;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    .select-factor_selected[data-v-58766511] {
      border: 1px solid #ff1268;
      color: #ff1268;
    }
    .select-factor_item[data-v-58766511] {
      width: 2.01333rem;
      height: 0.96rem;
      border-radius: 0.08rem;
      line-height: 0.96rem;
      text-align: center;
      margin-top: 0.42667rem;
      font-size: 0.34667rem;
      color: #3d3d3d;
      border: 1px solid #e7e7e7;
    }
  }
  .dm-calendar__header .nav-disable[data-v-4144b15c] {
    color: #ccc;
  }
  .dm-calendar__header .nav[data-v-4144b15c] {
    width: 2.13333rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
  }
  .dm-calendar .week-list[data-v-4144b15c] {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 0.37333rem;
    height: 0.72rem;
    background: #f8f8f8;
  }
  .dm-calendar .week-list__dow[data-v-4144b15c] {
    list-style: none;
    width: 2.66667rem;
    text-align: center;
  }
  .dm-calendar__date .day-list[data-v-4144b15c] {
    zoom: 1;
  }
  .dm-calendar__date .day-list__day.disable[data-v-4144b15c] {
    color: #ccc;
    font-weight: 200;
  }
  .dm-calendar__date .day-list__day[data-v-4144b15c] {
    position: relative;
    float: left;
    width: 14.2%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: #111;
  }
  .dm-calendar__date .day-list__day__item[data-v-4144b15c] {
    text-align: center;
    font-size: 0.37333rem;
    line-height: 1.17333rem;
  }

  .dm-calendar__header[data-v-4144b15c] {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 0.37333rem;
    padding: 0.42667rem 0;
  }
  .dm-calendar[data-v-4144b15c] {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 0 0.48rem;
  }
}
.ding_t{
  height: 120px;
}
a:hover {
  text-decoration: none;
}
a:hover {
  border-bottom: 2px solid #ff1268;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;
}

.home-factor_mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: #000;
  opacity: 0.65;
  width: 100%;
}
.home-factor_select {
  position: fixed;
  top: 57px;
  width: 100%;
  max-height: 100%;
  padding-top: 1.38667rem;
  box-sizing: border-box;
  z-index: 1001;
  background: #fff;
  .select-factor_wrap[data-v-2b15884a] {
    padding: 0 0 0 0.29333rem;
    background: #fff;
    max-height: 7.46667rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .select-factor_selected[data-v-2b15884a] {
      color: #ff1268;
    }
    .active {
      color: #ff1268;
    }
  }
}

.select-factor_item[data-v-2b15884a] {
  position: relative;
  height: 1.33333rem;
  line-height: 1.33333rem;
  font-size: 0.32rem;
  color: #111;
  border-bottom: 1px solid #e7e7e7;
}
.ding {
  // .ding_t{
  //   height: 120px;
  // }
  .ding_top {
    position: relative;
    z-index: 2000;
    background: #fff;
    // border-bottom: 1px solid #e7e7e7;
    padding-bottom: 0.32rem;
    height: 1.2rem;
    line-height: 1.2rem;
    //
    overflow: auto;
    .ding_top_list {
      position: relative;
      z-index: 2000;
      display: inline-block;
      white-space: nowrap;
      //
      overflow: hidden;
      .active {
        border-bottom: 2px solid red;
        //   color:red;
      }
      li {
        display: inline-block;
        box-sizing: border-box;
        height: 1.2rem;
        margin: 0 0.4rem;
        font-size: 0.42667rem;
        font-weight: 400;
        color: #111;
      }
      a {
        // float: left;
        display: inline-block;
        box-sizing: border-box;
        height: 1.2rem;
        margin: 0 0.4rem;
        font-size: 0.42667rem;
        font-weight: 400;
        color: #111;
      }
    }
  }
  .ding_bottom {
    height: 1.2rem;
    .ding_bottom_list {
      display: flex;
      height: 1.2rem;
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      z-index: 1002;
      background: #f5f5f5;
      border-bottom: 1px solid #e7e7e7;
      li {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        text-align: center;
        line-height: 1.2rem;
        font-size: 0.37333rem;
        color: #111;
        display: flex;
        height: 1.2rem;
      }

      .select-factor_selected {
        color: #ff1268;
      }
    }
  }
}

.select-city_title[data-v-ce3e2f64] {
  height: 0.66667rem;
  line-height: 0.66667rem;
  background: #f2f3f4;
  padding-left: 0.26667rem;
}
.select-city_list {
  .select-city_title[data-v-ce3e2f64] {
    height: 0.66667rem;
    line-height: 0.66667rem;
    background: #f2f3f4;
    padding-left: 0.26667rem;
  }
}
.select-city_item[data-v-ce3e2f64] {
  display: inline-block;
  box-sizing: border-box;
  width: 2.8rem;
  height: 0.96rem;
  text-align: center;
  line-height: 0.96rem;
  border: 1px solid #e7e7e7;
  border-radius: 0.08rem;
  margin: 0.21333rem 0 0.21333rem 0.4rem;
}

.select-city_hot_list[data-v-ce3e2f64] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: wrap;
  flex-flow: wrap;
  background: #fff;
  a{
    color:#3d3d3d;
  }
  .select-city_hot_list .selected[data-v-ce3e2f64] {
    border: 1px solid #ff1268;
  }
  .select-city_item[data-v-ce3e2f64] {
    display: inline-block;
    box-sizing: border-box;
    width: 2.8rem;
    height: 0.96rem;
    text-align: center;
    line-height: 0.96rem;
    border: 1px solid #e7e7e7;
    border-radius: 0.08rem;
    margin: 0.21333rem 0 0.21333rem 0.4rem;
  }
}
.select_city_caonima {
  background: #fff;
}
.select-city_title {
  background: #f2f3f4;
  height: 0.66667rem;
  line-height: 0.66667rem;
  background: #f2f3f4;
  padding-left: 0.26667rem;
}
.select-city_list_citys {
  overflow: auto;
  li {
    overflow: hidden;
    background: #fff;
  }
  a{
     overflow: hidden;
    background: #fff;
    display: block;
    text-decoration: none;
    color:#3d3d3d;
  }
}
.select-city_list_item[data-v-ce3e2f64] {
  height: 1.2rem;
  line-height: 1.2rem;
}
.select-city_list_item[data-v-ce3e2f64]:not(:last-child) {
  border-bottom: 1px solid #e7e7e7;
}
.select-city_list_citys[data-v-ce3e2f64] {
  padding-left: 0.32rem;
  background: #fff;
}
</style>
