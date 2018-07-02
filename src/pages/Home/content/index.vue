<template>
  <div>
    <NavBar></NavBar>
    <Content></Content>
  </div>

</template>

<script>
  import NavBar from './NavBar'
  import Content from './content'

  export default {
    name: "index",
    components: {
      NavBar,
      Content
    }
  }
</script>

<style scoped>

</style>
