<template>
  <div id="app">
    <!--<van-cell-group class="item-list">-->
      <!--<van-cell is-link icon="points" title="我的积分" />-->
      <!--<van-cell is-link icon="gift" title="我收到的礼物" />-->
    <!--</van-cell-group>-->

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant';

export default {
  name:'app',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
