/**
 * Created by apple on 17/6/22.
 */

//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义初始化变量
const state = {
  good_id:"",
  name:"",
  price:"",
  url:"",
  goods_info:'',
  address:''
}

//定义动作 事件处理方法
const mutations = {
  get_goods_info(state,status){
    state.goods_info = status;
  },
  get_address(state,status){
    state.address=status[0];
  }
}

//对外的事件方法
const actions = {
  get_goods_info:({commit},status)=>commit('get_goods_info',status),
  get_address:({commit},status)=>commit('get_address',status)
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
