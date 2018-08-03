<template>
  <div class="userComment">
    <header>
      <div>
        <img src="./img/return.png" class="img1">
      </div>
      <p>用户点评</p>
      <div>
        <img src="./img/news.png" class="img2">
      </div>
      <div>
        <img src="./img/return.png">
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
          <div v-for="item of items" :key="item.id">{{item}}</div>
        </div>
      </div>
      <div class="message">
        <div class="order">
          <span class="number1">
            <img src="./img/icon.png">
            eqoqeuq21</span>
          <span class="number2">2334***0844</span>
        </div>
        <div class="picture"></div>
        <div class="write">
          <p></p>
          <img src="./img/down.png">
        </div>
        <div class="time">
          <div>
            <img src="./img/comment.png">
            <span>有用</span>
          </div>
          <span>2018-7-29 15:42</span>
        </div>
        <div class="time">2018-7-29 15:42</div>
        <div class="reply">
          <div>查看供应商回复<img src="./img/down.png"></div>
          <div></div>
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
      items: ['全部', '好评', '中评', '差评', '有图']
    }
  }
}
</script>

<style lang="scss" scoped>
  .userComment{
    width: 750px;
  }
  header {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img1 {
      width: 38px;
      height: 38px;
    }
    .img2 {
      width: 65px;
      height: 65px;
    }
    p {
      width: 200px;
      img {
        width: 38px;
        height: 38px;
      }
      p, div {
        width: 150px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 36px;
        color: black;
      }
      div {
        width: 100px;
        height: 38px;
        line-height: 38px;
        font-size: 36px;
        color: black;
      }
    }
    .content {
      .comment {
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
            font-size: 32px;;
          }
        }
        .details {
          width: 40%;
          height: 170px;
          div {
            width: 180px;
            height: 48px;
            font-size: 28px;
            line-height: 48px;
          }
        }
        .repertory {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            width: 120px;
            height: 50px;
            line-height: 50px;
            border: 1px #666 solid;
            border-radius: 5px;
            color: #666;
          }
        }
      }
      .message {
        width: 100%;
        .order {
          display: flex;
          width: 100%;
          height: 70px;
          border-top: 1px #ccc solid;
          justify-content: space-between;
          margin-bottom: 30px;
          span {
            font-size: 30px;
            color: black;
            height: 80px;
            line-height: 80px;
            img {
              width: 80px;
              height: 80px;
            }
          }

        }
        .picture {
          width: 100%;
          height: 150px;
          background-color: #ccc;
        }
        .write {
          p {
            width: 100%;
            height: 150px;
            overflow: hidden;
          }
          img {
            width: 50px;
            height: 50px;
          }
        }
        .time {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            width: 120px;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
            img {
              width: 50px;
              height: 50px;
            }
          }
          span {
            font-size: 30px;
          }
          text-align: right;
          height: 50px;
          line-height: 50px;
        }
        .reply {
          width: 100%;
          div:nth-child(1) {
            width: 260px;
            height: 60px;
            line-height: 60px;
            font-size: 30px;
            color: #324452;
            img {
              width: 50px;
              height: 50px;
            }
          }
          div:nth-child(2) {
            width: 100%;
            box-sizing: border-box;
            background-color: #f8f8f8;
            color: #666;
            padding: 10px;
            height: 100px;
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>
