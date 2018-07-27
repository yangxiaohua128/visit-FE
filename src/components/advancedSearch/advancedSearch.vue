<template>
    <div class="advancedSearch">
      <header>
        <div>
          <img src="./img/return.png">
        </div>
        <p>高级搜索</p>
        <div></div>
      </header>
      <div class="content">
        <p class="termini">目的地或关键词</p>
        <div class="destination">
          <div v-for="item of des" :key="item.id">{{item}}</div>
          <div>
            更多
            <img src="./img/more.png">
          </div>
          <input type="text" placeholder="输入目的地、主题或关键字">
        </div>
        <div class="depart">
          <div class="start">出发地</div>
          <div class="location">
            <div>
              <img src="./img/location.png">
              <span></span>
            </div>
            <span>&gt;</span>
          </div>
          <div class="line"></div>
          <div class="start">出发日期</div>
          <div class="time">
            <span>最早</span>
            <span>&gt;</span>
          </div>
          <div class="anotherLine"></div>
          <div class="time">
            <span>最晚</span>
            <span>&gt;</span>
          </div>
        </div>
        <div class="select">
          <div class="budget">
            <p>单人预算
              <span></span>
              元
            </p>
          </div>
          <div class="line"></div>
          <div class="days">
            <p>
              出行天数
              <span></span>
              天
            </p>
          </div>
        </div>
        <button class="search">
          搜索
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'advancedSearch',
  data () {
    return {
      des: ['周边', '境内', '港澳台', '东南亚', '日韩朝蒙', '欧洲', '美洲']
    }
  }
}
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  .advancedSearch{
    width:750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
  }
  header img{
    width:38px;
    height:38px;
  }
  header p,header div{
    width:150px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 36px;
    color: black;
  }
  .content{
    width:92%;
    margin: 0 auto;
  }
  .termini{
    width:100%;
    height:68px;
    line-height: 68px;
    font-size: 28px;
    color: #1d1d1d;
    margin: 0;
    text-align: left;
  }
  .destination{
    margin-top:14px;
    margin-bottom:20px;
    width:100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .destination div{
    width:165px;
    height:62px;
    border: 1px #ddd solid;
    border-radius: 5px;
    line-height: 62px;
    font-size: 28px;
    text-align: center;
    color:#727272;
    margin-bottom: 6px;
  }
  .destination img{
    width:20px;
    height:20px;
  }
  .destination input{
    width:100%;
    height: 72px;
    border-radius: 6px;
    background-color: #efefef;
    color: #909090;
    padding-left: 22px;
    border: 0;
    margin-top: 14px;
  }
  .depart{
    display:flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 28px;
    border-top: 1px #ccc solid;
    border-bottom: 1px #ccc solid;
  }
  .start{
    width:140px;
    height: 90px;
    line-height: 90px;
    color:#242424;
    text-align: left;
  }
  .location{
    width:490px;
    display: flex;
    justify-content: space-between;
    height: 90px;
    line-height: 90px;

  }
  .location img{
    width:28px;
    height: 28px;
  }
  .time{
    width:220px;
    display: flex;
    justify-content: space-between;
    height: 90px;
    line-height: 90px;
    color:#979797;
  }
  .location span:nth-child(2){
    color:#979797;
  }
  .line{
    width:100%;
    height: 1px;
    background-color: #ccc;
  }
  .anotherLine{
    width:1px;
    height:90px;
    background-color: #ccc;
  }
  .select{
    display: flex;
    width:100%;
    border-top: 1px #ccc solid;
    border-bottom: 1px #ccc solid;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .budget,.days{
    width:100%;
    height: 238px;
  }
  .search{
    width:91%;
    height:90px;
    border-radius: 8px;
    background-color: #ff9a00;
    color: #edffff;
    font-size: 38px;
    border: 0;
  }
</style>
