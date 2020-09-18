<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default { 
    data: function () {
      return {
        // day: "第 8 天",
        // topic: "元件的溝通 - props",
        message: 123
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: brown;
  }
</style>