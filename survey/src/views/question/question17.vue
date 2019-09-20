<template>
    <div class="question17 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校教授国际课程3年以上教师比例</p>
                </div>
                <ul class="ratio">
                    <li>
                        <label>3年以上国际课程老师 : 全部老师 = </label><br>
                        <input type="number" v-model="answer[16][0]"> :
                        <input type="number" v-model="answer[16][1]">
                    </li>
                    <li v-show="isError" class="error">×格式有误</li>                    
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>可以输入教授国际课程三年以上老师与全部老师的比例值，也可以输入教授国际课程三年以上老师及以上与全部老师的具体人数</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question17',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /\D/.test(this.answer[16][0]) || /\D/.test(this.answer[16][1]) 
        },
        isError_0(){
            return (this.answer[16][0] &&  this.answer[16][1] == '') || (this.answer[16][0] == '' && this.answer[16][1])
        },
        isError_1(){
            return  +this.answer[16][0] > +this.answer[16][1]
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

