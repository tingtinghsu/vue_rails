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
  },
};
</script>

<style scoped>
  .footer{
    background-color: rgb(220, 243, 234);
    width: 100%;
    height: 100px;
    position:absolute;
    bottom:0px;
    left:0px;
  }
  .footer-content{
    text-align: center;
  }
</style>

