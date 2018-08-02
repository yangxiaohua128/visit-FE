<template>
  <div class="position">
    <div class="search">
      <img src="./img/Rleft.png"/>
      <input type="search" placeholder="搜索城市"/>
    </div>
    <div class="nowposition">
      <span><img src="./img/positionpic.png"/>定位</span>
    </div>
    <div class="positionnew">
      <div>定位失败</div>
    </div>
    <div class="hotcity">
      <div>热门城市</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "position"
    }
</script>

<style type="text/css">
  .search{
    display: flex;
    justify-content: center;
    justify-content: space-between;
  }
  .search img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }
  .search input{
    border-radius: 20px;
    text-align: center;
    margin-right: 100px;
    width: 500px;
    border: 2px  #5dc7b9 solid;
  }
  .nowposition{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 32px;
    background-color: #f4f4f4;
  }
  .nowposition span{
    margin-left: 20px;
    text-align: center;
    line-height: 32px;
    color: #5dc7b9;
  }
  .positionnew{
    display: flex;
    justify-content: space-between;
    height: 120px;
  }
  .positionnew div{
    margin-left: 20px;
    margin-top: 37px;
    height: 50px;
    width: 125px;
    text-align: center;
    line-height: 50px;
    border: 2px #f4f4f4 solid;
    border-radius: 30px;
    font-size: 24px;
  }
  .hotcity{
    display: flex;
    justify-content: space-between;
    height: 32px;
    background-color: #f4f4f4;
  }
  .hotcity div{
    color: #5dc7b9;
    margin-left: 20px;
  }
</style>
