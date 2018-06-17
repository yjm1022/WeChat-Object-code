var app = getApp()
Page({
  data: {
    currentTab: 0,
    product:[]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let dt = this;
    wx.request({
      url: 'http://localhost:8080/smallPropram/pro/selectProCalss?proCalss='+'新品',
      method:'GET',
      success:function(result){
        dt.setData({
          product: result.data.extend.product
        })
      }
    })
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })

      wx.request({
        url: 'http://localhost:8080/smallPropram/pro/selectProCalss?proCalss='+e.target.dataset.cls,
        method:'GET',
        success:function(result){
          that.setData({
            product:[]
          })
          that.setData({
            product: result.data.extend.product
          })
        }
      })
     
    }


  }

})