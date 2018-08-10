<template>
  <div class="advancedSearch">
    <header>
      <div>
        <img src="./img/return.png"  @touchend="toBack">
      </div>
      <p>高级搜索</p>
      <div></div>
    </header>
    <div class="content">
      <p class="termini">目的地推荐</p>
      <div class="destination">
        <div v-for="(item,index) of des" :key="item.id" @touchend="changeN(index),changeV(index)" :class="{'checked' : n==index}">{{item}}</div>
      </div>
      <div class="depart">
        <div class="location">
          <div>目的地</div>
          <input type="text" ref="end" placeholder="*请输入目的地城市名">
          <span></span>
        </div>
        <div class="line"></div>
        <div class="location">
          <div>出发地</div>
          <input type="text" ref="start" placeholder="*请输入出发地城市名">
          <span></span>
        </div>
        <div class="line"></div>
        <div class="start">出发日期</div>
        <input type="date" v-model="date"/>
        <div></div>
      </div>
      <div class="select">
        <div class="budget">
          <p>单人预算(元)</p>
          <div class="box">
            <div>
              <input id="m1" type="radio" name="money" value="0-100000" v-model="money"/>
              <label for="m1"></label><span>不限</span>
            </div>
            <div>
              <input id="m2" type="radio" name="money" value="0-1000" v-model="money"/>
              <label for="m2"></label><span>0-1K</span>
            </div>
            <div>
              <input id="m3" type="radio" name="money" value="1000-2000" v-model="money"/>
              <label for="m3"></label><span>1-2k</span>
            </div>
            <div>
              <input id="m4" type="radio" name="money" value="2000-4000" v-model="money"/>
              <label for="m4"></label><span>2-4k</span>
            </div>
            <div>
              <input id="m5" type="radio" name="money" value="4000-7000" v-model="money"/>
              <label for="m5"></label><span>4-7k</span>
            </div>
            <div>
              <input id="m8" type="radio" name="money" value="7000-10000" v-model="money"/>
              <label for="m8"></label><span>7-10k</span>
            </div>
            <div>
              <input id="m9" type="radio" name="money" value="10000-100000" v-model="money"/>
              <label for="m9"></label><span>10+</span>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="days">
          <p>出行天数(天)</p>
          <div class="box">
            <div>
              <input id="d1" type="radio" name="day" value="0-100" v-model="day"/>
              <label for="d1"></label><span>不限</span>
            </div>
            <div>
              <input id="d2" type="radio" name="day" value="1-2" v-model="day"/>
              <label for="d2"></label><span>1-2</span>
            </div>
            <div>
              <input id="d3" type="radio" name="day" value="3-4" v-model="day"/>
              <label for="d3"></label><span>3-4</span>
            </div>
            <div>
              <input id="d5" type="radio" name="day" value="5-6" v-model="day"/>
              <label for="d5"></label><span>5-6</span>
            </div>
            <div>
              <input id="d6" type="radio" name="day" value="7-8" v-model="day"/>
              <label for="d6"></label><span>7-8</span>
            </div>
            <div>
              <input id="d7" type="radio" name="day" value="9-10" v-model="day"/>
              <label for="d7"></label><span>9-10</span>
            </div>
            <div>
              <input id="d9" type="radio" name="day" value="10-100" v-model="day"/>
              <label for="d9"></label><span>10+</span>
            </div>
          </div>
        </div>
        <div class="white"></div>
        <button class="search" @touchend="submitData()">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
let now = new Date()
let day = ('0' + now.getDate()).slice(-2)
let month = ('0' + (now.getMonth() + 1)).slice(-2)
let today = now.getFullYear() + '-' + (month) + '-' + (day)
export default {
  name: 'advancedSearch',
  data () {
    return {
      des: ['华山', '青海', '延安', '西北', '三亚', '四川', '北京', '重庆'],
      n: -1,
      date: today,
      money: '0-100000',
      day: '0-100'
    }
  },
  methods: {
    toBack () {
      this.$router.back(-1)
    },
    changeN (i) {
      this.n = i
    },
    changeV (i) {
      this.$refs.end.value = this.des[i]
    },
    submitData () {
      let start = this.$refs.start.value
      let end = this.$refs.end.value
      if (end === '' || start === '') {
        this.$refs.start.placeholder = '*此项必填'
        this.$refs.end.placeholder = '*此项必填'
      } else {
        let data = {'d': end, 'date': this.date, 'day': this.day, 'money': this.money, 's': start}
        axios({
          method: 'post',
          url: 'http://172.20.10.6/product/advanceSearchByMonth.do',
          data: data,
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(
          // this.$router.push({
          //   path: '/searchResults'
          // })
        ).catch(error => {
          console.log(error)
        })
      }
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
    .termini {
      width: 100%;
      height: 68px;
      line-height: 68px;
      font-size: 28px;
      color: #1d1d1d;
      text-align: left;
    }
    .destination {
      margin-top: 14px;
      margin-bottom: 20px;
      width: 100%;
      height: 140px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        width: 165px;
        height: 62px;
        border: 1px #ddd solid;
        border-radius: 5px;
        line-height: 62px;
        font-size: 28px;
        text-align: center;
        color: #727272;
        margin-bottom: 6px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      div.checked {
        background-color: #f9de57;
        color: black;
      }
    }
    .depart {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 28px;
      border-top: 1px #ccc solid;
      border-bottom: 1px #ccc solid;
      .location {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 90px;
        line-height: 90px;
        span {
          width: 28px;
          height: 28px;
        }
        input {
          color: black;
          font-size: 30px;
          text-align: center;
          border-radius: 10px;
        }
      }
      .start {
        width: 140px;
        height: 90px;
        line-height: 90px;
        color: #242424;
        text-align: left;
      }
      .time {
        width: 220px;
        display: flex;
        justify-content: space-between;
        height: 90px;
        line-height: 90px;
        color: #979797;
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: #ccc;
    }
    .anotherLine {
      width: 1px;
      height: 90px;
      background-color: #ccc;
    }
    .select {
      display: flex;
      width: 100%;
      border-top: 1px #ccc solid;
      border-bottom: 1px #ccc solid;
      margin-top: 20px;
      flex-wrap: wrap;
      .budget, .days {
        width: 100%;
        height: 238px;
        p {
          font-size: 28px;
          text-align: left;
          margin-top: 28px;
        }
      }
    }
    .search {
      width: 91%;
      height: 90px;
      line-height: 90px;
      border-radius: 8px;
      background-color: #f9de57;
      color: black;
      font-size: 38px;
      position: fixed;
      bottom: 10px;
      left: 31px;
      outline: none;
    }
    .white {
      height: 110px;
      width: 100%;
    }
    input[type="date"]::-webkit-clear-button {
      display: none;
    }
    input::-webkit-input-placeholder {
      font-size: 26px;
    }
  }
  .box{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    font-size: 28px;
    margin-top: 50px;
    div{
      position: relative;
      line-height: 30px;
      height: 90px;
      width: 90px;
      display: flex;
      flex-wrap: wrap;
      input[type="radio"] {
        width: 80px;
        height: 40px;
        opacity: 0;
      }
      label{
        position: absolute;
        left: 5px;
        top: 3px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        border: 1px solid #999;
      }
      input:checked+label {
        background-color: #f9de57;
        border: 1px solid #f9de57;
      }
    }
  }
</style>
