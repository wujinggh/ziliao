<template>
    <div class="question3 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校外籍生源人数占在校学生总数的百分比</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[2]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError" class="error">×格式有误</li>
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>外籍生源数百分比 = 外籍学生人数 ÷ 全校总人数 x 100%</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question3',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return (/[^0-9\.]/.test(this.answer[2]) || Number(this.answer[2]) > 100)
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

