var audits = [
  {
    title:'合同审批（周一行）[SH2100234]',
    creator:'刘丹霞',
    current_step:'合同收款'
  },
  {
    title: '合同审批（朱子语）[SH2100244]',
    creator: '张中伟',
    current_step: '校长确认'
  },
  {
    title: '合同审批（杨阳）[SH2100224]',
    creator: '沈阳',
    current_step: '合同收款'
  },
  {
    title: '合同审批（李雨桐）[SH2100334]',
    creator: '张中伟',
    current_step: '校长确认'
  },
  {
    title: '合同审批（王小珏）[SH2100434]',
    creator: '沈丽',
    current_step: '合同收款'
  },
  {
    title: '合同审批（王一博）[SH2100434]',
    creator: '沈丽',
    current_step: '合同收款'
  },
];

Page({
  data:{
    audits
  },
  audit:function(){
    wx.redirectTo({
      url: '/pages/audit/audit',
    })
  }  
})
