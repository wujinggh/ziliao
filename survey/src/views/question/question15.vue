<template>
    <div class="question15 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校硕士及以上学历的教师（全职）比例</p>
                </div>
                <ul class="ratio">
                    <li>
                        <label>硕士及以上老师 : 全部老师 = </label><br>
                        <input type="number" v-model="answer[14][0]"> :
                        <input type="number" v-model="answer[14][1]">
                    </li>
                    <li v-show="isError" class="error">×格式有误</li>                    
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>可以输入硕士及以上与全部老师的比例值，也可以输入硕士及以上与全部老师的具体人数</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question15',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /\D/.test(this.answer[14][0]) || /\D/.test(this.answer[14][1]) 
        },
        isError_0(){
            return (this.answer[14][0] &&  this.answer[14][1] == '') || (this.answer[14][0] == '' && this.answer[14][1])
        },
        isError_1(){
            return  +this.answer[14][0] > +this.answer[14][1]
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

