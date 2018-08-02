<template>
  <div class="userAlbum">
    <header>
      <div>
        <img src="./img/return.png" @touchend="toBack">
      </div>
      <p>用户相册</p>
      <div></div>
    </header>
    <div class="content">
      <div class="album">
        <p>2033</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userAlbum',
  methods: {
    toBack () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .advancedSearch{
    width:750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    img{
      width:38px;
      height:38px;
    }
    p{
      width:200px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 36px;
      color: black;
    }
    div{
      width:100px;
      height: 38px;
      line-height: 38px;
      font-size: 36px;
      color: black;
    }
  }
  .content {
    .album{
      width: 100%;
      p{
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        width: 200px;
        background-color: #007aff;
        margin-bottom: 10px;
      }
      div{
        background-color: aqua;
        width: 100%;
      }
    }
  }
</style>
