!function(){
    window.addEventListener('scroll',function (x) {
    
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
    }) 
}()
