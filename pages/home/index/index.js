const app = getApp()
Component({
    options: {
        addGlobalClass: true,
        CustomBar: app.globalData.CustomBar,

    },
    data: {
        swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
        }, {
            id: 1,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        }, {
            id: 2,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
        }, {
            id: 3,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        }, {
            id: 4,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        }, {
            id: 5,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
        }, {
            id: 6,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
        }],
        elements: [{
                title: '干垃圾',
                name: 'Dry',
                color: 'Dry',
                icon: 'DryTrash'
            },
            {
                title: '湿垃圾',
                name: 'Wet',
                color: 'Wet',
                icon: 'WetTrash'
            },
            {
                title: '可回收垃圾',
                name: 'Recyclable',
                color: 'Recyclable',
                icon: 'RecyclableTrash'
            },
            {
                title: '有害垃圾',
                name: 'Harmful',
                color: 'Harmful',
                icon: 'HarmfulTrash'
            }
        ],
    },
    methods: {
        search(){
            wx.navigateTo({
                url: '/pages/home/search/search'
            })
        }
    }
})