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
      data: {
        day: "第 10 天",
        topic: "元件的溝通 - emit",
      },
      methods: {
        rootMethod(){
          console.log("子元件送出事件，傳給父元件")
        }
      },
      components: { News, Foot }
    })    
  }
})