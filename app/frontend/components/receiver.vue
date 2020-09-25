<template>
  <div class="receiver rounded-lg"><i class="far fa-heart mr-2"></i>{{ msg }}</div>
</template>

<script>
  export default {              
    name: '',
    data: function () {
      return {
        msg: '收件人：Ting'
      }
    },
    created() {
    // 註冊，接收事件
    this.$bus.$on('loveLetter', (event) => {
      this.msg = event.msg;
      alert(event.alert);
      console.log(event);
      // {msg: "Ting is reading: Love Letter／ラブレター", alert: "請收下"}
    });
  },
  }
</script>

<style scoped>
  .receiver {
    width: 650px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 80%;    
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: rgb(245, 155, 233);
  }
</style>