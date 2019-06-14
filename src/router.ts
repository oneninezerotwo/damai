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
        name: 'recent',
        component: () => import('./components/RecentContent.vue')
      }]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail/detail.vue'),
    }
  ],
});
