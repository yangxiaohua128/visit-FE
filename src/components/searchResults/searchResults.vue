<template>
  <div class="searchResults">
    <header>
      <div>
        <img src="./img/return.png" @touchend="toBack">
      </div>
      <p>产品列表</p>
      <div></div>
    </header>
    <div class="content">
      <ul class="sort">
        <li v-for="(item,index) of items" :key="item.id" :class="{ 'checked':n==index}"
            @touchend="changeN(index),InitData()">{{item}}</li>
      </ul>
      <div class="list">
        <div class="produce" @touchend="toShows(item1.productId)"  v-for="item1 in produceList" :key="item1.id">
          <img class="picture" :src="item1.productImgurl.split('$')[0]">
          <div class="goods">
            <p class="message">{{item1.productContent}}</p>
            <span class="location"><img src="./img/location.png">{{item1.area_city}}</span>
            <span class="comment">{{item1.productMonth}}人出游</span>
            <span class="price">￥{{item1.starting_money}}</span>
          </div>
        </div>
      </div>
      <img src="./img/foot.png" class="foot" @touchend="toHistory()">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'searchResults',
  data () {
    return {
      items: ['人气最高', '价格升序', '价格降序'],
      n: 0,
      produceList: [],
      search: false
    }
  },
  mounted () {
    this.InitData()
  },
  methods: {
    toBack () {
      this.$router.back(-1)
    },
    changeN (i) {
      this.n = i
    },
    toShows (id) {
      this.$router.push({
        path: '/shows',
        params: {},
        productId: id
      })
    },
    toHistory () {
      this.$router.push({
        path: '/history'
      })
    },
    InitData () {
      if (this.search) {
        if (this.n === 0) {
          this.produceList.splice(0)
          axios.get('http://172.20.10.6/product/advanceSearchByMonth.do').then(resp => {
            let data = resp.data
            for (let i = 0; i < data.length; i++) {
              this.produceList.push(data[i])
            }
          }).catch(error => {
            console.log(error)
          })
        }
        if (this.n === 1) {
          this.produceList.splice(0)
          axios.get('http://172.20.10.6/product/advanceSearchByMoneyAsc.do').then(resp => {
            let data = resp.data
            for (let i = 0; i < data.length; i++) {
              this.produceList.push(data[i])
            }
          }).catch(error => {
            console.log(error)
          })
        }
        if (this.n === 2) {
          this.produceList.splice(0)
          axios.get('http://172.20.10.6/product/advanceSearchByMoneyDesc.do').then(resp => {
            let data = resp.data
            for (let i = 0; i < data.length; i++) {
              this.produceList.push(data[i])
            }
          }).catch(error => {
            console.log(error)
          })
        }
      } else {
        if (this.n === 0) {
          this.produceList.splice(0)
          axios.get('http://192.168.43.168/product/month.do').then(resp => {
            let data = resp.data
            for (let i = 0; i < data.length; i++) {
              this.produceList.push(data[i])
            }
          }).catch(error => {
            console.log(error)
          })
        }
        if (this.n === 1) {
          this.produceList.splice(0)
          axios.get('http://192.168.43.168/product/asc.do').then(resp => {
            let data = resp.data
            for (let i = 0; i < data.length; i++) {
              this.produceList.push(data[i])
            }
          }).catch(error => {
            console.log(error)
          })
        }
        if (this.n === 2) {
          this.produceList.splice(0)
          axios.get('http://192.168.43.168/product/desc.do').then(resp => {
            let data = resp.data
            for (let i = 0; i < data.length; i++) {
              this.produceList.push(data[i])
            }
          }).catch(error => {
            console.log(error)
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .searchResults{
    width:750px;
  }
  header{
    width:100%;
    height:90px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    div{
      width:100px;
      height: 38px;
      line-height: 38px;
      img{
        width:38px;
        height:38px;
      }
    }
    p{
      width:200px;
      height: 38px;
      line-height: 38px;
      font-size: 36px;
      color: black;
    }
  }
  .content{
    position: relative;
    .sort{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 90px;
      li{
        width:120px;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
      }
      li.checked{
        color:#000;
        font-size: 30px;
        border-bottom:5px #f9de57 solid;
      }
    }
    .list{
      width:100%;
      .produce{
        width: 100%;
        height: 230px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px #ccc solid;
        .picture{
          width: 190px;
          height: 190px;
        }
        .goods{
          display: flex;
          width: 480px;
          height: 180px;
          justify-content: space-between;
          flex-wrap: wrap;
          .message{
            width:100%;
            height: 80px;
            font-size: 30px;
            overflow: hidden;
            text-align: left;
            color: black;
          }
          .location{
            width: 60%;
            height:50px;
            line-height: 50px;
            font-size: 30px;
            text-align: left;
            color: #ff8401;
            img{
              width: 25px;
              height: 25px;
            }
          }
          .comment{
            width:50%;
            height: 34px;
            line-height: 34px;
            font-size: 26px;
            align-self: center;
            text-align: left;
            color: gray;
          }
          .price{
            width: 33%;
            height: 60px;
            line-height: 60px;
            font-size:46px ;
            align-self: flex-end;
            color: #ff5500;
          }
        }
      }
    }
    .foot{
      width: 80px;
      height: 80px;
      position: fixed;
      bottom: 100px;
      right: 30px;
    }
  }

</style>
