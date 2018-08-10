<template>
<div class="modify">
  <div class="header">
    <img src="./img/jiantouz.jpg" @touchend="tosignin2"/>
    用户信息
    <p></p>
  </div>
  <div class="portrait">更换头像
    <img :src="data2[0].userHead" id="img1"/>
    <img src="./img/jiantou.jpg" id="img2"/>
    <p></p>
  </div>
  <div class="middle">
    <div @touchend="change1()">昵称
      <span id="sp7">{{data2[0].userNickname}}</span>
      <img src="./img/jiantou.jpg"/>
  </div>
    <p></p>
    <div>
      性别
    <span id="sp1">{{data2[0].userSex}}</span>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>
     生日
      <img src="./img/jiantou.jpg"/>
  </div>
    <p></p>
    <div>
      姓名
      <span id="sp3">{{data2[0].userName}}</span>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div @touchend="change2()">
     手机号
      <span id="sp4">{{data2[0].userPhone}}</span>
    <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div @touchend="change3()">
      邮箱
      <span id="sp6">{{data2[0].userEmail}}</span>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div @touchend="change4()">
     登录密码
      <span id="sp5">修改</span>
      <img src="./img/jiantou.jpg"/>
    </div>
    <p></p>
    <div>
      账号注销
    </div>
  </div>
  <div class="tail" @touchend="tosignin">退出登录</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data2: []
    }
  },
  mounted: function () {
    this.integral()
  },
  methods: {
    change2: function () {
  axios({
    method: 'post',
    url: 'http://192.168.43.47:8080/user/alterPhone.do',
    'contentType': 'application/json:charset=utf-8'
  }).then(
    this.$router.push({
      path: '/phonechange'
    })
  ).catch(error => {
    console.log(error)
  })
    },
    change3: function () {
  axios({
    method: 'post',
    url: 'http://192.168.43.47:8080/user/alterEmail.do',
    'contentType': 'application/json:charset=utf-8',
  }).then(
    this.$router.push({
      path: '/emilechange'
    })
  ).catch(error => {
    console.log(error)
  })
    },
    change4: function () {
  axios({
    method: 'post',
    url: 'http://192.168.43.47:8080/user/alterPassword.do',
    'contentType': 'application/json:charset=utf-8',
  }).then(
    this.$router.push({
      path: '/password'
    })
  ).catch(error => {
    console.log(error)
  })
    },
    tosignin: function () {
      this.$router.push({
        path: '/signin'
      })
    },
    tosignin2: function () {
  axios({
    method: 'post',
    url: 'http://192.168.43.47:8080/user/myuser.do',
    'contentType': 'application/json:charset=utf-8',
  }).then(
    this.$router.push({
      path: '/signin2'
    })
  ).catch(error => {
    console.log(error)
  })
    },
    integral: function () {
      axios.get('http://192.168.43.47:8080/user/userList.do').then(resp => {
        let data = resp.data
        this.data2.push(data)
      }).catch(error => {
        console.log(error)
      })
    },
    change1: function () {
      axios({
        method: 'post',
        url: 'http://192.168.43.47:8080/user/saveNickname.do',
        'contentType': 'application/json:charset=utf-8'
      }).then(
        this.$router.push({
          path: '/names'
        })
      ).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
.modify{width:750px;}
  .header {
    font-size: 32px;
    height: 100px;
    line-height: 98px;
    text-align: left;
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
    margin-left:382px;
    border-radius:50%;}
    #img2{
      width:25px;
      height:32px;
      margin-left:15px;
    }
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
    width: 350px;
    color: #a7a7a7;
  }
  #sp1{margin-left:214px;}
  #sp3{margin-left:214px;}
  #sp4{margin-left:182px;}
  #sp5{margin-left:150px;}
  #sp6{margin-left:214px;}
  #sp7{margin-left:214px;}
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
  p{width:670px;height:2px;background-color:#e6e6e6;}
</style>
