<template>
    <div class="question23 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校艺术设施类型（多选）</p>
                </div>
                <div class="cont">
                    <div class="has">
                        <label>
                            <input type="checkbox" v-model="answer[22]" class="g-hidden" value="钢琴室#has|1">
                            <span></span>
                            <i>钢琴室</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[22]" class="g-hidden" value="美术室#has|1">
                            <span></span>
                            <i>美术室</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[22]" class="g-hidden" value="舞蹈室#has|1">
                            <span></span>
                            <i>舞蹈室</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[22]" class="g-hidden" value="大礼堂或剧院#has|1">
                            <span></span>
                            <i>大礼堂或剧院</i>
                        </label>
                    </div>
                    <div class="add-part">
                        <div class="list" v-for="item in items" :key="item">
                            <input type="text" placeholder="请填写艺术类设施名称" v-model="answer[22][items - item]">
                            <button type="button" class="delete" @click="deleteList(item)"><span>－</span>删除</button>
                        </div>
                        <button class="add" @click="addList"><span>＋</span>添加</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>如拥有更多艺术设施类型，请点击上方添加按钮，在输入框内输入艺术设施类型名称。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question23',
    props: ['answer'],
    data(){
        return{
            items: 0
        }
    },
    methods:{
        addList(){
            this.items++
            this.answer[22].unshift('')
        },
        deleteList(index){
            this.answer[22].splice(this.items - index,1)
            this.items-- 
        }
    },
    created(){
        this.answer[22].forEach((value,i) => {
            if(!/#has/.test(value)){
                this.items++
            }
        });
    }
}
</script>

