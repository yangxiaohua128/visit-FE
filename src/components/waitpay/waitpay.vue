<template>
  <div class="waitpay">
    <header>
      <div><img src="./img/left.png" width="19" height="19" @touchend="toBack"/></div>
      <p>订单详情</p>
      <div></div>
    </header>
    <div class="content">
      <div class="show">
        <div class="await">
          <img src="./img/wait.png" width="20" height="20"/>
          <span class="awaitText">待支付</span>
        </div>
        <span>库存有限，请尽快完成付款</span>
      </div>
      <div class="waitTime">
        <div class="countDown"><span>剩余支付时间</span>：<span class="time">{{`${min}分钟${sec}秒`}}</span></div>
        <button type="button" @touchend="returnPay()">继续支付</button>
      </div>
      <div class="details">
        <div class="number">订单号 :{{data1[0].orderNumber}}</div>
        <div class="time">{{data1[0].orderTime}}</div>
        <div class="img"><img :src="data1[0].productImgurl" width="100" height="100"></div>
        <div class="text">{{data1[0].productContent}}</div>
      </div>
      <div class="message">
        <div class="start">启程日<br/><p>{{data1[0].orderTraveltime}}</p></div>
        <p class="line"></p>
        <div class="end">返程日<br/><p>{{data1[0].orderReturntime}}</p></div>
        <div class="moneyPeople">
          <div class="money">总额:￥{{data1[0].orderTotalmoney}}</div>
          <div class="people">人数:<br>{{data1[0].orderAdultnum}}成人 {{data1[0].orderChildnum}}小孩</div>
        </div>
      </div>
      <div class="change">
        <button type="button" class="submit" @touchend="returnDelelt()">申请取消</button>
        <button type="button" class="back" @touchend="toOrderComfirmation()">修改订单</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'waitpay',
  data () {
    return {
      min: 0,
      sec: 0,
      authTime: 0,
      data1: []
    }
  },
  mounted: function () {
    this.countdown(this.authTime)
    this._initData()
  },
  methods: {
    toBack: function () {
      this.$router.back(-1)
    },
    toOrdercomfirmation: function () {
      this.$router.push({
        path: '/orderconfirmation'
      })
    },
    countdown: function () {
      this.authTime = 180
      let authTimeTimer = setInterval(() => {
        let min = parseInt(this.authTime / 60)
        let sec = parseInt(this.authTime % 60)
        this.min = min > 9 ? min : '0' + min
        this.sec = sec > 9 ? sec : '0' + sec
        this.authTime--
        const that = this
        if (that.authTime <= 0) {
          this.min = '00'
          this.sec = '00'
          clearInterval(authTimeTimer)
        }
      }, 1000)
    },
    _initData: function () {
      axios.get('http://192.168.43.229/orders/showSingleOrderF.do').then(resp => {
        let data = resp.data
        this.data1.push(data)
      }).catch(error => {
        console.log(error)
      })
    },
    returnPay: function () {
      let dataPay = {'orderId': this.data1[0].orderId}
      axios({
        method: 'post',
        url: 'http://192.168.43.229/orders/pay.do',
        'Content-Type': 'application/json;charset=utf-8',
        data: dataPay
      }).then(
        this.$router.push({
          path: '/pay'
        })
      ).catch(error => {
        console.log(error)
      })
    },
    returnDelelt: function () {
      let dataDelete = {'orderId': this.data1[0].orderId}
      axios({
        method: 'post',
        url: 'http://192.168.43.229/orders/deleteOrder.do',
        'Content-Type': 'application/json;charset=utf-8',
        data: dataDelete
      }).then(
        this.$router.push({
          path: '/pay'
        })
      ).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
  .order{
    width: 750px;
  }
  header{
    width: 100%;
    height: 90px;
    align-items:center;
    display: flex;
    justify-content:space-between;
    background-color: #1ca0f2;
    div{
      text-align: left;
      padding-left: 20px;
      width: 150px;
      height: 38px;
    }
    p{
      text-align: center;
      line-height: 38px;
      font-size: 36px;
      color:black;
    }
  }
  .content{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
  }
  .show{
    width: 100%;
    box-sizing:border-box;
    /*border-radius: 14px;*/
    background-color: #1ca0f2;
    display: flex;
    flex-wrap:wrap;
    padding: 20px;
    .await{
      width: 500px;
      text-align: left;
      margin-bottom: 20px;
      .awaitText{
        width: 100px;
        font-size: 50px;
        margin: 0;
        color: white;
      }
    }
    span{
      font-size: 32px;
      color: white;
      height: 40px;
      line-height: 40px;
    }
  }
  .waitTime{
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing:border-box;
    align-items: center;
    background-color: #fffcf3;
    padding-left:20px;
    margin-bottom: 20px;
    .countDown{
      width: 430px;
      text-align: left;
      font-size: 35px;
      display: inline-block;
      .time{
        width: 100px;
        font-size:20px
      }
    }
    button{
      height: 100px;
      font-size: 45px;
      background-color: #f9de57;
      border: none;
    }
  }
  .details {
    width: 92%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 80px;
    .state{
      width: 100%;
      background-color: #f9de57;;
      margin-bottom: 20px;
      font-size: 35px;
      border-radius: 12px;
    }
    .number {
      width: 300px;
      height: 40px;
      border: 1px #0094e3 solid;
      border-radius: 12px;
      color: #858585;
      text-align: left;
      line-height: 40px;
      padding: 10px;
      font-size: 24px;
      margin-bottom: 30px;
    }
    .time {
      width: 250px;
      height: 40px;
      color: #858585;
      text-align: left;
      line-height: 40px;
      padding: 10px;
      font-size: 24px;
      margin-bottom: 30px;
    }
    .img {
      width: 200px;
      height: 200px;
      border: 1px rebeccapurple solid;
      align-self: flex-end;
    }
    .text {
      width: 400px;
      height: 200px;
      border: 1px rebeccapurple solid;
      align-self: flex-end;
    }
  }
  .message {
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 40px;
    .line {
      width: 300px;
      height: 3px;
      background-color: #e2e2e2;
    }
    .start {
      width: 170px;
      height: 200px;
      font-size: 28px;
      p {
        font-size: 36px;
      }
    }
    .end {
      width: 170px;
      height: 200px;
      font-size: 28px;
      p {
        font-size: 36px;
      }
    }
    .moneyPeople {
      width: 690px;
      display: flex;
      justify-content: space-between;
      font-size: 32px;
      color: #2a2a2a;
      border-bottom: 3px #e2e2e2 solid;
      margin-bottom: 70px;
      .money {
        width: 250px;
        text-align: center;
      }
      .people {
        width: 200px;
        text-align: center;
      }
    }
  }
  .change{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    button {
      width: 300px;
      height: 90px;
      background-color: #f9de57;
      border-radius: 8px;
      font-size: 38px;
      border: none;
    }
  }
</style>
