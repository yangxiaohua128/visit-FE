<template>
  <div class="history">
    <div class="header">
      <img class="img1" src="./img/Rleft.png">
      <span class="sp1">历史记录</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'history'
    }
export default {
  name: 'history'
}
</script>

<style type="text/css">
  .header{
    display: flex;
    justify-content: space-between;
    width: 750px;
    height: 88px;
    background-color: #2785e9;

  }
  .sp1{
    width: 160px;
    font-size: 38px;
    text-align: center;
    line-height: 88px;
    color: #000;
    margin-right: 295px;
  }
  .img1{
    padding-top: 12px;
    width: 50px;
    height: 60px;
  }

</style>
