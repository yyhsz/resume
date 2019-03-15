window.Model = function(object){
    var resourceName = object.resourceName
    return {
        initAv: function () {
            //初始化AV对象
            var APP_ID = 'leL2WuBnuLrGRGsfWFXymkJU-gzGzoHsz';
            var APP_KEY = 'ih1p3RLySmvNnJewpL7kvAQg';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function () {
            //读取全部留言
            //如果想要留言长期保留在网页上，就必须要读取全部数据并创建相应的标签
            var query = new AV.Query(resourceName);
            return query.find()  //Promise 对象
        },
        save: function (object) {
            //把提交的数据保存到数据库
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)//返回Promise对象
        }
    }
}