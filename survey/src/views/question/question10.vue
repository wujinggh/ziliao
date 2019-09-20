<template>
    <div class="question10 each-question">
        <div class="item-cont">
            <div class="item">
                <div class="tit">
                    <p>学校开设国际课程的种类</p>
                </div>
                <div class="cont">
                    <div class="has">
                        <label>
                            <input type="checkbox" v-model="answer[9]" class="g-hidden" value="AP#has">
                            <span></span>
                            <i>AP</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[9]" class="g-hidden" value="A-Level#has">
                            <span></span>
                            <i>A-Level</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[9]" class="g-hidden" value="IB#has">
                            <span></span>
                            <i>IB</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[9]" class="g-hidden" value="美高#has">
                            <span></span>
                            <i>美高</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[9]" class="g-hidden" value="中加#has">
                            <span></span>
                            <i>中加</i>
                        </label>
                        <label>
                            <input type="checkbox" v-model="answer[9]" class="g-hidden" value="中澳#has">
                            <span></span>
                            <i>中澳</i>
                        </label>
                    </div>
                    <div class="add-part">
                        <div class="list" v-for="item in items" :key="item">
                            <input type="text" placeholder="请在此处输入开展的国际课程名称" v-model="answer[9][items - item]">
                            <button type="button" class="delete" @click="deleteList(item)"><span>－</span>删除</button>
                        </div>
                        <button class="add" @click="addList"><span>＋</span>添加</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="explain">
            <h4>★ 注 解</h4>
            <p>如有开展更多国际课程种类，请点击上方添加按钮，在输入框内输入国际课程名称。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'question10',
    props: ['answer'],
    data(){
        return{
            items: 0
        }
    },
    methods:{
        addList(){
            this.items++
            this.answer[9].unshift('')
        },
        deleteList(index){
            this.answer[9].splice(this.items - index,1)
            this.items-- 
        }
    },
    created(){
        this.answer[9].forEach((value,i) => {
            if(!/#has/.test(value)){
                this.items++
            }
        });
    }
}
</script>

