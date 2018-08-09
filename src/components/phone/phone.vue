<template>
  <div class="phone">
    <div class="head">
      <span id="s1">拾叁旅行欢迎您</span>
      <span id="s2" @touchend="tosignin">取消</span>
    </div>
    <div id="box">
      <ul>
       <li v-on:touchend="qh(true)" class="li1" >账号登录</li>
       <li v-on:touchend="qh(false)" class="li2">短信验证码登录</li>
        <p id="p1"></p>
      </ul>
    <div class="content" v-if="temp">
      <li id="li3"></li>
      <span>账号
        <input type="text" placeholder="手机号" id="puitCentent1" ref="sos1"/>
      </span>
      <p id="puitCentent1-user">*电话号码格式不正确</p>
      <p id="puit1-user">*账号不存在</p>
      <p></p>
      <span>密码
        <input type="text" v-if="pwdType" v-model="eyetxt" id="puitCentent2" ref="sos2">
        <input type="password" v-model="eyetxt" v-else id="puitCentent2-1" ref="sos2">
        <img :src="seen?seenimg:unseenimg" @touchend="changeType()"/>
      </span>
      <p id="puit2-user">*密码错误</p>
      <p></p>
      <button type="button" class="sign" @touchend="toBlock1()">登录</button>
      <button type="button" class="enroll" @touchend="toregister">手机快速注册</button>
    </div>
    <div class="content2" v-if="!temp">
      <li id="li4"></li>
      <span class="sp">手机号
        <input type="text" placeholder="输入手机号" id="puitCentent3" ref="sos3"/>
      </span>
      <p id="puitCentent3-user">*电话号码格式不正确</p>
      <p id="puit3-user">*账号不存在</p>
      <p></p>
      <span class="sp">短信验证码
        <input type="text" id="puitCentent4" ref="sos4">
        <span v-show="sendAuthCode" class="auth_text auth_text_blue"
              @touchend="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">
      {{auth_time}} </span> 秒后重新发送</span>
      </span>
      <p id="puit4-user">*验证码错误</p>
      <p></p>
      <button type="button" class="sign" @touchend="toBlock2()">登录</button>
      <button type="button" class="enroll" @touchend="toregister">手机快速注册</button>
    </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'phone',
  data () {
    return {
      seen: '',
      unseenimg: require('./img/hide.png'),
      seenimg: require('./img/hide2.png'),
      eyetxt: '',
      pwdType: false,
      temp: true,
      sendAuthCode: true,
      auth_time: 0
    }
  },
  methods: {
    changeType: function () {
      this.seen = !this.seen
      this.pwdType = !this.pwdType
    },
    qh: function (t) {
      console.log(t)
      this.temp = t
    },
    getAuthCode: function () {
      this.sendAuthCode = false
      this.auth_time = 60
      var auth_timetimer =  setInterval(() => {
        this.auth_time--
        if(this.auth_time <= 0){
          this.sendAuthCode = true
          clearInterval(auth_timetimer)
        }
      }, 1000)
    },
     tosignin: function(){
       this.$router.push({
         path: '/signin'
      })
    },
    toregister: function(){
      this.$router.push({
        path: '/register'
      })
    },
    toBlock1: function () {
      var reg1 = /^1[3456789]\d{9}$/
      let user_name1 = document.getElementById('puitCentent1-user')
      if(!reg1.test(this.$refs.sos1.value)){
        user_name1.style.display = 'block'
      }
      else{
        user_name1.style.display = 'none'
      }
    },
    toBlock2: function () {
      var reg2 = /^1[3456789]\d{9}$/
      let user_name3 = document.getElementById('puitCentent3-user')
      if(!reg2.test(this.$refs.sos3.value)){
        user_name3.style.display = 'block'
      }
      else{
        user_name3.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="scss">
  .phone{width:750px;}
  .head{
    font-size:32px;margin-top:37px;text-align:left;
    #s1{margin-left:266px;}
    #s2{margin-left:130px;}
  }

  #box{
    font-size:30px;margin-top:60px;text-align:left;
    .li1{margin-left:125px;width:120px;display:inline-block;}
    .li2{margin-left:203px;width:210px;
      display: inline-block;}
    /*#p1{width:240px;height:6px;background-color:#ffe24c;margin-top:28px;}*/
    #p1{width:750px;height:2px;background-color:#e6e6e6;}
  }

  .content{
    margin-left:42px;margin-right:42px;
    #li3{width:240px;height:6px;background-color:#ffe24c;margin-left:30px;}
    span{width:666px;height:120px;font-size:32px;line-height:120px;text-align:left;
      display:inline-block}
    input{margin-left:55px;}
    img {
      width: 44px;
      height: 44px;
      margin-left:130px;
    }
    p{width:666px;height:2px;background-color:#e6e6e6;}
    .sign{width:666px;height:100px;background-color:#ffe24c;
      font-size:30px;margin-top:122px;}
    .enroll{width:666px;height:98px;border:1px #000 solid;background-color:#fff;
      margin-top:304px;}
    #puit1-user,#puitCentent1-user,#puit2-user{
      color: red;
      display: none;
      font-size:20px;
      margin-left:40px;
    }
  }
  .content2{
    margin-left:42px;margin-right:42px;
    #li4{width:240px;height:6px;background-color:#ffe24c;margin-left:400px;}
    .sp{width:666px;height:120px;font-size:32px;line-height:120px;text-align:left;
      display:inline-block}
    input{width:202px;}
    .auth_text{display:inline-block;line-height:70px;
      width:260px;height:70px;background-color:#ffe14d;text-align:center;}
    p{width:666px;height:2px;background-color:#e6e6e6;}
    .sign{width:666px;height:100px;background-color:#ffe24c;
      font-size:30px;margin-top:122px;}
    .enroll{width:666px;height:98px;border:1px #000 solid;background-color:#fff;
      margin-top:304px;}
    #puitCentent3-user,#puit3-user,#puit4-user{
      color: red;
      display: none;
      font-size:20px;
      margin-left:40px;
    }
  }

</style>
