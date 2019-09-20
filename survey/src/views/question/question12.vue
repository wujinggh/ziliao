<template>
    <div class="question12 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校开设选修课程的科目（多选）</p>
                </div>
                <div class="cont">
                    <div class="has">
                        <label>
                            <input type="checkbox" v-model="answer[11]" class="g-hidden" value="科技#has">
                            <span></span>
                            <i>科技</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[11]" class="g-hidden" value="人文#has">
                            <span></span>
                            <i>人文</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[11]" class="g-hidden" value="艺术#has">
                            <span></span>
                            <i>艺术</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[11]" class="g-hidden" value="体育#has">
                            <span></span>
                            <i>体育</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[11]" class="g-hidden" value="心理健康#has">
                            <span></span>
                            <i>心理健康</i>
                        </label>
                    </div>
                    <div class="add-part">
                        <div class="list" v-for="item in items" :key="item">
                            <input type="text" placeholder="请在此处输入开展的选修课程名称" v-model="answer[11][items - item]">
                            <button type="button" class="delete" @click="deleteList(item)"><span>－</span>删除</button>
                        </div>
                        <button class="add" @click="addList"><span>＋</span>添加</button>
                    </div>
                    

                </div>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>如有开展更多选修课程，请点击上方添加按钮，在输入框内输入课程名称。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question12',
    props: ['answer'],
    data(){
        return{
            items: 0
        }
    },
    methods:{
        addList(){
            this.items++
            this.answer[11].unshift('')
        },
        deleteList(index){
            this.answer[11].splice(this.items - index,1)
            this.items-- 
        }
    },
    created(){
        this.answer[11].forEach((value,i) => {
            if(!/#has/.test(value)){
                this.items++
            }
        });
    }
}
</script>

