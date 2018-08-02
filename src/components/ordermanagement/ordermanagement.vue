<template>
  <div class="ordermangement">
    <!--头部-->
    <header>
      <div><img src="./img/left.png" class="img1" width="19" height="19" @touchend="toBack"/></div>
      <p>订单详情</p>
     <div></div>
    </header>
    <!-- 中间部分-->
      <!--<div class="nav">-->
        <!--<div v-for="item in items" :key="item.id"><img :src="{{item.path}}"/><p>{{item.text}}</p></div>-->
      <!--</div>-->
    <div class="content">
      <div class="oneOrder">
      <div class="time">预定日期:<span>7月25日</span></div>
      <div class="order">
        <div class="headline"><img src="./img/inform.png" width="30" height="30"/><span>重庆旅游三天四晚自由行</span></div>
        <div class="money"><p class="p1">￥1500</p><p class="p2">状态</p></div>
        <div class="from"><span>7月25日</span>至<span>7月30日</span></div>
        <div class="button"><button type="button">点评</button><button type="button">去支付</button>
        </div>
      </div>
      </div>
    </div>
    <footer>
      <div class="sort"><button type="button" >近--远</button></div>
      <div class="lose"><button type="button">失效订单</button></div>
    </footer>
  </div>
</template>

<script>
// var oImg1 = document.querySelector('.img1')
// oImg1.touchend = function () {}
export default {
  name: 'ordermanagement',
  data () {
    return {
      items: [
        {path: require('./img/complatedorder2.png'), text: '全部订单'},
        {path: require('./img/waitpay2.png'), text: '待支付'},
        {path: require('./img/payorder2.png'), text: '待出行'},
        {path: require('./img/appraise2.png'), text: '待评价'},
        {path: require('./img/moneyback2.png'), text: '退款订单'}
      ]
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
.ordermangement{
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
.nav{
    display: flex;
    height:127px;
    width: 100%;
    border-bottom:6px #dfdfdf solid;
    list-style:none;
    padding: 0;
    margin-bottom: 35px;
    align-items: center;
  div{
    width: 150px;
  }
  img{
    width: 40px;
    height: 40px;
  }
  p{
    text-align: center;
    line-height:26px;
    font-size: 27px;
    margin-bottom: 0;
  }
}
.content{
     width: 100%;
    display: flex;
    flex-wrap:wrap;
    margin-bottom: 40px;
}
.time{
    width: 218px;
    height: 43px;
    font-size: 25px;
    border-radius: 16px 16px;
    background-color:#a9cdef;
    margin-left: 17px;margin-bottom: 16px;
    text-align: center;line-height: 43px;
  }
.order{
  text-align: center;
    display:flex;
    width: 98%;
    height: 320px;
    border: 1px #e4e4e4 solid ;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap:wrap;
  }
.headline{
    height:150px ;
    width: 500px;
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
    height: 76px;
    background-color: #eff4f8;
    border: none;
    border-radius: 10px;
    margin-right:5px;
  }
}
  footer{
    position: fixed;
    display: flex;bottom: 0;
    width: 100%;
    margin: 0 auto;
    background-color: #e8edf1;
    justify-content: space-between;
    button{
      width: 300px;
      height: 40px;
      font-size: 35px;
      background-color:#e8edf1;
      color: black;
    }
  }
</style>
