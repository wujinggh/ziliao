import { Question } from "../question";
import $ from "jquery"
export class QuestionView {
    // 核心题目对象
    private question: Question;
    // 开始按钮
    private startBtn = $('#start');
    // 第二页根节点
    private secondPage = $('#J-second-page')
    // 第二页用户信息节点
    private secondUser = this.secondPage.find('.user-info')
    // 第二页内容题目节点
    private queCont = this.secondPage.find('.que-cont')
    // 第三页根节点
    private threePage = $('#J-three-page')
    // 第三页用户信息节点
    private threeUser = this.threePage.find('.user-info')
    // 第三页职业内容节点
    private resultCont = $('#J-three-page').find('.content')
    // 题目总数
    private allLen = 0;
    // 用户头像
    private userImg: string = '';
    // 用户昵称
    private userName:string = '';
    /**
     * init
     */
    // 初始化外部调用函数
    public init(question: Question) {
        this.question = question;
        this.getUserInfo();
        this.bindEvent();
        this.renderQuestion();
    }
    // 事件函数
    private bindEvent() {
        const _this = this;
        this.secondPage.on('click','button',function(){
            if (($(this).parent()[0] as any).once) return;
            ($(this).parent()[0] as any).once = true;
            const value = $(this).attr('data-value');
            const index = $(this).parent().parent().index();
            $(this).addClass('active')
            setTimeout(() => {
                _this.question.next(index, value as string);
                _this.nextQ(index);
            }, 300); 
        })
    }
    // 渲染第二页用户信息部分
    private renderSecondUser(){
        let userHtml = `<div class="pic"><img src="${this.userImg}" alt=""></div>
                <div class="tit">${this.userName}</div>
                <div class="currentIndex"><span>${this.question.status + 1}</span> / ${this.question.questionList.length }</div>`;
        this.secondUser.html(userHtml);
    }
    // 渲染第三页用户信息部分
    private renderThreeUser() {
        let userHtml = `<div class="pic"><img src="${this.userImg}" alt=""></div>`;
        this.threeUser.html(userHtml);
    }
    // 渲染第二页题目内容部分
    private renderQuestion(){
        let questionHtml:string = '';
        this.allLen = this.question.questionList.length;
        this.question.questionList.forEach((item,index)=>{
            let optionsHtml = '';
            item.options.forEach((el,i)=>{
                optionsHtml += `<button data-value="${el.value}">${String.fromCharCode(65 + i)}. ${el.des}</button>`;
            })
            questionHtml += [`<div class="question ${index > 0 ? 'g-hidden' : ''}">`,
                `<div class="tit">${index + 1}、${item.tit}</div>`,
                `<div class="options">`,
                    optionsHtml,
                `</div>`,
                `</div>`].join('');
        })
        this.queCont.html(questionHtml)
    }
    // 渲染第三页职业结果部分
    private renderResult(){
        let resultHtml = '';
        let resultData = this.question.getConclusion()
        if(resultData){
            // resultHtml = `<div class="occ-name">${resultData.name}</div>
            //     <div class="occ-cont">
            //         <div class="keyword-1 keyword">${resultData.keyword[0]}</div>
            //         <div class="keyword-2 keyword">${resultData.keyword[1]}</div>
            //         <div class="keyword-3 keyword">${resultData.keyword[2]}</div>
            //         <div class="keyword-4 keyword">${resultData.keyword[3]}</div>
            //         <div class="keyword-5 keyword">${resultData.keyword[4]}</div>
            //         <div class="keyword-6 keyword">${resultData.keyword[5]}</div>
            //         <div class="person"><img src="${resultData.imgSrc}" alt=""></div>
            //     </div>
            //     <div class="description">
            //         <p>${resultData.des}</p>
            //     </div>`;
            resultHtml = `<img src="${resultData.imgSrc}" alt="">`
        }
        this.resultCont.html(resultHtml);
    }
    // 切换下一题,或者切换到职业结果页
    private nextQ(index:number){

        if(index< (this.allLen - 1)){
            this.renderSecondUser();
            this.queCont.find('.question').eq(index).addClass('g-hidden').end().eq(index+1).removeClass('g-hidden')
        }else{
            this.renderResult()
            this.secondPage.addClass('g-hidden')
            this.threePage.removeClass('g-hidden')
        }
    }
    // 获取用户信息
    private getUserInfo(){
        const _this = this;
        const code = (this.getCode() as any).code;
        if(!code){
            location.href = 'http://www.diyigaokao.com/occupationtest.html';
            return;
        }
        $.ajax({
            url:'https://apiv3.diyigaokao.com/applet/weixinOpen/getWeixinUserInfo',
            type:'GET',
            dataType:'json',
            data:{
                code: code
            },
            success(res){
                if(res.error == 0){
                    _this.userImg = res.data.headimgurl;
                    _this.userName = res.data.nickname;
                    _this.renderSecondUser();
                    _this.renderThreeUser();
                }
            }
        })
    }
    //从url上获取code;
    private getCode(){
        const url = location.href;
        const queryString = url.split('?')[1];
        let result = {};
        if (queryString){
            const queryArr = queryString.split('&');
            queryArr.forEach(element => {
                let elArr = element.split('=');
                if (/=/.test(element)) {
                    result[elArr[0]] = elArr[1]
                }
            });
        }
        return result;
    }

}
