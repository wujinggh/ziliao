<template>
    <div class="question20 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校有无图书馆</p>
                </div>
                <ul class="radioSelect">
                    <li>
                        <label>
                            <input type="radio" v-model="answer[19]" value="1" name="question20" class="g-hidden">
                            <span></span>有
                        </label>
                        <label>
                            <input type="radio" v-model="answer[19]" value="2" name="question20" class="g-hidden">
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
    name: 'question20',
    props: ['answer'],
    data(){
        return{
            
        }
    }
}
</script>

