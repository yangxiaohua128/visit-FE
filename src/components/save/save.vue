<template>
  <div class="save">
    <header>
      <header>
        <img src="./img/arrowLeft.png" @touchend="toBack"/>
        <p>优惠券</p>
      </header>
    </header>
    <div class="content">
      <div class="sale" v-for="(site,index) in sale"
           :class="{'active':index===m}"
           @touchend="changeN(index)"
           :key="site.id">
        <span>{{site.price}}</span>
        <p>{{site.content}}</p>
      </div>
    </div>
    <footer>不使用优惠券</footer>
  </div>

</template>

<script>
  export default {
    name: "save",
    data :function() {
      return {
        m: -1,
        sale: [{price: "￥50", content: "满300减50"},
          {price: "￥100", content: "满600减100"},
          {price: "￥1000", content: "满20000减1000"},
        ]
      }
    },
    methods :
      {
        changeN(i)
        {
          this.m = i
        },
        toBack: function () {
          this.$router.back(-1)
        }
      }
  }
</script>

<style lang="scss">
  header{
    width: 100%;
    height:90px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#fff;
    p{
      width: 750px;
      font-size:36px;
      color:#787878;
      height:90px;
      line-height:90px;
    }
    img{
      width:22px;
      height:38px;
      vertical-align: middle;
    }
  }
  .content{
    .sale {
      width: 700px;
      height: 244px;
      display: flex;
      justify-content: space-between;
      border-radius: 5%;
      margin-top: 15px;
      border: 1px solid silver;
      background-color:#f4f4f4;
      span{
        font-size: 45px;
        width: 240px;
        color:#eb554e;
        text-align:center;
        line-height: 244px;
        border-right:1px silver dotted;
      }
      p{
        font-size: 30px;
        width: 460px;
        height: 240px;
        text-align:center;
        line-height: 244px;
      }
    }
    div.active{
      background-color: #fdf4c3;
    }
  }
  footer{
    width: 100%;
    height: 100px;
    font-size: 30px;
    background-color: #fae368;
    text-align: center;
    line-height: 100px;
    position: fixed;
    bottom: 0;
  }
</style>
