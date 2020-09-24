<template id="todo-3M">
  <div class="todo-form">
      <label>本日To do list</label><i class="fas fa-pencil-alt" ></i><hr>
      <input class="todo-input" type='text' @keyup.enter='createItem' placeholder="請輸入您今天的代辦事項">
  </div>
</template>

<script>
  export default {              
    methods: {
      createItem($event){
        this.$emit("additem", $event.target.value)
        $event.target.value = ''
      }
    },
    template: "#todo-3M"
  }
</script>

<style scoped>
  .todo-form {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 80%;    
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: rgb(252,252,218);
  }
  .fa-pencil-alt {
    margin-left: 5px;
    margin-right: 5px;
  }
  .todo-input {
    margin-top: 10px;
    padding: 2px 3px 3px 2px; 
    width: 250px;
  }
</style>