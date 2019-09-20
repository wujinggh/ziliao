<template>
    <div class="question18 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>教师平均薪酬（单位：元/月）</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写有效数字" v-model="answer[17]"></li>
                    <li v-show="isError" class="error">×格式有误</li>                    
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>薪酬含福利待遇</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question18',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /\D/.test(this.answer[17])
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

