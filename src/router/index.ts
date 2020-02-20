import Vue from 'vue';
import VueRouter from 'vue-router';
import Alpha from '../views/Alpha.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Alpha',
    component: Alpha,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
