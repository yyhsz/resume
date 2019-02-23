//轮播
var mySwiper = new Swiper ('.swiper-container', {

    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })        
//强制展现加载动画
setTimeout(function () { siteWelcome.classList.remove('active') }, 0)

//实现导航栏及其子菜单动效 ; 实现高亮当前浏览元素
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
//实现第一个元素上滑及导航栏下滑效果（打开页面即上滑）
setTimeout(document.querySelectorAll(".slideUp")[0].classList.remove("offset"),2000)
setTimeout(document.querySelector('.slideDown').classList.remove('offset'),2000)



window.onscroll = function (x) {
    if (window.scrollY >= 50) { TopNavBar.classList.add('sticky'); inner.classList.add('sticky') }
    else { TopNavBar.classList.remove('sticky'); inner.classList.remove('sticky') }
    //实现高亮当前浏览元素
    let highlightTags = document.querySelectorAll('.TopNavBar nav>ul>li');
    let site = document.querySelectorAll('[highLight]');
    //可以适应布局变化的导航栏元素高亮
    for(let i = 0;i<site.length - 1;i++){
        if(window.scrollY >= site[i].offsetTop-200 && window.scrollY <= site[i+1].offsetTop-200){
            highlightTags[i].classList.add('highlight')
        }
        else{highlightTags[i].classList.remove('highlight')}
    }
    //最后一个元素单独高亮
    if(window.scrollY >= site[site.length-1].offsetTop-200){
        highlightTags[site.length-1].classList.add('highlight')
    }
    else{ highlightTags[site.length-1].classList.remove('highlight')}
    //实现下方元素上滑效果
    for(let i = 1; i<document.querySelectorAll('.slideUp').length;i++){
        if(window.scrollY + 1040/*视口高度*/>= document.querySelectorAll('.slideUp')[i].offsetTop + 230)
        {document.querySelectorAll('.slideUp')[i].classList.remove('offset');}
    }
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
        let t = Math.abs((currentTop - targetTop) / 100 * 200);
        t > 500 ? t = 500 : t;
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        var coords = { y: currentTop };
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y);
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