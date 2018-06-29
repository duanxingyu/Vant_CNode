<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home">首页</van-tabbar-item>
    <van-tabbar-item icon="more-o" dot>分类</van-tabbar-item>
    <van-tabbar-item icon="chat" info="5">消息</van-tabbar-item>
    <van-tabbar-item icon="contact" info="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant'

  export default {
    name: "index",
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data(){
      return{
        active:0
      }
    }
  }
</script>

<style scoped>

</style>
