<template>
  <div>
    <NavBar :navbar = "contentList"></NavBar>
    <Content :contentList="contentList"></Content>
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
    },
    data(){
      return{
        id: this.$route.params.id,
        contentList: {},
        loginname: '',
      }
    },
    created() {
      this.getData();
    },
    methods:{
      getData() {
        let url = this.HOST + '/topic/';
        this.$axios.get(url + this.id).then(res => {
          this.contentList = res.data.data;
          console.log(res.data.data)

        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
