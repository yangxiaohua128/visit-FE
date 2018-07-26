<template>
    <div class="advancedSearch">
      <header>
        <img src="img/return.png">
        <p>高级搜索</p>
      </header>
      <div class="content">
        <p>目的地或关键词</p>
        <div class="destination">
          <div>周边</div>
          <div>境内</div>
          <div>港澳台</div>
          <div>东南亚</div>
          <div>日韩朝蒙</div>
          <div>欧洲</div>
          <div>美洲</div>
          <div>
            更多
            <img src="img/more.png">
          </div>
          <input type="text" placeholder="输入目的地、主题或关键字">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .advancedSearch{
    width:750px;
  }
  header{
    width:750px;
    height:90px;
    display:flex;

  }
  header p{
    font-size: 36px;
    color: black;
  }
  .destination{
    width:100%;
    height:130px;
  }
  .destination div{
    width:165px;
    height:62px;
    line-height: 62px;
    font-size: 24px;
    text-align: center;
  }
</style>
