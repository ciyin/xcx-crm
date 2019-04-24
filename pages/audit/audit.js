Page({
  data:{
    numbers:[1,2,3,4,5,6,7,8],
    index:1
  },
  back: function () {
    wx.switchTab({
      url: '/pages/dashboard/dashboard',
    })
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})
