<template>
<div class="signin">
  <div class="div1" >
    <img id="img1" src="img/picture-1.png"/>
    <p>欢迎来到。。。</p>
    <div>登录/注册</div>
    <img id="img2" src="img/消息.png"/>
  </div>


</div>
</template>

<script>
  export default {
    name: 'signin',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
.signin{width:750px;}
.div1{width:100%;height:416px;padding-left:43px;padding-right:43px;position: relative;}
  #img1{position:absolute;right:28px;bottom:0;}
  #img2{position:absolute;right:0;top:31px;}
  .div1 p{margin-top:132px;color:#424242;font-size:61px;}
  .div1 div{width:}
</style>
