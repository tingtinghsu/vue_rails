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
        day: "第 9 天",
        topic: "元件的溝通 - props (2)",
        name: ''
      },
      methods: {
        thankyou(){
          alert( `${this.name}，謝謝你收看Vue x Rails 鐵人賽系列!`)
        }
      },
      components: { News, Foot }
    })    
  }
})