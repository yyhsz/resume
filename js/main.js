//强制展现加载动画
// setTimeout(function () { siteWelcome.classList.remove('active') }, 0)

//实现导航栏及其子菜单动效 ; 实现高亮当前浏览元素
!function(){
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
    //实现第一个元素上滑及导航栏下滑效果（打开页面即生效）
    setTimeout(document.querySelectorAll(".slideUp")[0].classList.remove("offset"),2000)
    setTimeout(document.querySelector('.slideDown').classList.remove('offset'),2000)
    

}()












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
