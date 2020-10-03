<template>
  <div class="column">
    <div class="column-name">{{ column.name }}</div>
    <div class="ticket-list">
      <Ticket v-for="ticket in column.tickets" :ticket="ticket" :key="ticket.id"></Ticket>
    </div>
  </div>
</template>

<script>
  // 讓用元件的父層，餵資料給子元件
  import Ticket from "components/kanban/ticket"  
  export default {              
    name: 'Column',
    props: ["column"],
    components: { Ticket },    
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
    @apply .bg-teal-100 .mx-2 .my-2 .w-64 .px-3 .py-2 .rounded-md;

    .column-name{
      @apply .font-thin .m-2  .border-dashed .border-gray-600;
    }

    // .ticket-list{

    // }
  }
</style>