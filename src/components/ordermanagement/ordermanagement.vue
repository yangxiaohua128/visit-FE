<template>
  <div class="ordermangement">
    <!--头部-->
    <header>
      <div><img src="./img/left.png" width="16" height="16"/></div>
      <p>订单详情</p>
     <div></div>
    </header>
    <!-- 中间部分-->
    <div class="content">
      <ul class="nav">
        <li><img src="./img/complatedorder2.png" width="20" height="20"/> <p>全部订单</p><span></span></li>
        <li><img src="./img/waitpay2.png" width="20" height="20"/><p>待支付</p><span></span></li>
        <li><img src="./img/payorder2.png" width="20" height="20"/><p>待出行</p><span></span></li>
        <li><img src="./img/appraise2.png" width="20" height="20"/><p>待评价</p><span></span></li>
        <li><img src="./img/moneyback2.png" width="20" height="20"/><p>退款订单</p><span></span></li>
      </ul>
      <div class="time">预定日期:<span>7月25日</span></div>
      <div class="order">
        <div class="headline"><img src="./img/inform.png" width="30" height="30"/><span>重庆旅游三天四晚自由行</span></div>
        <div class="money"><p class="p1">￥1500</p><p class="p2">状态</p></div>
        <div class="from"><span>7月25日</span>至<span>7月30日</span></div>
        <div class="button"><button type="button">评价</button>
        <button type="button">取消订单</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ordermanagement',
  data () {
    return {}
  }
}

</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
.ordermangement{
    width: 750px;
  }
  header{
    width: 100%;
    height: 90px;
    align-items:center;
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 20px;
  }
  header div {
    width: 150px;
    height: 38px;

  }
  header p{
    text-align: center;
    line-height: 38px;
    font-size: 36px;
    color:black;
  }
.nav{
    display: flex;
    height:127px;
    width: 100%;
    border-bottom:6px #dfdfdf solid;
    list-style:none;
    padding: 0;
    margin: 0;
    margin-bottom: 35px;
  }
.nav li{
    width: 150px;
    flex-basis:100%;
    /*border-bottom:2px #fee735 solid;*/
  }
.nav p{
    text-align: center;
    line-height:26px;
    font-size: 27px;
  margin-bottom: 0;
  }
/*.nav span{*/
  /*width:67px;*/
  /*height:14px;*/
  /*background-color:#fee735;*/
/*}*/
.time{
    width: 218px;
    height: 43px;
    font-size: 25px;
    border-radius: 16px 16px;
    background-color:#a9cdef;
    margin-left: 17px;margin-bottom: 16px;
    text-align: center;line-height: 43px;
  }
.order{
  text-align: center;
    display:flex;
    width: 720px;
    height: 320px;
    border: 1px #e4e4e4 solid ;
    margin-bottom: 16px;
    justify-content: space-between;
    flex-wrap:wrap;
  }
.headline{
    height:150px ;
    width: 500px;
    text-align: left;
}
.headline span{
    height:100px;
    color:black;
    font-size: 27px;
}
.money{
  width: 201.992px;
  height:80px;
  margin-top: 20px;
}

.money p{
    margin: 0;
    font-size: 30px;
}
.p1{
   color:#f1b265;
   font-size:30px;
}
.from{
  width: 240px;
  height: 76px;
  border:2px #a9cdef solid;
  border-radius: 15px;
  line-height: 76px;
}
.button button{
  height: 76px;
  background-color: #eff4f8;
  border: none;
  border-radius: 10px;
  margin-right:5px;
}
.button{
  align-self:flex-end;
}
</style>
