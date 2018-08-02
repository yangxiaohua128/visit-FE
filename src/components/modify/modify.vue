<template>
<div class="modify">
  <div class="header">
    <img src="./img/jiantouz.jpg"/>
    用户信息
    <p></p>
  </div>
  <div class="portrait">更换头像
    <img src="./img/head.png" id="img1"/>
    <img src="./img/jiantou.jpg" id="img2"/>
    <p></p>
  </div>
  <div class="middle">
    <div>昵称
      <img src="./img/jiantou.jpg"/>
  </div>
    <p></p>
    <div>
      性别
    <span id="sp1">男</span>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>
     生日
      <span id="sp2">1998-8-21</span>
      <img src="./img/jiantou.jpg"/>
  </div>
    <p></p>
    <div>
      姓名
      <span id="sp3">请填写真实姓名</span>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>
     手机号
      <span id="sp4">18991738004</span>
    <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>
      邮箱
      <img src="./img/jiantou.jpg"/>
    </div>
    <div>
     登录密码
      <span id="sp5">修改</span>
      <img src="./img/jiantou.jpg"/>
    </div>
  </div>
  <div class="tail">退出登录</div>
</div>
</template>

<script>
    export default {
        name: "modify",

    }
</script>

<style lang="scss">
.modify{width:750px;}
  .header {
    font-size: 32px;
    height:100px;
    line-height:98px;
    text-align:left;
    img {
  width: 25px;
  height: 34px;
   margin-left:40px;
      margin-right:246px;
}
    p{
      width:750px;height:2px;background-color:#e6e6e6;
    }

}
  .portrait{
    font-size:32px;
    height:132px;
    line-height:130px;
    text-align:left;
    margin-left:40px;
    margin-right:40px;
    #img1{
      width:102px;
      height:102px;
    margin-left:382px;}
    #img2{
      width:25px;
      height:32px;
    margin-left:15px;}
    p{
      width:670px;
      height:2px;
      background-color:#e6e6e6;
    }
  }
.middle {
  margin-left: 40px;
  margin-right: 40px;
  position: relative;
  div {
    height: 90px;
    font-size: 32px;
    line-height: 90px;
    text-align: left;
    p{width:128px;}
  }
  img {
    position: absolute;
    width: 25px;
    height: 32px;
    margin-top: 29px;
    right: 0;
  }
  span {
    text-align: right;
    display: inline-block;
    width: 224px;
    color: #a7a7a7;
  }
  #sp1{margin-left:350px;}
  #sp2{margin-left:350px;}
  #sp3{margin-left:350px;}
  #sp4{margin-left:318px;}
  #sp5{margin-left:286px;}
}
  .tail{
    width:670px;
    height:100px;
    background-color:#ffe253;
    margin-left:40px;
  font-size:32px;
  line-height:100px;
    margin-top:140px;
  }
</style>
