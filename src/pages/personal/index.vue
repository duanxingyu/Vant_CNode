<template>
  <div class="personal-container">
    <div class="personal-avatar-bg">
      <div class="img-box">
        <img class="avatar-img" :src="imgUrl" alt="">
      </div>
    </div>
    <TabBar></TabBar>
  </div>


</template>

<script>
  import TabBar from '../../components/TabBar/index'
  import avatarDefault from '../../assets/images/avatar-default.jpg'
    export default {
        name: "personal",
      components:{
          TabBar,
      },
      data(){
          return{
            imgUrl: avatarDefault,
          }
      }
    }
</script>

<style scoped>
  .personal-avatar-bg{
    background-color: aqua;
    width: 100%;
    height: 350px;
    overflow: hidden;
  }
  .img-box{
    width: 80px;
    height: 80px;
    margin: 50px auto;
  }
  .avatar-img{
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
