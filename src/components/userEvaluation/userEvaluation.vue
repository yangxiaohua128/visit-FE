<template>
  <div class="userEvaluation">
    <header>
      <div>
        <img src="./img/return.png">
      </div>
      <p>评价晒单</p>
      <div>提交</div>
    </header>
    <div class="content">
      <div class="level">
        <img src="./img/picture.jpg">
        <img>
        <div class="star">
          <p>评分</p>
        </div>
      </div>
      <div class="comment">
        <textarea name="comment" title="comment" style="width:100%; height:70%"></textarea>
        <img src="./img/photo.png">
        <div class="anonymous"><img src="./img/select.png">匿名评价</div>
      </div>
      <div class="details">
          <div class="prompt">
            <img src="./img/comment.png">服务评价
          </div>
          <div class="message" v-for="item of items" :key="item.id">
            <span>{{item}}</span>
            <div></div>
          </div>
        <p></p>
        <img>
        <div></div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'userEvaluation',
  data () {
    return {
      items: ['行程安排', '描述相符', '导游讲解']
    }
  },
  name: 'userEvaluation'
}
</script>

<style lang="scss" scoped>
  .userEvaluation{
    width: 750px;
  }
  header {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 38px;
      height: 38px;
    }
    p {
      width: 200px;
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
      .level {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 230px;
        img {
          width: 200px;
          height: 170px;
        }
        .star {
          font-size: 36px;
          width: 350px;
          height: 170px;
          text-align: left;
          color: black;
        }
      }
      .comment {
        width: 100%;
        height: 550px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        textarea {
          background-color: #f9f9f9;
          font-size: 30px;
          line-height: 40px;
          width: 100%;
          height: 90%;
          border: none;
        }
        img {
          width: 150px;
          height: 150px;
        }
        .anonymous {
          font-size: 36px;
          width: 40%;
          img {
            align-self: left;
            width: 50px;
            height: 50px;
          }
        }
      }
      .details {
        .prompt {
          font-size: 42px;
          width: 40%;
          height: 100px;
          display: flex;
          align-items: center;
          letter-spacing: 4px;
          img {
            width: 40px;
            height: 40px;
            margin-right: 30px;
          }
        }
        .message {
          width: 80%;
          margin: 0 auto;
          height: 80px;
          line-height: 80px;
          font-size: 30px;
          text-align: left;
        }
      }
    }
    .content {

    }
  }
</style>
