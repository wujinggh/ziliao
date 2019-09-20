<template>
    <div class="question5 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校上一届毕业生世界31~100名校录取比例</p>
                </div>
                <ul>
                    <li><input type="number" placeholder="请填写0~100间的有效数字：" v-model="answer[4]" oninput="if(value.length>5)value=value.slice(0,5)"><div class="mark">%</div></li>
                    <li v-show="isError" class="error">×格式有误</li>
                </ul>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <i>请参考ARWU最新排名</i>
            <ul>
                <li v-for="(item,index) in schoolInfo" :key="index"><span>{{index+31}}</span>{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question5',
    props: ['answer'],
    data(){
        return{ 
            schoolInfo:[
                '北卡罗来纳大学-教堂山',
                '纽约大学',
                '爱丁堡大学',
                '曼彻斯特大学',
                '京都大学',
                '索邦大学',
                '明尼苏达大学-双城',
                '墨尔本大学',
                '科罗拉多大学-玻尔得',
                '德克萨斯州大学奥斯汀分校',
                '伊利诺伊大学厄巴纳-香槟分校',
                '巴黎第十一大学',
                '英属哥伦比亚大学',
                '卡罗林斯卡学院',
                '清华大学',
                '加州大学-圣塔芭芭拉',
                '海德堡大学',
                '慕尼黑工业大学',
                '德克萨斯大学西南医学中心',
                '范德堡大学',
                '马里兰大学-大学城',
                '乌得勒支大学',
                '慕尼黑大学',
                '苏黎世大学',
                '昆士兰大学',
                '伦敦国王学院',
                '北京大学',
                '赫尔辛基大学',
                '日内瓦大学',
                '南加州大学',
                '根特大学',
                '奥斯陆大学',
                '乌普萨拉大学',
                '巴黎高等师范学校',
                '奥胡斯大学',
                '格罗宁根大学',
                '浙江大学',
                '悉尼大学',
                '澳大利亚国立大学',
                '波士顿大学',
                '麦吉尔大学',
                '普渡大学-西拉法叶',
                '莱斯大学',
                '莱顿大学',
                '宾夕法尼亚州立大学-大学城',
                '布里斯托尔大学',
                '斯德哥尔摩大学',
                '以色列理工学院',
                '伊拉兹马斯大学',
                '佐治亚理工学院',
                '梅奥临床医学院',
                '洛桑联邦理工学院',
                '名古屋大学',
                '加州大学-欧文',
                '新加坡国立大学',
                '鲁汶大学（佛兰德语）',
                '麦克马斯特大学',
                '莫斯科国立大学',
                '佛罗里达大学',
                '匹兹堡大学',
                '卡内基梅隆大学',
                '莫纳什大学',
                '西澳大利亚大学',
                '俄亥俄州立大学-哥伦布',
                '耶路撒冷希伯来大学',
                '南洋理工大学',
                '巴塞尔大学',
                '加州大学-戴维斯',
                '哥廷根大学',
                '德克萨斯大学安德森肿瘤中心'
            ]
        }
    },
    computed:{
        isError(){
            return (/[^0-9\.]/.test(this.answer[4]) || (Number(this.answer[4]) > 100))
        },
        hasError(){
            return this.isError
        }
    }
}
</script>

