<template>
    <div class="page-question">
        <div class="main">
            <div class="pager"><span>{{ currentNumber }}/</span>26</div>
            <question1 v-if="currentNumber == 1" :answer="answer" ref="question1"></question1>
            <question2 v-if="currentNumber == 2" :answer="answer" ref="question2"></question2>
            <question3 v-if="currentNumber == 3" :answer="answer" ref="question3"></question3>
            <question4 v-if="currentNumber == 4" :answer="answer" ref="question4"></question4>
            <question5 v-if="currentNumber == 5" :answer="answer" ref="question5"></question5>
            <question6 v-if="currentNumber == 6" :answer="answer" ref="question6"></question6>
            <question7 v-if="currentNumber == 7" :answer="answer" ref="question7"></question7>
            <question8 v-if="currentNumber == 8" :answer="answer" ref="question8"></question8>
            <question9 v-if="currentNumber == 9" :answer="answer" ref="question9" @postData="postData"></question9>
            <question10 v-if="currentNumber == 10" :answer="answer" ref="question10"></question10>
            <question11 v-if="currentNumber == 11" :answer="answer" ref="question11"></question11>
            <question12 v-if="currentNumber == 12" :answer="answer" ref="question12"></question12>
            <question13 v-if="currentNumber == 13" :answer="answer" ref="question13"></question13>
            <question14 v-if="currentNumber == 14" :answer="answer" ref="question14"></question14>
            <question15 v-if="currentNumber == 15" :answer="answer" ref="question15"></question15>
            <question16 v-if="currentNumber == 16" :answer="answer" ref="question16"></question16>
            <question17 v-if="currentNumber == 17" :answer="answer" ref="question17"></question17>
            <question18 v-if="currentNumber == 18" :answer="answer" ref="question18"></question18>
            <question19 v-if="currentNumber == 19" :answer="answer" ref="question19"></question19>
            <question20 v-if="currentNumber == 20" :answer="answer" ref="question20"></question20>             
            <question21 v-if="currentNumber == 21" :answer="answer" ref="question21"></question21>
            <question22 v-if="currentNumber == 22" :answer="answer" ref="question22"></question22>
            <question23 v-if="currentNumber == 23" :answer="answer" ref="question23"></question23>
            <question24 v-if="currentNumber == 24" :answer="answer" ref="question24"></question24>
            <question25 v-if="currentNumber == 25" :answer="answer" ref="question25"></question25>
            <question26 v-if="currentNumber == 26" :answer="answer" ref="question26"></question26>

        </div>
        <div class="btns-box">
            <button type="button" class="prev" :class="{'g-hidden': (currentNumber == 1)}" @click="prev">上一题</button>
            <button type="button" class="next" :class="{'wd100': (currentNumber == 1)}" @click="next">{{nextTxt}}</button>
        </div>
        <floatform :answer="answer" :itemData="itemData" v-show="floatFlag" @floatHidden="floatHidden"></floatform>
    </div>
