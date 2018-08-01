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
  body {
    margin: 0;
    padding: 0;
    .content {
      width: 93%;
      margin: 0 auto;
    }
    header {
      background-color: white;
      letter-spacing: 4px;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    body {
      margin: 0;
      padding: 0;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .content {
      width: 93%;
      margin: 0 auto;
    }
    body {
      margin: 0;
      padding: 0;
    }
    p, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, form, table {
      margin: 0;
      padding: 0;
    }
    a, img, input, button {
      border: none;
    }
    img {
      vertical-align: middle;
      border: 0;
    }
    li {
      list-style: none;
    }
    i, em {
      font-style: normal;
    }
    a {
      text-decoration: none;
      color: #000000;
      border: 0;
    }
    input, select, option, textarea {
      outline: none;
    }
    a, img, input, button {
      border: none;
    }
    img {
      vertival-align: middle;
      border: 0;
    }
    li {
      list-style: none;
    }
    i, em {
      font-style: normal;
    }
    a {
      text-decoration: none;
      color: #000;
      border: 0;
    }
  }
</style>
