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
import Draggable from 'vuedraggable';

document.addEventListener("turbolinks:load", () => {
  let el = document.querySelector("#column");
  if (el){
    new Vue({
      el,
      data: {
        kanban_id: el.dataset.kanbanid,
        columns: []
      },
      components: { Column, Draggable },
      methods: {
        dragColumn(evt){
          // console.log(evt)
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
        // 打API
        Rails.ajax({
          url: `/kanbans/${this.kanban_id}/columns.json`,
          type: 'GET',
          dataType: 'json',
          success: result => {
            // console.log(this.kanban_id);
            // console.log(result);
            this.columns = result;
          },
          error: error => {
            console.log(error);            
          }
        });
      }
    });
  }
})