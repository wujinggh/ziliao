<template>
    <div class="question16 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校教师离职率</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[15]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError" class="error">×格式有误</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'question16',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return (/[^0-9\.]/.test(this.answer[15]) || (Number(this.answer[15]) > 100))
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

