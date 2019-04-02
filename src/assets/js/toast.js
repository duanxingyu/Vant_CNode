import Vue from 'vue'
import { Toast  } from 'vant'
Vue.use(Toast);

//加载
const loading = function () {
    return Toast.loading({
      forbidClick:true,
      duration:0,
      message: '正在加载中...'
  });
}

//隐藏加载
const hideLoading = function () {
  return Toast.clear();
}

//文字提示
const tip = function (msg) {
  return Toast({
    duration:2000,
      message: msg
  })
}

//成功提示
const success = function (msg) {
  return Toast.success({
    message:msg,
  })
}


//失败提示
const error = function (msg) {
  return Toast.fail({
    message:msg,
  })
}


export default {
  loading:loading,
  hideLoading:hideLoading,
  tip:tip,
  success:success,
  error:error,
}

