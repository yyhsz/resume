window.Controller = function(object){
    var init2 = object.init
    var controller = {
        view:null,
        model:null,
        init:function(view,model){
            console.log(1)
            this.view = view
            this.model = model
            this.model.initAv()
            init2.call(this)
            this.bindEvent()
        }
    }
    for(let i in object){
        if(i !== 'init'){controller[i] = object[i]} 
    }
    return controller
}