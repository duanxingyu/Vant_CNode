import api from  './api'
import axios from 'axios'
import router from '../../router/index'
import {tip} from './toast'


export const getTopic = (obj={})=>{
  return axios({
    url:api.topics,
    method:'get',
    data: {
      limit: obj.limit,
      page: obj.page
    }
  })
}
