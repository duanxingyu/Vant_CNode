//工具类配置
export default {
  getTime (str) {
    let now = new Date().getTime()
    let oldTime = new Date(str).getTime()
    let difference = now - oldTime
    let result = ''
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    let month = day * 30
    let year = month * 12
    let _year = difference / year
    let _month = difference / month
    let _week = difference / (7 * day)
    let _day = difference / day
    let _hour = difference / hour
    let _min = difference / minute

    if (_year >= 1) {
      result =  ~~(_year) + ' 年前'
    } else if (_month >= 1) {
      result =  ~~(_month) + ' 个月前'
    } else if (_week >= 1) {
      result =  ~~(_week) + ' 周前'
    } else if (_day >= 1) {
      result =  ~~(_day) + ' 天前'
    } else if (_hour >= 1) {
      result =  ~~(_hour) + ' 个小时前'
    } else if (_min >= 1) {
      result =  ~~(_min) + ' 分钟前'
    } else {
      result = '刚刚'
    }
    return result
  },
  getTop(val){
    let res=''
    if (val===true){
      res='置顶'
    }
    return res;
  },
  getGood(val){
    let res='';
    if(val===true){
      res='精华'
    }
    return res;
  },
  getTags(val){
    let res='';
    if(val==='ask'){
      res='问答';
    }else if (val === 'share') {
      res='分享';
    }else if (val === 'good') {
      res='精华'
    }else if(val==='job'){
      res='招聘'
    }else{
      res='测试'
    }
    return res;
  }
}
