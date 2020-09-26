import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'


Vue.use(Vuex)

// 定義一個新的 Vue Store
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 將state設定為參數
    increment: state => state.count++,
    decrement: state => state.count--
  }

})
export default store;