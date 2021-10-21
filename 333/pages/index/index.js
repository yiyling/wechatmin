// index.js
// 获取应用实例
const app = getApp()
let city = require('../../utils/city')
// console.log(city)
Page({
  data: {
    letter: "",
    chooseCity: "--",
    historyCity: []
  },
  toggleLetter(e) {
    // console.log(e.target.dataset.letter);
    this.setData({letter: e.target.dataset.letter})

  },
  //滚动切换城市位置
  moveLetter(e) {
    console.log(e)
    let index = parseInt((e.changedTouches[0].clientY - 50) / this.data.letterHeight);
    let letter  = this.data.list[index].letter
    if (letter !== this.data.letter) {
      this.setData({ letter })
    }
    console.log(index, letter)
  },
  // 选择当前城市
  changeCity(e) {
    // console.log(e.target)
    let city = e.target.id
    this.data.historyCity.unshift(city)
    this.setData({chooseCity: city})
    let historyCity = this.data.historyCity
    wx.setStorage({
      data: historyCity.slice(0,3),
      key: 'city',
      complete: () => {
        this.setData({chooseCity: city, historyCity: historyCity.slice(0,3)})
      }
    })

  },
 
  onLoad() {
    // 获取设备信息
    wx.getSystemInfo({
      success: (result) => {
        let letterHeight = (result.windowHeight - 50) / city.list.length;
        let height = result.windowHeight - 50
        let historyCity = []
        try{
          historyCity = wx.getStorageSync('city') || [ ];
          console.log(historyCity, 11111)
        } catch (e) {
          console.log(historyCity, "未获取到历史城市")
        }
        this.setData({ ...city, letterHeight, height, historyCity});
      }
    })
    // console.log(this.data);
  },
  
})
