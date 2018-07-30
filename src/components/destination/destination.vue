<template>
  <div class="destination">
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
    <div class="foter">
      <img>
      <img>
      <img>
      <img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'destination'
}
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
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
    width: 50px;
    height: 60px;
  }
  .sp1{
    margin-right: 275px;
    font-size: 40px;
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
