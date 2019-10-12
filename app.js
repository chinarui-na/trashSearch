import { $wuxToast } from '/static/wux/index'
var store = require('./utils/store.js');

//app.js
App({
  showTextToast: function (data) {
    $wuxToast().show({
      type: 'text',
      duration: 1500,
      color: '#fff',
      text: data,
      success: () => console.log(data)
    })
  },
  test02: function () {
    console.log("test2");
  },
  post: function (url, data) {
    var postpromise = new Promise(function (postsuccess, postfail) {
      wx.request({
        header: { 'content-type': 'application/json' },
        url: url,
        data: data,
        method: "POST",
        success: function (sres) {
          postsuccess(sres);
        },
        fail: (fres) => {
          postfail(fres);
        }
      })
    })
    return postpromise;
  },
  get: function (url, data) {
    var postpromise = new Promise(function (getsuccess, getfail) {
      wx.request({
        header: { 'content-type': 'application/json' },
        url: url,
        data: data,
        method: "GET",
        success: function (sres) {
          getsuccess(sres);
        },
        fail: (fres) => {
          getfail(fres);
        }
      })
    })
    return postpromise;
  },
  onLaunch: function () {
    if (wx.canIUse('getUpdateManager')) {
            const updateManager = wx.getUpdateManager()
            updateManager.onCheckForUpdate(function(res) {
                // 请求完新版本信息的回调
                if (res.hasUpdate) {
                    updateManager.onUpdateReady(function() {
                        wx.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success: function(res) {
                                console.log('success====', res)
                                // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
                                if (res.confirm) {
                                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                    updateManager.applyUpdate()
                                }
                            }
                        })
                    })
                    updateManager.onUpdateFailed(function() {
                        // 新的版本下载失败
                        wx.showModal({
                            title: '已经有新版本了哟~',
                            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
                        })
                    })
                }
            })
        }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null
  }
})