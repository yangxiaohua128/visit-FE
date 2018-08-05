<template>
  <div class="history">
    <div class="header">
      <img class="img1" src="./img/Rleft.png">
      <span class="sp1">历史记录</span>
    </div>
    <div class="hrecord">
      <li v-for="(item,index) in tabs"
          :class="{active:index === num}"
          @touchend="tab(index)"
          :key="item.id">{{item}}</li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'position',
    data : function () {
      return {
        tabs : ['西安', '上海', '北京', '广州', '汉中', '成都', '上海', '北京', '广州', '汉中', '成都', '上海', '北京', '广州', '汉中'],
        num : -1
      }
    },
    methods: {
      tab (index) {
        this.num = index
      }
    }
  }
</script>

<style type="text/css">
  .header{
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    width: 750px;
    height: 88px;
    background-color:  #fae368 ;

  }
  .history{
    background-color: #f4f4f4;
  }
  .sp1{
    width: 160px;
    font-size: 38px;
    text-align: center;
    line-height: 88px;
    color: #000;
    margin-right: 295px;
  }
  .img1{
    padding-top: 12px;
    width: 50px;
    height: 60px;
  }
  li{
    display: inline-block;
    width:96% ;
    height: 80px;
    background-color: #ffffff;
    margin-top: 20px;
    border: 2px #ccc solid;
    border-radius: 20px;
  }
</style>
