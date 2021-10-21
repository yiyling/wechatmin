// pages/card/card.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        data: {}
    },
    // 提交数据
    submitData(e) {
        // console.log(e,11111111111111111111)
        // 获取数据，存储在本地
        wx.setStorage({
            data: e.detail.value,
            key: 'card',
            complete: () => {
                // this.setData({ data })
                wx.reLaunch({
                    url: '/pages/show/show'
                })
              
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getStorage({
            key: 'card',
            success: ({ data }) => {
              // console.log(data)
              this.setData({data})
            }
          })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})