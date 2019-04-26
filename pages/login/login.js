Page({
  data:{

  },
  login:function(){
    wx.request({
      url: 'http://crm.local/test',
      method: 'get',
      success: function (res) {
        console.log(res);
      }
    })
  }
})