<template>
  <div class="showOne">
    <header></header>
    <div class="content">
      <div class="name"></div>
      <div class="price">￥</div>
      <div class="site">
        <span>选择：出发地</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="date">
        <span>选择：日期和出游人群</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="comment">
        <span>查看：更多评论</span>
        <img src="./img/arrowRight.png"/>
      </div>
    </div>
    <footer>
      <span class="sp1"><img src="./img/collect.png"/><br>收藏</span>
      <span class="sp2">立即购买</span>
    </footer>
  </div>

</template>

<script>
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  header{
    width: 750px;
    height: 360px;
  }
  .name{
    width: 100%;
    height: 162px;
    font-size: 32px;
    font-weight: bold;
    color: #5d5d5d;
  }
  .price{
    width: 100%;
    height: 124px;
    font-size:30px;
    font-weight: bold;
    color: #ee7358;
    text-align: left;
  }
  .site,.date,.comment{
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content span{
    font-size: 32px;
    color:#7ab4ee;
    text-align: left;
  }
  .content img{
    width: 32px;
    height: 32px;
  }
  footer{
    width: 100%;
    height:100px;
    position: fixed;
    bottom: 0;
  }
  .sp1{
    width: 150px;
    height: 100px;
    position: fixed;
    left: 0;
  }
  .sp2{
    width: 600px;
    height: 100px;
    background-color:#fae368;
    color:#8c8353;
    font-size: 32px;
    line-height: 100px;
    position: fixed;
    right: 0;
  }
</style>
