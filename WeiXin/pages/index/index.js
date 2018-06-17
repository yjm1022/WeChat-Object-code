//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://cbu01.alicdn.com/img/ibank/2017/559/648/3961846955_243970241.310x310.jpg',
      'https://cbu01.alicdn.com/img/ibank/2016/049/576/3248675940_29670569.310x310.jpg',
      'https://cbu01.alicdn.com/img/ibank/2015/986/491/2367194689_290510600.310x310.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    products:[]
  },
  onLoad:function(){
    let selt = this;
    wx.request({
      url: 'http://localhost:8080/smallPropram/pro/selectProduct',
      method:'get',
      success:function(result){
        console.log(result.data.extend.product);
        selt.setData({
          products: result.data.extend.product
        })
      }
    })
  },
  showDetails:function(e){
    wx.navigateTo({
      url: '../details/details?id=' + e.currentTarget.dataset.id,
    })
  }

})
