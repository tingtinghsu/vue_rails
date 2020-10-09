<template>
  <div class="ticket">
    {{ ticket.name }}
    <div>
      <button class="delete-btn" @click="removeTicketDemo(ticket)"><i class="fas fa-trash text-gray-400"></i></button>
    </div>
  </div>
</template>

<script>
  import Rails from '@rails/ujs';
  export default {              
    name: 'Ticket',
    props: ["ticket"],
    data: function () {
      return {
        column: this.ticket.column
      }
    },    
    methods: {
      deleteTicket(evt){
        event.preventDefault();
          console.log(this.ticket.id)
          console.log("column id")                     
          console.log(this.ticket.column_id)  
          console.log("kanban id")  
          console.log(column.dataset.kanbanid) 
          console.log("html")             
          console.log(column)  
          // console.log(this.ticket.column.kanban_id)  
          // let data = new FormData();

        if (confirm(`確定刪除"${this.ticket.name}" 嗎?`)){
          console.log("remove: ") 
          // Rails.ajax({
          //   url: `/kanbans/${column.dataset.kanbanid}/tickets/${this.ticket.id}`,
          //   // url: `/kanbans/2/tickets/${this.ticket.id}`,
          //   type: 'DELETE',
          //   // data,
          //   dataType: 'json',
          //   success: result => {
          //     let column_id = this.ticket.column_id;

          //     console.log(result);
          //   },
          //   error: error => {
          //     console.log(error)
          //   }
          // });          
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ticket {
    @apply .bg-yellow-100 .mb-2 .rounded-md .px-2 .py-2 .font-thin .text-sm .shadow-lg;
    .delete-btn {
      border: 0;
    }
  }
</style>