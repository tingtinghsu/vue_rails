import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import Foot from "../components/foot"
import Counter from "../components/counter"

Vue.use(TurbolinksAdapter)
Vue.use(Vuex)

document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#content");

  if (el){

    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
      }
    })

    new Vue({
      el,
      data: {
        day: "第 13 天",
        topic: "Vuex: 狀態管理",
      },
      computed: {
        // 直接当做普通属性调用不加括号
        // 任何data中数据变化立即重新计算
        // 计算属性会缓存
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