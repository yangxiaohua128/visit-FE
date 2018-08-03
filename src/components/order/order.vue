<template>
  <div class="order">
  <header>
    <!--<div><img src="./img/left.png" width="16" height="16"/></div>-->
    <p>订单详情</p>
    <div></div>
  </header>
    <header>
      <div><img src="./img/left.png" width="19" height="19" @touchend="toBack"/></div>
      <p>订单详情</p>
      <div></div>
    </header>
    <div class="content">
      <div class="details">
        <div class="number">订单号 ：</div>
        <div class="time"></div>
        <div class="img"></div>
        <div class="text"></div>
      </div>
      <div class="message">
        <div class="start">启程日<p>07月24日</p></div>
        <p class="line"></p>
        <div class="end">返程日<p>07月25日</p></div>
        <div class="moneyPeople">
          <div class="money">总额:￥1200</div>
          <div class="people">人数:<br>2成人 1小孩</div>
        </div>
        <div class="change">
            <div class="alter">
                  <!--<img src="./img/alter.png" width="20" height="20"/>-->
                  <button type="button">修改订单</button>
           </div>
           <div class="line2"></div>
           <div class="delete">
                  <!--<img src="./img/delete.png" width="20" height="20"/>-->
                  <button type="button">申请退款</button>
           </div>
          <div class="delete">
            <img src="./img/delete.png" width="26" height="26"/>
            <button type="button">申请退款</button>
          </div>
        </div>
      </div>
      <div class="inform">
        <div class="caption">
          <span>出行信息</span>
        </div>
        <div class="main">
          <div class="touch">预定人:<span>xxx</span></div>
          <div class="touchPhone">预定人电话:<span>112xxxx1111</span></div><br>
          <div>
          <div class="trip">出行人:<span>xxx</span></div>
          <div class="phone">联系电话:<span>112xxxx1111</span></div>
          </div><br>
          <!--<div class="trip">出行人:<span>xxx</span></div>-->
          <!--<div class="phone">联系电话:<span>112xxxx1111</span></div>-->
          <!--<div class="trip">出行人:<span>xxx</span></div>-->
          <!--<div class="phone">联系电话:<span>112xxxx1111</span></div>-->
          <!--<div class="trip">出行人:<span>xxx</span></div>-->
          <!--<div class="phone">联系电话:<span>112xxxx1111</span></div>-->
          <!--<div class="trip">出行人:<span>xxx</span></div>-->
          <!--<div class="phone">联系电话:<span>112xxxx1111</span></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
    }
  },
  methods: {
    toBack: function () {
      this.$router.back(-1)
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
    button{
      border: 1px #e2e2e2 solid;
      height: 60px;
      width: 202px;
      background-color: white;
      border-radius: 10px;
      font-size:30px;
    }
  }
  header {
    width: 100%;
    height: 90px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

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
  p{
    text-align: center;
    line-height: 38px;
    font-size: 36px;
    color:black;
  }
  .content{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
  }
  .details {
    width: 92%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px #e4e4e4 solid;
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
  .message{
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 40px;
    .line{
      width: 300px;
      height: 3px;
      background-color:#e2e2e2;
    }
    .start{
      width: 170px;
      height: 200px;
      font-size: 28px;
      p{
        font-size: 36px;
      }
    }
    .end{
      width: 170px;
      height: 200px;
      font-size: 28px;
      p{
        font-size: 36px;
      }
    }
    .moneyPeople{
      width:690px;
      display: flex;
      justify-content: space-between;
      font-size: 32px;
      color:#2a2a2a;
      border-bottom: 3px #e2e2e2 solid;
      margin-bottom: 70px;
      .money{
        width: 250px;
        text-align: center;
      }
      .people{
        width: 200px;
        text-align: center;
      }
    }
    .change{
      width:690px;
      display: flex;
      justify-content: center;
      line-height: 50px;
    }
  }
  .inform{
    width: 100%;
    background-color: #9fa2b6;
    padding-bottom: 20px;
    border-radius: 14px;
    .caption{
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      span{
        width:150px;
        font-size: 36px;
        color: white;
      }
    }
    .main{
      width: 80%;
      background-color: white;
      margin: 0 auto;
      border-radius: 14px;
      padding:10px;
      .touch{
        width: 540px;
        margin: 0 auto;
        text-align: left;
        font-size: 32px;
        padding-bottom: 10px;
      }
      .touchPhone{
        width: 540px;
        margin: 0 auto;
        text-align: left;
        font-size: 32px;
        padding-bottom: 10px;
      }
      .trip{
        width: 540px;
        margin: 0 auto;
        text-align: left;
        font-size: 32px;
        padding-bottom: 10px;
      }
      .phone{
        width: 540px;
        margin: 0 auto;
        text-align: left;
        font-size: 32px;
        padding-bottom: 10px;
      }
    }
  }
</style>
