<template>
 <div class="userAlbum">
   <header>
     <div>
       <img src="./img/return.png">
     </div>
     <p>用户相册</p>
     <div></div>
   </header>
   <div class="content">
     <ul>
       <li class="album">
         <p></p>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
  name: 'userAlbum'
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
    p,div{
      width:150px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 36px;
      color: black;
    }
  }
  .content {
    ul{
      width: 100%;
      li{
        height: 260px;
        width: 100%;
        p{
          height: 50px;
          width: 200px;
        }
      }
    }
  }
</style>
