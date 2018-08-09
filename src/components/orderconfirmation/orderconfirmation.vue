<template>
  <div class="confirmation">
    <header>
      <img src="./img/arrowLeft.png" @touchend="toBack"/>
      <p>订单填写</p>
    </header>
    <form class="information" method="get">
      <div class="content">
        <div class="orderPage">
          <p>(订单显示)</p>
          <div class="photo">（订单照片）</div>
        </div>
        <div class="massage">
          <p>出行信息</p>
          <div>
            <span>出行人</span>
            <input type="search"  placeholder="请添加出行人" required="required"/>
            <img src="./img/addBlue.png" @touchend="turnToMessage">
          </div>
        </div>
        <div class="orderMassage">
          <h1>预订人信息</h1>
          <div>
            <p>联系人</p>
            <input id="orderContactname" type="search" placeholder="请填写订单联系人姓名" required="required"/>
            <span id="Name">请输入姓名</span>
          </div>
          <div>
            <p>电话</p>
            <input id="orderContactphone" type="search" placeholder="请输入手机号码" required="required" ref="N"/>
            <span id="phone">请输入正确的电话号码</span>
          </div>
          <div>
            <p>邮箱</p>
            <input id="orderContactemail" type="email" placeholder="请输入邮箱" required="required" ref="E"/>
            <span id="Email">请输入正确邮箱</span>
          </div>
        </div>
        <div class="save">
          <p >优惠信息</p>
          <span>选择优惠券<img src="./img/arrowRight.png" @touchend="turnToSave"/></span>
        </div>
      </div>
      <footer>
        <span>总价：<br>￥</span>
        <input type="button" value="提交订单" name="submit" @touchend = "toBlock();toBlock1();toBlock2()">
      </footer>
    </form>
  </div>
</template>

<script>
  import InformChange from '../informChange/informChange'
  import axios from 'axios'
  export default {
    name: 'orderconfirmation',
    components: {InformChange},
    methods: {
      toBack: function () {
        this.$router.back(-1)
      },
      turnToMessage: function () {
        this.$router.push({
          path: '/message'
        })
      },
      turnToSave: function () {
        this.$router.push({
          path: '/save'
        })
      },
      toBlock1: function () {
        let reg = /^1[3456789]\d{9}$/
        let phone = document.getElementById('phone')
        if(!reg.test(this.$refs.N.value)) {
          phone.style.display = 'block'
        }
        else{
          phone.style.display = 'none'
        }
      },
      toBlock2: function () {
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        let Email = document.getElementById('Email')
        if (!reg.test(this.$refs.E.value)) {
          Email.style.display = 'block'
        }
        else {
          Email.style.display = 'none'
        }
      },
      toBlock: function () {
        let name = document.getElementById('orderContactname').value
        let Name = document.getElementById('Name')
        if (name) {
          Name.style.display = 'none'
        } else {
          Name.style.display = 'block'
        }
      },
      returnMessage: function () {
        let phoneNumber = document.getElementById('orderContactphone').value
        let name = document.getElementById('orderContactname').value
        let email = document.getElementById('orderContactemail').value
        let Detail = {'orderContactname': name, 'orderContactphone': phoneNumber, 'orderContactemail': email}
        axios({
          url: 'http://192.168.43.229/orders/insertVisitor.do',
          'Content-Type': 'application/x-www-form-urlencoded',
          method: 'post',
          data: Detail
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss">
  .confirmation{
    width:750px;
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
    background-color:#fff;
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
  }
  .orderPage{
    width:100%;
    height:220px;
    background-color: #fff;
    margin-top: 10px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    p{
      width:570px;
      height:80px;
      font-size: 30px;
    }
  }
  .photo {
    width:100px;
    height:100px;
  }
  .massage{
    width:100%;
    height:232px;
    background-color: #fff;
    margin-top: 20px;
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
      padding-top: 15px;
      margin-bottom: 40px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      span{
        color:#565656;
        font-size:28px;
      }
    }
    img{
      width: 32px;
      height: 32px;
    }
  }
  .orderMassage{
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    h1{
      font-size: 30px;
      height:30px;
      font-weight: bold;
      color: #616161;
      text-align: left;
      padding-top: 40px;
    }
    div{
      width:100%;
      height:60px;
      background-color:#fff;
      margin-top:20px;
      font-size:28px;
      text-align: left;
      color:#c1c1c1;
      padding-top: 40px;
      p{
        color:#565656;
        font-size:28px;
        display: inline-block;
        width:116px;
      }
      span{
        color:#ea3c3c;
        font-size:25px;
        text-align:left;
        display: none;
        margin-left: 218px ;
      }
    }
    input{
      margin-left: 96px;
    }
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
    }
  }
</style>
