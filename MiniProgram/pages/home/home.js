// pages/home.js
import drawQrcode from '../../utils/weapp.qrcode.js'

Page({

  /**
   * 页面的初始数据--隐藏功能
   */
  data: {
    text: '',
    inputValue: '',
    showCanvas: false,
    showQrcodeImg: false,
    imageSrc: '',
    swiperList: [{
        "id": 1,
        "out-side-banner-url": "URL",
        "in-side-banner-url": "URL",
        "open-type": 1,
        "open-content": null,
        "title": "首页轮播1",
        "start-time": "2023/04/12 00:00:00",
        "end-time": "2099/12/01 00:00:00",
        "tag-name": null,
        "tag-name2": null,
        "tag-name3": null
      },
      {
        "id": 20,
        "out-side-banner-url": "URL",
        "in-side-banner-url": "URL",
        "open-type": 1,
        "open-content": null,
        "title": "首页轮播2",
        "start-time": "2023/05/01 14:40:03",
        "end-time": "2099/12/01 00:00:00",
        "tag-name": null,
        "tag-name2": null,
        "tag-name3": null
      },
      {
        "id": 2,
        "out-side-banner-url": "URL",
        "in-side-banner-url": "URL",
        "open-type": 1,
        "open-content": "httpss://www.baidu.com/",
        "title": "首页轮播3",
        "start-time": "2023/04/12 00:00:00",
        "end-time": "2099/12/01 00:00:00",
        "tag-name": null,
        "tag-name2": null,
        "tag-name3": null
      }
    ],
    companyInfo: {
      "name": "SiYang",
      "phone": "199XXXXXXXX",
      "email": "SiYang@xxx.com",
      "address": "广东省深圳市XXXXXXXXXX",
      "longitude": 164.220664,
      "latitude": 12.662368,
      "content": "---简介----",
      "regnumber": "--------"
    },
    productList: [{
        "id": 1,
        "name": "OCR",
        "title": "OCR",
        "description": "OCR",
        "cover": "URL",
        "open_type": 1,
        "is-show-type": 1,
        "sort": 0
      },
      {
        "id": 2,
        "name": "钱包",
        "title": "钱包",
        "description": "钱包",
        "cover": "URL",
        "open_type": 1,
        "is-show-type": 1,
        "sort": 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.id && options.show) {
      // 获取传值，赋值给text
      this.setData({
        text: options.id,
        inputValue: options.id
      });
      this.draw()
    }
  },
  draw() {
    setTimeout(() => {
      this.setData({
        showCanvas: true
      })
      var that = this;
      drawQrcode({
        width: 200,
        height: 200,
        x: 0,
        y: 0,
        canvasId: 'myQrcode',
        // ctx: wx.createCanvasContext('myQrcode'),
        typeNumber: 10,
        text: this.data.text,
        // image: {
        //   imageResource: '../../images/icon.png',
        //   dx: 70,
        //   dy: 70,
        //   dWidth: 60,
        //   dHeight: 60
        // },
        callback(e) {
          console.log('e: ', e)
          setTimeout(() => {
            //赋值给image
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: 200,
              height: 200,
              destWidth: 200,
              destHeight: 200,
              canvasId: 'myQrcode',
              // fileType:'jpg',
              // quality:1,
              success(res) {
                console.info(res.tempFilePath);
                that.setData({
                  imageSrc: res.tempFilePath,
                  showCanvas: false,
                  showQrcodeImg: true
                })
              }
            })
          }, 100);
        }
      })
    }, 100);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})