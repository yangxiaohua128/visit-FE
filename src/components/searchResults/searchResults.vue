<template>
  <div class="searchResults">
    <header>
      <div>
        <img src="./img/return.png">
      </div>
      <p>西安</p>
      <div>180条</div>
    </header>
    <div class="content">
      <form>
        <input type="search" placeholder="西安">
        <img src="./img/search.png" class="search">
      </form>
      <div>共180条</div>
    </div>
    <div class="content">
      <input type="text" placeholder="西安">
      <ul class="sort">
        <li>热度</li>
        <li>价格升序</li>
        <li>价格降序</li>
      </ul>
      <div class="list">
        <div class="produce">
          <div class="picture">图片</div>
          <div class="goods">
            <p class="message">商品信息</p>
            <span class="comment">好评</span>
            <span class="price">价格</span>
          </div>
        </div>
      </div>
      <img src="./img/foot.png" class="foot">
      <img src="./img/footmark.png" class="footmark">
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
      width:100px;
      height: 38px;
      line-height: 38px;
      font-size: 28px;
      letter-spacing: 0;
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
      width:200px;
      width: 150px;
      height: 38px;
      line-height: 38px;
      font-size: 36px;
      color: black;
    }
  }
  .content {
    form {
      position: relative;
      .search {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        left: 5%;
      }
      input {
        width: 95%;
        height: 63px;
        margin: 0 auto;
        border-radius: 20px;
        background-color: #eef1f8;
        padding-left: 100px;
      }
      input {
        width: 90%;
        height: 63px;
        margin: 0 auto;
        border-radius: 26px;
        background-color: #eef1f8;
        padding-left: 50px;
      }
      .sort {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 90px;
        li {
          width: 200px;
          height: 60px;
          line-height: 60px;
          font-size: 28px;
        }
      }
      .list {
        width: 100%;
        .produce {
          width: 100%;
          height: 230px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          border-bottom: 1px #ccc solid;
          .picture {
            width: 190px;
            height: 190px;
            background-color: black;
          }
          .goods {
            display: flex;
            width: 480px;
            height: 180px;
            justify-content: space-between;
            background-color: chartreuse;
            flex-wrap: wrap;
            .message {
              width: 100%;
              height: 80px;
              font-size: 28px;
              overflow: hidden;
              background-color: antiquewhite;
            }
            .comment {
              width: 60%;
              height: 34px;
              line-height: 34px;
              font-size: 22px;
              background-color: aqua;
              align-self: center;
            }
            .price {
              width: 33%;
              height: 60px;
              line-height: 60px;
              font-size: 34px;
              background-color: blue;
              align-self: flex-end;
            }
          }
        }
      }
      .foot {
        .footmark {
          width: 80px;
          height: 80px;
          position: fixed;
          bottom: 100px;
          right: 30px;
        }
      }
    }
  }

</style>
