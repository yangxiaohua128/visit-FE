<template>
  <div class="destination">
    <div class="hwarp">
      <div class="header">
        <div class="top">
          <img src="./img/Rleft.png" @touchend="toBack()">
          <span class="sp1">选择目的地</span>
        </div>
        <div class="search">
          <input type="search" placeholder="西安"/>
          <!--<button type="button" class="btn1">搜索</button>-->
        </div>
      </div>
    </div>
    <div class="section">
      <ul>
        <!--<li>热门</li>-->
        <!--<li>周边</li>-->
        <!--<li>国内</li>-->
        <!--<li>欧洲</li>-->
        <!--<li>美州</li>-->
        <!--<li>澳中东非</li>-->
        <li v-for="(item,index) in tabs"
            :class="{active:index === num}"
            @touchend="tab(index);returntype(item);"
            :key="item.id">{{item}}
        </li>
      </ul>
    </div>
      <div class="showpage">
        <div class="tabCon">
          <div v-for='itemCon in tabContents'
               :key="itemCon.id" >
            <img :src="itemCon.areaImg" @touchend="returnshow()" />
            <span id="city">{{itemCon.areaCity}}</span>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="footer">
          <div @touchend="turnTohome"><img src="./img/home.png"/></div>
          <div><img src="./img/dstns.png"/></div>
          <div @touchend="turnTohis"><img src="./img/History.png"/></div>
          <div><img src="./img/my.png"/></div>
        </div>
        <div class="text">
          <span>旅游首页</span>
          <span>目的地</span>
          <span>浏览历史</span>
          <span>我的</span>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'destination',
    data: function () {
      return {
        tabs: ['热门', '中国', '周边', '欧洲', '美洲', '澳中东非'],
        tabContents: [],
        num: 0
      }
    },
    mounted: function () {
      this.returnfirst()
    },
    methods: {
      tab (index) {
        this.num = index
      },
      toBack: function () {
        this.$router.back(-1)
      },
      turnTohis: function () {
        this.$router.push({
          path: '/history'
        })
      },
      turnTohome: function () {
        this.$router.push({
          path: '/apppage'
        })
      },
      returntype: function (item) {
        axios({
          url: 'http://192.168.43.168/area/alltarget.do',
          method: 'post',
          data: item,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          xhrFields: {
            withCredentials: true
          }
        }).then(resp => {
          let data2 = resp.data
          this.tabContents = []
          for (let i=0;i<data2.length; i++) {
            this.tabContents.push(data2[i])
          }
        })
      },
      returnfirst: function () {
        axios({
          url: 'http://192.168.43.168/area/alltarget.do',
          method: 'post',
          data: '热门',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          xhrFields: {
            withCredentials: true
          }
        }).then(resp => {
          let data3 = resp.data
          this.tabContents = []
          for (let i=0;i<data3.length; i++) {
            this.tabContents.push(data3[i])
          }
        })
      },
      returnshow: function () {
        let city = document.getElementById('city')
        alert(city.innerHTML)
      }
    }
  }
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  .hwarp{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .destination{
    width: 750px;
  }
  .header{
    z-index: 999;
    width: 750px;
    height: 240px;
    background-color: #5dc7b9;
  }
  .top{
    margin-bottom: 50px;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .header img{
    padding-left: 30px;
    width: 50px;
    height: 50px;
  }
  .sp1{
    margin-right: 275px;
    font-size: 40px;
    color: #000000;
  }
  .search  input{
    border: 2px #5dc7b9 solid;
    width: 500px;
    height: 60px;
    border-radius: 20px;
    margin-left: 120px;
  }
  .search{
    position: relative;
  }
  .section{
    position: fixed;
    left: 0;
    bottom: 105px;
  }
  .section li{
    border-top: 1px #ccc solid;
    width: 176px;
    height: 163px;
    background-color:#f4f4f4;
    text-align: center;
    line-height: 152px;
    border-bottom: 1px #ccc solid;
  }
  .footer{
    display: flex;
    justify-content: space-around;
  }
  .footer img{
    width: 50px;
    height: 50px;
  }
  .wrap{
    background-color: #f5f5f5;
    border-top: 2px #ccc solid;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .text{
    width: 733px;
    display: flex;
    justify-content:space-around ;
  }
  .tabCon img {
    margin-bottom: 30px;
    width: 250px;
    height: 250px;
    margin-left: 20px;
  }
  .showpage{
    margin-top: 20px;
    z-index: -999;
    position: absolute;
    right: 0;
    top: 240px;
    bottom: 106px;
  }
  li.active{
    background-color:  #ffffff;
    transition: 0.1s all linear;
  }
  .tabCon{
    margin-bottom: 106px;
    width:600px;
  }
  .tabCon div span{
    position: relative;
    left: 20px;
    bottom: 20px;
  }
  .tabCon div{
    margin-right: 30px;
    display: inline-block;
    width: 40%;
    padding-left: -30px;
  }
</style>
