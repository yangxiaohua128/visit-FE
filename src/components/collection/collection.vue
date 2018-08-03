<template>
<div class="collection">
  <img src="./img/jiantou.jpg"/>
  <span>我的收藏</span>
  <p></p>
</div>
</template>

<script>
    export default {
        name: "collection"
    }
</script>

<style lang="scss">
.collection{
  width:750px;height:98px;
  img{width:25px;height:45px;margin-left:40px;}
  span{font-size:33px;margin-left:235px;color:red;}
  p{width:750px;height:2px;background-color:#e6e6e6;}
}
</style>
