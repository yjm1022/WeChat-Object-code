const app = getApp()

Page({
  data:{
    cart:[],
    totalPay:0
  },
  onShow:function(){
    this.setData({
      cart: wx.getStorageSync("cart") || []
    })
    let money = 0;
    this.data.cart.forEach(function (cartProduct, index) {
      money += cartProduct.product.proMoney * cartProduct.count;

    })
    console.log(money)
    this.setData({
      totalPay: money
    })
  },
  remove:function(e){
    console.log(e.target.dataset.index+"//////");
    // 得到要删除商品的索引
    let index = e.target.dataset.index;
    // 获取到当前购物列表中所有的商品
    let currentCart = this.data.cart;
    //console.log(currentCart[index].product.proName+"我被删除了");
    // 从购物车列表中移除掉指定索引的商品信息
    currentCart.splice(index);
    this.setData({
      // 把删除指定商品后的数据放回数组中
      cart: currentCart
    })
   
    // 把更新后的数据重新放回到本地存储当中
    wx.setStorageSync('cart',this.data.cart);
  },
  checkAll:function(){

  },
  to_classify:function(e){
    wx.switchTab({
      url: '../classify/classify',
    })
  },
})