<template>
  <div class="userEvaluation">
    <header>
      <div>
        <img src="./img/return.png" @touchend="toBack">
      </div>
      <p>评价晒单</p>
      <div></div>
    </header>
    <div class="content">
      <p class="score">产品评分</p>
      <div class="level">
        <div>
          <input id="commentScore1" type="radio" name="commentScore" value="1" v-model="score"/>
          <label for="commentScore1">差</label>
        </div>
        <div>
          <input id="commentScore2" type="radio" name="commentScore" value="2" v-model="score"/>
          <label for="commentScore2">一般</label>
        </div>
        <div>
          <input id="commentScore3" type="radio" name="commentScore" value="3" v-model="score"/>
          <label for="commentScore3">满意</label>
        </div>
        <div>
          <input id="commentScore4" type="radio" name="commentScore" value="4" v-model="score"/>
          <label for="commentScore4">很好</label>
        </div>
        <div>
          <input id="commentScore5" type="radio" name="commentScore" value="5" v-model="score"/>
          <label for="commentScore5">完美</label>
        </div>
      </div>
      <div class="comment">
        <textarea name="commentContent" title="comment" style="width:100%; height:70%" placeholder="您的评价是对我们最大的支持哦！"
                  v-model="content"></textarea>
        <div class="photo">
          <input id="pic" type="file" name="files" @change="handleFileChange" ref="inputer" capture="video"
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
              <input id="commentScheduling1" type="radio" name="commentScheduling" value="1" v-model="scheduling"/>
              <label for="commentScheduling1">差</label>
            </div>
            <div>
              <input id="commentScheduling2" type="radio" name="commentScheduling" value="2" v-model="scheduling"/>
              <label for="commentScheduling2">一般</label>
            </div>
            <div>
              <input id="commentScheduling3" type="radio" name="commentScheduling" value="3" v-model="scheduling"/>
              <label for="commentScheduling3">满意</label>
            </div>
            <div>
              <input id="commentScheduling4" type="radio" name="commentScheduling" value="4" v-model="scheduling"/>
              <label for="commentScheduling4">很好</label>
            </div>
            <div>
              <input id="commentScheduling5" type="radio" name="commentScheduling" value="5" v-model="scheduling"/>
              <label for="commentScheduling5">完美</label>
            </div>
          </div>
          <span>描述相符</span>
          <div class="sch">
            <div>
              <input id="commentDescribe1" type="radio" name="commentDescribe" value="1" v-model="describe"/>
              <label for="commentDescribe1">差</label>
            </div>
            <div>
              <input id="commentDescribe2" type="radio" name="commentDescribe" value="2" v-model="describe"/>
              <label for="commentDescribe2">一般</label>
            </div>
            <div>
              <input id="commentDescribe3" type="radio" name="commentDescribe" value="3" v-model="describe"/>
              <label for="commentDescribe3">满意</label>
            </div>
            <div>
              <input id="commentDescribe4" type="radio" name="commentDescribe" value="4" v-model="describe"/>
              <label for="commentDescribe4">很好</label>
            </div>
            <div>
              <input id="commentDescribe5" type="radio" name="commentDescribe" value="5" v-model="describe"/>
              <label for="commentDescribe5">完美</label>
            </div>
          </div>
          <span>导游讲解</span>
          <div class="sch">
            <div>
              <input id="commentExplain1" type="radio" name="commentExplain" value="1" v-model="explain"/>
              <label for="commentExplain1">差</label>
            </div>
            <div>
              <input id="commentExplain2" type="radio" name="commentExplain" value="2" v-model="explain"/>
              <label for="commentExplain2">一般</label>
            </div>
            <div>
              <input id="commentExplain3" type="radio" name="commentExplain" value="3" v-model="explain"/>
              <label for="commentExplain3">满意</label>
            </div>
            <div>
              <input id="commentExplain4" type="radio" name="commentExplain" value="4" v-model="explain"/>
              <label for="commentExplain4">很好</label>
            </div>
            <div>
              <input id="commentExplain5" type="radio" name="commentExplain" value="5" v-model="explain"/>
              <label for="commentExplain5">完美</label>
            </div>
          </div>
        </div>
      </div>
      <button type="button" value="Submit" @touchend="submitData()">提交</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
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
        n: -1,
        score: '',
        content: '',
        scheduling: '',
        describe: '',
        explain: ''
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
      },
      submitData () {
        let photo = this.$refs.inputer.value
        let data = {'commentScore': this.score, 'commentContent': this.content, 'files': photo, 'commentScheduling': this.scheduling, 'commentDescribe': this.describe, 'commentExplain': this.explain}
        axios({
          method: 'post',
          url: 'http://192.168.43.29:8080/comment/commentOk.do',
          data: data,
          headers: {}
        }).then(
          this.$router.push({
            path: '/Ordermanagement'
          })
        ).catch(error => {
          console.log(error)
        })
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
      outline: none;
    }
  }
</style>
