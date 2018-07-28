<template>
  <div class="apppage">
    <div class="header">
      <router-view>
        <wc-swiper class="swiper">
          <wc-slide @click="fnskip">
            <img src="img"/>
          </wc-slide>
        </wc-swiper>
      </router-view>
      <div class="nav">

      </div>
      <div class="eg"></div>
      <p class="p1">这是一个p标签</p>
      <p class="p2">这是第二个标签</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "apppage"
    }
</script>

<style type="text/css">
   p{
     margin: 0;
     padding: 0;}
   body{
     padding: 0;
     margin: 0;
   }
  .eg{
    width: 750px;
    height: 100px;
    background-color: red;
  }
  .p1{font-size: 36px;
    color: #000;
  }
   .p2{font-size: 50px;
     color: #ccc;
   }
</style>
