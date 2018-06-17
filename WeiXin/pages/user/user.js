//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfoList:[
      {
        userInfoIcon:"../../image/icon/viewTheOrder.png",
        userInfoIorder:"查看订单",
        userInfoIcon2:"../../image/icon/rightArrow.png"
      },
      {
        userInfoIcon: "../../image/icon/coupon.png",
        userInfoIorder: "我的优惠券",
        userInfoIcon2: "../../image/icon/rightArrow.png"
      },
      {
        userInfoIcon: "../../image/icon/collection.png",
        userInfoIorder: "我的收藏",
        userInfoIcon2: "../../image/icon/rightArrow.png"
      },
      {
        userInfoIcon: "../../image/icon/address.png",
        userInfoIorder: "收货地址",
        userInfoIcon2: "../../image/icon/rightArrow.png"
      },
      {
        userInfoIcon: "../../image/icon/help.png",
        userInfoIorder: "客服帮助",
        userInfoIcon2: "../../image/icon/rightArrow.png"
      },
      {
        userInfoIcon: "../../image/icon/about.png",
        userInfoIorder: "关于我们",
        userInfoIcon2: "../../image/icon/rightArrow.png"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  to_about:function(e){
    let order = e.target.dataset.order;
    console.log(order);
    if (order == "关于我们"){
      wx.navigateTo({
        url: '../about/about',
      })
    }
  }
})
