<template>
  <div class="orderPage">
    <header>
      <img src="./img/arrowLeft.png"/>
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
            <img src="./img/sub.png" @click="minus">
            <div>{{ result }}</div>
            <img src="./img/add.png" @click="plus">
          </div>
        </div>
        <div class="choice2">
          <span>儿童：</span>
          <div class="coutter-wrapper">
          <img src="./img/sub.png" @click="sub">
          <div>{{ result1 }}</div>
          <img src="./img/add.png" @click="add">
        </div>
        </div>
      </div>
      <p>出发日期</p>
      <!--<calendar-input :limit="limit" @getValue="getValue"></calendar-input>-->
    </div>
    <footer>
      <div class="bottom">
        <div class="sp1">总价：<br>￥</div>
        <div class="sp2">立即购买</div>
      </div>
    </footer>
  </div>
</template>

<script>
// import calendarInput from '../../../node_modules/calendar-plugin/calendar-input.vue';
export default {
  // components: {
  //   calendarInput
  // },
  data () {
    return {
      result: 0,
      result1: 0
    }
  },
  methods: {
    minus () {
      if (this.result > 0) {
        this.result--
        this.$emit('input', {res: this.result, other: '--'})
      } else {
      }
    },
    plus () {
      this.result++
      this.$emit('input', {res: this.result, other: '++'})
    },
    sub () {
      if (this.result1 > 0) {
        this.result1--
        this.$emit('input', {res: this.result1, other: '--'})
      } else {
      }
    },
    add () {
      this.result1++
      this.$emit('input', { res: this.result1, other: '++' })
    }
  }
}
</script>

<style lang="scss">
  .orderPage{
    height: 1334px;
    width: 100%;
  }
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
      height: 74px;
      background-color: #fdf4c3;
      border: 1px #f9de57 solid;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 10%;
    }
    .choice {
      span {
        font-size: 28px;
        height:32px;
      }
      img {
        width: 32px;
        height: 32px;
      }
      .choice1,.choice2{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      p{
        font-size: 32px;
      }
    }
    .coutter-wrapper {
      div {
        width: 80px;
        height: 50px;
        line-height: 50px;
        background-color: #f4f4f4;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        display: inline-block;

      }
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
        .sp1{
          width: 500px;
          height: 100px;
          background-color: #fff;
          font-size: 32px;
          text-align: left;
        }
        .sp2{
          width: 250px;
          background:#f9de57;
          line-height: 100px;
          color:#8c8353;
          font-size: 32px;
        }
      }
    }
</style>
