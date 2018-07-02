<template>
  <div >
    <div  v-html="list.content"></div>

  </div>
</template>

<script>
  export default {
    name: "contents",
    data(){
      return{
        id:this.$route.params.id,
        list:{}
      }
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        let url = this.HOST + '/topic/';
        this.$axios.get(url+this.id).then(res=>{
          console.log(res.data.data)
          this.list=res.data.data;
        }).catch(error=>{
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
