require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import 'scripts'
import 'styles'

import Vue from "vue/dist/vue.esm";
import Column from "components/kanban/column";
import draggable from 'vuedraggable';
import store from 'stores/column';
import { mapActions } from 'vuex';

document.addEventListener("turbolinks:load", () => {
  let el = document.querySelector("#column");
  if (el){   
    new Vue({
      el,
      store,
      // data: {
        // kanban_id: el.dataset.kanbanid,
        // 把資料放在store裡
        // columns: []
      // },
      computed: {
        // 接getters，唯讀，僅能觀察data屬性
        // ...mapGetters(["columns"])
        columns: {
          get(){
            return this.$store.state.columns
          },

          set(val){
            this.$store.commit('UPDATE_COLUMNS', val)
          }
        }
      },
      components: { Column, draggable },
      methods: {
        ...mapActions(["fetchColumn", "dragColumn"])
      },
      beforeMount(){
        // 呼叫資料      
        this.fetchColumn(el.dataset.kanbanid);
      }
    });
  }
})