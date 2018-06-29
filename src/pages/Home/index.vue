<template>
  <div>
    <Header></Header>
    <Topics></Topics>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Header from '../../components/Header/header'
  import Tabbar from '../../components/TabBar/index'
  import Topics from './topics'

  export default {
    name: "layout",
    components: {
      Header,
      Topics,
      Tabbar
    }
  }
</script>

<style scoped>

</style>
