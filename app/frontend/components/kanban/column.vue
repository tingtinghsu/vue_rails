<template>
  <div class="column">
    <div class="column-name">{{ column.name }}</div>
    <div class="ticket-list">
      <draggable v-model="tickets" ghost-class="ghost" group="column" @change="dragTicket">
        <Ticket v-for="ticket in tickets" :ticket="ticket" :key="ticket.id"></Ticket>
      </draggable>
      <div class="ticket-input">
        <button v-if="!addTicket" class="create-ticket-btn" @click="addTicket=true"><i class="fas fa-plus text-teal-100"></i></button> 

        <input v-if="addTicket" class="ticket-name" v-model="ticketname">       
        <button v-if="addTicket" class="create-ticket-btn" @click="createTicket">建立</button>
        <button v-if="addTicket" class="cancel-ticket-btn" @click="addTicket=false">取消</button>
      </div>
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
        tickets: this.column.tickets,   
        ticketname: '',
        addTicket: false
      }
    },
    methods: {
      createTicket(evt){
        evt.preventDefault();
        console.log(this.ticketname)
        let data = new FormData();
        data.append("ticket[column_id]", this.column.id);
        data.append("ticket[name]", this.ticketname);
        Rails.ajax({
            url: `/kanbans/${this.column.kanban_id}/tickets`,
            // url: `/kanbans/2/tickets`,
            type: 'POST',
            data,
            dataType: 'json',
            success: response => {
              console.log(response)
              this.tickets.push(response);
              // 清空輸入框
              this.ticketname = "";              
            },
            error: err => {
              console.log(err)
            }
          });
          this.addTicket = false
      },
      removeTicketDemo(evt, ticket){
        evt.preventDefault();        
        console.log(evt)
        console.log(ticket)
      },
      dragTicket(evt){
        console.log(evt)
        let ticketEvt = evt.added || evt.moved
        if(ticketEvt){
          let ticket_id = ticketEvt.element.id;
          let data = new FormData();
          data.append("ticket[ticket_id]", this.ticket.id)                  
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
      .ticket-input {
          @apply .mt-2;
        .ticket-name {
                  @apply .w-full .px-2 .py-1 .rounded-md .bg-yellow-100;
          &:focus {
            @apply .outline-none;
          }
        }
        .create-ticket-btn {
          @apply .mx-1 .my-2 .px-2 .py-1 .bg-teal-200 .rounded-md .text-sm .text-gray-800 .font-thin;
          &:hover {
            @apply .bg-teal-300;
          }
        }
        .cancel-ticket-btn {
          @apply .mx-1 .my-2 .px-2 .py-1 .bg-gray-200 .rounded-md .text-sm .text-gray-800 .font-thin;
          &:hover {
            @apply .bg-gray-300;
          }
        }
      }
    }
  }
</style>