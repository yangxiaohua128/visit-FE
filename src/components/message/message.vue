<template>
  <div class="message">
    <header>
      <img src="./img/arrowLeft.png"/>
    </header>
    <form class="detail" method="get" action="" require="required">
    <div class="content">
       <div class="name" >新增出行人信息</div>
        <div>
          <p>中文姓名<span>*</span></p>
          <input type="search" placeholder="请输入姓名"/>
        </div>
        <div>
          <p>身份证号<span>*</span></p>
          <input type="search" placeholder="请输入身份证号"/>
        </div>
        <div>
          <p>联系电话<span>*</span></p>
          <input type="search" placeholder="请输入联系电话"/>
        </div>
    </div>
    <footer>
      <input type="submit" value="提交" name="submit"/>
    </footer>
    </form>
      <p>跳过</p>
    <div class="content">
      <div class="name">新增出行人信息</div>
      <div class="detail">
        <div>
          <p>中文姓名<span>*</span></p>
          <input type="text" placeholder="请输入姓名"/>
        </div>
        <div>
          <p>身份证号<span>*</span></p>
          <input type="text" placeholder="请输入身份证号"/>
        </div>
        <div>
          <p>联系电话<span>*</span></p>
          <input type="text" placeholder="请输入联系电话"/>
        </div>
      </div>
    </div>
    <footer>完成</footer>
  </div>
</template>

<script>
    export default {
        name: 'message'
    }
</script>
<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  .message{
    background-color:#f7f7f7;
  }
  header{

    width: 100%;
    height:90px;
    display:flex;
    align-items:center;
    background-color:#fff;}
    img{
      width:22px;
      height:38px;
    }
    p{
      font-size:28px;
      color: #4e4e4e;
    }

  .content {}

  .name {
    font-size: 48px;
    font-weight: bold;
    color: #4e4e4e;
    background-color: #fff;
    text-align: left;
    margin-top: 20px;
  }

  div {
    width: 100%;
    height: 150px;
    background-color: #fff;
    margin-bottom: 2px;
    font-size: 36px;
    text-align: left;}

  input {
    border: none;
    width: 350px;
    height: 50px;
  }

  span {
    color: red;
  }
  {
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
  }
  header img{
    width:22px;
    height:38px;
  }
  .header p{
    font-size:28px;
    color: #4e4e4e;
    width: 20px;
  }
  .name{
    font-size: 48px;
    font-weight: bold;
    color: #4e4e4e;
    background-color: #fff;
    text-align: left;
  }
  .detail div{
    width: 100%;
    height: 174px;
    background-color: #fff;
    margin-bottom: 2px;
    font-size: 36px;
    text-align: left;
  }
  .detail span{
    color: red;
  }
  input{
    border:none;
    width:300px;
    height:50px;
  }
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;}
    input{
      width:750px;
      height: 100px;
      color: #6e6c65;
      background-color: #fae368;
      font-size: 38px;
    }
  {
    font-size: 38px;
    color: #6e6c65;
    background-color: #fae368;
    line-height: 100px;
  }
</style>
