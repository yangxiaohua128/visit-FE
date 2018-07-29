<template>
  <div class="order">
    <header>
      <img src="./img/箭头左.png"/>
      <p>选择班期和人数</p>
    </header>
    <content>
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
    </content>
    <footer>
      <p>选择数量</p>
      <div>
        <p>成人：</p>
        <img src="./img/减号.png"/>
        <span></span>
        <img src="./img/加号.png"/>
      </div>
      <div>
        <p>儿童：</p>
        <img src="./img/减号.png"/>
        <span></span>
        <img src="./img/加号.png"/>
      </div>
    </footer>
    <div class="choice">
      <p>总价：</p>
      <button>立即购买</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'order'
}
</script>

<style type="text/css">
  header{width: 100%;display:flex;}
  header p{font-size:36px;color:#787878;margin:0 auto;padding: 0;line-height: 100px;height:100px;}
  header img{width: 22px;height:38px;}
  .date{width:100%;height: 860px;}
  content p{width:200px;font-size: 30px;color:#bbbbbb}
  .month{width:100%;height: 144px;display:flex;}
  .month li{width:138px;height: 138px;}
  .week{width: 100%;height:60px;border-bottom: 1px solid #cacaca;border-top: 1px solid #cacaca;display:flex;justify-content:space-around;}
  .day{width:100%;height:728px; }
  footer{width: 100%;height: 380px;}
  footer p{font-size:30px;color:#bbbbbb;width:200px;}
  footer div{width: 100%;height: 80px;}
  footer img{width: 32px;height:32px;}
  footer span{width:80px;height:50px;background-color:#f4f4f4;}
  .choice{width:100%;height:100px;}
  .choice p{width:67%;height:100px;font-size:25px;}
  button{width: 33%;height: 100px;background-color:#fae264;}
  input{border:none;}
</style>
