import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/Home';
import works from '@/components/works';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:page',
      name: 'Home',
      component: Home
    },
    {
      path: '/place/:placeid/work/:workid',
      name: 'work',
      component: works
    },
  ]
})