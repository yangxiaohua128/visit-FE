<template>
  <div class="searchResults">
    <header>
      <div>
        <img src="./img/return.png">
      </div>
      <p>西安</p>
      <div>共180条</div>
    </header>
    <div class="content">
      <input type="text" placeholder="西安">
      <ul class="sort">
        <li>热度</li>
        <li>价格升序</li>
        <li>价格降序</li>
      </ul>
      <ul class="list">
        <li>
          <div class="picture"></div>
          <div class="goods">
            <p class="message"></p>
            <span class="price"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResults',
  data () {
    return {
      msg: '[]'
    }
  }
}
</script>

<style lang="scss" scoped>
  .searchResults{
    width:750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    div{
      width: 150px;
      height: 38px;
      line-height: 38px;
      font-size: 30px;
      color: #aaa9a9;
      img{
        width:38px;
        height:38px;
      }
    }
    p{
      width: 150px;
      height: 38px;
      line-height: 38px;
      font-size: 36px;
      color: black;
    }
  }
  .content{
    width:92%;
    margin: 0 auto;
    input{
      width: 90%;
      height: 63px;
      margin: 0 auto;
      border-radius: 26px;
      background-color: #eef1f8;
      padding-left: 50px;
    }
    .sort{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100px;
      li{
        width:200px;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
      }
    }
    .list{
      width:100%;
      li{
        width: 100%;
        height: 230px;
        display: flex;
        justify-content: space-between;
        .picture{
          width: 190px;
          height: 190px;
        }
        .goods{
          display: flex;
          width: 480px;
          height: 170px;
        }
      }
    }
  }

</style>
