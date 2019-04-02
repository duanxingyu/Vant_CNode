<template>
  <div  >
    <div class="pannel-container animated  flipInX"  ref="topicList" v-for="i in list">
      <div class='pannel-header'>
        <img :src="i.author.avatar_url" width="40" height="40"/>
        <div class="pannel-header_username">{{i.author.loginname}}</div>
        <div class="panel-header_tab">
          <div v-if="i.tab='ask'">
            <van-tag type="primary" >{{utils.getTags(i.tab)}}</van-tag>
          </div>


        </div>
      </div>
      <router-link :to="'/content/'+i.id">
        <div class="pannel-body">
          <span>{{i.title}}</span>
        </div>
      </router-link>
      <div class="pannel-footer">
        <div class="visit">
          <van-icon name="eye-o" size="20px"></van-icon>
          <span>&nbsp;{{i.visit_count}}</span>
        </div>
        <div class="comment">
          <van-icon name="chat-o" size="20px"></van-icon>
          <span>&nbsp;{{i.reply_count}}</span>
        </div>
        <div class="times">
          <van-icon name="clock-o" size="20px"></van-icon>
          <span>&nbsp;{{utils.getTime(i.create_at)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Icon,Tag,Button} from 'vant'
  // window.onload=function () {
  //    function sort() {
  //       var fruits = ["Banana", "Orange", "Apple", "Mango"];
  //       var data=fruits.unshift(0)
  //       console.log(data)
  //   }
  //   return sort()
  // };
  export default {
    name: "ask",
    components: {
      [Icon.name]:Icon,
      [Tag.name]:Tag,
      [Button.name]:  Button
    },
    data() {
      return {
        list: [],
        // tabs:[],
        limit:10,
        page:1,
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        var url = this.HOST;
        this.$axios.get(url + '/topics',{
          params:{
            limit:this.limit,
            page:this.page,
            tab:'ask'
          }
        }).then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
          var data=res.data.data
          // let arr=[];
          // for(let i = 0;i<data.length;i++){
          //   arr.push(data[i]['tab']);
          //
          // }
          this.page++;
          this.limit+=10;
        }).catch(error => {
          console.log(error);
        })

      },
    }

  };
</script>

<style scoped>
  .pannel-container:first-child {
    /*margin-top: 46px;*/
  }

  .pannel-container:last-child {
    margin-bottom: 60px;
  }

  .pannel-container {
    background: #ffffff;
    /*border:1px solid #3c3c3c;*/
    box-shadow: 1px 1px 5px #e5e5e5;
    margin: 20px 0px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 6px;
  }
  .pannel-container a {
    color: #3c3c3c;
  }

  .pannel-header {
    /*border-bottom: 1px solid #f1f1f1;*/
    height: 60px;
    /*border-bottom: 1px solid #e5e5e5;*/
    position: relative;
  }

  .panel-header_tab {
    position: absolute;
    width:50px;
    top: 50%;
    left: 50%;
    margin: -15px 120px;
  }

  .pannel-header img {
    border-radius: 30px;
    margin: 10px 10px;

  }

  .pannel-header_username {
    /*border: 1px solid #e5e5e5;*/
    line-height: 60px;
    margin-top: -65px;
    margin-left: 60px;
  }

  .pannel-body {
    height: 100px;
  }

  .pannel-body span {
    display: block;
    margin: 20px 30px;
  }

  .pannel-footer {
    border-top: 1px solid #e5e5e5;
    height: 40px;
    margin: 0px 15px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .pannel-footer .visit, .pannel-footer .comment, .pannel-footer .times {
    /*height: 50px;*/
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    border-right: 1px solid #e5e5e5;
  }

  .pannel-footer .times {
    border: none;
  }

  .pannel-footer > .visit > span, .pannel-footer .comment > span, .pannel-footer .times > span {
    font-size: 14px;
  }
  .visit:active,.comment:active,.times:active{
    background: #ccc;
  }
</style>
