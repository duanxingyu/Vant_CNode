<template>
  <div>
    <van-nav-bar  fixed
      :title="navbar.title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>

</template>

<script>
  import {NavBar} from 'vant'

  export default {
    name: "NavBar",
    props:{
      navbar:{
        type:Object,
        required:true,
      }
    },
    components: {
      [NavBar.name] : NavBar,
    },
    data(){
      return{

      }

    },


    methods: {

      onClickLeft() {
        this.$router.go(-1);

      },
      onClickRight() {

      }
    }
  }
</script>

<style scoped>

</style>
