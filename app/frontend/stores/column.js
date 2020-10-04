import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定義一個新的 Vue Store
export default new Vuex.Store({
  state: {
    // 預設空陣列
    columns: []
  },
  getters:{
    columns: state => state.columns
  },
  mutations: {
    // 將state設定為參數
    UPDATE_LISTS(state, columns){
      state.columns = columns;
    }
  },
  actons: {
  }
});