<template>
    <div class="question9 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校最近3年参加国际和国内竞赛比赛的学生人数以及获奖数量（点击下方竞赛名称，可填写获奖情况)</p>
                </div>
                <div class="cont">
                   <table cellspacing="0" cellpadding="0" @click="getFloat">
                       <tr class="type1">
                           <td class="type1_hd type" rowspan="2">数学</td>
                           <td data-type="国际" class="wd">国际数学奥林匹克竞赛</td>
                           <td data-type="国际" class="wd">英国数学奥林匹克</td>
                       </tr>
                       <tr class="type1">
                           <td data-type="国际">滑铁卢数学竞赛（欧几里得和费马）</td>
                           <td data-type="国际">AMC美国数学竞赛</td>
                       </tr>
                       <tr class="type2">
                           <td class="type2_hd type" rowspan="4">科学</td>
                           <td data-type="国内">全国中学生生物奥赛（国内）</td>
                           <td data-type="国际">USABO美国生物奥赛 </td>
                       </tr>
                       <tr class="type2">
                           <td data-type="国际">USNCO美国国家化学奥林匹克</td>
                           <td data-type="国际">美国高中物理竞赛 </td>
                       </tr>
                       <tr class="type2">
                           <td data-type="国际">USACO计算机奥林匹克</td>
                           <td data-type="国际">丘成桐中学科学（数学）奖</td>
                       </tr>
                       <tr class="type2">
                           <td colspan="2" data-type="国际">美国STEM大联盟杯</td>
                       </tr>
                       <tr class="type3">
                           <td class="type3_hd type" rowspan="2">创新</td>
                           <td data-type="国内">全国青少年科技创新大赛</td>
                           <td data-type="国际">SAGE赛智</td>
                       </tr>
                       <tr class="type3">
                           <td colspan="2" data-type="国内">CTB创新研究项目大挑战（国内）</td>
                       </tr>
                       <tr class="type4">
                           <td class="type4_hd type" rowspan="4">其余竞赛活动</td>
                           <td data-type="国际">国际模拟联合国（国内）</td>
                           <td data-type="国际">国际模拟联合国（国际）</td>                           
                       </tr>
                       <tr class="type4">
                           <td data-type="国际">National Speech and Debate Association （NSAD辩论比赛）</td>
                           <td data-type="国际">世界学者杯辩论赛WSC（高中组）</td>
                       </tr>
                       <tr class="type4">
                           <td data-type="国际">美国学术十项全能USAD</td>
                           <td data-type="国际">NEC全美经济学挑战赛</td>
                       </tr>
                       <tr class="type4">
                           <td data-type="国际">沃顿KWHS投资竞赛</td>
                           <td data-type="国际">DECA全美商业挑战赛</td>
                       </tr>
                   </table>
                </div>
            </div>  
        </div>
        <div class="write-form-layer float-form" v-show="floatFlag">
            <div class="write-form">
                <div class="hd">{{ itemData.name }}</div>
                <div class="bd">
                    <ul>
                        <li>
                            <input type="number" placeholder="参赛人数" v-model="itemData.count">
                            <div class="mark">人</div>
                        </li>
                        <li>
                            <input type="number" placeholder="一等奖人数" v-model="itemData.count1">
                            <div class="mark">人</div>
                        </li>
                        <li>
                            <input type="number" placeholder="二等奖人数" v-model="itemData.count2">
                            <div class="mark">人</div>
                        </li>
                        <li>
                            <input type="number" placeholder="三等奖人数" v-model="itemData.count3">
                            <div class="mark">人</div>
                        </li>
                    </ul>
                </div>
                <div class="ft">
                    <button type="button" @click="confirm">确认</button>
                    <button type="button" @click="cancel(itemData.name)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { toast } from "@/plugin/util";
