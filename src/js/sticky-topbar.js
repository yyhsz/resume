//实现导航栏黏着效果
!function(){
    let view = document.querySelector('#TopNavBar')
    let controller = {
        view:null,
        bindEvents:function(){
            this.view = view
            window.addEventListener('scroll',function (x) {
                if (window.scrollY >= 50) {this.active()}
                else { this.deactive()}
                }.bind(this))
        },
        active: function(){
            this.view.classList.add('sticky')
            this.view.querySelector('#inner').classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
            this.view.querySelector('#inner').classList.remove('sticky')
        }
    }
    controller.bindEvents(view)
}()
