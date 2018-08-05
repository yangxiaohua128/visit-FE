<template>
  <div class="news">
    <div class="header">
      <img src="./img/Rleft.png">
      <span class="sp1">消息</span>
    </div>
    <ul>
      <li
        v-for="(item,index) in tabs"
        :class="{active:index === num}"
        @touchend="tab(index)"
        :key="item.id">{{item}}</li>
    </ul>
    <div >
      <div class="tabCon" :key="itemCon.id"
        v-for='(itemCon,index) in tabContents'
        v-show="index===num"
           :class="{bgc:index===num}">{{itemCon}}</div>
    </div>
  </div>
</template>
<script>import axios from 'axios'
export default {
  name: 'history，',
  data: function () {
    return {
      tabs: ['供应商', '活动'],
      tabContents: [{1: '1'}, {2: '1'}],
      num: 1
    }
  },
    methods: {
      tab (index) {
        this.num = index
      },
      getnews: function () {
        axios.get('http://www.baidu.com').catch(resp => {
          alert(123)
        })
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
    background-color: #fae368;
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
  .sp1{
    margin-left: 40px;
  }
  ul{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  li{
    margin-right: 20px;
    margin-left: 20px;
    font-size: 36px;
    font-weight: bold;
  }
  li.active{
    color: #fae368 ;
  }
  .tabCon.bgc{
    margin-top: 20px;
    width: 750px;
    height: 1000px;
    border-top: 2px #ccc solid ;
  }
</style>
