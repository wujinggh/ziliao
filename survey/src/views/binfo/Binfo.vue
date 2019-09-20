<template>
    <div class="page-binfo">
      <div class="write-content">
          <ul>
              <li class="list_1">{{ binfo.school_name }}</li>
              <li class="list_2">
                  <label>所在地区</label>
                  <select v-model="binfo.province">
                      <option value="">选择省份</option>
                      <option :value="prop" v-for="(item, prop) in provinceData" :key="prop">{{prop}}</option>
                  </select>
                  <select v-model="binfo.city">
                      <option value="">选择城市</option>
                      <option :value="item" v-for="(item, index) in cityData" :key="index">{{item}}</option>                      
                  </select>
              </li>
              <li class="list_3">
                  <select v-model="binfo.establish_year">
                      <option value="">学校创办年份</option>
                      <option :value="(1970 + yearNum -year)" v-for="year in yearNum" :key="year">{{ 1970 + yearNum - year }}</option>
                      
                  </select>
              </li>
              <li class="list_4">
                  <i><span>*</span> 学校的建筑面积（单位：平方米）</i>
                  <input type="number" placeholder="请填写有效数字" name="building_area" v-model="binfo.building_area" @blur="checkValue1">
              </li>
              <li v-show="isError1" class="error">×格式有误或值为空</li>
              <li class="list_5">
                  <i><span>*</span> 学校在读学生数量（高中部，单位：人）</i>
                  <input type="number" placeholder="请填写有效数字" name="study_student_count" v-model="binfo.study_student_count" @blur="checkValue2">
              </li>
              <li v-show="isError2" class="error">×格式有误或值为空</li>
              <li class="list_6">
                  <i>学校学费（高中国际部，单位：元/年）</i>
                  <input type="number" placeholder="请填写有效数字" name="study_fee" v-model="binfo.study_fee" @blur="checkValue3">
              </li>
              <li v-show="isError3" class="error">×格式有误</li>
          </ul>
      </div>
      <button type="button" class="startBtn" @click="startFn">开始答题</button>
      <div class="prompt" v-if="promptFlag" @click="close">
        <div class="main">
            <p>检测到您上次已作答{{ 26 - notDoNumber }}题，是否选择继续作答？</p>
            <div class="btn_box">
                <button type="button" class="continue" @click="continueDo">继续作答</button>
                <button type="button" class="once_again" @click="startDo">重新作答</button>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import { toast } from "@/plugin/util";
