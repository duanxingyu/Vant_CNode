<template>
  <div style="margin: 60px 10px 30px 10px;" ref="topics">
    <div>
      <h2 v-text="contentList.title"></h2>
      <div style="text-align: center">
        作者：<span class="author" v-for="i in contentList">{{i.loginname}}</span><br/>
        <span class="create_time">发表于：{{utils.getTime(contentList.create_at)}}</span>
      </div>
      <div class="text item">
        <article id="article" class="markdown-body" v-html="contentList.content"></article>
      </div>
    </div>
  </div>

</template>

<script>
  import router from "../../../router";
  export default {
    name: "contents",
    props:{
      contentList:{
        type:Object,
        required:true
      }
    },
    components:{
    },
    data() {
      return {
        // id: this.$route.params.id,
        // data: this.props.contentList,
        // loginname: '',
      }
    },
    created() {
      // this.getData();
      // console.log(this.props.contentList)
    },
    methods: {
      // getData() {
      //   console.log(this.id)
      //   let url = this.HOST + '/topic/';
      //   this.$axios.get(url + this.id).then(res => {
      //     this.data = res.data.data;
      //     console.log(res.data.data)
      //   }).catch(error => {
      //     console.log(error)
      //   })
      // }
    }
  }
</script>

<style>
  .markdown-body {
    box-sizing: border-box;
    width: 100%;
    max-width: 261.333vw;
    margin: 0 auto;
    padding: 5.333vw;
    font-size: 3.733vw;
    content: "viewport-units-buggyfill; max-width: 261.333vw; padding: 5.333vw; font-size: 3.733vw";
  }

  .markdown-body h3, h2 {
    color: #3c3c3c;
    font-weight: 700;
  }

  .markdown-body blockquote, .markdown-body dl, .markdown-body ol, .markdown-body p, .markdown-body pre, .markdown-body table, .markdown-body ul {
    margin-top: 0;
    margin-bottom: 4.267vw;
    content: "viewport-units-buggyfill; margin-bottom: 4.267vw";
  }

  .markdown-body img {
    max-width: 100%;
    /*-webkit-box-sizing: content-box;*/
    /*box-sizing: content-box;*/
    /*background-color: #fff;*/
  }

  .markdown-text ul {
    list-style: none;
  }

  .markdown-text pre, .reply_content pre {
    padding: 4.267vw;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: .8vw;
  }

  .markdown-text a {
    color: #26a2ff;
    text-decoration: none;
  }
</style>
