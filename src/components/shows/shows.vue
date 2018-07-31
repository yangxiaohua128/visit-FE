<template>
  <div class="showOne">
    <div class="home2">
      <k-slider :banners="banners" :swiperOption="swiperOption"></k-slider>
    </div>
    <div class="content">
      <div class="name"></div>
      <div class="price">￥</div>
      <div class="site">
        <span>选择：出发地</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="date">
        <span>选择：日期和出游人群</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="special">
        <p>选择：日期</p>
        <div class="choice">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <img src="./img/arrowRight.png"/>
        </div>
      </div>
      <div class="comment">
        <span>查看：更多评论</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="company">
      </div>
    </div>
    <footer>
      <span class="sp1"><img src="./img/collect.png"/><br>收藏</span>
      <span class="sp2">立即购买</span>
    </footer>
  </div>

</template>


<script>
  import Slider from '../../../slider/slider.vue'
  export default {
    data:function(){
      return{
        banners:[
          'http://pic.lvmama.com/uploads/pc/place2/2018-07-31/6ca730cd-a8bd-4327-987d-1198bf6cd40d.jpg',
          'http://pic.lvmama.com/uploads/pc/place2/2018-07-25/2e53cce1-52e6-4ee8-8df4-ab3ed33bfd2e.jpg'
        ],
        swiperOption:{
          direction:'horizontal',
          loop:true,
          paginationType:'fraction',
          pagination:'.swiper-pagination',

          autoplay: {
            disableOnInteraction: false,
            delay: 2500
          }
        }
      }
    },
    components:{
      kSlider :Slider
    }
  }
</script>

<style lang="scss">
  .home2{
    width: 750px;
    height: 500px;
  }
  .name{
    width: 100%;
    height: 150px;
    font-size: 32px;
    font-weight: bold;
    color: #5d5d5d;
  }
  .price{
    width: 100%;
    height: 110px;
    font-size:30px;
    font-weight: bold;
    color: #ee7358;
    text-align: left;
  }
  .site,.date,.comment,.company{
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .special{
    width: 100%;
    height: 200px;
    p{
      font-size: 32px;
      color:#818181;
      text-align: left;
      height: 90px;
      line-height: 90px;
    }
    .choice{
      width: 100%;
      height:110px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        width: 150px;
        height: 75px;
        border: 1px solid #ccc;
        border-radius: 15%;
      }
    }
  }
  .content {
    span{
      font-size: 32px;
      color:#818181;
      text-align: left;
    }
    img{
      width: 32px;
      height: 32px;
    }
  }
    footer{
      width: 100%;
      height:100px;
      position: fixed;
      bottom: 0;
    }
    .sp1{
      width: 150px;
      height: 100px;
      position: fixed;
      left: 0;
      background-color: #fff;
    }
    .sp2{
      width: 600px;
      height: 100px;
      background-color:#fae368;
      color:#8c8353;
      font-size: 32px;
      line-height: 100px;
      position: fixed;
      right: 0;
    }
</style>
