<template>
  <div id="app">
    <!-- <p>123</p> -->
    <div class="main-counter">
    <p>Counter元件: Vuex計數器</p>
    <p class="display-count">{{ count }}</p>
    <p>
      <button class="counter-button" @click="increment">+</button>
      <button class="counter-button" @click="decrement">-</button>
    </p>
    </div>
  </div>
</template>

<script>
  import store from '../packs/store';
  export default {              
    store,
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
    }  
  }
</script>

<style scoped>
</style>