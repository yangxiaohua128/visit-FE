<template>
<div class="modify">
  <div class="header">
    <img src="./img/jiantouz.jpg"/>
    用户信息
  </div>
  <div class="portrait">
    更换头像
    <img src="./img/head.png"/>
    <p></p>
  </div>
  <div class="middle">
    <div>昵称
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>性别
    <span></span>
    </div>
    <p></p>
    <div>生日
      <img src="./img/jiantou.jpg"/>
  </div>
    <p></p>
    <div>姓名
      <input type="text" placeholder="请填写真实姓名"/>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>手机号
    <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>
      邮箱
      <img src="./img/jiantou.jpg"/>
    </div>
    <div>登录密码
      <span>修改</span>
      <img src="./img/jiantou.jpg"/>
    </div>
  </div>
  <div class="tail">退出登录</div>
</div>
</template>

<script>
    export default {
        name: "modify"
    }
</script>

<style lang="scss">
.modify{width:750px;}
  .header {
    font-size: 32px;

img {
  width: 25px;
  height: 34px;
}

}
</style>
