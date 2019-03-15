//轮播初始化
!function(){
  let view = document.querySelector('#swiper')
  var controller = {
    view:null,
    mySwiper:null,
    options:{
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {el: '.swiper-pagination',},
      // 如果需要前进后退按钮
      navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',}
    },
    initSwiper:function(view){
      this.view = view
      this.mySwiper = new Swiper (view.querySelector('.swiper-container'), this.options)
    }
  }
  controller.initSwiper(view)
}()