export default {
  name: "binfo",
  data() {
    return {
      yearNum:50,
      binfo: {
        school_name: '学校名称',
        province: '',
        city: '',
        establish_year: '',
        building_area: '',
        study_student_count: '',
        study_fee: ''
      },
      promptFlag: false,
      notStartNumber: 1,
      notDoNumber: 0,
      provinceData: {
        '上海': ['上海市'],
        '北京': ['北京市'],
        '天津': ['天津市'],
        '重庆': ['重庆市'],
        '安徽': ['合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '滁州市', '阜阳市', '宿州市', '六安市', '亳州市', '池州市', '宣城市'],
        '福建': ['福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市', '龙岩市', '宁德市'],
        '甘肃': ['兰州市', '嘉峪关市', '金昌市', '白银市', '天水市', '武威市', '张掖市', '平凉市', '酒泉市', '庆阳市', '定西市', '陇南市', '临夏回族自治州', '甘南藏族自治州'],
        '广东': ['广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市', '肇庆市', '惠州市', '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市'],
        '广西': ['南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市', '贺州市', '河池市', '来宾市', '崇左市'],
        '贵州': ['贵阳市', '六盘水市', '遵义市', '安顺市', '铜仁市', '黔西南布依族苗族自治州', '毕节市', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
        '海南': ['海口市', '三亚市', '三沙市', '省直辖'],
        '河北': ['石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市', '张家口市', '承德市', '沧州市', '廊坊市', '衡水市'],
        '河南': ['郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市', '焦作市', '濮阳市', '许昌市', '漯河市', '三门峡市', '南阳市', '商丘市', '信阳市', '周口市', '驻马店市', '省直辖'],
        '黑龙江': ['哈尔滨市', '齐齐哈尔市', '鸡西市', '鹤岗市', '双鸭山市', '大庆市', '伊春市', '佳木斯市', '七台河市', '牡丹江市', '黑河市', '绥化市', '大兴安岭地区'],
        '湖北': ['武汉市', '黄石市', '十堰市', '宜昌市', '襄阳市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市', '恩施土家族苗族自治州', '省直辖'],
        '湖南': ['长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市', '岳阳市', '常德市', '张家界市', '益阳市', '郴州市', '永州市', '怀化市', '娄底市', '湘西土家族苗族自治州'],
        '吉林': ['长春市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '松原市', '白城市', '延边朝鲜族自治州'],
        '江苏': ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市'],
        '江西': ['南昌市', '景德镇市', '萍乡市', '九江市', '新余市', '鹰潭市', '赣州市', '吉安市', '宜春市', '抚州市', '上饶市'],
        '辽宁': ['沈阳市', '大连市', '鞍山市', '抚顺市', '本溪市', '丹东市', '锦州市', '营口市', '阜新市', '辽阳市', '盘锦市', '铁岭市', '朝阳市', '葫芦岛市'],
        '内蒙古': ['呼和浩特市', '包头市', '乌海市', '赤峰市', '通辽市', '鄂尔多斯市', '呼伦贝尔市', '巴彦淖尔市', '乌兰察布市', '兴安盟', '锡林郭勒盟', '阿拉善盟'],
        '宁夏': ['银川市', '石嘴山市', '吴忠市', '固原市', '中卫市'],
        '青海': ['西宁市', '海东地区', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
        '山东': ['济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '济宁市', '泰安市', '威海市', '日照市', '莱芜市', '临沂市', '德州市', '聊城市', '滨州市', '菏泽市'],
        '山西': ['太原市', '大同市', '阳泉市', '长治市', '晋城市', '朔州市', '晋中市', '运城市', '忻州市', '临汾市', '吕梁市'],
        '陕西': ['西安市', '铜川市', '宝鸡市', '咸阳市', '渭南市', '延安市', '汉中市', '榆林市', '安康市', '商洛市'],
        '四川': ['成都市', '自贡市', '攀枝花市', '泸州市', '德阳市', '绵阳市', '广元市', '遂宁市', '内江市', '乐山市', '南充市', '眉山市', '宜宾市', '广安市', '达州市', '雅安市', '巴中市', '资阳市', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
        '西藏': ['拉萨市', '昌都地区', '山南地区', '日喀则地区', '那曲地区', '阿里地区', '林芝地区'],
        '新疆': ['乌鲁木齐市', '克拉玛依市', '吐鲁番地区', '哈密地区', '昌吉回族自治州', '博尔塔拉蒙古自治州', '巴音郭楞蒙古自治州', '阿克苏地区', '克孜勒苏柯尔克孜自治州', '喀什地区', '和田地区', '伊犁哈萨克自治州', '塔城地区', '阿勒泰地区', '自治区直辖'],
        '云南': ['昆明市', '曲靖市', '玉溪市', '保山市', '昭通市', '丽江市', '普洱市', '临沧市', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州', '大理白族自治州', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州'],
        '浙江': ['杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        '台湾': ['台北市', '高雄市', '基隆市', '台中市', '台南市', '新竹市', '嘉义市', '省直辖'],
        '香港': ['香港岛', '九龙', '新界'],
        '澳门': ['澳门半岛', '澳门离岛', '无堂区划分区域']
      },
      isError1: false,
      isError2: false,
      isError3: false
    };
  },
  methods: {
    startFn() {
      // 验证
      for(let prop in this.binfo){
        if(prop == 'province' && !this.binfo[prop]){
          toast("请选择省份");
          return 
        }
        if(prop == 'city' && !this.binfo[prop]){
          toast("请选择城市");
          return 
        }
        if(prop == 'establish_year' && !this.binfo[prop]){
          toast("请选择学校创建年份");
          return 
        }
        if(prop == 'building_area' && !this.binfo[prop]){
          toast("请输入学校建筑面积");
          return 
        }
        if(prop == 'study_student_count' && !this.binfo[prop]){
          toast("请输入学生在读数量");
          return 
        }
      }

      if (this.hasError) {
        toast("格式不对!");
        return;
      }
      this.submit()
    },
    submit(){
      //本地测试，跳过请求
      // this.$router.push({ path: 'question' ,query: { currentNumber: 1 }})
      // 发送数据
      this.$http.post("/survey/complete_information", this.binfo).then((res) => {
        if(res.code != 0){
          toast(res.message)
          return;
        }else{
          this.floatFn()
        }
      },()=>{
        toast('提交失败！请重试')
      })
    },
    floatFn(){
      // 弹窗
      let schoolData = JSON.parse(localStorage.getItem("schoolData"));
      if (schoolData && schoolData.answer && schoolData.answer instanceof Array) {
        // 统计之前，清空之前数据
        this.notDoNumber = 0;
        this.notStartNumber = 0
        schoolData.answer.forEach((item,index)=>{
          let isValue =  true;
          if(item instanceof Array){
            for(let i=0,len = item.length;i<len; i++){
              if(item[i] || item[i] === 0){
                isValue = false;
              }
            }
          }
          if((item instanceof Array ? isValue : false) || (!item && item !== 0) || /^ +$/.test(item)){
            this.notDoNumber == 0 && (this.notStartNumber = index + 1)
            this.notDoNumber++
            return;
          }
        })
        if ( 26 - this.notDoNumber > 0 && 26 - this.notDoNumber < 26) {
          this.promptFlag = true;
        } else {
          this.$router.push({ path: 'question' ,query: { currentNumber: 1 }})
        }
      }else{
        this.$router.push({ path: 'question' ,query: { currentNumber: 1 }})
      }
      
    },
    continueDo(){
      this.$router.push({ path: 'question',query: { currentNumber:this.notStartNumber } })
    },
    startDo(){
      this.$router.push({ path: 'question' ,query: { currentNumber: 1 }})
    },
    close(e){
      let target = e.target || srcElement
      while(target){
        if(/main/.test(target.className)){
          target = false;
          return;
        }else{
          target = target.parentNode
        }
      }
      this.promptFlag = false;
    },
    checkValue1(){
      this.isError1 = /[^0-9]/.test(this.binfo.building_area) || /^ *$/.test(this.binfo.building_area)
    },
    checkValue2(){
      this.isError2 = /[^0-9]/.test(this.binfo.study_student_count) || /^ *$/.test(this.binfo.study_student_count)
    },
    checkValue3(){
      this.isError3 = /[^0-9]/.test(this.binfo.study_fee)
    }
  },
  computed:{
      hasError(){
          return this.isError1 || this.isError2 || this.isError3
      },
      cityData(){
        let currentData = this.provinceData[this.binfo.province]
        if(currentData){
          if(currentData.length > 1){
            currentData.indexOf(this.binfo.city) < 0 && (this.binfo.city = '')
            return currentData 
          }else{
            this.binfo.city = currentData[0]
            return currentData
          }
        }
        
      }
  },
  created() {
    let schoolData = JSON.parse(localStorage.getItem("schoolData"));
    if (schoolData && schoolData.information) {
      this.binfo = schoolData.information;
    }
  },
  watch:{
    binfo: {
      handler(newValue, oldValue) {
        let schoolData = JSON.parse(localStorage.getItem("schoolData"));
        schoolData.information = newValue
        schoolData = JSON.stringify(schoolData)
        localStorage.setItem('schoolData',schoolData)
      },
      deep: true
    }
  }
};
</script>
<style lang="less">
.page-binfo {
  width: 7.5rem;
  height: 100%;
  // position: relative;
  overflow: hidden;
  .write-content {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.56rem 0.4rem 1.46rem;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
    box-sizing: border-box;
    li {
      line-height: 0.86rem;
      font-size: 0.3rem;
      label {
        color: #999999;
        font-size: 0.3rem;
        line-height: 0.8rem;
        padding-left: 0.38rem;
      }
      input,
      select {
        height: 0.86rem;
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 0.02rem #f2f2f2 solid;
        padding-left: 0.38rem;
        background: none;
      }
      input{
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        padding-right: 0.2rem;
        line-height: 0.66rem;
      }
      i {
        display: block;
        color: #999999;
        font-size: 0.3rem;
        line-height: 0.8rem;
        padding-left: 0.38rem;
        padding-top: 0.3rem;
        span{
          color: #e60012;
        }
      }
      &.list_1,
      &.list_2,
      &.list_3 {
        background: #f7f7f7;
        margin-bottom: 0.5rem;
      }
      &.list_1 {
        padding-left: 0.38rem;
      }
      &.list_2 {
        overflow: hidden;
        label {
          float: left;
          color: #222;
          width: 30%;
          display: inline-block;
          box-sizing: border-box;
        }
        select {
          float: left;
          width: 35%;
          display: inline-block;
          background: none;
          border: none;
        }
      }
      &.list_3 {
        margin-bottom: 0;
      }
      &.error{
        color:#e60012;
        height: 0.48rem;
        line-height: 0.48rem;
        font-size: 0.24rem;
      }
    }
  }
  .startBtn {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    font-size: 0.36rem;
    color: #fff;
    line-height: 0.96rem;
    text-align: center;
    text-decoration: none;
    background: #2498ed;
    border:none;
    outline: none;
  }
  .prompt{
      background:rgba(0,0,0,0.5);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      .main{
          width: 6.72rem;
          height: 3.52rem;
          box-sizing: border-box;
          padding-top: 0.74rem;
          background: #fff;
          position: absolute;
          left: 50%;
          top: 4rem;
          margin-left: -3.36rem;
          border-radius: 0.18rem;
          p{
              text-align: center;
              font-size: 0.3rem;
              color: #222;
              margin-bottom: 0.5rem;
              padding: 0 0.2rem;
          }
          .btn_box{
              text-align: center;
              button{
                  width: 2.4rem;
                  height: 0.8rem;
                  line-height: 0.8rem;
                  border-radius: 0.4rem;
                  margin: 0 0.3rem;
                  display: inline-block;
                  border: none;
                  background: #2498ed;
                  color: #fff;
                  font-size: 0.3rem;
                  font-weight: bold;
                  &.once_again{
                      background: #7eb9e4;
                  }
              }
          }
      }
    }
}
</style>


