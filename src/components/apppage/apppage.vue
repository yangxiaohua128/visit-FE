<template>
  <div class="apppage">
    <div class="shuffling">
      <img src="./img/banner1.jpg">
    </div>
    <div class="search">
      <img src="./img/air.png"/>
      <span>高级搜索</span>
      <input type="search"/>
    </div>
    <div class="nav">
      <div class="pic">
        <img/>
        <img/>
        <img/>
        <img/>
      </div>
    </div>
      <div class="text">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <div class="timesale"></div>
    <div class="fwrap">
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

</script>

<style type="text/css">
  .shuffling{
    width: 750px;
    width: 600px;
  }
  .shuffling img{
    width: 750px;
    height: auto;
  }
  .search{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #98d8fc;
  }
  .search img{
    width: 50px;
    height: 50px;
  }
  .search span{
    text-align: center;
    display: inline-block;
    font-size: 24px;
  }
  .nav{
    width: 100%;
    height: 130px;
  }
  #app{
    margin: 0;
  }
  .footer{
    display: flex;
    justify-content: space-around;
  }
  .footer img{
    width: 70px;
    height: 70px;
  }
  .fwrap{
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
</style>
