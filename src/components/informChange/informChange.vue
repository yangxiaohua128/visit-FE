<template>
<div class="informChange">
  <header>
    <div><img src="./img/left.png" width="16" height="16"/></div>
    <p>编辑个人资料</p>
    <div></div>
  </header>
  <div class="change">
    <div class="name">
    <div class="name1">真实姓名</div>
    <div class="name2">名字</div>
    </div>
   <div class="sex">
     <div>性别</div>
     <div>男</div>
   </div>
    <div class="sex2">
      <div>女</div>
      <div></div>
    </div>
    <div class="time">
        <div class="time1">出生日期</div>
        <div class="time2"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'informChange',
  data () {
    return {}
  }
}
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  .informChange{
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
  .change{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin-left: 6px;
    margin-right: 6px;
    text-align: left;
    font-size: 30px;
    border-bottom:1px #e4e4e4 solid ;
    border-top:1px #e4e4e4 solid ;
  }
  .name{
    width:736px;
  }
  .name1{
    width:200px ;
    height: 70px;
    line-height: 70px;
    border-bottom:1px #e4e4e4 solid;
    margin: 0;
  }
  .name2{
    width:536px;
    height: 70px;
    line-height: 70px;
    border-bottom:1px #e4e4e4 solid;
    margin: 0;
  }
  .sex{
    width:260px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    border-right:1px #e4e4e4 solid ;
    margin-top:10px;
    padding-right: 9px;
  }
  .sex2{
    width:460px;
    height: 60px;
    line-height: 60px;
    margin-top:10px;
    display: flex;
    justify-content: space-between;
  }
  .time{
    display: flex;
    width:736px;
    height: 70px;
    margin-top: 10px;
    line-height: 70px;
  }
</style>
