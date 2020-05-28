// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

<<<<<<< HEAD
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('black');

    }
    else{
        $('header').removeClass('black');
    }
})

=======
>>>>>>> 45d1bdc24d4807f663c24aebe6168edc559df0e9


$(".counter").counterUp({delay:10,time:1000});

$(document).ready(function(){
    $(".menu .fa-bars").click(function(){
        $("nav ul").toggleClass("active")
    })
})
$(document).ready(function(){
 $('.carousel').carousel();
 });


 var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
  });