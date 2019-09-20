<template>
    <div class="question26 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校有无在线教务管理系统</p>
                </div>
                <ul class="radioSelect">
                    <li>
                        <label>
                            <input type="radio" v-model="answer[25]" value="1" name="question26" class="g-hidden">
                            <span></span>有
                        </label>
                        <label>
                            <input type="radio" v-model="answer[25]" value="2" name="question26" class="g-hidden">
                            <span></span>无
                        </label>
                    </li>                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question26',
    props: ['answer'],
    data(){
        return{
            
        }
    }
}
</script>

