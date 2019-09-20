<template>
    <div class="write-form-layer float-form">
        <div class="write-form">
            <div class="hd">{{ itemData.name }}</div>
            <div class="bd">
                <ul>
                    <li>
                        <input type="number" placeholder="参赛人数" v-model="itemData.count">
                        <div class="mark">人</div>
                    </li>
                    <li>
                        <input type="number" placeholder="一等奖人数" v-model="itemData.count1">
                        <div class="mark">人</div>
                    </li>
                    <li>
                        <input type="number" placeholder="二等奖人数" v-model="itemData.count2">
                        <div class="mark">人</div>
                    </li>
                    <li>
                        <input type="number" placeholder="三等奖人数" v-model="itemData.count3">
                        <div class="mark">人</div>
                    </li>
                </ul>
            </div>
            <div class="ft">
                <button type="button" @click="confirm">确认</button>
                <button type="button" @click="cancel(itemData.name)">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
import { toast } from "@/plugin/util";
export default {
    name:'floatform',
    props:['itemData','answer'],
    data(){
        return{

        }
    },
    methods:{
        confirm(){
            if(this.isError){
                toast('人数不匹配')
                return;
            }
            this.$emit('floatHidden')
        },
        cancel(name){
            let index = 'null';
            this.answer[8].forEach((item,i) => {
                if(item['name'] == name){
                    index = i
                }
            });
            if(index !== 'null'){
                this.answer[8].splice(index,1)
                this.itemData.type = ''
                this.itemData.name = ''
                this.itemData.count = ''
                this.itemData.count1 = ''
                this.itemData.count2 = ''
                this.itemData.count3 = ''
            }
            this.$emit('floatHidden')          
        }
    },
    computed:{
        isError(){
            return this.itemData.count < (Number(this.itemData.count1) + Number(this.itemData.count2) + Number(this.itemData.count3));
        }
    }
}
</script>
<style lang="less">
    .write-form-layer{
        background: rgba(0, 0, 0, 0.8);
        position: absolute;
        z-index: 99;
        left:0;
        top:0;
        right:0;
        bottom:0;
        .write-form{
            position: absolute;
            left: 50%;
            top: 2rem;
            margin-left:-3.35rem;
            width: 6.1rem;
            padding: 0.3rem;
            background: #eeefef;
            border-radius: 0.1rem;
            .hd{
                font-size: 0.36rem;
                color:#2498ed;
                text-align: center;
                line-height: 0.46rem;
                padding: 0.35rem 0;
                margin-top:-0.1rem;
                word-break:break-all;
            }
            .bd{
                ul{
                    li{
                        position: relative;
                        input{
                            display: block;
                            width: 100%;
                            height: 0.86rem;
                            background: #fff;
                            line-height: 0.66rem;
                            box-sizing: border-box;
                            border:none;
                            padding: 0.1rem 1rem 0.1rem 0.2rem;
                            outline: none;
                        }
                        .mark{
                            position: absolute;
                            top:0;
                            right:0.2rem;
                            height: 0.86rem;
                            line-height: 0.86rem;
                        }
                        margin-bottom: 0.18rem;
                    }
                }
            }
            .ft{
                padding:0.2rem 0 0.2rem;
                text-align: center;
                button{
                    display: inline-block;
                    margin:0 0.3rem;
                    width: 2.4rem;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    font-size:0.3rem;
                    color: #fff;
                    border-radius: 0.4rem;
                    border:none;
                    background: #7eb9e4;
                    outline: none;
                    &:first-child{
                        background: #2498ed;
                    }
                }
            }
        }
    }
</style>


