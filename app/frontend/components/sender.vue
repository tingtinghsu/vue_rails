<template>
  <div class="sender rounded-lg">{{ msg }}</div>
</template>

<script>
  export default {              
    data: function () {
      return {
        msg: '寄給你一封情書'
      }
    },
    created() {
      // async
      setTimeout(() => {
        // 發送事件
        this.$bus.$emit('loveLetter', {
          msg: 'Ting is reading: Love Letter／ラブレター',
          alert: '請收下'
        });

        this.msg = '九月的陽光下，我正偷看你的側臉。你的身影猶如蕩漾在春風中的一首歌，你一定全都知道，你一定全都不在乎，就這樣回過頭，清涼的一笑。'
      }, 3000);
    }
  }
</script>

<style scoped>
  .sender {
    width: 650px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 80%;    
    padding-left: 20px;
    padding-right: 20px;    
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: rgb(247, 213, 247);
  }
</style>