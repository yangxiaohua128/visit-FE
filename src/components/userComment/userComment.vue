<template>
  <div class="userComment">
    <header>
      <div>
        <img src="./img/return.png" class="img" @touchend="toBack">
      </div>
      <p>用户点评</p>
      <div></div>
    </header>
    <div class="content">
      <div class="comment">
        <div class="level">
          <div>5.0</div>
        </div>
        <div class="details">
          <div>行程安排</div>
          <div>描述相符</div>
          <div>导游讲解</div>
        </div>
        <div class="repertory">
          <div v-for="(item,index) of items" :key="item.id" :class="{ 'checked':n==index}"
               @touchend="changeN(index)">{{item}}</div>
        </div>
      </div>
      <div class="message">
        <div class="order">
          <span class="number1">
            <img src="./img/icon.png">
            37407
          </span>
          <span class="number2">2334***0844</span>
        </div>
        <div class="picture"></div>
        <div class="write">
          <p></p>
        </div>
        <div class="time">
          <div @touchend="changeNumber()">
            <img src="./img/comment.png">
            <span>赞({{number}})</span>
          </div>
          <span>2018-7-29 15:42</span>
        </div>
        <div class="reply">
          <div>查看供应商回复<img :src="imgUrl"  @touchend="showReply()"></div>
          <p v-if="show">[供应商回复]：</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userComment',
  data () {
    return {
      items: ['全部', '好评', '中评', '差评', '有图'],
      n: 0,
      imgUrl: require('./img/down.png'),
      number: 0,
      show: false
    }
  },
  methods: {
    toBack () {
      this.$router.back(-1)
    },
    changeN (i) {
      this.n = i
    },
    // showReply () {
    //   this.show ? this.imgUrl = require('./img/down.png') : this.imgUrl = require('./img/up.png')
    //   this.show = !this.show
    //   this.isShow = !this.isShow
    // },
    changeNumber () {
      this.number++
      console.log(Number)
    }
  }
}
</script>

<style lang="scss" scoped>
  .userComment{
    width: 750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    .img{
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
  .content {
    .comment{
      display: flex;
      width: 100%;
      height: 260px;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .level {
        width: 40%;
        height: 170px;
        display: flex;
        justify-content: center;
        div {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 3px #ec7e3f solid;
          line-height: 84px;
          font-size: 32px;
        }
      }
      .details{
        width:40%;
        height: 170px;
        div{
          width: 180px;
          height: 48px;
          font-size: 28px;
          line-height: 48px;
        }
      }
      .repertory{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
          width: 120px;
          height: 50px;
          line-height: 50px;
          border: 1px #666 solid;
          border-radius: 5px;
          color: #666;
          cursor:pointer;
          transition:all 0.3s linear;
        }
        div.checked{
          background-color:#f9de57;
          color:#000;
          border:1px #fff solid;
        }
      }
    }
    .message{
      width: 100%;
      .order{
        display: flex;
        width: 100%;
        height: 80px;
        border-top: 1px #ccc solid;
        justify-content: space-between;
        span{
          font-size: 30px;
          color: black;
          height: 80px;
          line-height: 80px;
          width: 200px;
          vertical-align: center;
          img{
            width: 80px;
            height: 80px;
            vertical-align: middle;
          }
        }
      }
      .picture{
        width: 100%;
        background-color: #ccc;
      }
      .write{
        p{
          width: 100%;
          font-size: 30px;
          text-align: left;
          letter-spacing: 2px;
          line-height: 40px;
        }
      }
      .time{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
          width: 200px;
          height: 50px;
          line-height: 40px;
          border-radius: 20px;
          border: 1px #ccc solid;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 50px;
            height: 50px;
          }
          span{
            display: inline-block;
            width: 100px;
            height: 40px;
            line-height: 40px;
          }
        }
        span{
          font-size: 30px;
        }
      }
      .reply{
        width: 100%;
        div:nth-child(1){
          width: 260px;
          height: 60px;
          line-height: 60px;
          font-size: 30px;
          color: #324452;
          img{
            width: 40px;
            height: 40px;
            vertical-align: middle;
          }
        }
        p{
          width: 100%;
          box-sizing: border-box;
          background-color: #f8f8f8;
          color: #666;
          padding: 10px;
          border-radius: 10px;
          text-align: left;
          font-size: 30px;
          line-height: 40px;
        }
      }
    }
  }
</style>
