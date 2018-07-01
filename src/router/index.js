import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/index'
import Catalog from '../pages/Catalog/index'

Vue.use(VueRouter);

const routes=[{
  path:'/',
  component:Home,
},{
  path:'/catalog',
  component:Catalog
}];



const router = new VueRouter({
  routes
});

export default router;
