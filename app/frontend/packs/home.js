import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Foot from "../components/foot"
import Counter from "../components/counter"
import store from './store';

Vue.use(TurbolinksAdapter)


document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#content");

  if (el){
    new Vue({
      store,
      el,
      data: {
        day: "第 13 天",
        topic: "Vuex: 狀態管理",
      },
      computed: {
        // 直接當作普通屬性調用，不加括號
        // data中的任何變化會立即重新計算
        // 會有緩存
        count(){
          return store.state.count
        }
      },
      methods: {
        increment(){
          store.commit('increment')
        },
        decrement(){
          store.commit('decrement')
        }
      },
      components: { Counter,Foot }
    })


  }

})