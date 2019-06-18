import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dm_detail_info: [],
    dm_detail_list: [],
    showCart: false,
    weeknum: 0,
    scrollernum: 0,
    tofix: false,
    offtop: 0,
    locationcity: '全国',
    passportid: 0,
    phoneNumber: []
  },
  mutations: {
    getDetailInfo(state, list) {
      state.dm_detail_info = list; // 获取详情页信息
    },
    getDetailList(state, list) {
      state.dm_detail_list = list; // 获取详情页列表信息
    },
    isFixedCart(state, boolean) {  // 自定义改变底部购物车是否显示
      state.showCart = boolean;
    },
  },
  getters: {
    // 承载变化的值
    dm_detail_info: (state) => state.dm_detail_info,
    dm_detail_list: (state) => state.dm_detail_list,
    showCart: (state) => state.showCart,

  },
  // 异步操作
  actions: {
    getDetailInfo({
      commit,
      state,
    }) {
      axios.get('https://www.easy-mock.com/mock/5cf6534b7d25197d5b6790b8/example/www.damai.com').then((response) => {
        if (JSON.parse(response.data.data.result)) {
          commit('getDetailInfo', JSON.parse(response.data.data.result));
        }
      });
    },

    getDetailList({
      commit,
      state,
    }) {
      axios.get('https://www.easy-mock.com/mock/5cf6534b7d25197d5b6790b8/example/www.tuijianliebiao.com').then((response) => {
        const dm_for_list = response.data.data.projectInfo;
        if (dm_for_list) {
          commit('getDetailList', dm_for_list);
        }
      });
    },
    isFixedCart({
      commit,
      state,
    }) {
      if (!state.showCart) {
        commit('isFixedCart', true);
      } else {
        commit('isFixedCart', false);
      }
    },
  },
});
