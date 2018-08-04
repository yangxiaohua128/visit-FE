<template>
  <div class="informChange">
    <header>
      <div><img src="./img/left.png" width="19" height="19" @touchend="toBack"/></div>
      <p>编辑个人资料</p>
      <div></div>
    </header>
    <form class="change" action="" method="post" name="myForm" onsubmit="console.log(input.value)">
      <div class="name">
        <div class="name1">真实姓名</div>
        <input type="text" class="name2" name="myName" placeholder="请输入你的真实姓名" required="required" v-model.lazy="msg"/>
      </div>
      <div class="sex">
        <div class="sex1">性别</div>
        <div><input  type="radio" name="sex" value="男"/><img src="./img/man.png" width="50px" height="50px"/></div>
        <div><input  type="radio" name="sex" value="女"/><img src="./img/woman.png" width="50px" height="50px"/></div>
      </div>
      <div class="time">
        <div class="time1">出生日期</div>
        <input type="date" class="time2"  name="myBirthday" placeholder="请输入你的生日" required="required"/>
      </div>
      <div class="save"><input type="submit" value="保存" name="submit"/></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'informChange',
  data () {
    return {
      msg: 'whh'
      // arr = ["userName","msg"]
    }
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
    border-top:2px #e4e4e4 solid ;
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
    margin-bottom: 150px;
    border-bottom: 1px #e4e4e4 solid ;
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
  .save{
    width: 100%;
    display: flex;
    justify-content: center;
    input {
      width: 91%;
      background-color: #f9de57;
      height: 90px;
      border-radius: 8px;
      font-size: 38px;
      border: none;
      margin: 0 auto;
    }
  }
</style>
