<template>
    <div class="question4 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校上一届毕业生世界前30名校录取比例</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[3]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError" class="error">×格式有误</li>
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <i>请参考ARWU最新排名</i>
            <ul>
                <li v-for="(item,index) in schoolInfo" :key="index"><span>{{index+1}}</span>{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question4',
    props: ['answer'],
    data(){
        return{ 
            schoolInfo:[
                '哈佛大学',
                '斯坦福大学',
                '剑桥大学',
                '麻省理工学院',
                '加州大学-伯克利',
                '普林斯顿大学',
                '牛津大学',
                '哥伦比亚大学',
                '加州理工学院',
                '芝加哥大学',
                '加州大学-洛杉矶',
                '康奈尔大学',
                '耶鲁大学',
                '华盛顿大学-西雅图',
                '加州大学-圣地亚哥',
                '宾夕法尼亚大学',
                '伦敦大学学院',
                '约翰霍普金斯大学',
                '苏黎世联邦理工学院',
                '华盛顿大学-圣路易斯',
                '加州大学-旧金山',
                '东京大学',
                '多伦多大学',
                '伦敦帝国学院',
                '西北大学（埃文斯顿）',
                '杜克大学',
                '密歇根大学-安娜堡',
                '威斯康星大学-麦迪逊',
                '哥本哈根大学',
                '洛克菲勒大学'
            ]
        }
    },
    computed:{
        isError(){
            return (/[^0-9\.]/.test(this.answer[3]) || (Number(this.answer[3]) > 100))
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

