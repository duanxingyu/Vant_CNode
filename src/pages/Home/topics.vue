<template>
  <div>
    <div class="pannel-container" v-for="i in list">
      <div class='pannel-header'>
        <img :src="i.author.avatar_url" width="40" height="40"/>
        <div>{{i.author.loginname}}</div>
      </div>
      <div class="pannel-body">
        <span>{{i.title}}</span>
      </div>
      <div class="pannel-footer">
        <div class="visit">
            <van-icon name="password-view"></van-icon>
            <span>&nbsp;{{i.visit_count}}</span>
        </div>
        <div class="comment">
          <van-icon name="pending-evaluate"></van-icon>
          <span>&nbsp;{{i.visit_count}}</span>
        </div>
        <div class="times">
          <van-icon name="clock"></van-icon>
          <span>&nbsp;{{utils.getTime(i.create_at)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Panel, Button,Icon} from 'vant'

  export default {
    name: "topics",
    components: {
      [Panel.name]: Panel,
      [Button.name]: Button,
      [Icon.name]:Icon
    },
    data() {
      return {
        list: {}
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        var url = this.HOST;
        this.$axios.get(url + '/topics').then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
        }).catch(error => {
          console.log(error);
        })
      }
    }

  };
</script>

<style scoped>
  *{
    background: #ffffff;
  }

  .pannel-container:last-child {
    margin-bottom: 60px;
  }
  .pannel-container{
    /*border:1px solid #3c3c3c;*/
    box-shadow: 1px 1px 5px #e5e5e5;
    margin:20px 0px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 6px;
  }

  .pannel-header {
    /*border-bottom: 1px solid #f1f1f1;*/
    height: 60px;
    position: relative;
    /*border-bottom: 1px solid #e5e5e5;*/
  }
  .pannel-header img{
    border-radius: 30px;
    margin: 10px 10px;

  }
  .pannel-header div{
    position: absolute;
    top:50%;
    left:15%;
    margin-top:-12px;
  }
  .pannel-body {
    height: 100px;
  }
  .pannel-body span{
    display: block;
    margin:20px 30px;
  }
  .pannel-footer{
    border-top: 1px solid #e5e5e5;
    height: 50px;
    margin:0px 15px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .pannel-footer .visit,.pannel-footer .comment,.pannel-footer .times{
    /*height: 50px;*/
    display:flex;
    justify-content:center;
    align-items:center;
    width: 33.3%;
    border-right: 1px solid #e5e5e5;
  }
  .pannel-footer .times{
    border:none;
  }
  .pannel-footer> .visit>span,.pannel-footer .comment>span,.pannel-footer .times>span{
    font-size: 14px;
  }
</style>
