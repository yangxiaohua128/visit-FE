<template>
  <div class="apppage">
    <div class="home2">
      <k-slider :banners="banners" :swiperOption="swiperOption"></k-slider>
    </div>
    <div class="search">
      <img src="./img/air.png"/>
      <input type="search" placeholder="高级搜索"/>
    </div>
    <div class="nav">
      <div class="pic">
        <img src="./img/saround.png"/>
        <img src="./img/destination.png"/>
        <img src="./img/sfree.png"/>
        <img src="./img/advant.png"/>
      </div>
      <div class="ntext">
        <span>周边游</span>
        <span>目的地出行</span>
        <span class="sp1">自由行</span>
        <span>高端游</span>
      </div>
    </div>
    <div class="trans"></div>
    <div class="timesale">
      <div class="sale">
        <span class="sp3"></span><span class="sp2">限时特惠</span><span class="sp4"></span>
      </div>
      <div class="show">
        <img src="./img/banner2.jpg">
        <img src="./img/banner3.jpg">
      </div>
    </div>
    <div class="fwrap">
      <div class="footer">
        <div><img src="./img/homes.png"/></div>
        <div><img src="./img/destss.png"/></div>
        <div><img src="./img/historys.png"/></div>
        <div><img src="./img/mine.png"/></div>
      </div>
      <div class="text">
        <span>旅游首页</span>
        <span>目的地</span>
        <span>浏览历史</span>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Slider from '../../../slider/slider.vue'
  export default {
    data: function () {
      return{
        banners: ['http://pic.lvmama.com/uploads/pc/place2/2018-07-16/c388073b-66b8-4a4a-ba73-a037d5479791.jpg', 'http://pic.lvmama.com/uploads/pc/place2/2018-07-31/6ca730cd-a8bd-4327-987d-1198bf6cd40d.jpg','http://pic.lvmama.com/uploads/pc/place2/2018-07-25/2e53cce1-52e6-4ee8-8df4-ab3ed33bfd2e.jpg','http://pic.lvmama.com/uploads/pc/place2/2018-07-16/5e772246-0115-40d1-b57d-eef53ffd242a.jpg'],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          speed: 500,
          loop: true,
          observer: true,
          observeParents: true,
          autoplayDisableOnInteraction : false,
          autoplay: {
            disableOnInteraction: false,
            delay: 2000
          }
        }
      }
    },
    components: {
      kSlider : Slider
    }
  }
</script>

<style type="text/css">
  /*.home2{*/
    /*width: 750px;*/
    /*height: auto;*/
  /*}*/
  .shuffling img{
    width: 750px;
     height: auto;
  }
  .search{
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .search img{
    padding-left: 20px;
    width: 50px;
    height: 50px;
  }
  .search input{
    height: 60px;
    margin-right: 110px;
    margin-left: 30px;
    border-radius: 20px;
    width: 500px;
    border: 2px #98d8fc solid;
  }
  .nav{
    margin-top: 60px;
    width: 100%;
    height: 130px;
  }
  #app{
    margin: 0;
  }
  .footer{
    display: flex;
    justify-content: space-around;
  }
  .footer img{
    width: 70px;
    height: 70px;
  }
  .fwrap{
    border-top: 2px #ccc solid;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .text{
    width: 733.5px;
    display: flex;
    justify-content:space-around ;
  }
  .pic{
    display: flex;
    justify-content: space-around;
  }
  .pic img{
    width: 80px;
    height: 80px;
  }
  .ntext{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
  }
  .sp1{
    display: block;
    margin-right: 20px;
  }
  .ntext span{
    font-size: 30px;
  }
  .timesale{
    margin-top: 40px;
  }
  hr{
    width:100px;
    height:4px ;
    background-color: #7db7a9;
  }
  .sp2{
    vertical-align: middle;
    font-size: 36px;
    color: #7db7a9;
    margin: 0 30px 0 30px;
  }
  .trans{
    width: 750px;
    height: 36px;
    background-color:#f9f9f9 ;
    margin-top: 38px;
  }
  .sp3,.sp4{
    vertical-align: middle;
    width: 200px;
    display: inline-block;
    height: 2px;
    background-color: #7db7a9;
  }
  .show{
    margin-top: 48px;
  }
  .show img{
    margin-bottom: 60px;
    width: 96%;
    height: auto;
  }
  .fwrap{
    background-color: #f4f4f4;
  }
</style>
