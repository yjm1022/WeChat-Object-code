const app = getApp()

Page({
  data: {
    product: []
  },
  onLoad: function (option) {
    let selt = this;
    wx.request({
      url: 'http://localhost:8080/smallPropram/pro/getProById/' + option.id,
      method: 'post',
      success: function (result) {
        //console.log(result.data.extend.product+"=============");
        selt.setData({
          product: result.data.extend.product
        })
      }
    })
  },
  addCart:function(e){
    // 得到要获取信息的商品id
    let id = e.target.dataset.id;
    // 依据id获取到商品数据  currentProduct存放该商品数据
    let currentProduct = null;
    if (this.data. product.proId ==id){
      currentProduct = this.data.product;
    }
    // 从本地获取购物车里的商品列表 如果没有商品就初始化为[]
    let cartProducts = wx.getStorageSync('cart') || [];
    //  标记当前商品未添加到购物车
    let idAddedToCart = false;

    /**
     * 组装一个新的 json cartProduct 格式如下   product：数据    count：该数据的重复次数
     * cartProduct:{
     *  product:{},
     *  count:1
     * }
     * 
    */
    // 循环购车列表
    cartProducts.forEach(function(cartProduct,index){
      if (currentProduct.proId == cartProduct.product.proId){
            // 如果有已经有该产品数据 就count加一
            cartProduct.count ++ ;
            // 标记当前数据已添加到购物车列表
            idAddedToCart = true;
        }
    })

    if(!idAddedToCart){
      // 如果购物车中没有该商品 组装新json 商品信息 + 数量
      let cartProduct = {
        product: currentProduct,
        count:1
      }
      // 组装好的数据添加到购物车
      cartProducts.unshift(cartProduct);
    }

    // 把购物车的数据添加到本地存储
    wx.setStorageSync('cart', cartProducts);
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})