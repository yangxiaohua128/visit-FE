<template>
  <div class="orderMangement">
    <!--头部-->
    <header>
      <div><img src="./img/left.png" class="img1" width="19" height="19" @touchend="toBack()"/></div>
      <p>订单详情</p>
      <div></div>
    </header>
    <!-- 中间部分-->
    <ul class="nav">
      <li v-for="(item,index) in items"
          :key="item.id" :class="{'checked':index===n}" @touchend="changeP(index),check()"><img :src='item.path'/><p>{{item.text[0]}}</p></li>
    </ul>
    <div class="content" >
      <p id="none"><img src="./img/point.png" width="30px" height="30px"/>   暂时还没有订单   <img src="./img/point.png" width="30px" height="30px"/></p>
      <div class="oneOrder" @touchend="toOrder(data.orderId)" v-for="data in data1" :key="data.id">
        <div class="time">预定日期：{{data.ordertime}}</div>
        <div class="id">{{data.orderId}}</div>
        <div class="order">
          <div class="img"><img :src="data.img" /></div>
          <div class="inform">
            <div class="div1">
            <div class="text">
              <div class="title"><span>{{data.producttitle}}</span></div>
              <div class="from"><span>{{data.traveltime}}</span>至<span>{{data.returntime}}</span></div>
            </div>
          <div class="money"><p class="p1">￥1500</p><p class="p2" >{{state[m]}}</p></div>
            </div>
          </div>
          <div class="block"></div>
          <div class="button">
            <button type="button" id="btn1" v-show="show1" @touchend.stop="again(2)">去支付</button>
            <button type="button" class="btn2" v-show="show2" @touchend.stop="again(1)">去点评</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div>
      <!--<button type="button" @touchend="timeLose(x),changeUrl()">时间<img :src='dataUrl' width="25" height="25"> </button>-->
        <button type="button" @touchend="timeLose(2)">近-->远<img src="./img/up.png" width="20" height="20"> </button>
      <button type="button" @touchend="timeLose(1)">远-->近<img src="./img/down.png" width="20" height="20"> </button>
      <button type="button" @touchend="timeLose(3)">失效订单</button>
      </div>
      <!--<div class="sort"><img :src='dataUrl' @touchend="changeUrl"/></div>-->
      <!--<div class="lose"><img src="./img/lose.png" @touchend=" _initData(),judge" ></div>-->
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data1: [],
      data2: [],
      items: [{path: require('./img/complatedorder2.png'), text: ['全部订单']},
        {path: require('./img/waitpay2.png'), text: ['待支付']},
        {path: require('./img/payorder2.png'), text: ['待出行']},
        {path: require('./img/appraise2.png'), text: ['待评价']},
        {path: require('./img/moneyback2.png'), text: ['退款订单']}],
      dataUrl: require('./img/down.png'),
      bOn: false,
      n: 0,
      m: 0,
      x: 0,
      state: ['待付款', '待出行', '待评价', '已退款', '已失效'],
      show1: true,
      show2: true
    }
  },
  mounted: function () {
    this.check()
  },
  methods: {
    toBack: function () {
      this.$router.back(-1)
    },
    again: function (number) {
      if (number === 1) {
        this.$router.push({
          path: '/userEvaluation'
        })
      } else if (number === 2) {
        this.$router.push({
          path: '/waitPay'
        })
      }
    },
    toOrder: function (id) {
      this.$router.push({
        path: '/order',
        params: {
          orderId: id
        }
      })
    },
    changeP (i) {
      this.n = i
    },
    // changeUrl: function () {
    //   if (this.bOn) {
    //     this.dataUrl = require('./img/down.png')
    //     this.x = 2
    //     this.bOn = !this.bOn
    //   } else if (!this.bOn) {
    //     this.dataUrl = require('./img/up.png')
    //     this.x = 1
    //     this.bOn = !this.bOn
    //   }
    // },
    changeUrl: function () {
      this.bOn ? this.dataUrl = require('./img/up.png') : this.dataUrl = require('./img/down.png')
      this.bOn = !this.bOn
    },
    // _initData: function () {
    //   axios.get('http://172.20.10.3:8080/orders/showAllOrders.do').then(resp => {
    //     let data = resp.data
    //     if (data.length) {
    //       for (var i = 0; i < data.length; i++) {
    //         this.data1.push(data[i])
    //       }
    //     } else if (!data.length) {
    //       let None = document.getElementById('none')
    //       None.style.display = 'block'
    //     }
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // }

    // if (this.data[i].ispay === 0) {
    //   this.m = 0
    //   this.i = 0
    // } else if (this.data[i].ispay === 1 && this.data[i].isout === 0) {
    //   this.m = 1
    // } else if (this.data[i].ispay === 1 && this.data[i].isout === 1 && this.data[i].isevaluate === 0) {
    //   this.m = 2
    //   this.i = 1
    // } else if (this.data[i].isfound === 1) {
    //   this.m = 3
    // }
    // } else if (!data.length) {
    // let None = document.getElementById('none')
    //       None.style.display = 'block'
    //     }
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },
    // judge: function () {
    //   for (var i = 0; i < this.data1.length; i++) {
    //     if (this.data1[i].ispay === 0) {
    //       this.m = 0
    //       this.i = 0
    //     } else if (this.data1[i].ispay === 1 && this.data1[i].isout === 0) {
    //       this.m = 1
    //     } else if (this.data1[i].ispay === 1 && this.data1[i].isout === 1 && this.data1[i].isevaluate === 0) {
    //       this.m = 2
    //       this.i = 1
    //     } else if (this.data1[i].isfound === 1) {
    //       this.m = 3
    //     }
    //   }
    // },
    check: function () {
      this.data1 = []
      if (this.n === 0) {
        axios.get('http://192.168.43.57:8080/orders/showAllOrders.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
              this.show1 = this.show2 = true
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      } else if (this.n === 1) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersByispay.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
              this.m = 0
              this.show2 = false
              this.show1 = true
            }
            // let show = document.getElementsByClassName('btn2')
            // let arr = []
            // for (let i = 0; i < show.length; i++) {
            //   arr.push(show[i])
            //   arr[i].style.display = 'none'
            //   alert(arr)
            // }
          } else {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      } else if (this.n === 2) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersByisout.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
              this.m = 1
              this.show1 = this.show2 = false
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      } else if (this.n === 3) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersByisevaluate.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
              this.m = 2
              this.show1 = false
              this.show2 = true
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      } else if (this.n === 4) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersByisrefund.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
              this.m = 3
              this.show1 = this.show2 = false
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    timeLose: function (num) {
      if (num === 1) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersBytime.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      } else if (num === 2) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersBydesctime.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      } else if (num === 3) {
        this.data1 = []
        axios.get('http://192.168.43.57:8080/orders/showAllOrdersByislose.do').then(resp => {
          let data = resp.data
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(data[i])
              this.m = 4
            }
          } else if (!data.length) {
            let None = document.getElementById('none')
            None.style.display = 'block'
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    skip: function () {

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
  .nav li.checked{font-size: 34px;border-bottom: 8px #F9DE57 solid}
  .content{
    width: 750px;
    display: flex;
    flex-wrap:wrap;
    #none{
      margin: 300px auto;
      font-size: 33px;
      display: none;
    }
  }
  .oneOrder{
    width: 100%;
  }
  .time{
    width: 280px;
    height: 43px;
    font-size: 25px;
    border-radius: 16px 16px;
    background-color: #f9ee75;
    margin-left: 17px;margin-bottom: 16px;
    line-height: 43px;
    text-align: center;
  }
  .id{
    display: none;
  }
  .oneOrder:last-child{
    margin-bottom: 80px;
  }
  .order {
    text-align: center;
    display: flex;
    border: 1px #e4e4e4 solid;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 50px;
    img {
      width : 150px;
      height: 150px;
    }
    .block{
      width: 300px;
    }
  }
  .inform{
    width: 75%;
    .div1{
      display: flex;
      justify-content: space-between;
      .text{
        .title{
          color: #000000;
          font-size:30px;
          margin-left: 20px;
          margin-top: 10px;
          margin-bottom: 50px;
          text-align: left;
        }
        .form{
          font-size: 25px;
        }
      }
    }
    .money{
      width: 150px;
      height:100px;
      margin: 0;
      font-size: 30px;
      p{
        margin: 0;
        font-size: 30px;
      }
    }
  }
  .p1{
    color:#db2219;
    font-size:30px;
  }
  .from{
    padding: 2px;
    border:2px #a9cdef solid;
    border-radius: 15px;
    align-self:flex-end;
    /*line-height: 76px;*/
  }
  .button{
    align-self:flex-end;
    button{
      height: 50px;
      background-color: #eff4f8;
      border-radius: 20px;
      margin-right:5px;
      padding: 5px;
    }
  }
  /*#show2{*/
    /*display: none;*/
  /*}*/
  footer{
    position: fixed;
    display: flex;bottom: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #f9ee75 ;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    div{
      width:80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    button{
      height: 70px;
      background-color:  #f9ee75;
      font-size: 34px;
      border-radius: 12px;
      padding: 5px;
      font-weight: 500;
    }
    /*div{*/
      /*width: 200px;*/
      /*height: 80px;*/
      /*text-align: center;*/
    /*}*/
    /*img{*/
      /*width:80px;*/
      /*height: 80px;*/
    /*}*/
  }
</style>
