<template>
  <div class="header">
    <div>
      <p>{{ title }}</p>
    </div>

  </div>
</template>

<script>
  export default {              
    name: '',
    data: function () {
      return {
        title: "123"   
      }
    }
  }
</script>

<style scoped>
  .header{
    background-color: rgb(220, 243, 234);
  }
</style>