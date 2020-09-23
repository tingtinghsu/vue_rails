<template>
  <div class="news">
    <h1>本日重點：{{ message }}</h1>
    <button class="news-btn" @click="clickNews">按我，送出Emit</button>
  </div>
</template>

<script>
  export default {   
    data: function () {
      return {
        message: "由內層到外層元件的單向資料流：在子元件利用$emit('自訂事件名稱')送出事件給父元件"
      }
    },
    methods: {
      clickNews(){
        this.$emit('news');
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
  .news-btn {
    @apply .bg-red-300 .px-2 .py-1 .rounded-md .text-sm 
  }
</style>