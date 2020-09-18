<template>
  <div class="footer">
    <div class="footer-content">{{ trademark }}</div>
  </div>
</template>

<script>
export default {
  name: '',
  data: function () {
    return {
      trademark: "by Ting Ting. All rights reserved."
    };
  }
};
</script>

<style scoped>
  .footer{
    background-color: rgb(252, 252, 218);
    width: 100%;
    height: 20vh;
    position:absolute;
    bottom:0px;
    left:0px;
    font-size: 10px;
  }
  .footer-content{
    padding-top: 60px;
    text-align: center;
  }
</style>

