import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/',
        // name: 'recent',
        // component: () => import('./components/RecentContent.vue'),
        components: {
          recent: () => import('./components/RecentContent.vue'),
          // moreshow: () => import('./components/MoreShowContent.vue')
        },
      }],
      meta: { title: '首页' },
    }, {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail/detail.vue'),
    }, {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
      meta: { title: '搜索' },
    },

    {
      path: '/lists',
      name: 'lists',
      // redirect: "/lists",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Lists.vue'),
      children: [{
        path: '/',
        name: 'all',
        component: () => import('./components/children/All.vue'),
      }, {
        path: 'all',
        name: 'all',
        component: () => import('./components/children/All.vue'),
      }, {
        path: 'concert',
        name: 'concert',
        component: () => import('./components/children/Concert.vue'),
      }],
    },
    {
      path: '/artistlist',
      name: 'artistlist',
      component: () => import('./views/Artistlist.vue'),
      meta: { title: '大咖在大麦' },
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('./views/Location.vue'),
      meta: { title: '定位' },
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue'),
      meta: { title: '我的订单' },
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('./views/Activity.vue'),
      meta: { title: '大咖' },
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/Mine/Mine.vue'),
      meta: { title: '我的' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue'),
      meta: { title: '登录' },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register/register.vue'),
      meta: { title: '注册' },
    },
  ],

});
