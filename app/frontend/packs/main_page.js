import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Foot from '../components/foot'


Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#main-area");

  if (el){
    new Vue({
      el,
      data: () => {
        return {
          title: " 第12屆鐵人賽專案"
        }
      },
      components: { Foot }
    })    
  }
})