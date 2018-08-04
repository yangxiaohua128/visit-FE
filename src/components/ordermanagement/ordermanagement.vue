<template>
  <div class="orderMangement">
    <!--头部-->
    <header>
      <div><img src="./img/left.png" class="img1" width="19" height="19" @touchend="toBack"/></div>
      <p>订单详情</p>
      <div></div>
    </header>
    <!-- 中间部分-->
    <ul class="nav">
      <li v-for="(item,index) in items" :key="item.id" ><img :src='item.path' /><p :class="{'checked':index===n}" @touchend="changeP(index)">{{item.text[0]}}</p></li>
    </ul>
    <div class="content" >
      <div class="oneOrder">
        <div class="time">预定日期:<span>7月25日</span></div>
        <div class="order">
          <div class="headline"><img src="./img/inform.png" width="30" height="30"/><span>重庆旅游三天四晚自由行</span></div>
          <div class="money"><p class="p1">￥1500</p><p class="p2">{{state[m]}}}</p></div>
          <div class="from"><span>7月25日</span>至<span>7月30日</span></div>
          <div class="button"><button type="button" @touchend="again">点评</button><button type="button" @touchend="again">去支付</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="sort"><img :src='dataUrl' @touchend="changeUrl"/></div>
      <div class="lose"><img src="./img/lose.png"/></div>
    </footer>
  </div>
</template>

<script>
// var oImg1 = document.querySelector('.img1')
// oImg1.touchend = function () {}
export default {
  data () {
    return {
      items: [{path: require('./img/complatedorder2.png'), text: ['全部订单', '1']},
        {path: require('./img/waitpay2.png'), text: ['待支付', '2']},
        {path: require('./img/payorder2.png'), text: ['待出行', '3']},
        {path: require('./img/appraise2.png'), text: ['待评价', '4']},
        {path: require('./img/moneyback2.png'), text: ['退款订单', '5']}],
      dataUrl: require('./img/down.png'),
      items: [{path: require('./img/complatedorder2.png'), text: '全部订单'},
        {path: require('./img/waitpay2.png'), text: '待支付'},
        {path: require('./img/payorder2.png'), text: '待出行'},
        {path: require('./img/appraise2.png'), text: '待评价'},
        {path: require('./img/moneyback2.png'), text: '退款订单'}],
      // dataUrl: require('./img/down.png'),
      bOn: false,
      n: -1,
      test: [{content: 1}],
      state: ['待评价', '待出行', '待付款', '已退款'],
      m: 0
    }
  },
  methods: {
    toBack: function () {
      this.$router.back(-1)
    },
    again: function () {
      if (this.button === '点评') {
        this.$router.push({
          path: '/userComment'
        })
      } else if (this.button === '去支付') {
        this.$router.push({
          path: '/waitPay'
        })
      }
    },
    changeP (i) {
      this.n = i
    },
    changeUrl: function () {
      this.bOn ? this.dataUrl = require('./img/up.png') : this.dataUrl = require('./img/down.png')
      this.bOn = !this.bOn
    },
    judge: function () {
      let data = []
      if (data.isevaluate === 0 ) {
        this.m = 0
      } else if (data.isout === 0) {
        this.m = 1
      } else if (data.ispay === 0) {
        this.m = 2
      } else if (data.isfound === 0) {
        this.m = 3
      }
    }
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
  .orderManagement{
    width: 750px;
  }
  header{
    width: 100%;
    height: 90px;
    align-items:center;
    display: flex;
    justify-content:space-between;
    margin-bottom: 20px;

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
  .nav {
    display: flex;
    height: 127px;
    width: 100%;
    list-style: none;
    padding: 0;
    margin-bottom: 35px;
    align-items: center;
    li {
      width: 150px;
      img {
        margin-bottom: 20px;
        width: 40px;
        height: 40px;
        p {
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 30px;
          margin-bottom: 0;
        }
      }
    }
  }
  .nav p.checked{font-size: 34px;border-bottom: 8px #F9DE57 solid}
  .content{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
  }
  .time{
    width: 218px;
    height: 43px;
    font-size: 25px;
    border-radius: 16px 16px;
    background-color:#f9de57;
    margin-left: 17px;margin-bottom: 16px;
    text-align: center;line-height: 43px;
  }
  .order{
    text-align: center;
    display:flex;
    width: 98%;
    height: 320px;
    border: 1px #e4e4e4 solid ;
    justify-content: space-between;
    flex-wrap:wrap;
    padding: 10px;
    margin-bottom: 100px;
  }
  .headline{
    height:150px ;
    width: 450px;
    text-align: left;
    span{
      height:100px;
      color:black;
      font-size: 27px;
    }
  }
  .money{
    width: 201.992px;
    height:80px;
    margin-top: 20px;
    p{
      margin: 0;
      font-size: 30px;
    }
  }
  .p1{
    color:#f1b265;
    font-size:30px;
  }
  .from{
    width: 240px;
    height: 76px;
    border:2px #a9cdef solid;
    border-radius: 15px;
    line-height: 76px;
  }
  .button{
    align-self:flex-end;
    button{
      height: 50px;
      background-color: #eff4f8;
      border: 3px #f9de57 solid;
      border-radius: 10px;
      margin-right:5px;
    }
  }
  footer{
    position: fixed;
    display: flex;bottom: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #f9de57 ;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    div{
      width: 200px;
      height: 80px;
      text-align: center;
    }
    img{
      width:80px;
      height: 80px;
    }
  }
</style>
