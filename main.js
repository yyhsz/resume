//实现导航栏及其子菜单动效
let liTags = document.querySelectorAll('nav.menu > ul > li');
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active');
        //x.currentTarget.classList.add('inactive');
    }
}
setTimeout(function () { siteWelcome.classList.remove('active') }, 0)

//强制展现加载动画
window.onscroll = function (x) {
    if (window.scrollY >= 50) { TopNavBar.classList.add('sticky'); inner.classList.add('sticky') }
    else { TopNavBar.classList.remove('sticky'); inner.classList.remove('sticky') }
}

//实现页面内跳转
let aTags = document.querySelectorAll('nav.menu > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop;
        let i = 1;
        let currentTop = window.scrollY;
        let targetTop = top - 80;
        let t = Math.abs((currentTop - targetTop)/100 * 200);
        t>500? t = 500 : t;
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        var coords = {y: currentTop }; 
        var tween = new TWEEN.Tween(coords) 
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() { 
                    window.scrollTo(0,coords.y);
                })
                .start(); 




        /*if (Math.abs(currentTop - targetTop) < 200) {
            let id = setInterval(() => {
                if (i > 20) {
                    clearInterval(id); return;
                }
                window.scrollTo(0, currentTop + (targetTop - currentTop) / 20 * i);
                i++;

            }, 10)
        }
        else {
            let id = setInterval(() => {
                if (i > 25) {
                    clearInterval(id); return;
                }
                window.scrollTo(0, currentTop + (targetTop - currentTop) / 25 * i);
                i++;

            }, 20)

        } 改良版页面内跳转动画，勉强达到平滑效果 */  

    }
}