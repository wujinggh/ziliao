<template>
    <div class="question22 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>请填写学校运动设施类型（多选）</p>
                </div>
                <div class="cont">
                    <div class="has">
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="体育馆#has|1">
                            <span></span>
                            <i>体育馆</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="篮球场#has|1">
                            <span></span>
                            <i>篮球场</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="足球场#has|1">
                            <span></span>
                            <i>足球场</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="标准跑道#has|1">
                            <span></span>
                            <i>标准跑道</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="羽毛球场#has">
                            <span></span>
                            <i>羽毛球场</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="游泳馆#has">
                            <span></span>
                            <i>游泳馆</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[21]" class="g-hidden" value="网球场#has">
                            <span></span>
                            <i>网球场</i>
                        </label>
                    </div>
                    <div class="add-part">
                        <div class="list" v-for="item in items" :key="item">
                            <input type="text" placeholder="请填写运动设施名称" v-model="answer[21][items - item]">
                            <button type="button" class="delete" @click="deleteList(item)"><span>－</span>删除</button>
                        </div>
                        <button class="add" @click="addList"><span>＋</span>添加</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>如拥有更多运动设施类型，请点击上方添加按钮，在输入框内输入运动设施类型名称。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question22',
    props: ['answer'],
    data(){
        return{
            items: 0
        }
    },
    methods:{
        addList(){
            this.items++
            this.answer[21].unshift('')
        },
        deleteList(index){
            this.answer[21].splice(this.items - index,1)
            this.items-- 
        }
    },
    created(){
        this.answer[21].forEach((value,i) => {
            if(!/#has/.test(value)){
                this.items++
            }
        });
    }
}
</script>

