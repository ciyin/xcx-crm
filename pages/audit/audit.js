Page({
  data:{
    contract:{
      title:'合同审批（周杨）[SH2100332]',
      original_amount:'50000',
      total_amount:'20000',
      discount_amount:'0.8',
      paid_amount:'2000',
      signed_by_name:'周婧茹',
      memo:'老学员8折'
    },
    student:{
      balance:'0'
    },
    discounts:[
      {
        discount_type:'现金优惠',
        discount_amount:'33'
      },
      {
        discount_type: '优惠券',
        discount_name:'内部学员冲刺班优惠',
        discount_amount: '2990'
      }
    ],
    contract_items:[
      {
        product:'TOEFL(阅读)',
        price:'1080',
        quantity:'4',
        unpaid_quantity:'2',
        coupon_name:'一对一1000优惠券'
      },
      {
        product: 'TRFSH0001',
        price: '23000',
        quantity: '1',
        unpaid_quantity: '1'
      }
    ],
    numbers:[0,1,2,3,4,5,6,7,8]
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
