<template>
<div class="collection">
  <div class="top">
    <img src="./img/jiantou.jpg" @touchend="tosignin2"/>
    <span>我的收藏</span>
    <p></p>
  </div>
  <div class="ron">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

</div>
</template>

<script>
export default {
  name: 'collection',
  methods: {
    tosignin2: function() {
      this.$router.push({
        path: '/signin2'
      })
    }
  }
}
</script>

<style lang="scss">
.collection{position:relative;
  .top{position: fixed;top:30px;background-color:#ffe040;
    width:750px;height:68px;line-height:68px;text-align:left;
    img{width:25px;height:45px;margin-left:40px;}
    span{font-size:33px;margin-left:235px;}
    p{width:750px;height:2px;background-color:#e6e6e6;}
  }
  .ron {
    margin-top:128px;
    div{height:300px;width:670px;background-color:#e6e6e6;margin-left:40px;
      border-radius:30px;margin-top:30px;}
  }
}

</style>
