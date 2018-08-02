<template>
  <div class="message">
    <header>
      <img src="./img/arrowLeft.png"/>
      <p>跳过</p >
    </header>
    <form class="detail" method="get" action="">
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
  </div>
</template>

<script>
export default {
  name: 'message'
}
</script>

<style lang="scss">
  header{
    width: 100%;
    height:90px;
    display:flex;
    align-items:center;
    background-color:#fff;
    img{
      width:22px;
      height:38px;
    }
    p{
      font-size:28px;
      color: #4e4e4e;
    }
  }

  .content{
    .name{
      font-size: 48px;
      font-weight: bold;
      color: #4e4e4e;
      background-color: #fff;
      text-align: left;
      margin-top: 20px;
    }
    div{
      width: 100%;
      height: 150px;
      background-color: #fff;
      margin-bottom: 2px;
      font-size: 36px;
      text-align: left;
      input{
        border:none;
        width:350px;
        height:50px;
      }
      span{
        color: red;
      }
    }
  }
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    input{
      width:750px;
      height: 100px;
      color: #6e6c65;
      background-color: #fae368;
      font-size: 38px;
    }
  }
</style>
