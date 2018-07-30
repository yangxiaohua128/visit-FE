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
        <img>
        <div class="star">
          <p>评分</p>
        </div>
      </div>
      <div class="comment">
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
  name: 'userEvaluation'
}
</script>

<style lang="scss" scoped>
  .userEvaluation{
    width: 750px;
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
    p,div{
      width:150px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 36px;
      color: black;
    }
  }
  .content{

  }
</style>
