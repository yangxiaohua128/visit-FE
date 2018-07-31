<template>
 <div class="register">
   <div class="one">
     <span>手机快速注册</span>
     <img src="./img/jiantou.jpg"/>
   </div>
   <p id="p1"></p>
   <div class="two">手机号
       <input type="text" placeholder="请输入手机号"/>
     <p></p>
   </div>
   <div class="three">短信验证码
     <input type="text"/>
     <button type="button">获取验证码</button>
     <p></p>
   </div>
   <div class="four">
     <span>密码</span>
     <input type="password" placeholder="6-20位数字或字母"/>
     <img src="./img/hide.png"/>
     <p></p>
   </div>
   <div class="five">
     <span>确认密码</span>
     <input type="password"/>
     <img src="./img/hide.png"/>
     <p></p>
   </div>
   <div class="six">完成注册，进入。。。</div>
 </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style lang="scss">
  body{margin:0;padding:0;}
    .register{width:750px;position:relative;
      .one {height:67px;
      img{width:25px;height:40px;position:absolute;top:6px;left:40px;}
      span{font-size:34px;display:inline-block;margin-top:6px;}
      }
      #p1{height:2px;background-color:#e6e6e6;}
      .two,.four,.five{
        height:120px;width:750px;font-size:30px;margin-left:40px;
          display:inline-block;line-height:120px;text-align:left;
        input{margin-left:95px;font-size:30px;color:#c6c7cb;}
        p{width:670px;height:2px;background-color:#e6e6e6;}
        }
      .three {
        height:120px;width:750px;font-size:30px;margin-left:40px;
        display:inline-block;line-height:120px;text-align:left;
        input{width:270px;color:#c6c7cb;}
        button{width:240px;height:70px;background-color:#ffe251;
        }
        p{width:670px;height:2px;background-color:#e6e6e6;}
      }
      .four,.five {
        img {
          width: 44px;
          height: 44px;
        }
      }
      .five input{margin-left:35px;}
      .six{width:670px;height:100px;margin-top:120px;background-color:#d8d8d8;
      color:#fff;margin-left:40px;line-height:100px;font-size:33px;}
    }



</style>
