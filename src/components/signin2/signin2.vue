<template>
  <div class="signin2">
    <div class="div1" >
      <img id="img1" src="./img/news.png"/>
      <div>
        <img id="img2" src="./img/head.png"/>
        <span>用户昵称</span>
        <img id="img3" src="./img/jiantou.jpg"/>
      </div>
      <p>开始你的旅程</p>
    </div>
    <div class="div2"></div>
    <div class="div3">积分：</div>
    <div class="div4"></div>
    <div class="div5">
      <div>
        <img src="./img/collection.png"/><br/>
        <span>我的收藏</span>
      </div>
      <div>
        <img src="./img/order.png"/><br/>
        <span>我的订单</span>
      </div>
      <div>
        <img src="./img/travel.png"/><br/>
        <span>未出行订单</span>
      </div>
      <div>
        <img src="./img/payment.png"/><br/>
        <span>未付款订单</span>
      </div>
      <div>
        <img src="./img/evaluate.png"/><br/>
        <span>待评价订单</span>
      </div>
      <div>
        <img src="./img/refund.png"/><br/>
        <span>退款订单</span>
      </div>
      <div>
        <img src="./img/coupon.png"/><br/>
        <span>优惠券</span>
      </div>
      <div>
        <img src="./img/album.png"/><br/>
        <span>我的相册</span>
      </div>
    </div>
    <div class="div6">
      <div>
        <img src="./img/homepage.jpg"/><br/>
        <span>首页</span>
      </div>
      <div>
        <img src="./img/destination.jpg"/><br/>
        <span>目的地</span>
      </div>
      <div>
        <img src="./img/history.jpg"/><br/>
        <span>浏览历史</span>
      </div>
      <div>
        <img src="./img/my.jpg"/><br/>
        <span>我的</span>
      </div>

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

<style lang="scss">
  body{padding:0;margin:0;}
  .signin2{width:750px;position:relative;}
  .div1 {
    height:420px;margin-left:40px;margin-right:40px;position: relative; text-align:left;
    #img1{width:42px;height:46px;position:absolute;top:27px;right:0;}
    div{
      span{font-size:45px;display:inline-block;margin-left:152px;margin-top:150px;}
      #img2{width:125px;height:125px;position:absolute;top:120px;left:0;}
      #img3{width:20px;height:35px;position:absolute;top:158px;right:0;}
    }
    p{width:455px;height:105px;background-color:#ffe040;font-size:48px;
      color:#a2a19a;text-align:center;line-height:105px;border:1px #aa952b solid;
      display:inline-block;margin:56px 110px;border-radius:30px;}
  }

  .div2 ,.div4{height:10px;background-color:#efecec}
  .div3{height:70px;font-size:31px;margin-left:57px;line-height:70px;text-align:left;}
  .div5 div{
    display: inline-block;margin-left:15px;
    margin-top:45px;height:97px;width:150px;
    img{width:42px;height:42px;}
    span{display: block; padding-top:25px;font-size:30px;
      text-align:center;}
  }
  .div6{
    width:750px;height:98px;background-color:#efecec;position: fixed;bottom:0;left:0;
    div{
      display:inline-block;width:150px;margin-left:15px;
      img{width:42px;height:48px;padding-top:10px;}
      span{color:#4b414c;font-size:22px;padding-top:8px;display:block;text-align:center;}
    }
  }
</style>
