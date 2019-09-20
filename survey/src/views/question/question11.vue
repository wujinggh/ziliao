<template>
    <div class="question11 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校开设本土课程的科目（多选）</p>
                </div>
                <div class="cont">
                    <div class="has">
                        <label>
                            <input type="checkbox" v-model="answer[10]" class="g-hidden" value="语文#has">
                            <span></span>
                            <i>语文</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[10]" class="g-hidden" value="政治#has">
                            <span></span>
                            <i>政治</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[10]" class="g-hidden" value="历史#has">
                            <span></span>
                            <i>历史</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[10]" class="g-hidden" value="地理#has">
                            <span></span>
                            <i>地理</i>
                        </label>
                    </div>
                    <div class="add-part">
                        <div class="list" v-for="item in items" :key="item">
                            <input type="text" placeholder="请在此处输入开展的课程名称" v-model="answer[10][items - item]">
                            <button type="button" class="delete" @click="deleteList(item)"><span>－</span>删除</button>
                        </div>
                        <button class="add" @click="addList"><span>＋</span>添加</button>
                    </div>
                    

                </div>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>如有开展更多课程种类，请点击上方添加按钮，在输入框内输入课程名称。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question11',
    props: ['answer'],
    data(){
        return{
            items: 0
        }
    },
    methods:{
        addList(){
            this.items++
            this.answer[10].unshift('')
        },
        deleteList(index){
            this.answer[10].splice(this.items - index,1)
            this.items-- 
        }
    },
    created(){
        this.answer[10].forEach((value,i) => {
            if(!/#has/.test(value)){
                this.items++
            }
        });
    }
}
</script>

