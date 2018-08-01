<template>
  <div class="informChange">
    <header>
      <div><img src="./img/left.png" width="19" height="19" @touchend="toBack"/></div>
      <p>编辑个人资料</p>
      <div></div>
    </header>
    <form class="change">
      <div class="name">
        <div class="name1">真实姓名</div>
        <input type="text" class="name2" placeholder="请输入你的真实姓名"/>
      </div>
      <div class="sex">
        <div class="sex1">性别</div>
        <input  type="radio" name="sex"/><img src="./img/man.png" width="20px" height="20px"/>
        <input  type="radio" name="sex"/><img src="./img/woman.png" width="20px" height="20px"/>
      </div>
      <div class="time">
        <div class="time1">出生日期</div>
        <input type="text" class="time2" placeholder="请输入你的生日"/>
      </div>
    </form>
    <button type="button">保存</button>
  </div>
</template>

<script>
export default {
  name: 'informChange',
  data () {
    return {}
  },
  methods: {
    toBack: function () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
  .informChange{
    width: 750px;
  }
  header{
    width: 100%;
    height: 90px;
    align-items:center;
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 20px;

    div{
      text-align: left;
      padding-left: 20px;
      width: 150px;
      height: 38px;
    }

    p{
      text-align: center;
      line-height: 38px;
      font-size: 36px;
      color:black;
    }
  }
  input{
    border: none;
    padding: 0;
    border-top:1px #e4e4e4 solid ;
    border-bottom: 1px #e4e4e4 solid;
  }
  .change{
    margin-left: 6px;
    margin-right: 6px;
    text-align: left;
    font-size: 34px;
    border-bottom:1px #e4e4e4 solid ;
    border-top:2px #e4e4e4 solid ;
    margin-bottom: 150px;
  }
  .name{
    justify-content: space-between;
    flex-wrap:wrap;
    display: flex;
    width:736px;
    height: 100px;
    border-bottom:1px #e4e4e4 solid;
  }
  .name1{
    width:200px ;
    line-height: 100px;
    margin: 0;
  }
  .name2{
    width:536px;
    line-height: 100px;
    margin: 0;

  }
  .sex{
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    display: flex;
    width:736px;
    input{
      height: 80px;
    }
  }
  .time{
    justify-content: space-between;
    flex-wrap:wrap;
    display: flex;
    width:736px;
  }
  .time1{
    width:200px ;
    height: 100px;
    line-height:100px;
    border-top:1px #e4e4e4 solid;
    margin: 0;
  }
  .time2{
    width:536px;
    height: 100px;
    line-height: 100px;
    border-top:1px #e4e4e4 solid;
    margin: 0;
  }
  button{
    width:91%;
    align-self: center;
    background-color:#f9de57;
    height: 90px;
    border-radius: 8px;
    font-size: 38px;
    border:none;
  }
</style>
