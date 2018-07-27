<template>
<div class="signin">
  <div class="div1" >
    <img id="img1" src="./img/picture-1.png"/>
    <p>欢迎来到</p>
    <div>登录/注册</div>
    <img id="img2" src="./img/news.png"/>
  </div>
  <div class="div2"></div>
  <div class="div3">积分：</div>
  <div class="div4"></div>
 <div class="div5">
   <img src="./img/collection.png"/><span>我的收藏</span>
   <img src="./img/order.png"/><span>我的订单</span>
   <img src="./img/travel.png"/><span>未出行订单</span>
   <img src="./img/payment.png"/><span>未付款订单</span>
   <img src="./img/evaluate.png"/><span>待评价订单</span>
   <img src="./img/refund.png"/><span>退款订单</span>
   <img src="./img/coupon.png"/><span>优惠券</span>
   <img src="./img/album.png"/><span>我的相册</span>

 </div>

</div>
</template>

<script>
  export default {
    name: 'signin',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style type="text/css">
  body{padding:0;margin:0;}
.signin{width:375px;margin:0;padding:0;}
.div1{height:203px;margin-left:22px;margin-right:22px;position: relative;}
  #img1{position:absolute;right:14px;bottom:0;height:104px;width:137px;}
  #img2{position:absolute;right:0;top:15px;width:24px;height:24px;}
  .div1 p{display:block;margin-top:66px;color:#424242;font-size:30px;}
  .div1 div{width:300px;height:100px;background-color:#ffde39;color:#4b414c;font-size:36px;
    text-align: center;line-height:100px;button:70px;left:0;}
  .div2 ,.div4{height:10px;background-color:#f8f8f8;}
  .div3{height:70px;font-size:15px;padding-left:29px;}

</style>
