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
      }],
      meta: { title: '��ҳ' },
    }, {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail/detail.vue'),
    }, {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
      meta: { title: '����' },
    },
    {
      path: '/artistlist',
      name: 'artistlist',
      component: () => import('./views/Artistlist.vue'),
      meta: { title: '���ڴ���' },
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('./views/Location.vue'),
      meta: { title: '��λ' },
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue'),
      meta: { title: '�ҵĶ���' },
<<<<<<< .mine
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('./views/Activity.vue'),
      meta: { title: '��' },
    },
  ],
=======
    }
  ]






>>>>>>> .theirs
});
