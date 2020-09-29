// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import Foot from "../components/foot"
// import store from './store';
// import axios from 'axios-on-rails'


// Vue.use(TurbolinksAdapter)


// document.addEventListener('turbolinks:load', () => {
//   let el = document.querySelector("#content");
//   const cors = 'https://cors-anywhere.herokuapp.com/';
//   const url = 'https://tinyfac.es/api/users';

//   if (el){
//     new Vue({
//       store,
//       el,
//       data: {
//         day: "第 15 天",
//         topic: "Vue instance的 mounting 階段 mounted()： el指定的標籤已經掛載完成",
//         audience: "訂閱這個鐵人賽系列文的觀眾：",
//         subscribers: []
//       },
//       mounted() {
//         var vm = this
//         // axios.get('https://tinyfac.es/api/users')
//         axios.get(`${cors}${url}`)
//             .then((response) => {
//                 vm.subscribers = response.data
//             })
//       },
//       components: { Foot }
//     })
//   }
// })