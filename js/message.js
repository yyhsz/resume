!function () {
    var view = document.querySelector('.message')
    var model = {
        fetch: function () {
            //读取全部留言
            //如果想要留言长期保留在网页上，就必须要读取全部数据并创建相应的标签
            var query = new AV.Query('Message');
            return query.find()  //Promise 对象
        },
        save: function (content, name) {
            //把提交的数据保存到数据库
            var Message = AV.Object.extend('Message')
            let message = new Message()
            return message.save({ content: content, name: name })//返回Promise对象
        }
    }
    var controller = {
        view: null,
        model: null,
        form:null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.form = this.view.querySelector('#postMessage')
            this.initAv()
            this.bindEvent()
        },
        initAv: function () {
            //初始化AV对象
            var APP_ID = 'leL2WuBnuLrGRGsfWFXymkJU-gzGzoHsz';
            var APP_KEY = 'ih1p3RLySmvNnJewpL7kvAQg';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        appendLi: function (object) {

            var li = document.createElement('li')
            li.innerText = `${object.name}: ${object.content}`
            this.view.querySelector('#messageList').append(li)
        },
        bindEvent: function () {
            //把获取到的所有留言都变成<li>标签
            this.model.fetch().then(function (messages) {
                let array = messages.map(element => { return element.attributes });
                array.forEach(function (element) {
                    this.appendLi(element)
                }.bind(controller))
            })
            //即时提交的留言变成标签
            
            this.form.addEventListener('submit', function (x) {
                x.preventDefault()
                let content = this.form.querySelector('input[name=content]').value
                let name = this.form.querySelector('input[name=name]').value
                this.model.save(content, name).then(function (object) { this.appendLi(object.attributes); this.view.querySelector('input[name=content]').value = '' }.bind(controller))
            }.bind(controller))

        }
    }
    controller.init(view, model)


}()