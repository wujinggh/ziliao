<template>
    <div class="question19 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校学生社团数量（单位：个）</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写有效数字" v-model="answer[18]"></li>
                    <li v-show="isError" class="error">×格式有误</li>                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question19',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /\D/.test(this.answer[18])
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

