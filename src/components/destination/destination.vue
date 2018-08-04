<template>
  <div class="destination">
    <div class="hwarp">
      <div class="header">
        <div class="top">
          <img src="./img/Rleft.png">
          <span class="sp1">选择目的地</span>
        </div>
        <div class="search">
          <input type="search" placeholder="西安"/>
          <!--<button type="button" class="btn1">搜索</button>-->
        </div>
    <div class="header">
      <div class="top">
        <img src="./img/Rleft.png">
        <span class="sp1">选择目的地</span>
      </div>
      <div class="search">
        <input type="search" placeholder="西安"/>
        <button type="button" class="btn1">搜索</button>
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
        <li
          v-for="(item,index) in tabs"
          :class="{active:index === num}"
          @touchend="tab(index)">{{item}}</li>
        <li>热门</li>
        <li>周边</li>
        <li>国内</li>
        <li>欧洲</li>
        <li>美州</li>
        <li>澳中东非</li>
      </ul>
    </div>
    <div class="showwrap">
      <div class="showpage">
        <img src="http://pcrj3k1qu.bkt.clouddn.com/FqOykJj6L5mh3mlJW4vfiRI398Rq">
        <img src="http://pcrj3k1qu.bkt.clouddn.com/FqOykJj6L5mh3mlJW4vfiRI398Rq">
        <!--<img src="./img/test.jpg">-->
        <!--<img src="./img/test.jpg">-->
        <!--<img src="./img/test.jpg">-->
        <!--<img src="./img/test.jpg">-->
        <!--<img src="./img/test.jpg">-->
      </div>
      <div class="tabCon">
        <div
          v-for='(itemCon,index) in tabContents'
          v-show=" index === num">{{itemCon}}</div>
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <!--< img src="./img/test.jpg">-->
        <ul>
          <li v-for ="item in flowers" :key="item">
            <img :src="defaultImg" alt="flowers">
            <p>{{item}}</p >
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap">
      <div class="footer">
        <div><img src="./img/home.png"/></div>
        <div><img src="./img/dstns.png"/></div>
        <div><img src="./img/History.png"/></div>
        <div><img src="./img/my.png"/></div>
      </div>
      <div class="text">
        <span>旅游首页</span>
        <span>目的地</span>
        <span>浏览历史</span>
        <span>我的</span>
      </div>
    <div class="foter">
      <img>
      <img>
      <img>
      <img>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'destination',
    data: function () {
      return {
        tabs: ['热门', '国内', '周边', '欧洲', '美洲', '澳中东非'],
        tabContents: [ { src: require('./img/test.jpg')}],
        num: 1
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
    height: 2000px;
  }
  .header{
    width: 750px;}
  .destination{
    z-index: 999;
    width: 750px;
  }
  .header{
    height: 240px;
    z-index: 999;
    width: 750px;
    background-color: #fae368;
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
    width: 50px;
    height: 60px;
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
    color: #ffffff;
  }
  input{
    width: 450px;
    height: 60px;
    border-radius: 10px;
    margin-left: 120px;
    margin-left:120px
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
    height: 162.5px;
    background-color:#f5f5f5;
    text-align: center;
    line-height: 152px;
    border-bottom: 1px #ccc solid;
  }
  .footer{
    display: flex;
    justify-content: space-around;
  }
  .footer img{
    width: 70px;
    height: 70px;
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

  .btn1{
    height: 60px;
    width: 100px;
    border-radius: 10px;
    color: #ffe14d;
    background-color: #f5f5f5;
    position: absolute;
    right: 58px;

  }
  .btn1:focus{outline:0;}
  .section{
    position: fixed;
    left: 0;
  }
  .section li{
    width: 176px;
    height: 100px;
    background-color:#f5f5f5;
    text-align: center;
    line-height: 100px;
    border: 2px #ccc solid;
  }
  .showpage{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .showpage img{
    margin-bottom: 20px;
    width: 250px;
    height: 250px;
  }
  .showwrap{
    margin-top: 20px;
    z-index: -999;
    width: 573px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 240px;
  }
  li.active{
    background-color:  #fae368;
    transition: 0.1s all linear;
  }
  .showpage{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .showpage img{
    margin-bottom: 20px;
    width: 250px;
    height: 250px;
  }
  .showwrap{
    margin-top: 20px;
    z-index: -999;
    width: 573px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 240px;
  }
</style>
