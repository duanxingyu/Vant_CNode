<template>
  <van-tabs v-model="active">
    <van-tab  title="精华"  >
      <Good></Good>
    </van-tab>
    <van-tab  title="问答"  >
      <Ask></Ask>
    </van-tab>
    <van-tab  title="分享"  >
      <Share></Share>
    </van-tab>
    <van-tab  title="招聘"  >
      <Job></Job>
    </van-tab>
    <van-tab  title="测试"  >
      <Dev></Dev>
    </van-tab>

  </van-tabs>
</template>

<script>
  import {Tabs,Tab} from 'vant'
  import Share from '../../pages/Catalog/share'
  import Good from '../../pages/Catalog/good'
  import Ask from '../../pages/Catalog/ask'
  import Job from '../../pages/Catalog/job'
  import Dev from '../../pages/Catalog/dev'
  export default {
    name: "index",
    components:{
      [Tabs.name]:Tabs,
      [Tab.name]:Tab,
      Good,
      Share,
      Ask,
      Job,
      Dev
    },
    data() {
      return {
        active: 0,
        lists:[]
      };
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        let url=this.HOST+'/topics';
        this.$axios.get(url).then(res=>{
          console.log(res.data);
          this.lists=res.data.data;
        }).catch(error=>{
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>

</style>
