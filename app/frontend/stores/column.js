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
    },

    DESTROY_TICKET(state, {id, column_id}){      
      let column_index = state.columns.findIndex(col => col.id == column_id)
      let ticket_index = state.columns[column_index].tickets.findIndex(item => item.id == id)

      state.columns[column_index].tickets.splice(ticket_index, 1)
    },

    CHANGE_TICKET(state, ticket){
      let column_index = state.columns.findIndex(column => column.id == ticket.column_id)
      let ticket_index = state.columns[column_index].tickets.findIndex(item => item.id == ticket.id)

      state.columns[column_index].tickets.splice(ticket_index, 1, ticket)
    }
  },
  actions: {
    updateTicket({ commit }, {id, name}){
      let data = new FormData();
      let el = document.querySelector("#column");        
      data.append("ticket[name]", name);
      Rails.ajax({
        url: `/kanbans/${el.dataset.kanbanid}/tickets/${id}`,
        type: 'PUT',
        data,
        dataType: 'json',
        success: result => {
          // commit("CHANGE_TICKET", result);
          console.log(result);
        },
        error: error => {
          console.log(error);            
        }
      });      
    },
    deleteTicket({ commit }, {id, column_id}){
      console.log("vuex ") 
      console.log(id)
      console.log("vuex column")         
      console.log(column_id)  

      let el = document.querySelector("#column");   

      Rails.ajax({
        url: `/kanbans/${el.dataset.kanbanid}/tickets/${id}`,
        type: 'DELETE',
        dataType: 'json',
        success: result => {
          console.log("ajax response")
          commit("DESTROY_TICKET", {id, column_id});
        
        },
        error: error => {
          console.log(error)
        }
      });
    },
    dragColumn({ commit, state }, evt) {
        let data = new FormData();
        let el = document.querySelector("#column");           
        data.append("column[position]", evt.moved.newIndex + 1)
        // console.log(evt)
        Rails.ajax({
          url: `/kanbans/${el.dataset.kanbanid}/columns/${state.columns[evt.moved.newIndex].id}/drag`,
          type: 'PUT',
          data,
          dataType: 'json'
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
