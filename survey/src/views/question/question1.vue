<template>
    <div class="question1 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校录取新生的中考成绩平均得分率（用百分比表示）</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[0][0]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError1" class="error">×格式有误</li>
                    <!-- <li v-show="isError1_0" class="error">×不能为空</li> -->
                </ul>
            </div>
            <div class="item">
                <div class="tit">
                    <p>请填写学校自主招生的新生比例以及他们的平均得分率</p>
                </div>
                <ul>
                    <li class="label">自招比例：</li>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[0][1]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError2" class="error">×格式有误</li>
                    <!-- <li v-show="isError2_0" class="error">×不能为空</li> -->
                    <li class="label">平均得分率：</li>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[0][2]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError3" class="error">×格式有误</li>
                    <!-- <li v-show="isError3_0" class="error">×不能为空</li> -->
                </ul>
            </div>
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>平均成绩得分率 = 录取学生的平均成绩 ÷ 考试总分值  x 100%</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question1',
    props: ['answer'],
    data(){
        return{
            
        }
    },
    methods:{
       
    },
    computed:{
        isError1(){
            return (/[^0-9\.]/.test(this.answer[0][0]) || (Number(this.answer[0][0]) > 100)) 
        },
        isError2(){
            return (/[^0-9\.]/.test(this.answer[0][1]) || (Number(this.answer[0][1]) > 100))
        },
        isError3(){
            return (/[^0-9\.]/.test(this.answer[0][2]) || (Number(this.answer[0][2]) > 100))
        },
        isError1_0(){
            return  !this.answer[0][0] && (this.answer[0][1] || this.answer[0][2]) 
        },
        isError2_0(){
            return  !this.answer[0][1] && (this.answer[0][0] || this.answer[0][2])            
        },
        isError3_0(){
            return  !this.answer[0][2] && (this.answer[0][0] || this.answer[0][1])             
        },
        hasError(){
            return this.isError1 || this.isError2 || this.isError3 || this.isError1_0 || this.isError2_0 || this.isError3_0 
        },
        txtError(){
            return this.isError1_0 || this.isError2_0 || this.isError3_0  ? '每空都要填哦' : undefined;
        }
    }
}
</script>

