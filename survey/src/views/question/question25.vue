<template>
    <div class="question25 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校有无在线教职工管理系统（办公系统）</p>
                </div>
                <ul class="radioSelect">
                    <li>
                        <label>
                            <input type="radio" v-model="answer[24]" value="1" name="question25" class="g-hidden">
                            <span></span>有
                        </label>
                        <label>
                            <input type="radio" v-model="answer[24]" value="2" name="question25" class="g-hidden">
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
    name: 'question25',
    props: ['answer'],
    data(){
        return{
            
        }
    }
}
</script>

