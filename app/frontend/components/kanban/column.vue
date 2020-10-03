<template>
  <div class="column">
    <div class="column-name">{{ column.name }}</div>
  </div>
</template>

<script>
  // 讓用元件的父層，餵資料給子元件
  export default {              
    name: 'Column',
    props: ["column"]
    // 每個元件都有自己的狀態和資料，所以data需要給一個能return值回去的function, 
    // data: function () {
    //   return {
    //     column: this.column   
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  .column{
    @apply .bg-teal-100 .mx-2 .w-64 .rounded;

    .column-name{
      @apply .px-3 .py-2 .font-thin;
    }
  }
</style>