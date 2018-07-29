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
  .signin{width:750px;}
  .div1{height:420px;margin-left:40px;margin-right:40px;position: relative;}
  #img1{position:absolute;right:30px;bottom:0;height:200px;width:280px;}
  #img2{margin-top:27px;width:42px;height:46px;}
  .div1 p{margin-top:130px;color:#424242;font-size:60px;border:1px black solid;}
  .div1 div{width:150px;height:50px;background-color:#ffde39;color:#4b414c;font-size:36px;
    text-align: center;line-height:50px;button:70px;left:0;}
  .div2 ,.div4{height:10px;background-color:#efecec}
  .div3{height:70px;font-size:15px;padding-left:29px;}
  .div5 img{width:21px;height:21px;}
</style>
