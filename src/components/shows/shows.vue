<template>
  <div class="shows">
    <header>
      <img src="./img/arrowLeft.png" @touchend="toBack" />
      <div class="home2">
        <k-slider :banners="banners[0]" :swiperOption="swiperOption"></k-slider>
      </div>
      <div class="number"><p>{{all[0].productTitle}}</p><p>产品编号：{{all[0].productId}}</p></div>
      <div class="timer">{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</div>
    </header>
    <div class="content">
      <div class="name">{{all[0].productContent}}</div>
      <div class="price">￥{{priceL}}~{{priceH}}</div>
      <div id="date">
        <span>选择：出游人群</span>
        <img src="./img/arrowRight.png" @touchend="turnToOderPage()"/>
      </div>
      <div id="special">
        <p>选择：出行日期</p>
        <ul class="choice" >
          <li v-for="(site,index) in sites"
              :class="{active:index===n}"
              @touchend="changeN(index);returnDate"
              :key="site.id"
          >{{site}}
          </li>
        </ul>
      </div>
      <div class="comment">
        <span>查看：评论</span>
        <img src="./img/arrowRight.png" @touchend="turnToUserComment"/>
      </div>
      <div class="company">供应商：{{all[0].supplyName}}</div>
    </div>
    <footer>
      <span class="sp1"><img :src="dataUrl" @touchend="changeColor()"/><br>收藏</span>
      <span class="sp2" @touchend="turnToOderPage">立即购买</span>
    </footer>
  </div>
</template>

<script>
  import Slider from '../../../slider/slider.vue'
  import axios from 'axios'
  export default {
    data: function () {
      return {
        banners: [
          // 'http://pic.lvmama.com/uploads/pc/place2/2018-07-31/6ca730cd-a8bd-4327-987d-1198bf6cd40d.jpg',
          // 'http://pic.lvmama.com/uploads/pc/place2/2018-07-25/2e53cce1-52e6-4ee8-8df4-ab3ed33bfd2e.jpg',
          // 'http://dimg19.c-ctrip.com/images/fd/tg/g3/M07/7F/1C/CggYGlXyQh-AR1cyAC9CPR2vz6s070_C_750_500_Q90.jpg'
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
        sites: [],
        n: -1,
        all: [],
        priceN: [],
        priceH: 0,
        priceL: 0,
        price: 0
      }
    },
    mounted: function () {
      this.countdown()
      this.show()
    },
    components: {
      kSlider: Slider
    },
    methods: {
      changeColor () {
        this.bOn ? this.dataUrl = require('./img/collect.png') : this.dataUrl = require('./img/collected.png')
        this.bOn = !this.bOn
      },
      changeN (i) {
        this.n = i
        this.price = this.priceN[i]
      },
      countdown: function () {
        const end = Date.parse(new Date('all[0].starttimes[0]'))
        const now = Date.parse(new Date())
        const msec = end - now
        if(msec > 0) {
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
        } else {
        }
      },
      toBack: function () {
        this.$router.back(-1)
      },
      turnToOderPage: function () {
        this.$router.push({
          path: '/orderPage'
        })
      },
      turnToUserComment: function () {
        this.$router.push({
          path: '/userComment'
        })
      },
      turnToPosition: function () {
        this.$router.push({
          path: '/position'
        })
      },
      show: function () {
        axios.get('http://172.20.10.12/product/getProduct.do').then(resp => {
          let data = resp.data
          this.all.push(data)
          this.banners.push(data.imgProducts)
          for (let i=0;i<data.starttimes.length; i++) {
            this.sites.push(data.starttimes[i])
          }
          for (let i=0;i<data.spemoneys.length; i++) {
            this.priceN.push(parseInt(data.spemoneys[i]))
            this.priceN.sort(function (a, b) { return a - b })
    }
          this.priceL = this.priceN[0]
          this.priceH = this.priceN[this.priceN.length - 1]
        }).catch(error => {
          console.log(error)
        })
      },
      returnDate: function (site) {
        axios({
          url: 'http://192.168.43.168/area/acceptlocation.do',
          method: 'post',
          data: site,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          xhrFields: {
            withCredentials: true
          }
        })
      }
    }
  }
</script>

<style lang="scss">
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
    /*height: 150px;*/
    font-size: 32px;
    font-weight: bold;
    color: #5d5d5d;
    text-align: left;
  }
  .price{
    width: 100%;
    height: 60px;
    font-size:30px;
    font-weight: bold;
    color: #eb554e;
    text-align: left;
    line-height: 60px;
  }
  #date,.comment,.company{
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #special{
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
    .company{
      font-size: 32px;
      color: #818181;
      line-height: 100%;
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
