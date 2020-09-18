import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import News from "../components/news"
import Foot from "../components/foot"


Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#content");

  if (el){
    new Vue({
      el,
      components: { News, Foot }
    })    
  }
})