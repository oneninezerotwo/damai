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
        // component: () => import('./components/RecentContent.vue')
        components: {
          recent: () => import('./components/RecentContent.vue'),
          // moreshow: () => import('./components/MoreShowContent.vue')
        }
      }]
    }, {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail/detail.vue'),
    }, {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
    },
    {
      path: '/artistlist',
      name: 'artistlist',
      component: () => import('./views/Artistlist.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('./views/Location.vue'),
    }, {
      path: '/Car',
      name: 'car',
      component: () => import('./views/Car/Car.vue'),
    }
  ]
});
