<template>
    <div class="page-finish">
        <div class="pic"><img src="../../images/finish.jpg" alt=""></div>
        <div class="tit">答题完成，谢谢参与！</div>
        <router-link to="/binfo">查看问卷</router-link>
    </div>
</template>
<script>
export default {
    name: 'finish'
}
</script>
<style lang="less">
    .page-finish{
        width: 7.5rem;
        margin: 0 auto;
        text-align: center;
        .pic{
            width: 3.97rem;
            height: 2.95rem;
            margin: 0.8rem auto 0.4rem;
            img{
                width: 100%;
            }
        }
        .tit{
            font-size: 0.48rem;
            color: #555;
            margin-bottom: 0.2rem;
        }
        a{
            font-size: 0.48rem;
            color: #555;
            border-bottom: 1px #555 solid;
        }
    }
</style>


