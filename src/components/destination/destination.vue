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
      </div>
    </div>
    <div class="section">
      <ul>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'destination',
  data () {
    return {
      list: [
        { src: './img/test.jpg' }, { src: './img/test.jpg' }, { src: './img/test.jpg' }, { src: './img/test.jpg' }
      ]}
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
    z-index: 999;
    width: 750px;
    height: 50px;
  }
  .sp1{
    margin-right: 275px;
    font-size: 40px;
    color: #000000;
  }
  input{
    border: 2px #5dc7b9 solid;
    width: 500px;
    height: 60px;
    border-radius: 20px;
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
    width: 176px;
    height: 163px;
    background-color:#f5f5f5;
    text-align: center;
    line-height: 152px;
    border-bottom: 2px #ccc solid;
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
    width: 733.5px;
    display: flex;
    justify-content:space-around ;
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
