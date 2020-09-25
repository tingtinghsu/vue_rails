import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Todos from "../components/todos"
import Foot from "../components/foot"
import Sender from "../components/sender"
import Receiver from "../components/receiver"

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#content");

  if (el){
    // 利用Object.defineProperty() 觀察到屬性的值的變動, 實現雙向繫結
    // 引數:1.目標物件, 2. 需要定義的屬性或方法的名字 3.目標屬性所擁有的特性: 在這裡是取值
    Object.defineProperty(Vue.prototype, '$bus', {
      get() {
        return this.$root.bus;
      }
    });
    // 名為eventBus的vue instance
    let eventBus = new Vue({});
    new Vue({
      el,
      data: {
        day: "第 12 天",
        topic: "跨多層的Vue元件資料傳遞: event bus",
        todos: ["買咖啡", "買口罩", "去郵局"],
        bus: eventBus
      },
      methods: {
        // addMoreItem(item){
        //   this.todos.push(item)
        // },
        removeItem(item){
          let itemIndex = this.todos.indexOf(item)
          if (itemIndex >= 0){
            // 從array中刪除項目，並回傳被刪除後的項目
            this.todos.splice(itemIndex, 1)
          }
        }
      },
      // created(){
      //   // 註冊監聽事件
      //   eventBus.$on("additem", item => {
      //     this.todos.push(item)
      //   })
      // },

      components: { Todos, Foot, Sender, Receiver }
    })    
  }
})