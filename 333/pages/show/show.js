// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    data: {},
    userInfo: {},
   
  },
  //进入编辑名片页面
  showEditPage() {
    wx.navigateTo({
      url: '/pages/card/card'
    })
  },

  onLoad: function() {
    wx.getStorage({
      key: 'card',
      success: ({ data }) => {
        this.setData({ data })
      },
      fail: () => {
        wx.redirectTo({
          url: '/pages/card/card',
        })
      }
    })
  },


})
