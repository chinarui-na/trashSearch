// pages/home/Wet/Wet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentArr:[{"name":"艾草","type":"湿垃圾"},{"name":"棒棒糖","type":"湿垃圾"},{"name":"八宝粥","type":"湿垃圾"},{"name":"菠菜","type":"湿垃圾"},{"name":"白茶","type":"湿垃圾"},{"name":"布丁","type":"湿垃圾"},{"name":"扁豆","type":"湿垃圾"},{"name":"巴旦木","type":"湿垃圾"},{"name":"冰粉","type":"湿垃圾"},{"name":"饼干","type":"湿垃圾"},{"name":"碧根果肉","type":"湿垃圾"},{"name":"白瓜子","type":"湿垃圾"},{"name":"包裹着猫屎的豆腐猫砂","type":"湿垃圾"},{"name":"薄荷糖","type":"湿垃圾"},{"name":"薄荷叶","type":"湿垃圾"},{"name":"八角","type":"湿垃圾"},{"name":"北京烤鸭","type":"湿垃圾"},{"name":"菠萝","type":"湿垃圾"},{"name":"槟榔","type":"湿垃圾"},{"name":"菠萝包","type":"湿垃圾"},{"name":"板栗壳","type":"湿垃圾"},{"name":"菠萝蜜肉","type":"湿垃圾"},{"name":"菠萝皮","type":"湿垃圾"},{"name":"爆米花","type":"湿垃圾"},{"name":"白米虾","type":"湿垃圾"},{"name":"冰淇淋","type":"湿垃圾"},{"name":"蚌肉","type":"湿垃圾"},{"name":"白砂糖","type":"湿垃圾"},{"name":"白色恋人饼干","type":"湿垃圾"},{"name":"白糖","type":"湿垃圾"},{"name":"百香果壳","type":"湿垃圾"},{"name":"百香果籽","type":"湿垃圾"},{"name":"包子","type":"湿垃圾"},{"name":"煲仔饭","type":"湿垃圾"},{"name":"白煮蛋","type":"湿垃圾"},{"name":"包子馅","type":"湿垃圾"},{"name":"草本植物","type":"湿垃圾"},{"name":"蚕豆","type":"湿垃圾"},{"name":"蚕豆壳","type":"湿垃圾"},{"name":"菜饭","type":"湿垃圾"},{"name":"茨菇","type":"湿垃圾"},{"name":"臭虫","type":"湿垃圾"},{"name":"臭豆腐","type":"湿垃圾"},{"name":"炒花生壳","type":"湿垃圾"},{"name":"炒花生米","type":"湿垃圾"},{"name":"翅尖","type":"湿垃圾"},{"name":"车厘子核","type":"湿垃圾"},{"name":"陈皮","type":"湿垃圾"},{"name":"陈皮梅","type":"湿垃圾"},{"name":"出前一丁面条","type":"湿垃圾"},{"name":"叉烧","type":"湿垃圾"},{"name":"叉烧酥","type":"湿垃圾"},{"name":"茶叶","type":"湿垃圾"},{"name":"茶叶蛋壳","type":"湿垃圾"},{"name":"虫子","type":"湿垃圾"},{"name":"橙子皮","type":"湿垃圾"},{"name":"草莓","type":"湿垃圾"},{"name":"草莓叶","type":"湿垃圾"},{"name":"菜皮","type":"湿垃圾"},{"name":"橙皮","type":"湿垃圾"},{"name":"宠物粪便","type":"湿垃圾"},{"name":"宠物饲料","type":"湿垃圾"},{"name":"粗盐","type":"湿垃圾"},{"name":"苍蝇","type":"湿垃圾"},{"name":"兹油饼","type":"湿垃圾"},{"name":"茶叶渣","type":"湿垃圾"},{"name":"脆枣","type":"湿垃圾"},{"name":"茶渣","type":"湿垃圾"},{"name":"残枝落叶","type":"湿垃圾"},{"name":"蛋白","type":"湿垃圾"},{"name":"大饼","type":"湿垃圾"},{"name":"大白菜","type":"湿垃圾"},{"name":"蛋白粉","type":"湿垃圾"},{"name":"大白兔奶糖","type":"湿垃圾"},{"name":"多宝鱼骨头","type":"湿垃圾"},{"name":"大葱","type":"湿垃圾"},{"name":"豆腐","type":"湿垃圾"},{"name":"豆腐干","type":"湿垃圾"},{"name":"豆腐花","type":"湿垃圾"},{"name":"豆腐猫砂","type":"湿垃圾"},{"name":"豆腐脑","type":"湿垃圾"},{"name":"豆腐皮","type":"湿垃圾"},{"name":"豆腐乳","type":"湿垃圾"},{"name":"冬","type":"湿垃圾"},{"name":"蛋糕","type":"湿垃圾"},{"name":"豆干","type":"湿垃圾"},{"name":"豆杆","type":"湿垃圾"},{"name":"冬瓜皮","type":"湿垃圾"},{"name":"当归片","type":"湿垃圾"},{"name":"冬瓜籽","type":"湿垃圾"},{"name":"蛋黄","type":"湿垃圾"},{"name":"蛋黄派","type":"湿垃圾"},{"name":"蛋黄酥","type":"湿垃圾"},{"name":"蛋卷","type":"湿垃圾"},{"name":"豆浆渣","type":"湿垃圾"},{"name":"德克士炸鸡","type":"湿垃圾"},{"name":"大龙虾肉","type":"湿垃圾"},{"name":"大米","type":"湿垃圾"},{"name":"大排","type":"湿垃圾"},{"name":"多肉植物","type":"湿垃圾"},{"name":"豆沙包","type":"湿垃圾"},{"name":"冬笋壳","type":"湿垃圾"},{"name":"大蒜皮","type":"湿垃圾"},{"name":"大蒜叶","type":"湿垃圾"},{"name":"蛋挞","type":"湿垃圾"},{"name":"蛋筒","type":"湿垃圾"},{"name":"动物粪便","type":"湿垃圾"},{"name":"动物内脏","type":"湿垃圾"},{"name":"动物尸体","type":"湿垃圾"},{"name":"凋谢的鲜花","type":"湿垃圾"},{"name":"豆芽","type":"湿垃圾"},{"name":"冬杰","type":"湿垃圾"},{"name":"大闸蟹","type":"湿垃圾"},{"name":"大闸蟹壳","type":"湿垃圾"},{"name":"带子壳","type":"湿垃圾"},{"name":"豆制品","type":"湿垃圾"},{"name":"鹅骨头","type":"湿垃圾"},{"name":"方便面面条","type":"湿垃圾"},{"name":"凤梨皮","type":"湿垃圾"},{"name":"凤梨酥","type":"湿垃圾"},{"name":"蜂蜜","type":"湿垃圾"},{"name":"番茄","type":"湿垃圾"},{"name":"番茄梗","type":"湿垃圾"},{"name":"番茄酱","type":"湿垃圾"},{"name":"番茄沙司","type":"湿垃圾"},{"name":"废弃食用油","type":"湿垃圾"},{"name":"废弃调味品","type":"湿垃圾"},{"name":"废弃植物","type":"湿垃圾"},{"name":"粉丝","type":"湿垃圾"},{"name":"饭团","type":"湿垃圾"},{"name":"番茄皮","type":"湿垃圾"},{"name":"瓜子","type":"湿垃圾"},{"name":"锅巴","type":"湿垃圾"},{"name":"干脆面","type":"湿垃圾"},{"name":"果冻","type":"湿垃圾"},{"name":"公丁香","type":"湿垃圾"},{"name":"鸽粪","type":"湿垃圾"},{"name":"瓜果","type":"湿垃圾"},{"name":"千果仁","type":"湿垃圾"},{"name":"桂花糕","type":"湿垃圾"},{"name":"千花生壳","type":"湿垃圾"},{"name":"呙","type":"湿垃圾"},{"name":"果酱","type":"湿垃圾"},{"name":"狗粮","type":"湿垃圾"},{"name":"咖喱粉","type":"湿垃圾"},{"name":"橄榄核","type":"湿垃圾"},{"name":"千辣椒","type":"湿垃圾"},{"name":"干荔枝","type":"湿垃圾"},{"name":"干面粉","type":"湿垃圾"},{"name":"干蘑菇","type":"湿垃圾"},{"name":"干柠檬片","type":"湿垃圾"},{"name":"桂皮","type":"湿垃圾"},{"name":"果皮","type":"湿垃圾"},{"name":"枸杞","type":"湿垃圾"},{"name":"过期大米","type":"湿垃圾"},{"name":"过期巧克力","type":"湿垃圾"},{"name":"过期食品","type":"湿垃圾"},{"name":"过期糖","type":"湿垃圾"},{"name":"过期调味料","type":"湿垃圾"},{"name":"蛤肉","type":"湿垃圾"},{"name":"干树叶","type":"湿垃圾"},{"name":"R上","type":"湿垃圾"},{"name":"灌汤包","type":"湿垃圾"},{"name":"干香菇","type":"湿垃圾"},{"name":"鳅鱼","type":"湿垃圾"},{"name":"桂圆干","type":"湿垃圾"},{"name":"桂圆核","type":"湿垃圾"},{"name":"桂圆壳","type":"湿垃圾"},{"name":"瓜子","type":"湿垃圾"},{"name":"甘蔗","type":"湿垃圾"},{"name":"瓜子壳","type":"湿垃圾"},{"name":"瓜子皮","type":"湿垃圾"},{"name":"瓜子仁","type":"湿垃圾"},{"name":"甘蔗渣","type":"湿垃圾"},{"name":"汉堡","type":"湿垃圾"},{"name":"花瓣","type":"湿垃圾"},{"name":"汉堡包","type":"湿垃圾"},{"name":"花草茶渣","type":"湿垃圾"},{"name":"红肠","type":"湿垃圾"},{"name":"花茶渣","type":"湿垃圾"},{"name":"黄豆","type":"湿垃圾"},{"name":"红豆","type":"湿垃圾"},{"name":"海带","type":"湿垃圾"},{"name":"海胆","type":"湿垃圾"},{"name":"红豆糕","type":"湿垃圾"},{"name":"豆糕","type":"湿垃圾"},{"name":"海底捞锅底","type":"湿垃圾"},{"name":"盒饭","type":"湿垃圾"},{"name":"黄瓜","type":"湿垃圾"},{"name":"黄瓜","type":"湿垃圾"},{"name":"火锅底料","type":"湿垃圾"},{"name":"黄瓜皮","type":"湿垃圾"},{"name":"韩国泡菜","type":"湿垃圾"},{"name":"花蛤肉","type":"湿垃圾"},{"name":"火锅渣","type":"湿垃圾"},{"name":"海瓜子壳","type":"湿垃圾"},{"name":"花卉","type":"湿垃圾"},{"name":"花椒","type":"湿垃圾"},{"name":"花甲","type":"湿垃圾"},{"name":"花椒粉","type":"湿垃圾"},{"name":"花甲粉","type":"湿垃圾"},{"name":"胡椒粉","type":"湿垃圾"},{"name":"火鸡骨头","type":"湿垃圾"},{"name":"黑椒酱","type":"湿垃圾"},{"name":"花甲壳","type":"湿垃圾"},{"name":"黑椒牛排","type":"湿垃圾"},{"name":"花螺","type":"湿垃圾"},{"name":"胡萝卜","type":"湿垃圾"},{"name":"胡萝卜皮","type":"湿垃圾"},{"name":"火龙果","type":"湿垃圾"},{"name":"火龙果皮","type":"湿垃圾"},{"name":"红辣椒","type":"湿垃圾"},{"name":"话梅","type":"湿垃圾"},{"name":"哈密瓜","type":"湿垃圾"},{"name":"哈密瓜籽","type":"湿垃圾"},{"name":"话梅核","type":"湿垃圾"},{"name":"话梅肉","type":"湿垃圾"},{"name":"黄芪","type":"湿垃圾"},{"name":"花生","type":"湿垃圾"},{"name":"红薯","type":"湿垃圾"},{"name":"花生酱","type":"湿垃圾"},{"name":"红薯皮","type":"湿垃圾"},{"name":"红烧肉","type":"湿垃圾"},{"name":"花生衣","type":"湿垃圾"},{"name":"烘山芋皮","type":"湿垃圾"},{"name":"花生壳","type":"湿垃圾"},{"name":"海苔","type":"湿垃圾"},{"name":"黄桃","type":"湿垃圾"},{"name":"海","type":"湿垃圾"},{"name":"火腿肠","type":"湿垃圾"},{"name":"馄饨皮","type":"湿垃圾"},{"name":"核桃肉","type":"湿垃圾"},{"name":"海星","type":"湿垃圾"},{"name":"茴香","type":"湿垃圾"},{"name":"河虾","type":"湿垃圾"},{"name":"黄杏核","type":"湿垃圾"},{"name":"荷叶","type":"湿垃圾"},{"name":"黄油","type":"湿垃圾"},{"name":"黑鱼","type":"湿垃圾"},{"name":"黄鱼","type":"湿垃圾"},{"name":"红枣","type":"湿垃圾"},{"name":"海藻","type":"湿垃圾"},{"name":"红枣干","type":"湿垃圾"},{"name":"红枣核","type":"湿垃圾"},{"name":"姜","type":"湿垃圾"},{"name":"煎饼","type":"湿垃圾"},{"name":"茭白","type":"湿垃圾"},{"name":"煎饼果子","type":"湿垃圾"},{"name":"茭白皮","type":"湿垃圾"},{"name":"茭白叶","type":"湿垃圾"},{"name":"韭菜","type":"湿垃圾"},{"name":"鸡翅","type":"湿垃圾"},{"name":"鸡翅骨","type":"湿垃圾"},{"name":"鸡蛋","type":"湿垃圾"},{"name":"鸡蛋卷","type":"湿垃圾"},{"name":"鸡蛋壳","type":"湿垃圾"},{"name":"鸡蛋皮","type":"湿垃圾"},{"name":"鸡蛋仔","type":"湿垃圾"},{"name":"桔梗","type":"湿垃圾"},{"name":"閑姑","type":"湿垃圾"},{"name":"鸡骨头","type":"湿垃圾"},{"name":"叫化鸡","type":"湿垃圾"},{"name":"鸡精","type":"湿垃圾"},{"name":"里脊肉","type":"湿垃圾"},{"name":"鸡脚爪","type":"湿垃圾"},{"name":"酱料","type":"湿垃圾"},{"name":"末","type":"湿垃圾"},{"name":"酒酿","type":"湿垃圾"},{"name":"鸡排","type":"湿垃圾"},{"name":"鸡皮","type":"湿垃圾"},{"name":"桔普茶","type":"湿垃圾"},{"name":"鸡屁股","type":"湿垃圾"},{"name":"鸡肉","type":"湿垃圾"},{"name":"鸡软骨","type":"湿垃圾"},{"name":"鸡屎","type":"湿垃圾"},{"name":"金丝皇菊","type":"湿垃圾"},{"name":"鸡腿","type":"湿垃圾"},{"name":"姜糖","type":"湿垃圾"},{"name":"鸡头","type":"湿垃圾"},{"name":"鸡腿菇","type":"湿垃圾"},{"name":"鸡腿骨","type":"湿垃圾"},{"name":"结团猫砂","type":"湿垃圾"},{"name":"基围虾","type":"湿垃圾"},{"name":"基围虾壳","type":"湿垃圾"},{"name":"鲫鱼","type":"湿垃圾"},{"name":"甲鱼","type":"湿垃圾"},{"name":"金银花","type":"湿垃圾"},{"name":"甲鱼小骨","type":"湿垃圾"},{"name":"橘子","type":"湿垃圾"},{"name":"金针菇","type":"湿垃圾"},{"name":"桔子皮","type":"湿垃圾"},{"name":"饺子皮","type":"湿垃圾"},{"name":"橘子皮","type":"湿垃圾"},{"name":"肯德基炸鸡","type":"湿垃圾"},{"name":"咖啡伴侣粉","type":"湿垃圾"},{"name":"咖啡残渣","type":"湿垃圾"},{"name":"咖啡豆","type":"湿垃圾"},{"name":"咖啡豆渣","type":"湿垃圾"},{"name":"咖啡粉","type":"湿垃圾"},{"name":"宽粉条","type":"湿垃圾"},{"name":"咖啡渣","type":"湿垃圾"},{"name":"苦瓜","type":"湿垃圾"},{"name":"葵花子","type":"湿垃圾"},{"name":"葵花子壳","type":"湿垃圾"},{"name":"烤鸡","type":"湿垃圾"},{"name":"可降解垃圾袋","type":"湿垃圾"},{"name":"可降觯吸官","type":"湿垃圾"},{"name":"可降解纸吸管","type":"湿垃圾"},{"name":"枯树叶","type":"湿垃圾"},{"name":"古萎花束","type":"湿垃圾"},{"name":"矿物猫砂","type":"湿垃圾"},{"name":"开心果","type":"湿垃圾"},{"name":"烤鸭","type":"湿垃圾"},{"name":"枯枝","type":"湿垃圾"},{"name":"梨","type":"湿垃圾"},{"name":"萝卜干","type":"湿垃圾"},{"name":"绿豆","type":"湿垃圾"},{"name":"绿豆糕","type":"湿垃圾"},{"name":"绿豆沙","type":"湿垃圾"},{"name":"绿豆渣","type":"湿垃圾"},{"name":"拉菲草","type":"湿垃圾"},{"name":"梨核","type":"湿垃圾"},{"name":"芦荟","type":"湿垃圾"},{"name":"花豆","type":"湿垃圾"},{"name":"兰花豆","type":"湿垃圾"},{"name":"辣酱","type":"湿垃圾"},{"name":"辣椒","type":"湿垃圾"},{"name":"菱角","type":"湿垃圾"},{"name":"辣椒酱","type":"湿垃圾"},{"name":"辣椒酱","type":"湿垃圾"},{"name":"菱角皮","type":"湿垃圾"},{"name":"辣椒油","type":"湿垃圾"},{"name":"绿箩","type":"湿垃圾"},{"name":"榴莲肉","type":"湿垃圾"},{"name":"榴莲酥","type":"湿垃圾"},{"name":"藜麦","type":"湿垃圾"},{"name":"监每","type":"湿垃圾"},{"name":"皮","type":"湿垃圾"},{"name":"腊肉","type":"湿垃圾"},{"name":"螺蛳","type":"湿垃圾"},{"name":"老鼠","type":"湿垃圾"},{"name":"螺蛳粉","type":"湿垃圾"},{"name":"烂水果","type":"湿垃圾"},{"name":"螺蛳肉","type":"湿垃圾"},{"name":"乐事薯片","type":"湿垃圾"},{"name":"螺蛳壳","type":"湿垃圾"},{"name":"辣条","type":"湿垃圾"},{"name":"辣条","type":"湿垃圾"},{"name":"龙虾片","type":"湿垃圾"},{"name":"冷饮","type":"湿垃圾"},{"name":"李子","type":"湿垃圾"},{"name":"栗子","type":"湿垃圾"},{"name":"李子核","type":"湿垃圾"},{"name":"荔枝核","type":"湿垃圾"},{"name":"兰州拉面","type":"湿垃圾"},{"name":"荔枝皮","type":"湿垃圾"},{"name":"荔枝叶","type":"湿垃圾"},{"name":"栗子壳","type":"湿垃圾"},{"name":"荔枝壳","type":"湿垃圾"},{"name":"面饼","type":"湿垃圾"},{"name":"面包","type":"湿垃圾"},{"name":"面包屑","type":"湿垃圾"},{"name":"冒菜","type":"湿垃圾"},{"name":"抹茶粉","type":"湿垃圾"},{"name":"猫冻干","type":"湿垃圾"},{"name":"毛豆壳","type":"湿垃圾"},{"name":"麦当劳炸鸡","type":"湿垃圾"},{"name":"毛豆皮","type":"湿垃圾"},{"name":"木耳","type":"湿垃圾"},{"name":"米饭","type":"湿垃圾"},{"name":"面粉","type":"湿垃圾"},{"name":"面粉","type":"湿垃圾"},{"name":"木瓜","type":"湿垃圾"},{"name":"玫瑰","type":"湿垃圾"},{"name":"蘑菇","type":"湿垃圾"},{"name":"梅干菜","type":"湿垃圾"},{"name":"芒果干","type":"湿垃圾"},{"name":"玫瑰花","type":"湿垃圾"},{"name":"某核","type":"湿垃圾"},{"name":"芒果皮","type":"湿垃圾"},{"name":"木瓜籽","type":"湿垃圾"},{"name":"麻花","type":"湿垃圾"},{"name":"猕猴桃","type":"湿垃圾"},{"name":"猕猴桃皮","type":"湿垃圾"},{"name":"蜜饯","type":"湿垃圾"},{"name":"马卡龙","type":"湿垃圾"},{"name":"猫粮","type":"湿垃圾"},{"name":"茉莉花","type":"湿垃圾"},{"name":"麻辣烫","type":"湿垃圾"},{"name":"麻辣香锅残渣","type":"湿垃圾"},{"name":"菱片","type":"湿垃圾"},{"name":"猫屎","type":"湿垃圾"},{"name":"木薯淀粉","type":"湿垃圾"},{"name":"猫屎咖啡","type":"湿垃圾"},{"name":"面团","type":"湿垃圾"},{"name":"馒头","type":"湿垃圾"},{"name":"面条","type":"湿垃圾"},{"name":"墨鱼","type":"湿垃圾"},{"name":"蔓越莓","type":"湿垃圾"},{"name":"奶茶中的珍珠","type":"湿垃圾"},{"name":"鸟粪","type":"湿垃圾"},{"name":"奶粉","type":"湿垃圾"},{"name":"年糕","type":"湿垃圾"},{"name":"南瓜皮","type":"湿垃圾"},{"name":"南瓜籽","type":"湿垃圾"},{"name":"南瓜子壳","type":"湿垃圾"},{"name":"牛筋","type":"湿垃圾"},{"name":"奶酪","type":"湿垃圾"},{"name":"柠檬","type":"湿垃圾"},{"name":"糯米","type":"湿垃圾"},{"name":"柠檬皮","type":"湿垃圾"},{"name":"柠檬片","type":"湿垃圾"},{"name":"糯米纸","type":"湿垃圾"},{"name":"牛排","type":"湿垃圾"},{"name":"牛肉干","type":"湿垃圾"},{"name":"牛肉干","type":"湿垃圾"},{"name":"牛肉煎包","type":"湿垃圾"},{"name":"牛蛙","type":"湿垃圾"},{"name":"牛蛙骨","type":"湿垃圾"},{"name":"奶油","type":"湿垃圾"},{"name":"奶油","type":"湿垃圾"},{"name":"牛油果皮","type":"湿垃圾"},{"name":"牛轧糖","type":"湿垃圾"},{"name":"牛轧糖","type":"湿垃圾"},{"name":"藕片","type":"湿垃圾"},{"name":"胖大海","type":"湿垃圾"},{"name":"皮蛋壳","type":"湿垃圾"},{"name":"普洱茶","type":"湿垃圾"},{"name":"排骨","type":"湿垃圾"},{"name":"平菇","type":"湿垃圾"},{"name":"苹果","type":"湿垃圾"},{"name":"苹果核","type":"湿垃圾"},{"name":"苹果皮","type":"湿垃圾"},{"name":"苹果派","type":"湿垃圾"},{"name":"苹果派","type":"湿垃圾"},{"name":"苹果皮","type":"湿垃圾"},{"name":"蒲公英","type":"湿垃圾"},{"name":"膨化食品","type":"湿垃圾"},{"name":"枇杷","type":"湿垃圾"},{"name":"枇杷核","type":"湿垃圾"},{"name":"乒乓糯米糍","type":"湿垃圾"},{"name":"披萨","type":"湿垃圾"},{"name":"葡萄干","type":"湿垃圾"},{"name":"葡萄梗","type":"湿垃圾"},{"name":"蟠桃核","type":"湿垃圾"},{"name":"葡萄皮","type":"湿垃圾"},{"name":"葡萄籽","type":"湿垃圾"},{"name":"青菜","type":"湿垃圾"},{"name":"芹菜","type":"湿垃圾"},{"name":"青菜叶","type":"湿垃圾"},{"name":"青","type":"湿垃圾"},{"name":"青豆泥","type":"湿垃圾"},{"name":"青豆萁","type":"湿垃圾"},{"name":"青椒","type":"湿垃圾"},{"name":"秋葵","type":"湿垃圾"},{"name":"巧克力","type":"湿垃圾"},{"name":"巧克力粉","type":"湿垃圾"},{"name":"巧克力酱","type":"湿垃圾"},{"name":"荞麦面","type":"湿垃圾"},{"name":"曲奇","type":"湿垃圾"},{"name":"芡实糕","type":"湿垃圾"},{"name":"青蟹壳","type":"湿垃圾"},{"name":"蚯蚓","type":"湿垃圾"},{"name":"奇异果","type":"湿垃圾"},{"name":"茄子","type":"湿垃圾"},{"name":"润喉糖","type":"湿垃圾"},{"name":"肉夹馍","type":"湿垃圾"},{"name":"肉类","type":"湿垃圾"},{"name":"软糖","type":"湿垃圾"},{"name":"酸菜","type":"湿垃圾"},{"name":"剩菜剩饭","type":"湿垃圾"},{"name":"酸菜鱼","type":"湿垃圾"},{"name":"速冻馄饨","type":"湿垃圾"},{"name":"酸豆角","type":"湿垃圾"},{"name":"速冻水饺","type":"湿垃圾"},{"name":"松果","type":"湿垃圾"},{"name":"丝瓜","type":"湿垃圾"},{"name":"笋干","type":"湿垃圾"},{"name":"丝瓜皮","type":"湿垃圾"},{"name":"碎骨头","type":"湿垃圾"},{"name":"扇贝壳","type":"湿垃圾"},{"name":"扇贝肉","type":"湿垃圾"},{"name":"蔬菜","type":"湿垃圾"},{"name":"水草","type":"湿垃圾"},{"name":"蔬菜残余","type":"湿垃圾"},{"name":"圣代","type":"湿垃圾"},{"name":"熟蛋黄","type":"湿垃圾"},{"name":"山东煎饼","type":"湿垃圾"},{"name":"薯格","type":"湿垃圾"},{"name":"水果","type":"湿垃圾"},{"name":"水果干","type":"湿垃圾"},{"name":"王捺而","type":"湿垃圾"},{"name":"水果皮","type":"湿垃圾"},{"name":"水果软核","type":"湿垃圾"},{"name":"生蚝肉","type":"湿垃圾"},{"name":"石榴籽","type":"湿垃圾"},{"name":"生姜","type":"湿垃圾"},{"name":"生煎包","type":"湿垃圾"},{"name":"熟鸡蛋壳","type":"湿垃圾"},{"name":"生鸡蛋壳","type":"湿垃圾"},{"name":"生姜皮","type":"湿垃圾"},{"name":"石榴","type":"湿垃圾"},{"name":"沙拉酱","type":"湿垃圾"},{"name":"沙拉酱","type":"湿垃圾"},{"name":"烧卖","type":"湿垃圾"},{"name":"树莓","type":"湿垃圾"},{"name":"水蜜桃","type":"湿垃圾"},{"name":"水蜜桃核","type":"湿垃圾"},{"name":"水蜜桃肉","type":"湿垃圾"},{"name":"树皮","type":"湿垃圾"},{"name":"薯片","type":"湿垃圾"},{"name":"双皮奶","type":"湿垃圾"},{"name":"生肉","type":"湿垃圾"},{"name":"寿司","type":"湿垃圾"},{"name":"薯条","type":"湿垃圾"},{"name":"药","type":"湿垃圾"},{"name":"山芋","type":"湿垃圾"},{"name":"山楂","type":"湿垃圾"},{"name":"山楂干","type":"湿垃圾"},{"name":"山竹核","type":"湿垃圾"},{"name":"山楂片","type":"湿垃圾"},{"name":"素鸡","type":"湿垃圾"},{"name":"笋壳","type":"湿垃圾"},{"name":"小小","type":"湿垃圾"},{"name":"皮","type":"湿垃圾"},{"name":"笋皮","type":"湿垃圾"},{"name":"食品添加剂","type":"湿垃圾"},{"name":"七粉","type":"湿垃圾"},{"name":"头","type":"湿垃圾"},{"name":"食物残渣","type":"湿垃圾"},{"name":"三文鱼","type":"湿垃圾"},{"name":"三文鱼头","type":"湿垃圾"},{"name":"牲畜粪便","type":"湿垃圾"},{"name":"树叶","type":"湿垃圾"},{"name":"食用油","type":"湿垃圾"},{"name":"树枝","type":"湿垃圾"},{"name":"松子","type":"湿垃圾"},{"name":"山竹壳","type":"湿垃圾"},{"name":"松子壳","type":"湿垃圾"},{"name":"梭子蟹","type":"湿垃圾"},{"name":"梭子鲜吉","type":"湿垃圾"},{"name":"糖","type":"湿垃圾"},{"name":"土豆","type":"湿垃圾"},{"name":"土豆泥","type":"湿垃圾"},{"name":"土豆泥","type":"湿垃圾"},{"name":"土豆皮","type":"湿垃圾"},{"name":"糖果","type":"湿垃圾"},{"name":"铁棍山药","type":"湿垃圾"},{"name":"铁观音","type":"湿垃圾"},{"name":"桃核","type":"湿垃圾"},{"name":"桃胶","type":"湿垃圾"},{"name":"甜芦粟","type":"湿垃圾"},{"name":"甜","type":"湿垃圾"},{"name":"蹄膀","type":"湿垃圾"},{"name":"桃仁","type":"湿垃圾"},{"name":"甜筒","type":"湿垃圾"},{"name":"桃子","type":"湿垃圾"},{"name":"兔子粪便","type":"湿垃圾"},{"name":"桃子核","type":"湿垃圾"},{"name":"调制海藻面膜","type":"湿垃圾"},{"name":"桃子皮","type":"湿垃圾"},{"name":"午餐肉","type":"湿垃圾"},{"name":"午餐肉","type":"湿垃圾"},{"name":"豌豆皮","type":"湿垃圾"},{"name":"味精","type":"湿垃圾"},{"name":"乌龙茶","type":"湿垃圾"},{"name":"乌梅","type":"湿垃圾"},{"name":"乌梅壳","type":"湿垃圾"},{"name":"蜗牛","type":"湿垃圾"},{"name":"莴笋","type":"湿垃圾"},{"name":"五香蛋","type":"湿垃圾"},{"name":"蚊子","type":"湿垃圾"},{"name":"乌贼","type":"湿垃圾"},{"name":"象鼻蚌","type":"湿垃圾"},{"name":"咸菜","type":"湿垃圾"},{"name":"小葱","type":"湿垃圾"},{"name":"仙草","type":"湿垃圾"},{"name":"西餐糕点","type":"湿垃圾"},{"name":"香肠","type":"湿垃圾"},{"name":"香肠衣","type":"湿垃圾"},{"name":"咸蛋","type":"湿垃圾"},{"name":"咸蛋黄","type":"湿垃圾"},{"name":"咸蛋壳","type":"湿垃圾"},{"name":"香榧子","type":"湿垃圾"},{"name":"香榧子壳","type":"湿垃圾"},{"name":"香榧子壳","type":"湿垃圾"},{"name":"香干","type":"湿垃圾"},{"name":"香菇","type":"湿垃圾"},{"name":"香瓜皮","type":"湿垃圾"},{"name":"西瓜皮","type":"湿垃圾"},{"name":"西瓜籽","type":"湿垃圾"},{"name":"香瓜子","type":"湿垃圾"},{"name":"西瓜子","type":"湿垃圾"},{"name":"杏核","type":"湿垃圾"},{"name":"鲜花","type":"湿垃圾"},{"name":"鲜花饼","type":"湿垃圾"},{"name":"详花瓣","type":"湿垃圾"},{"name":"西葫芦","type":"湿垃圾"},{"name":"雪花酥","type":"湿垃圾"},{"name":"西红柿","type":"湿垃圾"},{"name":"西红柿","type":"湿垃圾"},{"name":"小核桃肉","type":"湿垃圾"},{"name":"雪花蟹壳","type":"湿垃圾"},{"name":"香蕉","type":"湿垃圾"},{"name":"咸鸡","type":"湿垃圾"},{"name":"香蕉干","type":"湿垃圾"},{"name":"香蕉皮","type":"湿垃圾"},{"name":"虾壳","type":"湿垃圾"},{"name":"小笼包","type":"湿垃圾"},{"name":"西兰花","type":"湿垃圾"},{"name":"西兰花梗","type":"湿垃圾"},{"name":"小龙虾","type":"湿垃圾"},{"name":"小龙虾黄","type":"湿垃圾"},{"name":"小龙虾壳","type":"湿垃圾"},{"name":"小龙虾肉","type":"湿垃圾"},{"name":"小龙虾头","type":"湿垃圾"},{"name":"虾米","type":"湿垃圾"},{"name":"西梅","type":"湿垃圾"},{"name":"小米","type":"湿垃圾"},{"name":"虾皮","type":"湿垃圾"},{"name":"小排骨","type":"湿垃圾"},{"name":"杏仁","type":"湿垃圾"},{"name":"蟹肉","type":"湿垃圾"},{"name":"虾肉","type":"湿垃圾"},{"name":"杏仁饼","type":"湿垃圾"},{"name":"小肉骨头","type":"湿垃圾"},{"name":"杏仁核","type":"湿垃圾"},{"name":"向日葵花束","type":"湿垃圾"},{"name":"仙人球","type":"湿垃圾"},{"name":"仙人掌","type":"湿垃圾"},{"name":"喜糖","type":"湿垃圾"},{"name":"虾头","type":"湿垃圾"},{"name":"夏威夷果肉","type":"湿垃圾"},{"name":"虾线","type":"湿垃圾"},{"name":"西柚","type":"湿垃圾"},{"name":"咸鱼","type":"湿垃圾"},{"name":"薰衣草","type":"湿垃圾"},{"name":"咸鸭蛋壳","type":"湿垃圾"},{"name":"香芋派","type":"湿垃圾"},{"name":"杏子核","type":"湿垃圾"},{"name":"鱼","type":"湿垃圾"},{"name":"鸭脖","type":"湿垃圾"},{"name":"鱼刺","type":"湿垃圾"},{"name":"鸭翅","type":"湿垃圾"},{"name":"呜肠","type":"湿垃圾"},{"name":"鱼肠","type":"湿垃圾"},{"name":"洋葱皮","type":"湿垃圾"},{"name":"豆","type":"湿垃圾"},{"name":"鸭蛋壳","type":"湿垃圾"},{"name":"意大利面","type":"湿垃圾"},{"name":"油墩子","type":"湿垃圾"},{"name":"油墩子","type":"湿垃圾"},{"name":"银耳","type":"湿垃圾"},{"name":"腰果","type":"湿垃圾"},{"name":"椰果","type":"湿垃圾"},{"name":"椰果","type":"湿垃圾"},{"name":"鱼骨头","type":"湿垃圾"},{"name":"鸭骨头","type":"湿垃圾"},{"name":"鸭架","type":"湿垃圾"},{"name":"燕麦","type":"湿垃圾"},{"name":"杨梅","type":"湿垃圾"},{"name":"玉米棒","type":"湿垃圾"},{"name":"杨梅干","type":"湿垃圾"},{"name":"杨梅核","type":"湿垃圾"},{"name":"玉米粒","type":"湿垃圾"},{"name":"玉米猫砂","type":"湿垃圾"},{"name":"燕麦片","type":"湿垃圾"},{"name":"玉米塑料袋","type":"湿垃圾"},{"name":"玉米须","type":"湿垃圾"},{"name":"玉米芯","type":"湿垃圾"},{"name":"玉米纤维袋","type":"湿垃圾"},{"name":"芋艿","type":"湿垃圾"},{"name":"芋艿皮","type":"湿垃圾"},{"name":"鱼内脏","type":"湿垃圾"},{"name":"鱼泡","type":"湿垃圾"},{"name":"鸭皮","type":"湿垃圾"},{"name":"鱼皮花生","type":"湿垃圾"},{"name":"鱼肉","type":"湿垃圾"},{"name":"鸭肉","type":"湿垃圾"},{"name":"椰肉","type":"湿垃圾"},{"name":"压缩饼干","type":"湿垃圾"},{"name":"鸭锁骨","type":"湿垃圾"},{"name":"鸭舌","type":"湿垃圾"},{"name":"盐水花生","type":"湿垃圾"},{"name":"盐水花生壳","type":"湿垃圾"},{"name":"盐水鸭","type":"湿垃圾"},{"name":"洋山芋","type":"湿垃圾"},{"name":"鱼饲料","type":"湿垃圾"},{"name":"鱼头","type":"湿垃圾"},{"name":"油条","type":"湿垃圾"},{"name":"芋头","type":"湿垃圾"},{"name":"杨桃","type":"湿垃圾"},{"name":"鸭腿","type":"湿垃圾"},{"name":"油条","type":"湿垃圾"},{"name":"杨桃","type":"湿垃圾"},{"name":"鸭头","type":"湿垃圾"},{"name":"樱桃干","type":"湿垃圾"},{"name":"樱桃梗","type":"湿垃圾"},{"name":"油桃核","type":"湿垃圾"},{"name":"樱桃核","type":"湿垃圾"},{"name":"油桃肉","type":"湿垃圾"},{"name":"杨桃籽","type":"湿垃圾"},{"name":"鱼虾","type":"湿垃圾"},{"name":"鸭下巴","type":"湿垃圾"},{"name":"银杏果","type":"湿垃圾"},{"name":"芋圆","type":"湿垃圾"},{"name":"油烟机油脂","type":"湿垃圾"},{"name":"鱿鱼丝","type":"湿垃圾"},{"name":"鱿鱼丝","type":"湿垃圾"},{"name":"叶子","type":"湿垃圾"},{"name":"柚子核","type":"湿垃圾"},{"name":"鸭爪","type":"湿垃圾"},{"name":"柚子皮","type":"湿垃圾"},{"name":"杂草","type":"湿垃圾"},{"name":"紫菜","type":"湿垃圾"},{"name":"杂菜","type":"湿垃圾"},{"name":"枣核","type":"湿垃圾"},{"name":"枣核","type":"湿垃圾"},{"name":"榨菜","type":"湿垃圾"},{"name":"中草药","type":"湿垃圾"},{"name":"中草药材","type":"湿垃圾"},{"name":"猪肝","type":"湿垃圾"},{"name":"藏红花","type":"湿垃圾"},{"name":"炸鸡","type":"湿垃圾"},{"name":"蟑螂","type":"湿垃圾"},{"name":"猪肋排","type":"湿垃圾"},{"name":"芝麻酱","type":"湿垃圾"},{"name":"猪扒","type":"湿垃圾"},{"name":"猪排","type":"湿垃圾"},{"name":"猪皮","type":"湿垃圾"},{"name":"猪肉","type":"湿垃圾"},{"name":"猪肉铺","type":"湿垃圾"},{"name":"猪肉排骨","type":"湿垃圾"},{"name":"竹笋","type":"湿垃圾"},{"name":"芝士","type":"湿垃圾"},{"name":"猪蹄","type":"湿垃圾"},{"name":"猪蹄骨","type":"湿垃圾"},{"name":"章鱼","type":"湿垃圾"},{"name":"竹叶","type":"湿垃圾"},{"name":"章鱼小丸子","type":"湿垃圾"},{"name":"栀子花","type":"湿垃圾"},{"name":"孜然粉","type":"湿垃圾"},{"name":"紫薯皮","type":"湿垃圾"},{"name":"植物枝干","type":"湿垃圾"},{"name":"中药渣","type":"湿垃圾"},{"name":"枣子核","type":"湿垃圾"},{"name":"粽子馅","type":"湿垃圾"},{"name":"纸质吸管","type":"湿垃圾"},{"name":"孜然粉","type":"湿垃圾"},{"name":"紫薯皮","type":"湿垃圾"},{"name":"植物枝干","type":"湿垃圾"},{"name":"中药渣","type":"湿垃圾"},{"name":"枣子核","type":"湿垃圾"},{"name":"粽子馅","type":"湿垃圾"},{"name":"质吸管","type":"湿垃圾"},{"name":"橙子","type":"湿垃圾"},{"name":"花蛤","type":"湿垃圾"},{"name":"菜叶","type":"湿垃圾"},{"name":"鸡蛋饼","type":"湿垃圾"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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