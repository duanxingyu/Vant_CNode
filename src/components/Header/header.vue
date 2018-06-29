<template>
  <div>
    <van-nav-bar
      title="CNodejs中文社区">
      <van-icon name="search" slot="right"  @click="onClickRight"/>
    </van-nav-bar>
  </div>
</template>

<script>
  import {NavBar,Icon,Toast} from 'vant'

  export default {
    name: "headers",
    components:{
      [NavBar.name]:NavBar,
      [Icon.name]:Icon,
      [Toast.name]:Toast
    },
    methods: {
      onClickRight() {
        Toast.fail('功能暂未实现');
      }
    }
  }
</script>

<style scoped>

</style>
