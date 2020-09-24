import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Todos from "../components/todos"
import Foot from "../components/foot"


Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#content");

  if (el){
    new Vue({
      el,
      data: {
        day: "第 11 天",
        topic: "元件的由內而外傳遞事件 - emit",
        todos: ["買咖啡", "買口罩", "去郵局"],
      },
      methods: {
        addMoreItem(value){
          this.todos.push(value)
        }
      },
      components: { Todos, Foot }
    })    
  }
})