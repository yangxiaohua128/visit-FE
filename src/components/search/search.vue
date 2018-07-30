<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> 终于出来了！</h2>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        msg: '加油你是最棒的！'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    color: yellow;
  }
</style>
