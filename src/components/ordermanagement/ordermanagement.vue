<template>
    <div class="orderMangement">
      <!--头部-->
      <header>
        <img src="left.png"/>
        <p>订单详情</p>
      </header>
      <!-- 中间部分-->
        <div class="content">
              <ul class="nav">//导航
                <li><img src="complateorder1.png" width="32" height="32"/><p>全部订单</p></li>
                <li><img src="complateorder1.png" width="32" height="32"/><p>待支付订单</p></li>
                <li><img src="complateorder1.png" width="32" height="32"/><p>待出行订单</p></li>
                <li><img src="complateorder1.png" width="32" height="32"/><p>待评价订单</p></li>
                <li><img src="complateorder1.png" width="32" height="32"/><p>退款订单</p></li>
              </ul>
          //订单
          <div class="time"><p>预定日期</p>:<p></p></div>
          <div id="order"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
.orderMangement{
  width: 100%;
}
header{
  display: flex;
  }
header p{
  font-size: 36px;
}
.content{
}
.nav{
  display: flex;
  height:127px;
  border-bottom:6px #dfdfdf solid;
}
.nav li{
  width: 115px;
  justify-content:space-around;
  align-items:center;
}
.nav p{
  text-align: center;
  line-height:26px;
  font-size: 26px;
}
.time{
  width: 218px;
  height: 43px;
  border-radius: 16px 16px;
}
</style>
