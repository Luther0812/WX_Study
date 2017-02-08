var common = require('../../utils/common.js')

Page({
  data : {
    name : "WeChat",
    text : "init data",
    array: [{text: 'init data'},{text: 'a'},{text: 'b'}],
    object: {
      text: 'init data'
    },
    arrayFor: [1,2,3,4,5],
    view: 'APP',
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    count: 1
  },
  changeName : function(e){
    this.setData({
      name : "MINE"
    })
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log("onLoad");
  },
  onReady: function() {
    // Do something when page ready.
    console.log("onReady");
  },
  onShow: function() {
    // Do something when page show.
    console.log("onShow");
  },
  onHide: function() {
    // Do something when page hide.
    console.log("onHide");
  },
  onUnload: function() {
    // Do something when page close.
    console.log("onUnload");
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
    console.log("onPullDownRefresh");
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log("onReachBottom");
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   console.log("onShareAppMessage");
   return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: 'pages/index/index'
    }
  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  },
  helloCommon: function(){
    common.sayHello("Luther")
  },
  googbayCommon: function(){
    common.sayGoodbye('Luther')
  },
  add: function(e){
    this.setData({
      count: this.data.count + 1
    })
  }
})