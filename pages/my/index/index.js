const app = getApp()
Component({
    options: {
        addGlobalClass: true,
        CustomBar: app.globalData.CustomBar,

    },
    data: {},
    methods: {
        cashbook() {
            var urls = ['http://img.chinarui.cn/cash_book_code.jpg']
            wx.previewImage({
                urls: urls
            });

        }
    }
})