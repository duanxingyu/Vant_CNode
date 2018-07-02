<template>
  <div>
    <van-nav-bar  fixed="fixed"
      title="标题"
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
    components: {
      [NavBar.name] : NavBar,
    },
    data(){
      return{
        fixid:true,
      }

    },


    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {

      }
    }
  }
</script>

<style scoped>

</style>
