<template>
    <div class="question21 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校实验室类型（多选）</p>
                </div>
                <div class="cont">
                    <div class="has">
                        <label>
                            <input type="checkbox" v-model="answer[20]" class="g-hidden" value="计算机#has|1">
                            <span></span>
                            <i>计算机</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[20]" class="g-hidden" value="物理#has|1">
                            <span></span>
                            <i>物理</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[20]" class="g-hidden" value="化学#has|1">
                            <span></span>
                            <i>化学</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[20]" class="g-hidden" value="STEAM#has">
                            <span></span>
                            <i>STEAM</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[20]" class="g-hidden" value="生物#has">
                            <span></span>
                            <i>生物</i>
                        </label>
                    </div>
                    <div class="add-part">
                        <div class="list" v-for="item in items" :key="item">
                            <input type="text" placeholder="请填写实验室名称" v-model="answer[20][items - item]">
                            <button type="button" class="delete" @click="deleteList(item)"><span>－</span>删除</button>
                        </div>
                        <button class="add" @click="addList"><span>＋</span>添加</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>如拥有更多实验室种类，请点击上方添加按钮，在输入框内输入实验室名称。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question21',
    props: ['answer'],
    data(){
        return{
            items: 0
        }
    },
    methods:{
        addList(){
            this.items++
            this.answer[20].unshift('')
        },
        deleteList(index){
            this.answer[20].splice(this.items - index,1)
            this.items-- 
        }
    },
    created(){
        this.answer[20].forEach((value,i) => {
            if(!/#has/.test(value)){
                this.items++
            }
        });
    }
}
</script>

