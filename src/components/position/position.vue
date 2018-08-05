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
      <div class="hc">热门城市</div>
      <div class="city">
      <ul>
        <li v-for="(item,index) in tabs"
            :class="{active:index === num}"
            @touchend="tab(index)"
            :key="item.id">{{item}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'position',
      data : function () {
          return {
            tabs : ['西安', '上海', '北京', '广州', '汉中', '成都', '上海', '北京', '广州', '汉中', '成都'],
            num : 1
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
  .hc{
    text-align: left;
    text-indent: 1em;
    width: 750px;
    color: #5dc7b9;
    background-color: #f4f4f4;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    align-content:space-between;
  }
  li{
    order:;
    width: 20%;
    height: 50px;
    margin:0 0 30px 30px;
    border-radius: 20px;
    text-align: center;
    line-height: 50px;
    background-color: #f4f4f4;
  }
  .city{

    width: 750px;
    padding-top: 30px;
  }
  li.active{
    background-color: #5dc7b9;
  }
</style>
