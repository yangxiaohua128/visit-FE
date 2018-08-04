<template>
 <div class="confirmation">
   <header>
     <img src="./img/arrowLeft.png"/>
     <p>订单填写</p>
   </header>
   <from class="information" method="get" action="http://www.baidu.com" require="required">
     <div class="content">
       <div class="orderPage">
         <p>(订单显示)</p>
         <div class="photo">（订单照片）</div>
       </div>
       <div class="massage">
         <p>出行信息</p>
         <div>
           <span>出行人</span>
           <input type="search"  placeholder="添加出行人"/>
           <img src="./img/addBlue.png">
         </div>
       </div>
       <div class="orderMassage">
         <p>预订人信息</p>
         <div>
           <span>联系人</span>
           <input type="search" placeholder="请填写订单联系人姓名"/>
         </div>
       </div>
       <div class="peopleMassage">
         <div><p>电话</p><input type="search" placeholder="请输入手机号码"/></div>
         <div class="div1"><p>验证码</p><input type="search" placeholder="请输入验证码"/><span>发送验证码</span></div>
         <div><p>邮箱</p><input  type="search" placeholder="请输入邮箱"/></div>
       </div>

       <div class="save">
         <p >优惠信息</p>
         <span>选择优惠券<img src="./img/arrowRight.png"/></span>
       </div>
     </div>
     <footer>
       <span>总价：<br>￥</span>
       <input type="submit" value="提交订单" name="submit">
     </footer>
   </from>
   <div class="content">
     <div class="orderPage">
       <p>(订单显示)</p>
       <div class="photo">（订单照片）</div>
     </div>
     <div class="massage">
       <p>出行信息</p>
       <div>
         <span>出行人</span>
         <input type="text"  placeholder="添加出行人"/>
         <img src="./img/addBlue.png">
       </div>
     </div>
     <div class="orderMassage">
       <p>预订人信息</p>
       <div>
         <span>联系人</span>
         <input type="text" placeholder="请填写订单联系人姓名"/>
       </div>
     </div>
     <div class="peopleMassage">
       <div><p>电话</p><input type="text" placeholder="请输入手机号码"/></div>
       <div><p>验证码</p><input type="text" placeholder="请输入验证码"/><span>发送验证码</span></div>
       <div><p>邮箱</p><input  type="text" placeholder="请输入邮箱"/></div>
     </div>
   </div>
   <footer>
     <span class="sp1">总价：<br>￥</span>
     <span class="sp2">提交订单</span>
   </footer>
 </div>
</template>


