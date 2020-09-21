<template>
  <div class="news">
    <h1>本日重點：{{ message }}</h1>
    <i>觀眾: {{ nickname }}</i>
  </div>
</template>

<script>
  export default { 
    props: ['nickname'],    
    data: function () {
      return {
        message: "由外層到內層元件的單向資料流：設定元件屬性props，傳入變數"
      }
    }
  }
</script>

<style scoped>
  .news{
    padding-left: 20px;
    background-color: rgb(248, 225, 194);
  }
  h1 {
    color: brown;
  }
</style>