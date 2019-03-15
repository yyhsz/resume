!function () {
    var view = View('.message')
    var model = Model({ resourceName: 'Message' })
    var controller = Controller({
        form: null,
        init: function () {
            console.log(this)
            this.form = this.view.querySelector('#postMessage')
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
            this.form.addEventListener('submit', (x) => {
                x.preventDefault()
                let content = this.form.querySelector('input[name=content]').value
                let name = this.form.querySelector('input[name=name]').value
                this.model.save({ content: content, name: name }).then(function (object) { this.appendLi(object.attributes); this.view.querySelector('input[name=content]').value = '' }.bind(controller))
            })
        }
    })

    controller.init(view, model)
    console.dir(controller.init)

}()