<template>
    <div class="question13 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校师生比例（不计后勤人员）</p>
                </div>
                <ul class="ratio">
                    <li>
                        <label>老师 : 学生 = </label>
                        <input type="number" v-model="answer[12][0]"> : 
                        <input type="number" v-model="answer[12][1]">
                    </li>
                    <li v-show="isError" class="error">×格式有误</li>                   
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>可以输入老师与学生的比例值，也可以输入老师与学生的具体人数</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question13',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /\D/.test(this.answer[12][0]) || /\D/.test(this.answer[12][1]) 
        },
        isError_0(){
            return (this.answer[12][0] &&  this.answer[12][1] == '') || (this.answer[12][0] == '' && this.answer[12][1])
        },
        isError_1(){
            return  +this.answer[12][0] > +this.answer[12][1]
        },
        hasError(){
            return this.isError || this.isError_0 || this.isError_1
        },
        txtError(){
            if(this.isError_0){
                return '每空都要填哦'
            }else if(this.isError_1){
                return '人数不匹配'
            }else{
                return undefined
            }
        }
    }
}
</script>

