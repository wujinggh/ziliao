import { questionList, answerList } from "./data";

export class Question {
    // 当前题目的索引
    private _status: number = 0;
    // 存放用户的选择答案
    private result: string[] = [];
    // 存放题目实体
    public questionList = questionList;
    // 获取当前题目的索引
    public get status(){
        return this._status;
    }
    // 设置当前题目的索引
    public set status(val:number) {
        this._status = val;
    }
    // 下一题
    public next(index: number, val: string){
        if(this.status < (questionList.length - 1)){
            this.getValue(index, val);
            this.status++;
        }
    }
    /**
     * 获取当前选项值
     */
    // 增加选择信息到结果result中
    public getValue(index:number,val:string) {
        if(this.questionList[index].isScore && this.result.length < 4){
            this.result.push(val);
        }
    }

    /**
     * 根据选择的值，得出结论
     * getConclusion
     */
    public getConclusion() {
        if(this.result.length !== 4)return;
        for (let aIndex = 0; aIndex < answerList.length; aIndex++) {
            for (let index = 0; index < answerList[aIndex].value.length; index++) {
                const val = answerList[aIndex].value[index];
                let matchValue:number = 0;
                this.result.forEach((rVal, rIndex) => {
                    if (val.indexOf(rVal) != -1){
                        matchValue++
                    }
                })
                if (matchValue === 4){
                    return answerList[aIndex];
                }else{
                    matchValue = 0;
                }
            }
        }
        return null;
    }
}
