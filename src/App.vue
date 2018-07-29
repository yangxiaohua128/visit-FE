<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  body {
    padding: 0;
    margin: 0;
  }
  p{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  input{
    border: none;
    margin: 0;
    padding: 0;
  }
  button{
    border: none;
    padding: 0;
    margin: 0;
  }
  button:focus{outline:0;}
  input:focus{outline:0;}
</style>