</template>
<script>
import  question1  from "@/views/question/question1";
import  question2  from "@/views/question/question2";
import  question3  from "@/views/question/question3";
import  question4  from "@/views/question/question4";
import  question5  from "@/views/question/question5";
import  question6  from "@/views/question/question6";
import  question7  from "@/views/question/question7";
import  question8  from "@/views/question/question8";
import  question9  from "@/views/question/question9";
import  question10  from "@/views/question/question10";
import  question11  from "@/views/question/question11";
import  question12  from "@/views/question/question12";
import  question13  from "@/views/question/question13";
import  question14  from "@/views/question/question14";
import  question15  from "@/views/question/question15";
import  question16  from "@/views/question/question16";
import  question17  from "@/views/question/question17";
import  question18  from "@/views/question/question18";
import  question19  from "@/views/question/question19";
import  question20  from "@/views/question/question20";
import  question21  from "@/views/question/question21";
import  question22  from "@/views/question/question22";
import  question23  from "@/views/question/question23";
import  question24  from "@/views/question/question24";
import  question25  from "@/views/question/question25";
import  question26  from "@/views/question/question26";
import  floatform  from "@/views/question/floatform";
import { toast } from "@/plugin/util";
import { constants } from 'fs';
export default {
    name: 'question',
    components: {
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,        
        question9,
        question10,
        question11,
        question12,
        question13,
        question14,
        question15,
        question16,
        question17,
        question18,
        question19,
        question20,
        question21,
        question22,
        question23,
        question24,
        question25,
        question26,
        floatform
    },
    data(){
        return{
            currentNumber: this.$route.query.currentNumber || 1,
            itemData:{},
            floatFlag: false,
            answer:[
                [
                    "",
                    "",
                    ""
                ],
                "",
                "",
                "",
                "",
                "", [
                    "",
                    ""
                ],
                "", [],
                [],
                [],
                [],
                [
                    "",
                    ""
                ],
                [
                    "",
                    ""
                ],
                [
                    "",
                    ""
                ],
                "", [
                    "",
                    ""
                ],
                "",
                "",
                "", 
                [],
                [],
                [],
                "",
                "",
                ""
            ]
        }
    },
    methods:{
        prev(){
            (this.currentNumber > 1 && this.currentNumber--)
        },
        next(){
            if(this.$refs['question' + this.currentNumber].hasError){
                toast(this.$refs['question' + this.currentNumber].txtError ? this.$refs['question' + this.currentNumber].txtError : '格式有误')
                return;
            }
            if(this.currentNumber < 26){
                this.currentNumber++
            }else{
                this.$router.push({ path: 'done'})
            }
        },
        postData(itemData){
            this.itemData = itemData;
            this.floatShow()
        },
        floatHidden(){
            this.floatFlag = false
        },
        floatShow(){
            this.floatFlag = true
        }
    },
    computed:{
        nextTxt(){
            return this.currentNumber < 26 ? '下一题':'完成'
        }
    },
    watch:{
        answer:{
            handler(newAnswer,oldAnswer) {
                let schoolData = JSON.parse(localStorage.getItem('schoolData'))
                schoolData.answer = newAnswer
                schoolData = JSON.stringify(schoolData)
                localStorage.setItem('schoolData',schoolData)
            },
            deep: true  
        }
    },
    created(){
        let schoolData = JSON.parse(localStorage.getItem('schoolData'))
        if(schoolData && schoolData.answer){
            this.answer = schoolData.answer
        }
    }
}
</script>
<style lang="less">
    .page-question{
        height: 100%;
        overflow: hidden;
        position: relative;
        .main{
            width: 7.5rem;
            padding: 0 0.4rem 0.96rem;
            overflow: auto;
            -webkit-overflow-scrolling:touch;
            height: 100%;
            box-sizing: border-box;
        }
        .btns-box{
            width: 100%;
            // height:7.8%;
            height: 0.96rem;
            position: absolute;
            left:0;
            bottom:0;
            line-height: 0.96rem;
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
            button{
                width: 50%;
                height: 100%;
                background: #2498ed;
                text-align: center;
                font-size: 0.36rem;
                color: #fff;
                font-weight: bold;
                border: none;
                outline: none;
                box-sizing: border-box;
                &.prev{
                    background: #7eb9e4;
                    border-right: 1px #fff solid;
                }
                &.next{
                    border-left: 1px #fff solid;
                    &.wd100{
                        width: 100%;
                        border:none;
                    }
                }
            }
        }
        .pager{
            font-size: 0.3rem;
            color: #666;
            line-height: 0.7rem;
            border-bottom: 0.04rem #f7f7f7 solid;
            margin-bottom: 0.3rem;
            margin-top:0.45rem;
            span{
                font-weight: bold;
                color: #2498ed;
            }
        }
        
        .each-question{
            .item{
                margin-bottom: 1rem;
                .tit{
                    font-size: 0.3rem;
                    color: #222;
                    line-height: 0.48rem;
                    margin-bottom: 0.3rem;
                }
                ul{
                    li{
                        height: 0.86rem;
                        line-height: 0.86rem;
                        background:  #f7f7f7;
                        position: relative;
                        margin-bottom: 0.2rem;
                        &.label{
                            background: none;
                            color: #666;
                            height: 0.66rem;
                            line-height: 0.66rem;
                            margin-bottom: 0rem;
                        }
                        .mark{
                            padding-top:0.04rem;
                            height: 0.76rem;
                            line-height: 0.76rem;
                            position: absolute;
                            right: 0.2rem;
                            top:0;
                        }
                        input{
                            width: 100%;
                            height: 100%;
                            padding:0.1rem 0 0.1rem 0.2rem;
                            box-sizing: border-box;
                            border:none;
                            background: none;
                            outline: none;
                            position: absolute;
                            left:0;
                            top:0;
                            z-index:2 ;
                        }
                        &.error{
                            height: 0.46rem;
                            line-height: 0.46rem;
                            margin-top: -0.2rem;
                            margin-bottom: 0;
                            color: #e60012;
                            background: none;
                        }
                    }
                }
                .ratio{
                    li{
                        background: none;
                        height: auto;                        
                        line-height: 0.66rem;
                        input{
                            width: 1.5rem;
                            height: 0.66rem;
                            line-height: 0.46rem;
                            position: static;
                            border:1px #ddd solid;
                            padding: 0.1rem;
                            box-sizing: border-box;
                        }
                    }
                }
                .radioSelect{
                    li{
                        background: none;
                        line-height: 0.64rem;
                        label{
                            margin-right: 1rem;
                        }
                        span{
                            display: inline-block;
                            width: 0.34rem;
                            height: 0.34rem;
                            box-sizing: border-box;
                            border-radius: 50%;
                            margin-right: 0.14rem;
                            border:1px #ddd solid;
                            vertical-align: -0.06rem;
                        }
                        input:checked + span{
                            background: url(../../images/right.png) no-repeat;
                            border: none;
                            background-size: cover;
                        }
                    }
                }
                .cont{
                    .has{
                        overflow: hidden;
                        margin-bottom: 0.5rem;
                        label{
                            display: block;
                            padding-right: 0.7rem;
                            height: 0.34rem;
                            line-height: 0.34rem;
                            float:left;
                            margin-bottom: 0.3rem;
                            font-size: 0.3rem;
                            span{
                                display: inline-block;
                                width: 0.34rem;
                                height: 0.34rem;
                                box-sizing: border-box;
                                border: 1px #ddd solid;
                                margin-right: 0.14rem;
                            }
                            i{
                                display: inline-block;
                                vertical-align: 0.04rem;
                            }
                            input:checked + span{
                                background: url(../../images/right.png) no-repeat;
                                border: none;
                                background-size: cover;
                            }
                        }
                    }
                    .add-part{
                        button{
                            box-sizing: border-box;
                            width: 1.36rem;
                            height: 0.86rem;
                            line-height: 0.86rem;
                            border:none;
                            background: #f2f2f2;
                            text-align: center;
                            span{
                                font-weight: bold;
                                color: #2498ed;
                            }
                        }
                        .list{
                            display: -webkit-flex;
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 0.2rem;
                            input{
                                box-sizing: border-box;
                                width: 5.2rem;
                                height: 0.86rem;
                                line-height: 0.66rem;
                                border: 1px #f2f2f2 solid;
                                padding:0.1rem 0.2rem;
                                outline: none;
                            }
                        }
                        .add{
                            display: block;
                            margin: 0.15rem auto 0;
                            width:100%;
                        }
                    }
                }
            }
            .explain{
                background: #e8f5ff;
                border:1px #abdcff dashed;
                padding: 0.2rem;
                font-size: 0.3rem;
                margin-top: 1rem;
                margin-bottom: 0.2rem; 
                h4{
                    color: #2498ed;
                    text-align: center;
                    margin-bottom: 0.1rem;
                }
                p{
                    color: #666;
                    line-height: 0.48rem;
                }
                i{
                    display: block;
                    margin-bottom: 0.2rem;
                    padding-left: 0.16rem;
                }
                ul{
                    padding: 0 0.12rem;
                    // max-height: 6rem;
                    // overflow: auto;
                    // -webkit-overflow-scrolling:touch;
                    li{
                        line-height: 0.68rem;
                        span{
                            color: #2498ed;
                            padding: 0 0.5rem 0 0.3rem;
                        }
                        &:nth-child(2n + 1){
                            background: #fff;
                        }
                    }
                }
            }
        }
        
    }
</style>


