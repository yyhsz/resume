
//实现页面内跳转
!function(){
    var view = document.querySelector('nav.menu')
    var controller = {
        view:null,
        aTags:null,
        initAnimation:function(){
            function animate (time){requestAnimationFrame(animate);TWEEN.update(time);}
            requestAnimationFrame(animate);
        },
        init: function(view){
            this.view = view
            this.aTags = this.view.querySelectorAll('ul > li > a');
            this.initAnimation()
            this.bindEvents()
        },
        bindEvents:function(){
            for (let i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = function (x) {
                    x.preventDefault();
                    let a = x.currentTarget;
                    let href = a.getAttribute('href');
                    let element = document.querySelector(href);
                    let top = element.offsetTop;
                    let i = 1;
                    let currentTop = window.scrollY;
                    let targetTop = top - 80;
                    let t = Math.abs((currentTop - targetTop) / 100 * 200);
                    t > 500 ? t = 500 : t;
                    var coords = { y: currentTop };
                    var tween = new TWEEN.Tween(coords)
                        .to({ y: targetTop }, t)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function () {
                            window.scrollTo(0, coords.y);
                        })
                        .start();
                }
            }
        },
    }

    controller.init(view)
}()
