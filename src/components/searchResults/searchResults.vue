<template>
  <div class="searchResults">
    <header>
      <div>
        <img src="./img/return.png" @touchend="toBack">
      </div>
      <p>西安</p>
      <div>180条</div>
    </header>
    <div class="content">
      <ul class="sort">
        <li v-for="(item,index) of items" :key="item.id" :class="{ 'checked':n==index}"
            @touchend="changeN(index)">{{item}}</li>
      </ul>
      <div class="list">
        <div class="produce">
          <div class="picture">图片</div>
          <div class="goods">
            <p class="message">商品信息</p>
            <span class="comment">销量</span>
            <span class="price">价格</span>
          </div>
        </div>
      </div>
      <img src="./img/foot.png" class="foot">
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResults',
  data () {
    return {
      items: ['热度', '价格升序', '价格降序'],
      n: 0
    }
  },
  methods: {
    toBack () {
      this.$router.back(-1)
    },
    changeN (i) {
      this.n = i
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
      color: #aaa9a9;
      img{
        width:38px;
        height:38px;
      }
    }
    p{
      width:200px;
      height: 38px;
      line-height: 38px;
      font-size: 36px;
      color: black;
    }
  }
  .content{
    position: relative;
    .sort{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 90px;
      li{
        width:120px;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
      }
      li.checked{
        color:#000;
        font-size: 30px;
        border-bottom:3px #f9de57 solid;
      }
    }
    .list{
      width:100%;
      .produce{
        width: 100%;
        height: 230px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px #ccc solid;
        .picture{
          width: 190px;
          height: 190px;
          background-color: black;
        }
        .goods{
          display: flex;
          width: 480px;
          height: 180px;
          justify-content: space-between;
          background-color: chartreuse;
          flex-wrap: wrap;
          .message{
            width:100%;
            height: 80px;
            font-size: 28px;
            overflow: hidden;
            background-color: antiquewhite;
          }
          .comment{
            width:60%;
            height: 34px;
            line-height: 34px;
            font-size: 22px;
            background-color: aqua;
            align-self: center;
          }
          .price{
            width: 33%;
            height: 60px;
            line-height: 60px;
            font-size:34px ;
            background-color: blue;
            align-self: flex-end;
          }
        }
      }
    }
    .foot{
      width: 80px;
      height: 80px;
      position: fixed;
      bottom: 100px;
      right: 30px;
    }
  }

</style>
