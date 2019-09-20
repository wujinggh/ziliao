<template>
    <div class="question2 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校2018学年新生的招生数量（单位：人）</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写招生人数" v-model="answer[1]"></li>
                    <li v-show="isError" class="error">×格式有误</li>                    
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>取最近一年10年级学生入学人数的总量</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question2',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    computed:{
        isError(){
            return /\D/.test(this.answer[1])
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

