<template>
 <div class="confirmation">
   <header>
     <img src="img/箭头左.png"/>
     <p>选择班期和人数</p>
   </header>
   <content>
     <div class="order"></div>
   </content>
   <div class="eg"></div>
   <p class="p1">我的第一个p</p>
 </div>
</template>

<script>
    export default {
        name: "order confirmation"
    }
</script>

<style type="text/css">
  .eg{
    width: 50px;
    height: 50px;
    background-color: red;
  }
  .p1{
    font-size: 48px;
    color: #000;
  }
</style>