export default {
    name: 'question9',
    props: ['answer'],
    data(){
        return{
            floatFlag: false,
            itemData:{
                "type": '',
                "name": '',
                "count":  '',
                "count1": '',
                "count2": '',
                "count3": ''
            }
        }
    },
    methods:{
        floatHidden(){
            this.floatFlag = false
        },
        floatShow(){
            this.floatFlag = true
        },
        confirm(){
            if(this.isError){
                toast('人数不匹配')
                return;
            }
            this.floatHidden()
        },
        cancel(name){
            let index = 'null';
            this.answer[8].forEach((item,i) => {
                if(item['name'] == name){
                    index = i
                }
            });
            if(index !== 'null'){
                this.answer[8].splice(index,1)
                this.itemData = {
                    "type": '',
                    "name": '',
                    "count":  '',
                    "count1": '',
                    "count2": '',
                    "count3": ''
                }
            }
            this.floatHidden()
        },
        getFloat(e){
            const target = e.target || e.srcElement;
            if(!/type/.test(target.className) && target.nodeName.toLowerCase() == 'td'){
                let answerHas = false
                let name = target.innerText.replace(/^ +| +$/g,'')
                let itemData = {
                    "type": target.getAttribute('data-type'),
                    "name": name,
                    "count":  '',
                    "count1": '',
                    "count2": '',
                    "count3": ''
                }
                this.answer[8].forEach((item,index) => {
                    if(item['name'] == name){
                        answerHas = index
                    }
                });
                
                if(answerHas !== false){
                    this.itemData = this.answer[8][answerHas]
                }else{
                    this.itemData = itemData
                    this.answer[8].push(this.itemData)
                }
                this.floatShow()
            }
        }
    },
    computed:{
        isError(){
            return this.itemData.count < (Number(this.itemData.count1) + Number(this.itemData.count2) + Number(this.itemData.count3));
        }
    }
}
</script>
<style lang="less">
    .question9{
        .item-cont{
            .cont{
                table{
                    border-collapse:collapse;
                    tr.type1{
                        td{
                            background: #e1f1fc;
                            color: #2aa5ff;
                            &.type1_hd{
                                color: #fff;
                                background: #7dc6fb;
                                font-size: 0.3rem;
                            }
                        }
                    }
                    tr.type2{
                        td{
                            background: #e1fae4;
                            color: #3f9649;
                            &.type2_hd{
                                color: #fff;
                                background: #86d48f;
                                font-size: 0.3rem;
                            }
                        }
                    }
                    tr.type3{
                        td{
                            background: #ffebdc;
                            color: #f5945a;
                            &.type3_hd{
                                color: #fff;
                                background: #feaf75;
                                font-size: 0.3rem;
                            }
                        }
                    }
                    tr.type4{
                        td{
                            background: #eadeff;
                            color: #8467b5;
                            &.type4_hd{
                                color: #fff;
                                background: #b69ede;
                                font-size: 0.3rem;
                            }
                        }
                    }
                    td{
                        border: 0.04rem #fff solid;
                        text-align: center;
                        font-size: 0.26rem;
                        padding: 0.1rem 0.2rem;
                        &.wd{
                            width: 42%;
                        }
                    }
                }
            }
        }
         .write-form-layer{
            background: rgba(0, 0, 0, 0.8);
            position: absolute;
            z-index: 99;
            left:0;
            top:0;
            right:0;
            bottom:0;
            .write-form{
                position: absolute;
                left: 50%;
                top: 2rem;
                margin-left:-3.35rem;
                width: 6.1rem;
                padding: 0.3rem;
                background: #eeefef;
                border-radius: 0.1rem;
                .hd{
                    font-size: 0.36rem;
                    color:#2498ed;
                    text-align: center;
                    line-height: 0.46rem;
                    padding: 0.35rem 0;
                    margin-top:-0.1rem;
                    word-break:break-all;
                }
                .bd{
                    ul{
                        li{
                            position: relative;
                            input{
                                display: block;
                                width: 100%;
                                height: 0.86rem;
                                background: #fff;
                                line-height: 0.66rem;
                                box-sizing: border-box;
                                border:none;
                                padding: 0.1rem 1rem 0.1rem 0.2rem;
                                outline: none;
                            }
                            .mark{
                                position: absolute;
                                top:0;
                                right:0.2rem;
                                height: 0.86rem;
                                line-height: 0.86rem;
                            }
                            margin-bottom: 0.18rem;
                        }
                    }
                }
                .ft{
                    padding:0.2rem 0 0.2rem;
                    text-align: center;
                    button{
                        display: inline-block;
                        margin:0 0.3rem;
                        width: 2.4rem;
                        height: 0.8rem;
                        line-height: 0.8rem;
                        font-size:0.3rem;
                        color: #fff;
                        border-radius: 0.4rem;
                        border:none;
                        background: #7eb9e4;
                        outline: none;
                        &:first-child{
                            background: #2498ed;
                        }
                    }
                }
            }
        }
    }
</style>



