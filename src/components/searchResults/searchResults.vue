<template>
  <div class="searchResults">
    <header>
      <div>
        <img src="./img/return.png">
      </div>
      <p>西安</p>
      <div>共180条</div>
    </header>
    <div class="content">
      <input type="text" placeholder="西安">
      <ul class="sort">
        <li>热度</li>
        <li>价格从低到高</li>
        <li>价格从高到低</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResults',
  data () {
    return {
      msg: '[]'
    }
  }
}
</script>

<style type="text/css">
  body{
    margin: 0;
    padding: 0;
  }
  .searchResults{
    width:750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
  }
  header img{
    width:38px;
    height:38px;
  }
  header div{
    width: 150px;
    height: 38px;
    line-height: 38px;
    font-size: 30px;
    color: #aaa9a9;
  }
  header p{
    width: 150px;
    height: 38px;
    line-height: 38px;
    font-size: 36px;
    color: black;
  }
  .content{
    width:92%;
    margin: 0 auto;
  }
  .content input{
    width: 90%;
    height: 63px;
    margin: 0 auto;
    border-radius: 26px;
    background-color: #eef1f8;
    border: 0;
    padding-left: 50px;
  }
  .sort{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100px;
  }
  .sort li{
    width:200px;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
  }
</style>
