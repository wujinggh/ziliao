<template>
    <div class="question7 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请根据要求填写学校学生最近1年标化语言考试的百分比例</p>
                </div>
                <ul>
                    <li class="label">雅思6.5及以上比例：</li>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[6][0]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError1" class="error">×格式有误</li>
                    <li class="label">托福90分及以上比例：</li>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[6][1]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError2" class="error">×格式有误</li>
                </ul>
            </div>
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>可以选择一项填写，也可以两项都填写。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question7',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    methods:{
       
    },
    computed:{
        isError1(){
            return (/[^0-9\.]/.test(this.answer[6][0]) || (Number(this.answer[6][0]) > 100))
        },
        isError2(){
            return (/[^0-9\.]/.test(this.answer[6][1]) || (Number(this.answer[6][1]) > 100))
        },
        hasError(){
            return this.isError1 || this.isError2
        }
    }
}
</script>

