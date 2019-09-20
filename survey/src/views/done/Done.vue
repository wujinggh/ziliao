<template>
    <div class="page-done">
        <p>诚挚感谢您参与本次评估，您可以选择返回评估首页检查或修改评估的内容。</p>
        <button type="button" class="button_1" @click="backUp">返回首页检查修改</button>
        <button type="button" class="button_2" @click="checkAnswer">提交评估内容</button>
        <div class="prompt" v-if="promptFlag" @click="close">
            <div class="main">
                <p>检测到您还有{{ notDoNumber }}题未做，是否选择继续提交？</p>
                <div class="btn_box">
                    <button type="button" class="continue" @click="submit">仍要提交</button>
                    <button type="button" class="once_again" @click="continueDo">继续作答</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { toast } from "@/plugin/util";
export default {
  name: "done",
  data() {
    return {
      notStartNumber: 1,
      notDoNumber: 0,
      promptFlag: false
    };
  },
  methods: {
    checkAnswer() {
      let answer = localStorage.getItem("schoolData") ? JSON.parse(localStorage.getItem("schoolData")).answer : [];
      answer.forEach((item, index) => {
        let isValue =  true;
        if(item instanceof Array){
          for(let i = 0,len = item.length;i<len; i++){
            if(item[i] || item[i] === 0){
              isValue = false;
            }
          }
        }
        if ((item instanceof Array ? isValue : false) || (!item && item !== 0) || /^ +$/.test(item)) {
          this.notDoNumber == 0 && (this.notStartNumber = index + 1);
          this.notDoNumber++;
          return;
        }
      });
      if (this.notDoNumber > 0) {
        this.promptFlag = true;
      } else {
        this.submit();
      }
      
    },
    submit() {
      let answer = JSON.parse(localStorage.getItem("schoolData")).answer;
      this.$http.post("/survey/submit", {'answer':answer}).then(
        res => {
          if (res.code == 0) {
            this.$router.push({ path: 'finish' })
            // sessionStorage.setItem('routerFlag','')
          } else {
            toast(res.message);
          }
        },
        () => {
          toast("提交失败，请重试！");
        }
      );
    },
    continueDo(){
        this.$router.push({ path: 'question' ,query: { currentNumber: this.notStartNumber }})
    },
    backUp(){
        this.$router.push({ path: 'question' ,query: { currentNumber: 1 }})
    },
    close(e){
      let target = e.target || srcElement
      while(target){
        if(/main/.test(target.className)){
          target = false;
          return;
        }else{
          target = target.parentNode
        }
      }
      this.promptFlag = false;
    }
  }
};
</script>
<style lang="less">
.page-done {
  padding: 0.6rem 0.4rem 0;
  p {
    line-height: 0.5rem;
    margin-bottom: 0.35rem;
  }
  button {
    background: #7eb9e4;
    display: block;
    font-size: 0.36rem;
    line-height: 0.96rem;
    text-align: center;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    margin-bottom: 0.35rem;
    &.button_1 {
      background: #7eb9e4;
    }
    &.button_2 {
      background: #2498ed;
    }
  }
}
.prompt {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .main {
    width: 6.72rem;
    height: 3.52rem;
    box-sizing: border-box;
    padding-top: 0.74rem;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 4rem;
    margin-left: -3.36rem;
    border-radius: 0.18rem;
    p {
      text-align: center;
      font-size: 0.3rem;
      color: #222;
      margin-bottom: 0.5rem;
      padding: 0 0.2rem;
    }
    .btn_box {
      text-align: center;
      button {
        width: 2.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border-radius: 0.4rem;
        margin: 0 0.3rem;
        display: inline-block;
        border: none;
        background: #2498ed;
        color: #fff;
        font-size: 0.3rem;
        font-weight: bold;
        &.once_again {
          background: #7eb9e4;
        }
      }
    }
  }
}
</style>


