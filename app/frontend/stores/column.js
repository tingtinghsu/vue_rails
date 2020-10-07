import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import Rails from '@rails/ujs';

Vue.use(Vuex);

// 定義一個新的 Vue Store
export default new Vuex.Store({
  state: {
    // columns, tickets：預設空陣列
    columns: []
  },
  getters:{
    columns: state => state.columns
  },
  mutations: {
    // 將state設定為參數
    // 請mutation來更新state
    UPDATE_COLUMNS(state, columns){
      state.columns = columns;
    }
  },
  // 在外面的地方呼叫做事情
  actions: {
    fetchColumn({ commit }, kanbanid){
      // console.log("kanbanid:" + kanbanid);
      Rails.ajax({
        url: `/kanbans/${kanbanid}/columns.json`,
        // url: `/kanbans/2/columns.json`,
        type: 'GET',
        dataType: 'json',
        success: result => {
          commit("UPDATE_COLUMNS", result);
          console.log(result);
          // this.columns = result;
        },
        error: error => {
          console.log(error);            
        }
      });    
    }
  }
});
