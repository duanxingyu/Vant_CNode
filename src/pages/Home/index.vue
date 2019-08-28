<template>
  <div>
    <Header></Header>
    <PullRefresh ></PullRefresh>
    <!--<Topics></Topics>-->
    <!--<Tabbar></Tabbar>-->
  </div>
</template>

<script>
  import Header from '../../components/Header/header'
  import Tabbar from '../../components/TabBar/index'
  import Topics from './topics'
  import PullRefresh from './pullRefresh'


  export default {
    name: "layout",
    components: {
      Header,
      Topics,
      PullRefresh,
      Tabbar
    },
    data(){
      return{

      }
    },
    created(){

    }
  }
</script>

<style scoped>

</style>
