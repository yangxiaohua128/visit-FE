<template>
  <div class="phone">
    <div class="head">
      <span id="s1">马蜂窝旅行欢迎您</span>
      <span id="s2">取消</span>
    </div>
    <div id="box">
      <ul>
       <li v-on:touchend="qh(true)" class="li1" >账号登录</li>
       <li v-on:touchend="qh(false)" class="li2">短信验证码登录</li>
        <p id="p1"></p>
        <p id="p2"></p>
      </ul>
    <div class="content" v-if="temp">
      <span>账号
        <input type="text" placeholder="手机号"/>
      </span>
      <p></p>
      <span>密码
        <input type="text" v-if="pwdType" v-model="eyetxt">
        <input type="password" v-model="eyetxt" v-else>
        <img :src="seen?seenimg:unseenimg" @touchend="changeType()"/>
      </span>
      <p></p>
      <button type="button" class="sign">登录</button>
      <button type="button" class="enroll">手机快速注册</button>
    </div>
    <div class="content2" v-if="!temp">
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
    </div>
</template>

<script>
  export default {
    name: 'phone',
    data() {
      return {
        seen: '',
        unseenimg: require('./img/hide.png'),
        seenimg: require('./img/hide2.png'),
        eyetxt: "",
        pwdType: false,
        temp:true
      }
    },
    methods: {
      changeType: function () {
          this.seen = !this.seen;
          this.pwdType=!this.pwdType;
      },
      qh:function(t){
        console.log(t);
        this.temp=t
      }

    }
  }
</script>

<style lang="scss">
  .phone{width:750px;}
  .head{
    font-size:32px;margin-top:37px;text-align:left;
    #s1{margin-left:234px;}
    #s2{margin-left:130px;}
  }

  #box{
    font-size:30px;margin-top:60px;text-align:left;
    .li1{margin-left:125px;width:120px;display:inline-block;}
    .li2{margin-left:203px;width:210px;
      display: inline-block;}
    #p1{width:240px;height:6px;background-color:#ffe24c;margin-top:28px;}
    #p2{width:750px;height:2px;background-color:#e6e6e6;}
  }

  .content{
    margin-left:42px;margin-right:42px;
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
  /*.li1{*/
    /*font-size:30px;*/
    /*position: absolute;*/
    /*left:128px;*/
  /*}*/
  /*.li2{*/
    /*font-size:30px;*/
    /*position: absolute;*/
    /*right:77px;*/
  /*}*/
</style>
