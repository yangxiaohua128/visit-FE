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
    margin: 0;
    padding: 0;
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
