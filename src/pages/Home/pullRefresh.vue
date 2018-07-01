<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <!--<p>刷新次数: {{ count }}</p>-->
    <Topics ref="topics"></Topics>
  </van-pull-refresh>
</template>

<script>
  import Topics from './topics'
  import {PullRefresh} from 'vant'

  export default {
    name: "pullRefresh",
    components: {
      Topics,
      [PullRefresh.name]: PullRefresh,
    },

    data() {
      return {
        count: 0,
        isLoading: false,

      }
    },

    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.$refs.topics.getData();
          this.isLoading = false;
        }, 500);
      },
    }
  }
</script>

<style scoped>

</style>
