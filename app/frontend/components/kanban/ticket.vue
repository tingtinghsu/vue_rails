<template>
  <div class="ticket">
    {{ ticket.name }}
    <div>
      <button class="edit-btn" @click="editTicket=true"><i class="fas fa-edit text-gray-400"></i></button>
      <button class="delete-btn" @click="deleteTicket"><i class="fas fa-trash text-gray-400"></i></button>
      <div v-if="editTicket" class="edit-area">
        <i class="far fa-window-close edit-cancel" @click="cancelUpdate"></i> 
        <textarea type="text" class="edit-input" v-model="ticket.name"></textarea>
        <button class="update-ticket-btn" @click="updateTicket">更新</button>
      </div>        
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
        column: this.ticket.column,
        editTicket: false
      }
    },    
    methods: {
      cancelUpdate(evt){
        evt.preventDefault();
        this.editTicket = false;
      },
      updateTicket(evt){
        evt.preventDefault();
        this.$store.dispatch("updateTicket", {id: this.ticket.id, name: this.ticket.name})
        this.editTicket = false;
      },
      deleteTicket(evt){
        event.preventDefault();
        if (confirm(`確定刪除"${this.ticket.name}" 嗎?`)){
          this.$store.dispatch("deleteTicket", {ticket_id: this.ticket.id, column_id: this.ticket.column_id})                
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
    .edit-area {
      @apply .bg-orange-200 .rounded-md .px-2 .py-2;
    }
    .edit-cancel{
      @apply .mb-2 .text-gray-800;
    }
    .edit-input{
      @apply .w-full .px-2 .py-1 .rounded-md .bg-yellow-100;
    }
    .update-ticket-btn{
      @apply .mx-1 .my-2 .px-2 .py-1 .bg-red-300 .rounded-md .text-sm .text-gray-800 .font-thin;
      &:hover {
        @apply .bg-red-200;
      }
    }
  }
</style>