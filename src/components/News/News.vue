<template>
  <div class="history">
    <div class="header">
      <img src="./img/Rleft.png">
      <span class="sp1">消息</span>
    </div>
    <div class="middle">
      <span class="sp3">供应商</span>
      <span class="sp4" v-show="isshow" @touchend="hidden()">活动</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history，',
    data: function () {
      return {
        isshow: false
      }
    },
    methods: {
      hidden () {
        this.isshow = !this.isshow
      }
    }
  }
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  span{
    margin: 0;
    padding: 0;
  }
  img{
    padding-top: 7.5px;
    width: 50px;
    height: 60px;
  }
  .header{
    display: flex;
    width: 750px;
    height: 88px;
    justify-content: space-between;

  }
  .sp1  {
    margin-right: 318px;
    color: #000;
    line-height: 88px;
    font-size: 38px;
    text-align: center;
  }
  .middle{
    display: flex;
    padding-top: 5px;
    width: 750px;
    height: 88px;
    line-height: 88px;
    font-size: 36px;
    background-color: #fcfcfc ;
    border: 1px solid #e6e6e6;
    justify-content: space-between;
  }
  .sp1{
    margin-left: 40px;
  }
  .sp3{
    margin-left: 47px;
  }
  .sp4{
    margin-right: 47px;

  }
  .sp3,.sp4{
    background-color: #ffffff;
    font-weight: bold;
  }
</style>
