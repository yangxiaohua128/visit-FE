<template>
  <div class="order">
    <header>
      <img src="img/箭头左.png"/>
      <p>选择班期和人数</p>
    </header>
    <div class="date">
      <p>出发日期</p>
      <ul class="month">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="day">

      </ul>
    </div>
    <footer>
      <p>选择数量</p>
      <div>成人</div>
      <div>儿童</div>
    </footer>
  </div>

</template>

<script>
    export default {
      name: "order"
      methods:{

      }
    }

</script>

<style scoped>
  header{display:flex;width: 100%;height:90px;}
  header p{font-size:36px;color:#bbbbbb;text-align: center;line-height:90px;}
  .date{width:100%;height: 860px;}
  ul{list-style:none;}
  .month{width:100%;height: 138px;}
  .day{width:100%;height:724px; }
  .date p{font-size: 30px;color:#bbbbbb;}
  footer{width: 100%;height: 380px;}
  .footer p{font-size: 30px;color:#bbbbbb;}

</style>