<script>
import InformChange from '../informChange/informChange'
export default {
  name: 'orderconfirmation',
  components: {InformChange}
}
</script>
<style lang="scss">
  .confirmation{
    width:750px;
    height:1450px;
    background-color:#f7f7f7;
  }
  input{
    border:none;
    width:300px;
    height:50px;
  }
  header{
    width: 100%;
    height:90px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#fff;}
    p{
      width: 750px;
      font-size:36px;
      color:#787878;
      height:90px;
      line-height:90px;
    }
    img{
      width:22px;
      height:38px;
      vertical-align: middle;
    }
  header p{
    width: 750px;
    font-size:36px;
    color:#787878;
    height:90px;
    line-height:90px;
  }
  header img{
    width:22px;
    height:38px;

  }
  .orderPage{
    width:100%;
    height:232px;
    background-color: #fff;
    margin-top: 10px;
    display:flex;
    justify-content:space-around;
    align-items:center;}
    p{
      width:570px;
      height:80px;
      font-size: 30px;
    }
  .orderPage p{
    width:570px;
    height:80px;}
  .photo {
    width:100px;
    height:100px;
  }
  .massage{
    width:100%;
    height:232px;
    background-color: #fff;
    margin-top: 20px;}
    p{
      font-size:30px;
      height:30px;
      font-weight: bold;
      color: #616161;
      margin-bottom: 30px;
      padding-top: 40px;
      text-align: left;
    }
    div{
      margin-bottom: 40px;
      display:flex;
      justify-content:space-between;
      align-items:center;}
      span{
        color:#565656;
        font-size:28px;
      }
    img{
      width: 32px;
      height: 32px;
    }
  .massage p{
    font-size:30px;
    height:30px;
    font-weight: bold;
    color: #616161;
    margin-bottom: 30px;
    padding-top: 40px;
    text-align: left;
  }
  .massage div{
    margin-bottom: 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .massage div span{
    color:#c1c1c1;
    font-size:28px;
  }
  .massage img{
    width: 32px;
    height: 32px;
  }
  .orderMassage{
    width: 100%;
    height:212px;
    background-color: #fff;
    margin-top: 20px;}
    p{
      font-size: 30px;
      height:30px;
      font-weight: bold;
      color: #616161;
      text-align: left;
      padding-top: 40px;
    }
    div{
      padding-top:0;
      margin-top: 30px;
      display:flex;
      align-items:center;}
      span{
        width:100px;
        color:#565656;
        font-size:30px;
        text-align:left;
      }
    input{
      margin-left: 60px;
    }
    div{
      width:100%;
      height:102px;
      background-color:#fff;
      margin-top:20px;
      font-size:28px;
      text-align: left;
      color:#c1c1c1;
      padding-top: 40px;}
      p{
        font-size: 30px;
        display: inline-block;
        width:116px;
      }
  .div1{
    position: relative;
  }
  .peopleMassage {
    margin-top:40px;}
    p{
      font-size: 30px;
      display: inline-block;
      width: 100px;
      color:#565656;
    }
    div{
      width:100%;
      height:102px;
      background-color:#fff;
      margin-top:20px;
      font-size:28px;
      text-align: left;
      color:#c1c1c1;
      display: flex;
      align-items: center;
    }
    span{
      font-size: 28px;
      color:#7ab4ee;
      position: absolute;
      right:0;
    }
    input{
      margin-left: 60px;
    }
    .save{
      width:100%;
      height:102px;
      background-color:#fff;
      margin-top:20px;
      font-size:28px;
      text-align: left;
      color:#c1c1c1;
      display: flex;
      justify-content: space-between;
      align-items: center;}
      p{
        font-size:28px;
        height:30px;
        font-weight: bold;
        color: #565656;
        text-align: left;
      }
      img{
        width: 32px;
        height: 32px;
      }
    footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 100px;
      background-color: #fff;}
      span{
        position: fixed;
        left: 0;
        font-size: 32px;
        width:500px;
        height:100px;
        background-color:#fff;
        text-align: left;
    }
      input{
        position: fixed;
        right: 0;
        width:250px;
        height:100px;
        background-color:#fae368;
        color:#8c8353;
        font-size: 32px;
        line-height: 100px;
      }
  .orderMassage p{
    font-size: 30px;
    height:30px;
    font-weight: bold;
    color: #616161;
    text-align: left;
    padding-top: 40px;
  }
  .orderMassage div{
    margin-bottom: 40px;
    display:flex;
    align-items:center;
  }
  .orderMassage div span{
    width:116px;
    color:#c1c1c1;
    font-size:28px;
    text-align:left;
  }
  .orderMassage input{margin-left: 60px;}
  .peopleMassage div{
  }
  .save{
    width:100%;
    height:102px;
    background-color:#fff;
    margin-top:20px;
    font-size:28px;
    text-align: left;
    color:#c1c1c1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size:28px;
      height:30px;
      font-weight: bold;
      color: #565656;
      text-align: left;
    }
    img{
      width: 32px;
      height: 32px;
    }
  }
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    span{
      position: fixed;
      left: 0;
      font-size: 32px;
      width:500px;
      height:100px;
      background-color:#fff;
      text-align: left;
    }
    input{
      position: fixed;
      right: 0;
      width:250px;
      height:100px;
      background-color:#fae368;
      color:#8c8353;
      font-size: 32px;
      line-height: 100px;
    }}

</style>

