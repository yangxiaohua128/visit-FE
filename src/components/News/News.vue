<template>
  <div class="news">
    <div class="header">
      <img src="./img/Rleft.png" @touchend="toBack">
      <span class="sp1">消息</span>
    </div>
    <!--<ul>-->
      <!--<li-->
        <!--v-for="(item,index) in tabs"-->
        <!--:class="{active:index === num}"-->
        <!--@touchend="tab(index)"-->
        <!--:key="item.id">{{item}}</li>-->
    <!--</ul>-->
    <div class="newstype">
      <div class="shop" @touchend="hotcity()">供应商</div>
      <div class="activity" @touchend="active()">活动</div>
    </div>
    <div class="banner"></div>
    <div class="shownews">
      <div v-for="(item,index) in tabs"
           :class="{active:index === num}"
           :key="item.id">
        <img src="./img/gys.png"/>
        <span class="s1">{{item.supplyName}}</span>
        <li>{{item.supplyreplyResponse}}</li>
        <span class="time">{{item.supplyreplyCreatetime}}</span>
      </div>
    </div>
    <div class="shownew" >
      <div v-for="(item1,index) in tabc"
          :class="{active:index === num}"
          :key="item1.id">
        <img src="./img/hd.png"/>
        <li>{{item1.specialContent}}</li>
        <span>{{item1.specialStarttime}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  name: 'News',
  data: function () {
    return {
      tabs: [],
      tabContents: [],
      num: 1
    }
  },
  // mounted: function () {
  //   this.hotcity()
  //   this.active()
  // },
  mounted: function () {
    this.hotcity()
  },
    methods: {
      tab (index) {
        this.num = index
      },
      toBack: function () {
        this.$router.back(-1)
      },
      hotcity: function () {
        axios.get('http://192.168.43.57:8080/supplyreply/getsupplyreply.do').then(resp => {
          let data = resp.data
          this.tabc = []
          for (var i=0;i<data.length; i++) {
            this.tabs.push(data[i])
          }
        }).catch(error => {
          console.log(error)
        })
      },
      active: function () {
        axios.get('http://192.168.43.57:8080/specialtime/reply.do').then(resp => {
          let data = resp.data
          this.tabs = []
          for (var i=0;i<data.length; i++) {
            this.tabc.push(data[i])
          }
        }).catch(error => {
          console.log(error)
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
   .header img{
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
    width: 96%;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .newstype{
    width : 750px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 30px;
  }
  .shop{
    margin-left: 30px;
  }
  .activity{
    margin-right: 30px;
  }
  .shownews div{
    display: flex;
    justify-content: space-around;
    border-bottom: 2px #f4f4f4 solid;
    margin-top: 30px;
  }
  .shownew div{
    display: flex;
    justify-content: space-around;
    border-bottom: 2px #f4f4f4 solid;
    margin-top: 30px;
  }
  .shop.active{
    color: #fae368;
  }
  .shownews img{
    margin-left: 10px;
    width:70px;
    height:70px;
  }
  .shownew img{
    margin-left: 10px;
    width:70px;
    height:70px;
  }
  .banner{
    width: 750px;
    height: 30px;
    background-color: #f4f4f4;
    margin-top: 30px;
  }
  .shownews li{
    text-align: left;
    text-indent: 2em;
    font-weight: normal;
  }
  .shownew li{
    font-weight: normal;
  }
  .s1{
    font-weight: bold;
  }
</style>
