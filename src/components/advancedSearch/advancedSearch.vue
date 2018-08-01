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
        <p class="termini">搜索推荐</p>
        <div class="destination">
          <div v-for="item of des" :key="item.id">{{item}}</div>
          <div>
            更多
            <img src="./img/more.png">
          </div>
          <form>
            <input type="search" placeholder="输入目的地、主题或关键字">
          </form>
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
            <p>单人预算</p>
          </div>
          <div class="line"></div>
          <div class="days">
            <p>出行天数</p>
          </div>
        </div>
        <div class="white"></div>
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
      des: ['华山', '青海', '延安', '西北', '三亚', '四川', '北京']
    }
  }
}
</script>

<style lang="scss" scoped>
  .advancedSearch{
    width:750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    img{
      width:38px;
      height:38px;
    }
    p{
      width:200px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 36px;
      color: black;
    }
    div{
      width:100px;
      height: 38px;
      line-height: 38px;
      font-size: 36px;
      color: black;
    }
  }
  .content{
    .termini{
      width:100%;
      height:68px;
      line-height: 68px;
      font-size: 28px;
      color: #1d1d1d;
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
      div{
        width:165px;
        height:62px;
        border: 1px #ddd solid;
        border-radius: 5px;
        line-height: 62px;
        font-size: 28px;
        text-align: center;
        color:#727272;
        margin-bottom: 6px;
        img{
          width:20px;
          height:20px;
        }
      }
      form{
        width: 100%;
        input{
          width:100%;
          height: 72px;
          border-radius: 20px;
          background-color: #efefef;
          color: #909090;
          padding-left: 22px;
          margin-top: 14px;
        }
      }
    }
    .depart{
      display:flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 28px;
      border-top: 1px #ccc solid;
      border-bottom: 1px #ccc solid;
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
        img{
          width:28px;
          height: 28px;
        }
        span:nth-child(2){
          color:#979797;
        }
      }
      .time{
        width:220px;
        display: flex;
        justify-content: space-between;
        height: 90px;
        line-height: 90px;
        color:#979797;
      }
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
      .budget,.days{
        width:100%;
        height: 238px;
        p{
          font-size: 28px;
          text-align: left;
          margin-top: 28px;
        }
      }
    }
    .search{
      width:91%;
      height:90px;
      border-radius: 8px;
      background-color: #f9de57;
      color: black;
      font-size: 38px;
      position: fixed;
      bottom: 10px;
      left: 31px;
    }
    .white{
      height:110px;
      width: 100%;
    }
  }

</style>
