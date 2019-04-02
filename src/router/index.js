import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/index'
import Catalog from '../pages/Catalog/index'
import Content from '../pages/Home/content/index'

Vue.use(VueRouter);

const routes=[{
  path:'/',
  component:Home,
  children:[]
},
  {
  path:'/catalog',
  component:Catalog
},
  {
  path:'/content/:id',
  component:Content
}];



const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
