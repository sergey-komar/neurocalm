$(function () {
  
     var $status = $('.slider__counter');
     var $slick = $('.result-slider');
 
      $slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html('<span>' + i + '</span>' + ' / ' + slick.slideCount);

 });

 $('.result-slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
});


    $('.partners-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
     });


     $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });

})


window.addEventListener('DOMContentLoaded', ()=> {

   
      const accardionBtn = document.querySelectorAll('.questions-accardion__btn');

      accardionBtn.forEach(item => {
         item.addEventListener('click', () => {
            item.classList.toggle('open');
         })
      });



      const header = document.querySelector('.header__wrapper');
      if (header) {
         window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
            header.classList.add("header-bg");
            } else {
            header.classList.remove("header-bg");
            }

            
         });
      }


         const modalBtn = document.querySelector('.footer-box__right-btn');
         const modal = document.querySelector('.modal');
         const modalCloseBtn = document.querySelector('.modal__close');

          
            modalBtn.addEventListener('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        })
  

    modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';

        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    })

       
});