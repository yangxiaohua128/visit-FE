<template>
  <div class="order">
  <header>
    <div><img src="./img/left.png" width="16" height="16"/></div>
    <p>订单详情</p>
    <div></div>
  </header>
  </div>
</template>

<script>
export default {
  name: 'order'
}
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  .order{
    width: 750px;
  }
  header{
    width: 100%;
    height: 90px;
    align-items:center;
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 20px;
  }
  header div {
    width: 150px;
    height: 38px;

  }
  header p{
    text-align: center;
    line-height: 38px;
    font-size: 36px;
    color:black;
  }
</style>
