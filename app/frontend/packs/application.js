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

document.addEventListener("turbolinks:load", () => {
  let el = document.querySelector("#column");
  if (el){
    new Vue({
      el,
      data: {
        // columns: JSON.parse(el.dataset.columns)
        kanban_id: el.dataset.kanbanid,
        columns: []
      },
      components: { Column },
      methods: {

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