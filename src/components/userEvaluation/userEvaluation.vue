<template>
  <div class="userEvaluation">
    <header>
      <div>
        <img src="./img/return.png" @touchend="toBack">
      </div>
      <p>评价晒单</p>
      <div>提交</div>
    </header>
    <div class="content">
      <div class="level">
        <img src="./img/picture.jpg">
        <div class="star">
          <p>评分</p>
        </div>
      </div>
      <div class="comment">
        <textarea name="comment" title="comment" style="width:100%; height:70%"></textarea>
        <div class="photo">
          <input id="pic" type="file" @change="handleFileChange" ref="inputer" capture="video"
          />
          <label for="pic"></label>
          <img :src="dataUrl" />
          <!-- other element-->
          <img src="./img/photo.png">
        </div>
        <div class="anonymous"><img :src="imgUrl"  @touchend="changeUrl()">匿名评价</div>
      </div>
      <div class="details">
        <div class="prompt">
          <img src="./img/comment.png">服务评价
        </div>
        <div class="message" v-for="item of items" :key="item.id">
          <span>{{item}}</span>
          <div></div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index" :key="itemClass.id">
    </span>
    </div>
  </div>
</template>

<script>
import star from '../../../star.vue'
export default {
  name: 'userEvaluation',
  data () {
    return {
      items: ['行程安排', '描述相符', '导游讲解'],
      imgUrl: require('./img/select.png'),
      bOn: false,
      dataUrl: '',
      file: null,
      fileName: '',
      errText: '',
      size: 36,
      score: 10
    }
  },
  components: {
    'star': star
  },
  methods: {
    toBack () {
      this.$router.back(-1)
    },
    changeUrl () {
      this.bOn ? this.imgUrl = require('./img/select.png') : this.imgUrl = require('./img/unselect.png')
      this.bOn = !this.bOn
    },
    handleFileChange (e) {
      if (typeof e.target === 'undefined') this.file = e[0]
      else this.file = e.target.files[0]
      this.errText = ''
      let size = Math.floor(this.file.size / 1024)
      if (size > 5120) {
        this.errText = `文件大小不能超过${this.sizeHumanRead}`
        return false
      }
      // 双向绑定
      this.$emit('input', this.file)
      if (this.autoUpload) this.uploadFile()
      this.onChange && this.onChange(this.file, this.file.name)
      this.$emit('onChange', this.file, this.file.name)
      this.imgPreview(this.file)
      this.fileName = this.file.name
    },
    imgPreview (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function () {
          self.dataUrl = this.result
        }
      }
      console.log(this.dataUrl)
    }
  }
}
</script>

<style lang="scss" scoped>
  .userEvaluation{
    width: 750px;
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
  .content{
    .level{
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 230px;
      img{
        width: 200px;
        height: 170px;
      }
      .star{
        font-size: 36px;
        width: 350px;
        height: 170px;
        text-align: left;
        color: black;
      }
    }
    .comment{
      width: 100%;
      height: 550px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      textarea{
        background-color: #f9f9f9;
        font-size: 30px;
        line-height: 40px;
        width: 100%;
        height: 50%;
        border: none;
      }
      img{
        width: 150px;
        height: 150px;
      }
      .anonymous{
        font-size: 36px;
        width:40%;
        img{
          align-self: left;
          width: 45px;
          height: 45px;
          vertical-align: middle;
        }
      }
    }
    .photo{
      position: relative;
      input {
        position: absolute;
        left: -9999px;
      }
      /* 使label充满整个box*/
      label {
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        z-index: 10;
      }
    }
    .details{
      .prompt{
        font-size: 42px;
        width:40%;
        height: 100px;
        display: flex;
        align-items: center;
        letter-spacing: 4px;
        img{
          width: 40px;
          height: 40px;
          margin-right: 30px;
        }
      }
      .message{
        width: 80%;
        margin: 0 auto;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        text-align: left;
      }
    }
  }
</style>
