<template>
 <div class="confirmation">
   <header>
     <img src="./img/箭头左.png"/>
     <p>订单填写</p>
   </header>
   <div class="orderpage">
     <p>(订单显示)</p>
     <div class="photo">（订单照片）</div>
   </div>
   <div class="massage">
     <p>出行信息</p>
     <span>
       <h>出行人</h>
       <input type="text"  placeholder="添加出行人"/>
      <img src="./img/addBlue.png">
     </span>
   </div>
   <div class="orderMassage">
     <p>预订人信息</p>
     <span>
       <h>联系人</h>
       <input type="text" placeholder="请填写订单联系人姓名"/>
     </span>
     <div>电话<input  placeholder="请输入手机号码"/></div>
     <div>验证码<input  placeholder="请输入验证码"/></div>
     <div>邮箱<input  placeholder="请输入邮箱"/></div>
   </div>
   <footer>
     <p class="p1">总价：<br>￥</p>
     <p class="p2">提交订单</p>
   </footer>
 </div>
</template>

<script>
export default {
  name: 'order confirmation'

}
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
    padding: 0;
  }
  body{background-color: #f7f7f7;
    width: 750px;
    height: 1600px;
  }

  header{width: 100%;height:90px;display:flex;align-items:center;background-color:#fff;}
  header p{font-size:36px;color:#787878;margin:0 auto;padding: 0;line-height: 90px;height:90px;}
  header img{width:22px;height:38px;}
  .orderpage{width:100%;height:232px;background-color: #fff;margin-top: 2px;display:flex;justify-content:space-around;align-items:center;}
  .orderpage p{width:570px;height:80px;}
  .photo {width:100px;height:100px;border: 1px solid #f7f7f7;}
  input{width:400px;height:50px;}
  .massage{width:100%;height:232px;background-color: #fff;margin-top: 20px;}
  .massage p{font-size: 30px;height:30px;font-weight: bold;color: #616161;text-align:left;margin-bottom: 30px;padding-top: 40px;}
  .massage span{margin-bottom: 40px;display:flex;justify-content:space-between;align-items:center;}
  .massage span h{color:#c1c1c1;font-size:28px;}
  .massage img{width: 32px;height: 32px;}
  .orderMassage{width: 100%;height:212px;background-color: #fff;margin-top: 20px;}
  .orderMassage p{font-size: 30px;height:30px;font-weight: bold;color: #616161;text-align: left;padding-top: 40px;}
  .orderMassage span{margin-bottom: 40px;display:flex;display:flex;align-items:center;}
  .orderMassage span h{color:#c1c1c1;font-size:28px;}
  .orderMassage input{margin-left: 90px;}
  .orderMassage div{width:100%;height:102px;background-color:#fff;margin-top:20px;font-size:28px;text-align: left;color:#c1c1c1;padding-top:37px;}
  footer{width: 100%;height: 100px;background-color: #fff;}
  .p1{
    position: fixed;
    left: 0;


    }
  .p2{
    position: fixed;
    right: 0;

    }
  footer:first-child{width:500px;height: 100px;background-color:#fff;}
  footer:last-child{width:250px;height:100px;background-color:#fae368;color:#8c8353;font-size: 32px;text-align: center;}
  input{border:none;}
</style>
