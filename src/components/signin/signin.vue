<template>
  <div class="signin">
    <div class="head" >
      <img id="img1" src="./img/picture-1.png"/>
      <p>欢迎来到拾叁</p>
      <button type="button" @touchend="tophone">登录/注册</button>
      <img id="img2" src="./img/news.png" @touchend="tophone"/>
    </div>
    <div class="div2"></div>
    <div class="div3">积分：</div>
    <div class="div4"></div>
    <ul class="nav">
      <li v-for="item in items" :key="item.id" @touchend="tophone">
        <img :src='item.path'/><span>{{item.text}}</span></li>
    </ul>
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
      items: [
        {path: require('./img/collection.png'), text: '我的收藏'},
        {path: require('./img/order.png'), text: '我的订单'},
        {path: require('./img/travel.png'), text: '未出行订单'},
        {path: require('./img/payment.png'), text: '未付款订单'},
        {path: require('./img/evaluate.png'), text: '待评价订单'},
        {path: require('./img/refund.png'), text: '退款订单'},
        {path: require('./img/coupon.png'), text: '优惠券'},
        {path: require('./img/album.png'), text: '我的相册'}]
    }
  },
  methods: {
    tophone: function() {
      this.$router.push({
        path: '/phone'
      })
    }
  }
}
</script>

<style lang="scss">
  body{padding:0;margin:0;}
  .signin{width:750px;position:relative;}
  .head{height:420px;margin-left:40px;margin-right:40px;position: relative; text-align:left;}
  #img1{position:absolute;right:30px;bottom:0;height:200px;width:280px;}
  #img2{width:42px;height:46px;position:absolute;top:27px;right:0;}
  .head p{width:500px;margin-top:130px;font-size:60px;display:inline-block;
   }
  .head button{width:300px;height:100px;background-color:#f9de57;font-size:40px;
    text-align: center;line-height:100px;margin-top:55px;margin-left:0;display:inline-block;}
  .div2 ,.div4{height:10px;background-color:#efecec}
  .div3{height:70px;font-size:31px;margin-left:57px;line-height:70px;text-align:left;}
  .nav li{
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
