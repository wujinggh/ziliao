<template>
    <div class="question24 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校有无在线学生管理系统</p>
                </div>
                <ul class="radioSelect">
                    <li>
                        <label>
                            <input type="radio" v-model="answer[23]" value="1" name="question24" class="g-hidden"> 
                            <span></span>有
                        </label>
                        <label>
                            <input type="radio" v-model="answer[23]" value="2" name="question24" class="g-hidden">
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
    name: 'question24',
    props: ['answer'],
    data(){
        return{
            
        }
    }
}
</script>

