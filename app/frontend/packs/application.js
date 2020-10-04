require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import 'scripts'
import 'styles'

import Vue from "vue/dist/vue.esm";
import Column from "components/kanban/column"
import Rails from '@rails/ujs'
import draggable from 'vuedraggable';
import store from 'stores/column';
import { mapGetters, mapActions } from 'vuex';

document.addEventListener("turbolinks:load", () => {
  let el = document.querySelector("#column");
  if (el){
    window.$store = store;    
    new Vue({
      el,
      store,
      // data: {
        // kanban_id: el.dataset.kanbanid,
        // 把資料放在store裡
        // columns: []
      // },
      computed: {
        // 接getters，唯讀，觀察data屬性
        ...mapGetters(["columns"])
      },
      components: { Column, draggable },
      methods: {
        ...mapActions(["fetchColumn"]),        
        dragColumn(evt){
          console.log(evt)
          // console.log(evt.moved)

          // new一個FormData()物件叫做formData
          let data = new FormData();
          // acts as list 的 position：從1開始算，移動到新的位置       
          data.append("column[position]", evt.moved.newIndex + 1)
          console.log(data)

          //  /kanbans/2/columns/1/drag(.:format)`
          Rails.ajax({
            url: `/kanbans/${this.kanban_id}/columns/${this.columns[evt.moved.newIndex].id}/drag`,
            type: 'PUT',
            data,
            dataType: 'json',
            success: result => {
              console.log(result);
            },
            error: error => {
              console.log(error);            
            }
          });
        }
      },
      beforeMount(){
        // 呼叫資料
        this.fetchColumn();
        // 搬到Vuex store的action去
        // 打API
        // Rails.ajax({
        //   url: `/kanbans/${this.kanban_id}/columns.json`,
        //   type: 'GET',
        //   dataType: 'json',
        //   success: result => {
        //     // console.log(this.kanban_id);
        //     // console.log(result);
        //     this.columns = result;
        //   },
        //   error: error => {
        //     console.log(error);            
        //   }
        // });
      }
    });
  }
})