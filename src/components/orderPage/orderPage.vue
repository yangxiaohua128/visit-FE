<template>
  <div class="orderPage">
    <header>
      <img src="./img/arrowLeft.png"/>
      <p>选择班期和人数</p>
    </header>
    <div class="content">
      <p>出发地</p>
      <div class="local"></div>
      <p>出发日期</p>
      <ul class="month">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="week">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
      <ul class="day">

      </ul>
      <div class="choice">
        <p>选择数量</p>
        <div class="choice1">
          <span>成人：</span>
          <div class="adult">
            <img src="./img/sub.png"/>
            <div></div>
            <img src="./img/add.png"/>
          </div>
        </div>
        <div class="choice2">
          <span>儿童：</span>
          <div class="children">
            <img src="./img/sub.png"/>
            <div></div>
            <img src="./img/add.png"/>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <span class="sp1">总价：<br>￥</span>
      <span class="sp2">立即购买</span>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'order'
}
</script>

<style type="text/css">
  body{
    padding: 0;
    margin: 0;
  }
  .orderPage{
    height: 1700px;
  }
  header{
    width: 100%;
    height:90px;
    display:flex;
    align-items:center;
    background-color:#fff;
  }
  header p{
    font-size:36px;
    color:#787878;
    margin:0 auto;
    line-height: 100px;
    height:100px;
  }
  header img{
    width: 22px;
    height:38px;
  }
  .content p{
    width:200px;
    font-size: 30px;
    color:#bbbbbb;
    text-align: left;
  }
  .local{
    width:200px;
    height: 74px;
    background-color:#fdf4c3;
    border: 1px #f9de57 solid;
  }
  .month{
    width:100%;
    height: 144px;
    display:flex;
  }
  .month li{
    width:138px;
    height: 138px;
  }
  .week{
    width: 100%;
    height:60px;
    border-bottom: 1px solid #cacaca;
    border-top: 1px solid #cacaca;
    display:flex;
    justify-content:space-around;
    align-items: center;
  }
  .day{
    width:100%;
    height:728px;
  }
  .choice p{
    font-size:32px;
    color:#bbbbbb;
    width:200px;
  }
  .choice span{
    font-size: 28px;
  }
  .choice img{
    width: 32px;
    height: 32px;
  }
  .adult div{
    width: 80px;
    height: 50px;
    background-color:#f4f4f4;
    display: flex;
    justify-content: space-around;
    margin: 0;
    display: inline-block;
    align-items: center;
  }
  .children div{
    width: 80px;
    height: 50px;
    background-color:#f4f4f4;
    display: flex;
    justify-content: space-around;
    margin: 0;
    display: inline-block;
    align-items: center;
  }
  .choice1,.choice2{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
  }
  .sp1{
    position: fixed;
    left: 0;
    width: 500px;
    height: 100px;
    font-size: 28px;
    text-align: left;
  }
  .sp2{
    position: fixed;
    right:0;
    width: 250px;
    background:#f9de57;
    line-height: 100px;
    color:#8c8353;
    font-size: 32px;

  }

</style>
