<template>
  <div class="shows">
    <header>
      <img src="./img/arrowLeft.png" />
      <div class="home2">
        <!--<k-slider :banners="banners" :swiperOption="swiperOption"></k-slider>-->
      </div>
      <div class="number"><p>(产品名称)</p ><p>产品编号：0000000000</p ></div>
      <div class="timer">{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</div>
    </header>
    <div class="content">
      <div class="name">(此处显示产品内容和描述）</div>
      <div class="price">￥（此处显示价格）</div>
      <div class="site">
        <span>选择：出发地</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="date">
        <span>选择：日期和出游人群</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="special">
        <p>选择：出行日期</p >
        <ul class="choice" >
          <li v-for="(site,index) in sites"
              :key="site.id"
              :class="{active:index===n}"
              @touchend="changeN(index)"
               >{{site}}
          </li>
        </ul>
      </div>
      <div class="comment">
        <span>查看：评论</span>
        <img src="./img/arrowRight.png"/>
      </div>
      <div class="company">（此处显示供应商）</div>
    </div>
    <footer>
      <span class="sp1"><img :src="dataUrl" @touchend="changeColor()"/><br>收藏</span>
      <span class="sp2">立即购买</span>
    </footer>
  </div>

</template>
<script>
// import Slider from '../../../slider/slider.vue'
export default {

  data: function () {
    return {
      banners: [
        'http://pic.lvmama.com/uploads/pc/place2/2018-07-31/6ca730cd-a8bd-4327-987d-1198bf6cd40d.jpg',
        'http://pic.lvmama.com/uploads/pc/place2/2018-07-25/2e53cce1-52e6-4ee8-8df4-ab3ed33bfd2e.jpg',
        'http://dimg19.c-ctrip.com/images/fd/tg/g3/M07/7F/1C/CggYGlXyQh-AR1cyAC9CPR2vz6s070_C_750_500_Q90.jpg'
      ],
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        paginationType: 'fraction',
        pagination: '.swiper-pagination',

        autoplay: {
          disableOnInteraction: false,
          delay: 2500
        }
      },
      bOn: false,
      dataUrl: require('./img/collect.png'),
      sites: [ '9.10', '10.3', '10.9', '11.11' ],
      n: -1
    }
  },
  mounted: function () {
    this.countdown()
  },
  components: {
    // kSlider: Slider
  },
  methods: {
    changeColor () {
      this.bOn ? this.dataUrl = require('./img/collect.png') : this.dataUrl = require('./img/collected.png')
      this.bOn = !this.bOn
    },
    changeN (i) {
      this.n = i
    },
    countdown: function () {
      const end = Date.parse(new Date('2018-8-5'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .shows{
    width: 100%;
  }
  header{
    width: 100%;
    height: 500px;
    position: relative;
    img{
      z-index: 9999;
      position:absolute;
      left: 0;
      top: 0;
    }
    .number{
      width: 100%;
      height: 60px;
      background:rgba(255,255,255,0.3);
      z-index: 2;
      position:absolute;
      left: 0;
      bottom:0;
      display: flex;
      justify-content: space-between;
    }
    p{
      font-size:28px;
      color:black;
      opacity: 1;
      text-align: left;
      line-height: 60px;
    }
    .home2{
      width: 100%;
      height: 500px;
    }
    .timer{
      z-index: 9999;
      position:absolute;
      right: 0;
      top: 0;
      font-size: 36px;

    }
  }
  .name{
    width: 100%;
    height: 150px;
    font-size: 32px;
    font-weight: bold;
    color: #5d5d5d;
    line-height: 150px;
  }
  .price{
    width: 100%;
    height: 110px;
    font-size:30px;
    font-weight: bold;
    color: #ee7559;
    text-align: left;
    line-height: 110px;
  }
  .site,.date,.comment,.company{
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .special{

    width:100%;
    height:200px;
    p{
      width: 100%;
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
      justify-content: space-around;
      align-items: center;
      li{
        width: 150px;
        height: 75px;
        border: 1px solid #ccc;
        border-radius: 15%;
        text-align: center;
        line-height: 75px;
      }
    }
    li.active{
      background-color:#fdf4c3;
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
