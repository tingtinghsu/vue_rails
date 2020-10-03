<template>
  <div class="ticket">
    {{ ticket.name }}
  </div>
</template>

<script>
  export default {              
    name: 'Ticket',
    props: ["ticket"]
  }
</script>

<style lang="scss" scoped>
  .ticket {
    @apply .bg-yellow-100 .mb-2 .rounded-md .px-2 .py-2 .font-thin .text-sm .shadow-lg;
  }
</style>