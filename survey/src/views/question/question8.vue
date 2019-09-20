<template>
    <div class="question8 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校上一届毕业生的GPA平均成绩</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写有0~5间效数字" v-model="answer[7]" oninput="if(value.length>4)value=value.slice(0,4)"></li>
                    <li v-show="isError" class="error">×格式有误</li>                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question8',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /[^0-9\.]/.test(this.answer[7]) || Number(this.answer[7])>5  
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

