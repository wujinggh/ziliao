<template>
    <div class="page-login">
        <div class="banner"><img src="../../images/login_banner.jpg" alt=""></div>
        <div class="form">
            <ul>
                <li class="list_1"><input type="text" placeholder="账号" id="username" v-model="data.username"></li>
                <li class="list_2"><input type="password" placeholder="密码" id="password" v-model="data.password"></li>
            </ul>
            <button type="button" @click="loginIn">{{ btnName }}</button>
        </div>
    </div>
</template>
<script>
import { toast } from "@/plugin/util";
export default {
  name: "login",
  data() {
    return {
      data: {
        username: "",
        password: ""
      },
      btnName: '登 录',
      loginFlag: true,
      localSchoolData: JSON.parse(localStorage.getItem('schoolData'))
    };
  },
  methods: {
    loginIn() {
      this.loginFlag = false;
      this.btnName = '登 录 中...'
      // this.$router.push({ path: 'welcome' })//本地测试，跳过请求
      this.$http.post("/login", this.data).then((res) => {
        if(res.code == 0){
          if(this.localSchoolData && this.localSchoolData.answer && this.localSchoolData.answer instanceof Array && this.localSchoolData.username == this.data.username){
            this.data.answer = this.localSchoolData.answer
          }else{
            // 把答案中为null转为''
            this.data.answer = res.data.answer && res.data.answer.map(function(item,index){
              if(item === null || /^ +$/.test(item)){
                return ''
              }else if(item instanceof Array){
                item.forEach(function(value,i){
                  if(value === null){
                    item[i] = ''
                  }
                })
              }
              return item; 
            })
          }
          this.data.api_token = res.data.api_token;
          this.data.percent = res.data.percent;
          this.data.blank_array = res.data.blank_array;
          this.data.information = (this.localSchoolData && this.localSchoolData.information && this.localSchoolData.username == this.data.username) ? this.localSchoolData.information : res.data.information;
          let schoolData = JSON.stringify(this.data)
          localStorage.setItem('schoolData',schoolData)
          if(res.data.percent == 100){
            this.$router.push({ path: 'finish' })
          }else{
            this.$router.push({ path: 'welcome' })
          }
        }else{
          toast(res.message)
        }
        this.btnName = '登 录'
        this.loginFlag = true
      },()=>{
        toast('登录失败，请重试！')
        this.btnName = '登 录'
        this.loginFlag = true
      })
    }
  },
  created(){
    sessionStorage.setItem('routerFlag','1')//防止用户从别的入口直接进入试题
    let schoolData = JSON.parse(localStorage.getItem('schoolData'))
    if(schoolData && schoolData.username && schoolData.password && schoolData.api_token){
      this.data = {
        username: schoolData.username,
        password: schoolData.password
      }
    }
  }
};
</script>
<style lang="less">
.page-login {
  width: 7.5rem;
  height: 100%;
  .banner {
    img {
      width: 100%;
    }
  }
  .form {
    width: 5.6rem;
    margin: 0 auto;
    ul {
      margin-top: -0.2rem;
      li {
        margin-top: 0.36rem;
        
        border-bottom: 0.02rem #e6e6e6 solid;
        padding-left: 0.68rem;
        &.list_1 {
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAYAAAAXb/p7AAADGElEQVR42sWZSWhUQRCGX0xmlBjNYBRE0UAuMhgERRwiigsExSVKIHHJIYoXRQQPCgqe3KIScxJRRPSkF0VBzcEFUURNLqJhFERy8OAS96hoXDL+pR14FPWeM9313jR8A5np/vufnu561RXPs2zZbHY0aAZnwAuQY7wE58A66uvF1TBZJTgIPgumgvgE9oCKqM0tDlitfHkOMlGZ2wJ+h0z+w5gnfob0+wZatM1tCpjsDTgA6kDC1z8B5oB20CeMGwTrtczNB7/YBPR3G0jlMb4CdBhTfMXrXM0NB71M+CvtRQutNWCAaT2lOVwMbmWCtAcbHPQahZXcZis2Qtg/7Qpb5hjTpENVZiPUxITegVEKBquEGLrERugkEzmqGBVOMO0jNiI9TGSRosHlTLvLRuQ7E0kpGpzE46lNePELDCgH/gSPDoUKlAmRP6loMOW8ACYD8YtUKxpM81BjI9LFRFYpGmxh2jdtRDqYyFlFgxeY9j4bkQV8n9DpUzA3RUjHMjZCw8ATJnTR0VwpuMY0e1wEG4VcboeD3iFBr9nFYAm4I4ScnfRZgSt3WDB3oxCdIPEa8FEQp58qncf4WnBLGE+Z0mStU7fQ3CVyQn7YCTaCmeYRRswCm82XGBTGfVG/PEFwrkm5co70RXmza3U0Ryu+Ogpj0yjaK6ye/3BM1TBGScPu/9xzh+gHrwz9efSnW90uOuG25sYEnL4hKIjvNQeoShg/FtSD/eBZiM71gnNNDJiY/dckwatgnmUkCPrCD8G4QopDjwKqVSsVtk1TQLWB5qy0eVYSt8F4xUNHv9B9YZ7O0CeL2bR80GW6I0cQGUaa7cLn2x6WBvGL0j1QHmE5rxx0C9WvGqnzJdbxNZgQQ0G0Grxnc5/nnWYIz8y1MVZtNwgZU62/w2nW4a4XYzNp3QPm4bh/s/LI3+DF3ExB3u/hw9/DiZelQrWptAgGk+At81LvmTJtJEUiC5OnmJc2z2QWOncE/XTuiif8WyFdRIPTmZdeevMxi30lRTSYZPefbnpztnlQU7F8mVfkBg8rTHGdFi7zB3gU6Dtn3WQZAAAAAElFTkSuQmCC")
              no-repeat left center;
            background-size: 0.4rem 0.44rem;
        }
        &.list_2 {
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAYAAABap1twAAABsElEQVR42u2ZPUvDQBjHQ5S6dOsg1U0sjSjoVxD8CIKlg3QTlRJ82R3EwY/hBwiI4OLgKrhKRL9AHRykre9i9X94Q/qQxOZydz30Dn7j/Z8fuVzuJY6To4VhuAAOwSV4BF+cDrgAB2DW0d1QdA6cRYTS6IFjMK1LrgleB5SL8gRWVcvtC4hRdlXJbSYUvAI+8EABjIEZsBX+tLghX5EtV40Z1mewBtyUfqNgA7yQvmwSTcoUPCEF3sBihv5LvE8040jm0+uR8HWBnG2S8QHKMgT3Yt45VyCHDfcNyWrKEDwnoX6OLJ9kBTIEWyTUy7nyRLOuZQi+k9BCjqwpknUnQ7DvO5Yzaxx8RvJOjRLkeTt8Y3EL5o0TVLHEWcG/IwiBCvt4graEbVVW2rx2JW3NfRiCGIU5VOMEAwPkkpfAIQ1rEt1fJwO4Bw2+Oy4qeN+LPLvBa6VPxhjBusbJWRcRnNAoWBYRdDUKjmQWNG5BsIJW0ApaQStoBf+ZoPGbBSl3d4q3WzWNgjURQXbttgxKCsVKvEZrEEHjD03GHzs9gw7uXtrtQsD/Y+gW6/DafbcK3+zxy5ma9p6TAAAAAElFTkSuQmCC")
              no-repeat left center;
            background-size: 0.4rem 0.44rem;
        }
        input {
          line-height: 0.6rem;
          background: none;
          border: none;
          outline: none;
          width: 100%;
          padding: 0.2rem 0.2rem 0.2rem 0;
          box-sizing: border-box;
        }
      }
    }
    button {
      text-decoration: none;
      width: 100%;
      height: 0.96rem;
      margin-top: 1.16rem;
      display: block;
      background: #2d81e7;
      border: none;
      outline: none;
      border-radius: 0.48rem;
      background-image: -webkit-linear-gradient(#1da8ef, #2e7fe7, #3471e4);
      background-image: linear-gradient(#1da8ef, #2e7fe7, #3471e4);
      font-size: 0.36rem;
      color: #fff;
      font-weight: bold;
      line-height: 0.96rem;
      text-align: center;
    }
  }
}
</style>


