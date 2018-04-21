// components/calc/calc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerStyle:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    numIcon:[
      '../../asset/images/num/num0.png',
      '../../asset/images/num/num1.png',
      '../../asset/images/num/num2.png',
      '../../asset/images/num/num3.png',
      '../../asset/images/num/num4.png',
      '../../asset/images/num/num5.png',
      '../../asset/images/num/num6.png',
      '../../asset/images/num/num7.png',
      '../../asset/images/num/num8.png',
      '../../asset/images/num/num9.png',
    ],
    ge:'../../asset/images/num/num0.png',
    shi:'../../asset/images/num/num0.png',
    bai:'../../asset/images/num/num3.png',
    qian:'../../asset/images/num/num5.png',
    wan:'../../asset/images/num/num8.png',
    shiwan:'',
    showShiwan:false,
    multiArray: [
      ['1室', '2室', '3室', '4室', '5室'], 
      ['1厅', '2厅', '3厅', '4厅', '5厅'], 
      ['1卫', '2卫', '3卫', '4卫', '5卫'], 
      ['1阳台', '2阳台', '3阳台', '4阳台', '5阳台'], 
    ],
    multiIndex: [0, 0, 0 ,0],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready:function(){

    console.log(this.properties.innerStyle)

    setInterval(()=>{
      var ge=Math.floor(Math.random() * 10);
      var shi = Math.floor(Math.random() * 10);
      var bai = Math.floor(Math.random() * 10);
      var qian = Math.floor(Math.random() * 10);
      var wan = Math.floor(Math.random() * 10);
      var shiwan = Math.round(Math.random());
      this.setData({
        ge :this.data.numIcon[ge],
        shi: this.data.numIcon[shi],
        bai: this.data.numIcon[bai],
        qian: this.data.numIcon[qian],
        wan: this.data.numIcon[wan],
        shiwan: this.data.numIcon[shiwan],
        showShiwan:shiwan==1
      })
      
    },200)
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },





})
