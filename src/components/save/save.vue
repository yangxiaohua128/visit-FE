<template>
  <div class="save">
    <header>
      <header>
        <img src="./img/arrowLeft.png"/>
        <p>优惠券</p>
      </header>
    </header>
    <div class="content">
      <div class="sale">
        <span>50元</span>
        <p>满三百减五十</p>
      </div>
    </div>
    <footer>不使用优惠券</footer>
  </div>

</template>

<script>
</script>

<style lang="scss">
  header{
    width: 100%;
    height:90px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#fff;
  p{
    width: 750px;
    font-size:36px;
    color:#787878;
    height:90px;
    line-height:90px;
  }
  img{
    width:22px;
    height:38px;
    vertical-align: middle;
  }
  }
  .content{
    .sale {
      width: 700px;
      height: 244px;
      /*background-color: #fdf4c3;*/
      display: flex;
      justify-content: space-between;
      border-radius: 5%;
      margin-top: 15px;
      border: 1px solid silver;
      background-color:#f4f4f4;
      span{
        font-size: 45px;
        width: 240px;
        color:#eb554e;
        text-align:center;
        line-height: 244px;
        border-right:1px silver dotted;
      }
      p{
        font-size: 30px;
        width: 460px;
        height: 240px;
        text-align:center;
        line-height: 244px;
      }
    }
  }
  footer{
    width: 100%;
    height: 100px;
    font-size: 30px;
    background-color: #fae368;
    text-align: center;
    line-height: 100px;
    position: fixed;
    bottom: 0;
  }
</style>
