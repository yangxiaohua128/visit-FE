<template>
  <div class="phone">
    <div class="head">
      <span id="s1">马蜂窝旅行欢迎您</span>
      <span id="s2">取消</span>
    </div>
    <div class="navigation">
      <span id="s3">账号登录</span>
      <span id="s4">短信验证码登录</span>
      <p id="p1"></p>
      <p id="p2"></p>
    </div>
    <div class="content">
      <span>账号
        <input type="text" placeholder="手机号"/>
      </span>
      <p></p>
      <span>密码
        <input type="password">
        <img src="./img/hide.png"/>
      </span>
      <p></p>
      <button type="button" class="sign">登录</button>
      <button type="button" class="enroll">手机快速注册</button>
    </div>
    <div class="content2">
      <span>手机号
        <input type="text" placeholder="输入手机号"/>
      </span>
      <p></p>
      <span>短信验证码
        <input type="text">
        <button type="button" class="butn">获取验证码</button>
      </span>
      <p></p>
      <button type="button" class="sign">登录</button>
      <button type="button" class="enroll">手机快速注册</button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "phone"
    }
</script>

<style lang="scss">
 .phone{width:750px;}
  .head{
    font-size:32px;margin-top:37px;text-align:left;
    #s1{margin-left:234px;}
    #s2{margin-left:130px;}
  }
  .navigation{
    font-size:30px;margin-top:60px;text-align:left;
    #s3{margin-left:125px;}
    #s4{margin-left:203px;}
    #p1{width:240px;height:6px;background-color:#ffe24c;margin-top:28px;}
    #p2{width:750px;height:2px;background-color:#e6e6e6;}
  }
  .content{
    margin-left:42px;margin-right:42px;display:none;
    span{width:666px;height:120px;font-size:32px;line-height:120px;text-align:left;
      display:inline-block}
    input{margin-left:55px;}
    img {
      width: 44px;
      height: 44px;
      margin-left:130px;
    }
    p{width:666px;height:2px;background-color:#e6e6e6;}
    .sign{width:666px;height:100px;background-color:#d8d8d8;
      font-size:30px;margin-top:122px;}
    .enroll{width:666px;height:98px;border:1px #000 solid;background-color:#fff;
      margin-top:304px;}
  }
 .content2{
   margin-left:42px;margin-right:42px;
   span{width:666px;height:120px;font-size:32px;line-height:120px;text-align:left;
     display:inline-block}
   input{width:202px;}
   .butn{width:240px;height:70px;background-color:#ffe14d;}
   p{width:666px;height:2px;background-color:#e6e6e6;}
   .sign{width:666px;height:100px;background-color:#d8d8d8;
     font-size:30px;margin-top:122px;}
   .enroll{width:666px;height:98px;border:1px #000 solid;background-color:#fff;
     margin-top:304px;}
 }

</style>
