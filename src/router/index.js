import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/index'
import Catalog from '../pages/Catalog/index'
import Content from '../pages/Home/content/index'
import Personal from '../pages/personal/index'

Vue.use(VueRouter);

const routes=[{
  path:'/',
  component:Home,
  children:[],
  meta:{
    keepalive:true
  }
},
  {
  path:'/catalog',
  component:Catalog,
    meta:{
    keepalive:true
    }
},
  {
  path:'/content/:id',
  component:Content
},{
  path:'/personal',
  component:Personal
  }];



const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
