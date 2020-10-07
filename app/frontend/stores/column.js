import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import Rails from '@rails/ujs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: []
  },
  getters:{
    columns: state => state.columns
  },
  mutations: {
    UPDATE_COLUMNS(state, columns){
      state.columns = columns;
    }
  },
  actions: {
    dragColumn({ commit, state }, evt) {
        let data = new FormData();
        let el = document.querySelector("#column");           
        data.append("column[position]", evt.moved.newIndex + 1)
        console.log(evt)
        // console.log(`/kanbans/${el.dataset.kanbanid}/columns/${state.columns[evt.moved.newIndex].id}/drag`)
        Rails.ajax({
          url: `/kanbans/${el.dataset.kanbanid}/columns/${state.columns[evt.moved.newIndex].id}/drag`,
          // url: `/kanbans/2/columns/${state.columns[evt.moved.newIndex].id}/drag`,
          type: 'PUT',
          data,
          dataType: 'json'
          // success: result => {
          //   // commit("UPDATE_COLUMNS", result);            
          //   console.log(result);
          // },
          // error: error => {
          //   // console.log(error);            
          // }
        });
      },
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
