<template>
  <div class="orderPage">
    <header>
      <img src="./img/arrowLeft.png" @touchend="toBack"/>
      <p>选择班期和人数</p>
    </header>
    <div class="content">
      <p>出发地</p>
      <div class="local"></div>
      <div class="choice">
        <p>选择数量</p>
        <div class="choice1">
          <span>成人：</span>
          <div class="coutter-wrapper">
            <img src="./img/sub.png"  @touchend="minus();allPrice()">
            <div>{{ orderAdultnum }}</div>
            <img src="./img/add.png"  @touchend="plus();allPrice()">
          </div>
        </div>
        <div class="choice2">
          <span>儿童：</span>
          <div class="coutter-wrapper">
            <img src="./img/sub.png"  @touchend="sub();allPrice()">
            <div>{{ orderChildnum }}</div>
            <img src="./img/add.png" @touchend="add();allPrice()">
          </div>
        </div>
      </div>
      <p>出发日期</p>
      <input type="date" class="date" id="calendar"/>
      <!--<calendar-input :limit="limit" @getValue="getValue" id = "calendar"></calendar-input>-->
    </div>
    <footer>
      <div class="bottom">
        <div class="sp1">总价：<br>￥{{price}}</div>
        <div class="sp2" @touchend="returnDetail()">立即购买</div>
      </div>
    </footer>
  </div>
</template>

<script>
  import calendarInput from '../../../node_modules/calendar-plugin/calendar-input.vue'
  import axios from 'axios'
  export default {
    components: {
      calendarInput
    },
    data () {
      return {
        orderAdultnum: 0,
        orderChildnum: 0,
        price: 0
      }
    },
    methods: {
      minus () {
        if (this.orderAdultnum > 0) {
          --this.orderAdultnum
        }
      },
      plus () {
        ++this.orderAdultnum
      },
      sub () {
        if (this.orderChildnum > 0) {
          --this.orderChildnum
        }
      },
      add () {
        ++this.orderChildnum
      },
      allPrice: function () {
        this.price = 1000 * this.orderAdultnum + 500 * this.orderChildnum
      },
      toBack: function () {
        this.$router.back(-1)
      },
      turnToOderConfirmation: function () {
        if (this.orderAdultnum + this.orderChildnum > 0) {
          this.$router.push({
            path: '/orderconfirmation'
          })
        }
      },
      returnDetail: function () {
        let calendar = document.getElementById('calendar').value
        let result = {'orderTraveltime': calendar, 'orderAdultnum': this.orderAdultnum, 'orderChildnum': this.orderChildnum, 'orderTotalmoney': this.price}
        axios({
          url: 'http://192.168.43.229/orders/insertOrder.do',
          'Content-Type': 'application/x-www-form-urlencoded',
          method: 'post',
          data: result
        }).then(
          this.$router.push({
            path: '/orderconfirmation'
          })
        ).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    background-color: #fff;
    p {
      font-size: 36px;
      color: #787878;
      margin: 0 auto;
      line-height: 90px;
    }
    img {
      width: 22px;
      height: 38px;
    }
  }
  .content {
    p {
      width: 200px;
      font-size: 32px;
      color: #8a898a;
      text-align: left;
      height: 70px;
      line-height: 70px;
    }
    .local {
      width: 200px;
      height: 60px;
      background-color: #fdf4c3;
      border: 1px #f9de57 solid;
      margin-top: 5px;
      margin-bottom: 10px;
      border-radius: 10%;
      font-size: 30px;
      line-height: 74px;
    }
    .choice {
      span {
        font-size: 28px;
        height:32px;
      }
      .choice1,.choice2{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 32px;
          height: 32px;
        }
        .coutter-wrapper{
          display: flex;
          justify-content: space-around;
          align-items: center;
          div{
            background-color: #e0dfdf;
            width: 40px;
            height: 40px;
            font-size: 30px;
          }
        }
      }
      p{
        font-size: 32px;
      }
    }
    /*.coutter-wrapper {*/
    /*div {*/
    /*width: 80px;*/
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*background-color: #f4f4f4;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
    /*align-items: center;*/
    /*margin: 0;*/
    /*display: inline-block;*/
    /*}*/
    /*}*/
    .date{
      height: 74px;
      border-radius: 10%;
      margin-right: 500px;
      background-color: #fdf4c3;
      border: 1px #f9de57 solid;
    }
  }
  footer{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 100px;
    .bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;
      sp1{
        width: 500px;
        height: 100px;
        background-color: #fff;
        text-align: left;
      }
      .sp2{
        width: 250px;
        background:#f9de57;
        line-height: 100px;
        color:#8c8353;
      }
    }
  }
</style>
