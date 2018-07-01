<template>
  <div>
    <Tab></Tab>
    <TabBar></TabBar>
  </div>

</template>

<script>
  import TabBar from '../../components/TabBar/index'
  import Tab from '../../components/Tab/index'
    export default {
        name: "index",
      components:{
          Tab,
          TabBar,
      }
    }
</script>

<style scoped>

</style>
