<template>
    <div class="page-welcome">
      <div class="hd">
        <div class="pic"><img src="../../images/welcome_1.png" alt=""></div>
        <p>尊敬的学校领导，您好！欢迎使用远播教育集团国际高中质量评估调查，以下是本次评估调查的注意事项，请在阅读完成后点击下方按钮进入评估页面。</p>
      </div>
      <div class="bd">
        <h4>注意事项：</h4>
        <p>1、本次评估调研问题，请尽量作答，如果不能作答时可以直接点击下一题跳过。</p>
        <p>2、本次评估调研的问题分为多种，如单选、多选、填空、自定义作答，当您对题目产生疑问时，请参考题目下方注解提示。</p>
        <p>3、本次评估试题的结果可能会涉及到数值的单位，请先核对单位再进行作答。</p>
      </div>
      <div class="ft">
        <router-link to="/binfo">下一步</router-link>
      </div>
    </div>
</template>
<script>
export default {
  name: "welcome",
  data() {
    return {
      data: {
        
      }
    };
  }
};
</script>
<style lang="less">
  .page-welcome{
    width: 7.5rem;
    box-sizing: border-box;
    height: 100%;
    background: url(../../images/welcome_2.jpg) no-repeat center bottom;
    background-size: 100%;
    padding: 0 0.4rem;
    p{
      font-size: 0.3rem;
      line-height: 0.5rem;
      color: #000;
      text-align: justify;
      margin-bottom: 0.44rem;
    }
    .hd{
      margin-bottom: 0.3rem;
      .pic{
        width: 3.88rem;
        height: 1.08rem;
        margin: 0 auto ;
        padding: 0.3rem 0 0.2rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .bd{
      h4{
        font-size: 0.3rem;
        color: #2498ed;
        margin-bottom: 0.4rem;
        &::before{
          margin-right: 0.2rem;
          width: 0.08rem;
          height: 0.3rem;
          background: #2498ed;
          content: '';
          float:left;
          margin-top: 0.06rem;
        }
      }
    }
    .ft{
      padding-top: 0.2rem;
      a{
        display: block;
        text-decoration: none;
        width: 5.6rem;
        height: 0.96rem;
        text-align: center;
        line-height: 0.96rem;
        font-size: 0.36rem;
        color: #fff;
        margin: 0 auto;
        background: #2498ed;
      } 
    }
  }
</style>


