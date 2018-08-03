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
        <li>热门</li>
        <li>周边</li>
        <li>国内</li>
        <li>港澳台</li>
        <li>欧洲</li>
        <li>美州</li>
        <li>澳中东非</li>
      </ul>
    </div>
    <div class="showpage"></div>
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
  var ali = document.getElementsByTagName("li");
  for(let i=0;i<ali.length;i++){
    this.onclick = function(){
      this.style.backgroundColor = "yellow"
    }
  }
export default {
  name: 'destination'
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
    top: 60px;
  }
  .destination{
    width: 750px;
    height: 2000px;
  }
  .header{
    width: 750px;}
  .destination{
    width: 750px;
  }
  .header{
    height: 240px;
    background-color: #ffe14d;
  }
  .top{
    margin-bottom: 50px;
    padding-top: 25px;
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
  input{
    width: 500px;
    height: 60px;
    border-radius: 20px;
    color: #ffffff;
  }
  input{
    width: 450px;
    height: 60px;
    border-radius: 10px;
  }
  .search{
    position: relative;
  }
  .section{
    position: fixed;
    left: 0;
    bottom: 102px;
  }
  .section li{
    width: 176px;
    height: 131px;
    background-color:#f5f5f5;
    text-align: center;
    line-height: 100px;
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
</style>
