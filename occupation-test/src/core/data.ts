export const questionList = [
    {
        tit: '和一群人在一起聚会，通常你会',
        options: [{
            des: '兴致勃勃，活力倍增 ，主动调节气氛',
            value: 'E'
        },{
                des: '小范围活动，自己自在就好，避免成为焦点',
                value: 'I'
        }],
        isScore: true
    },
    {
        tit: '在一大群人中，通常是',
        options: [{
            des: '你介绍大家相互认识',
            value: 'E'
        }, {
                des: '别人介绍你',
                value: 'I'
        }],
        isScore: false
    },
    {
        tit: '家里买来电器等需要组装的东西时，你',
        options: [{
            des: '会阅读说明书，并按照步骤完成组装 ',
            value: 'S'
        }, {
                des: '靠自己的感觉组装 ',
                value: 'N'
        }],
        isScore: false
    },
    {
        tit: '陌生的地方，你会更倾向哪种方式来找目的地',
        options: [{
            des: '用地图、导航等 ',
            value: 'S'
        }, {
                des: '靠自己的方向感 ',
                value: 'N'
        }],
        isScore: true
    },
    {
        tit: '在做一个决定时，你更多地会',
        options: [{
            des: '权衡实际的得失 ',
            value: 'T'
        }, {
                des: '考虑其他人的感受 ',
                value: 'F'
        }],
        isScore: false
    },
    {
        tit: '班级和社团等竞选时，你一般会投票给',
        options: [{
            des: '真正有能力的同学',
            value: 'T'
        }, {
                des: '关系好的同学 ',
                value: 'F'
        }],
        isScore: true
    },
    {
        tit: '定出周末上午参加学生志愿活动计划和方案后，同学约你参加讲座活动，你',
        options: [{
            des: '希望能够严格执行之前的计划，太多变化会让你感觉失控烦躁   ',
            value: 'J'
        }, {
                des: '可根据活动的意愿度随时调整  ',
                value: 'P'
        }],
        isScore: true
    },
    {
        tit: '你学校的课桌或家里的书桌、衣柜等，一般',
        options: [{
            des: '整洁，井然有序，每个物件都有确定的安放地点 ',
            value: 'J'
        }, {
                des: '比较随意，容易被人称为“杂乱无章” ',
                value: 'P'
        }],
        isScore: false
    }
]

export const answerList = [
    {
        value: ['ESTJ','INFP'],
        imgSrc:'http://s.diyigaokao.com/occupationtest/images/cw.jpg',
        keyword: ['注意细节','条理性强','实际高效','果断坚定','思维开阔','踏实务实'],
        name: '财务会计',
        des: '如此注重细节，会计就是你！都说地球少了你，依然会转，可是企业没了你，还真得无法运转！肩负“核算”与“监督”两大职能，钱从哪里来，到哪里去，你了如指掌！企业的账你管得好，人生的“账”你依然理得井井有条！'
    },
    {
        value: ['ENTP', 'ENFJ'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/wj.jpg',
        keyword: ['足智多谋', '社交达人', '考虑深远', '彬彬有礼', '善于外交', '坚决果断'],
        name: '外交官',
        des: '从小就是社交达人，外交官必须是你！纵横捭阖、巧言善思，足智多谋。站在世界的舞台上，你是笔尖上治家国、舌尖上平天下的大使；坐在谈判桌上，你是能言善辩、力缆狂澜的谈判官；不搞事、不怕事、专门解决事儿！'
    },
    {
        value: ['ESFJ', 'ENTJ'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/js.jpg',
        keyword: ['责任感强', '讲求实际', '循循善诱', '天生靠谱', '善于交流', '热心真诚'],
        name: '教师',
        des: '你未来从事的职业是老师！玉不琢不成器，人不学不知道，循循善诱、天生靠谱的你注定是一位人见人爱花见花开的人民教师。传道受业解惑，需练得“十八般武艺”，杠杠的“演技”，极佳的表情管理，徒手画世界地图、徒手画圆等等，这些都是为了课堂的需要！'
    },
    {
        value: ['ESFP', 'INTP'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/it.jpg',
        keyword: ['缄默超然', '专注精细', '思想长远', '善于协作', '脚踏实地', '坚定刚毅'],
        name: 'IT工程师',
        des: 'IT工程师就是你啦！工作帅气又酷，天天吸粉无数。在穿着方面，格子衫，牛仔裤，双肩包；在情感方面，木讷单身狗，女生天天找你修电脑！不过在工作方面，性格坚定刚毅的你，打怪升级自带buff，注定是最佳技术担当！'
    },
    {
        value: ['ESTP', 'ISTP'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/jz.jpg',
        keyword: ['思维开阔', '善于观察', '讲求实效', '谨慎细致', '执行力强', '目标性强'],
        name: '建筑工程师',
        des: '建筑工程师非你莫属，都说这年头买房了不起，买房算啥呀，你可以造房！就是这么硬气！ 标图号、画详图、编说明一样不能少，千万不要相信偶像剧里灵感爆发拿个彩铅或者是马克笔在纸上刷刷两下就出来一个旷世奇作，还能在国际上获奖，都是瞎扯'
    },
    {
        value: ['INFJ', 'ISTJ'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/ls.jpg',
        keyword: ['公平正直', '专注执着', '坚决果断', '心思缜密', '讲求实际', '深思熟虑'],
        name: '律师',
        des: '脑回路清晰的你，将来会成为申张正义的“律政达人”何以琛。性格严谨，绝不允许自己出错，凡事追求公平。宪法、民法、刑法、诉讼法……总有一部法让你背起来热血沸腾。天若有情天亦老，人学法律头发少。更可怕的是每一部法没有重点，因为老师说了全是重点！'
    },
    {
        value: ['INTJ', 'ENFP'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/sj.jpg',
        keyword: ['完美主义', '思想独特', '乐观自然', '富有创造性', '天马行空', '兴趣广泛'],
        name: '设计师',
        des: '天生的设计师，艺术天赋无人能及！天马行空，灵魂有趣，拥有把咸鱼P活的技术、点石成金的想法。审美能力超强，自带幽默光环，脑海里的创意可以绕地球30圈！且这个行业大多是女的美男的帅。'
    },
    {
        value: ['ISFJ', 'ISFP'],
        imgSrc: 'http://s.diyigaokao.com/occupationtest/images/ys.jpg',
        keyword: ['负责专一', '乐于助人', '务实温和', '谦虚缄默', '热情慷慨', '注意细节'],
        name: '医生',
        des: '一向热情的你总能成为大家身边的小太阳，毕业后定能成为“穿着白大褂走路带风、练就一身潇洒飘逸气质”的医生。漫漫学医路，高学历往往是行业的标配，据说很多伟人都未曾毕业：鲁迅弃医从文、郭沫若弃医从文、郁达夫弃医从文、冰心弃医从文...所以请你一定坚持下去！因为你就是那降临人间的小天使！'
    }
]

