import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Head from '../components/head'
import Foot from '../components/foot'


Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  let el = document.querySelector("#hello");

  if (el){
    new Vue({
      el,
      data: () => {
        return {
          message: " 第12屆鐵人賽專案，參賽確定！"
        }
      },
      components: { Head, Foot }
    })    
  }
})