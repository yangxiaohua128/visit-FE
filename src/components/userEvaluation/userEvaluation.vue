<template>
  <div class="userEvaluation">
    <header>
      <div>
        <img src="./img/return.png" @touchend="toBack">
      </div>
      <p>评价晒单</p>
      <div></div>
    </header>
    <form class="content" id="formid" name="evaluation" method="post" action="" enctype="multipart/form-data">
      <p class="score">产品评分</p>
      <div class="level">
        <div>
          <input id="item1" type="radio" name="item" value="差"/>
          <label for="item1">差</label>
        </div>
        <div>
          <input id="item2" type="radio" name="item" value="一般"/>
          <label for="item2">一般</label>
        </div>
        <div>
          <input id="item3" type="radio" name="item" value="满意"/>
          <label for="item3">满意</label>
        </div>
        <div>
          <input id="item4" type="radio" name="item" value="很好"/>
          <label for="item4">很好</label>
        </div>
        <div>
          <input id="item5" type="radio" name="item" value="完美"/>
          <label for="item5">完美</label>
        </div>
      </div>
      <div class="comment">
        <textarea name="comment" title="comment" style="width:100%; height:70%" placeholder="您的评价是对我们最大的支持哦！"></textarea>
        <div class="photo">
          <input id="pic" type="file" @change="handleFileChange" ref="inputer" capture="video"
                 multiple="multiple" accept="image/png,image/gif,image/jpeg"/>
          <label for="pic"></label>
          <img :src="dataUrl"/>
        </div>
      </div>
      <div class="details">
        <div class="prompt">
          <img src="./img/comment.png">服务评价
        </div>
        <div class="message">
          <span>行程安排</span>
          <div class="sch">
            <div>
              <input id="p1" type="radio" name="p" value="差"/>
              <label for="p1">差</label>
            </div>
            <div>
              <input id="p2" type="radio" name="p" value="一般"/>
              <label for="p2">一般</label>
            </div>
            <div>
              <input id="p3" type="radio" name="p" value="满意"/>
              <label for="p3">满意</label>
            </div>
            <div>
              <input id="p4" type="radio" name="p" value="很好"/>
              <label for="p4">很好</label>
            </div>
            <div>
              <input id="p5" type="radio" name="p" value="完美"/>
              <label for="p5">完美</label>
            </div>
          </div>
          <span>描述相符</span>
          <div class="sch">
            <div>
              <input id="f1" type="radio" name="f" value="差"/>
              <label for="f1">差</label>
            </div>
            <div>
              <input id="f2" type="radio" name="f" value="一般"/>
              <label for="f2">一般</label>
            </div>
            <div>
              <input id="f3" type="radio" name="f" value="满意"/>
              <label for="f3">满意</label>
            </div>
            <div>
              <input id="f4" type="radio" name="f" value="很好"/>
              <label for="f4">很好</label>
            </div>
            <div>
              <input id="f5" type="radio" name="f" value="完美"/>
              <label for="f5">完美</label>
            </div>
          </div>
          <span>导游讲解</span>
          <div class="sch">
            <div>
              <input id="j1" type="radio" name="j" value="差"/>
              <label for="j1">差</label>
            </div>
            <div>
              <input id="j2" type="radio" name="j" value="一般"/>
              <label for="j2">一般</label>
            </div>
            <div>
              <input id="j3" type="radio" name="j" value="满意"/>
              <label for="j3">满意</label>
            </div>
            <div>
              <input id="j4" type="radio" name="j" value="很好"/>
              <label for="j4">很好</label>
            </div>
            <div>
              <input id="j5" type="radio" name="j" value="完美"/>
              <label for="j5">完美</label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" value="Submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'userEvaluation',
  data () {
    return {
      items: ['行程安排', '描述相符', '导游讲解'],
      dataUrl: require('./img/photo.png'),
      file: null,
      fileName: '',
      errText: '',
      select: ['很差', '差', '一般', '满意', '完美'],
      n: -1
    }
  },
  methods: {
    toBack () {
      this.$router.back(-1)
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
    .score{
      font-size: 38px;
      line-height: 50px;
      height: 50px;
      width: 85%;
      margin: 0 auto;
      text-align: left;
    }
    .level{
      width: 90%;
      margin: 0 auto;
      height: 130px;
      font-size: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
        div{
          position: relative;
          line-height: 30px;
          input[type="radio"] {
            width: 100px;
            height: 50px;
            opacity: 0;
          }
          label{
            position: absolute;
            left: 5px;
            top: 3px;
            width: 100px;
            height: 50px;
            line-height: 50px;
            border-radius: 10px;
            border: 1px solid #999;
          }
          input:checked+label {
            background-color: #f9de57;
            border: 1px solid #f9de57;
          }
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
        font-size: 34px;
        line-height: 40px;
        width: 100%;
        height: 50%;
        border: none;
      }
      img{
        width: 150px;
        height: 150px;
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
        width: 90%;
        margin: 0 auto;
        font-size: 34px;
        display: flex;
        height: 200px;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        .sch{
          display: flex;
          width: 75%;
          justify-content: space-around;
          align-items: center;
          font-size: 28px;
          div{
            position: relative;
            line-height: 30px;
            input[type="radio"] {
              width: 80px;
              height: 40px;
              opacity: 0;
            }
            label{
              position: absolute;
              left: 5px;
              top: 3px;
              width: 80px;
              height: 40px;
              line-height: 40px;
              border-radius: 10px;
              border: 1px solid #999;
            }
            input:checked+label {
              background-color: #f9de57;
              border: 1px solid #f9de57;
            }
          }
        }
      }
    }
    button{
      width: 90%;
      height: 80px;
      line-height: 80px;
      margin: 30px auto;
      background-color: #f9de57;
      font-size: 30px;
      border-radius: 20px;
    }
  }
</style>
