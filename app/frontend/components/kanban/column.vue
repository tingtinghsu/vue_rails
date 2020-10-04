<template>
  <div class="column">
    <div class="column-name">{{ column.name }}</div>
    <div class="ticket-list">
      <draggable v-model="tickets" ghost-class="ghost" group="column" @change="dragTicket">
        <Ticket v-for="ticket in tickets" :ticket="ticket" :key="ticket.id"></Ticket>
      </draggable>
    </div>
  </div>
</template>

<script>
  import Rails from '@rails/ujs';
  import Ticket from "components/kanban/ticket"
  import draggable from 'vuedraggable';

  export default {              
    name: 'Column',
    // 讓用元件的父層，餵資料給子元件    
    props: ["column"],
    components: { Ticket, draggable },    
    // 每個元件都有自己的狀態和資料，所以data需要給一個能return值回去的function 
    data: function () {
      return {
        // `v-for`就可以改成用tickets跑迴圈
        tickets: this.column.tickets   
      }
    },
    methods: {
      dragTicket(evt){
        console.log(evt)
        let ticketEvt = evt.added || evt.moved
        if(ticketEvt){
          let ticket_id = ticketEvt.element.id;
          let data = new FormData();
          data.append("ticket[column_id]", this.column.id)                  
          data.append("ticket[position]", ticketEvt.newIndex + 1)

          Rails.ajax({
            url: `/kanbans/${this.column.kanban_id}/tickets/${ticket_id}/drag`,
            type: 'PUT',
            data,
            dataType: 'json',
            success: result => {
              console.log(result);
            },
            error: error => {
              console.log(error)
            }
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .column{
    @apply .bg-teal-100 .mx-2 .my-2 .w-64 .px-3 .py-2 .rounded-md;

    .column-name{
      @apply .font-thin .m-2  .border-dashed .border-gray-600;
    }

    .ticket-list{
      .ghost {
        @apply .border .border-teal-300 .border-dashed;
      }
    }
  }
</style>