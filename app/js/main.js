$(function () {
  //Счётчик слайдов
     var $status = $('.slider__counter');
     var $slick = $('.result-slider');
 
      $slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html('<span>' + i + '</span>' + ' / ' + slick.slideCount);

 });

 $('.result-slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
       
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
       
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    },
  ]
});


    $('.partners-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
             
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
             
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
     });


     $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });


     //плавная прокрутка
     var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        return false;
    });

    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });

})


window.addEventListener('DOMContentLoaded', ()=> {

   //MENU
      const menu = document.querySelector('.menu');
      const mobile = document.querySelector('.nav-icon');

      mobile.addEventListener('click', function(){
          this.classList.toggle('nav-icon--active');
          menu.classList.toggle('nav--active');

      });
      //Находим ссылки внутри мобильной навигации
      const navLinks = document.querySelectorAll('.menu__list a');

      //Обходим ссылки методом forEach
      navLinks.forEach(function (item) {
        //Для каждой ссылки добавляем прослушку по событию "Клик"
        item.addEventListener('click', function () {
          mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
          menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
        
        });
      });


  
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


    //анимация
    function updateLinksAndInfo(muscleClass, isHover) {
      // Определение текущей и противоположной стороны
      const muscleNumber = parseInt(muscleClass.replace(/\D/g, ''), 10);
      const currentSideClass = muscleNumber >= 1 && muscleNumber <= 6 ? 'neiro__links_right' : 'neiro__links_left';
      const oppositeSideClass = currentSideClass === 'neiro__links_right' ? 'neiro__links_left' : 'neiro__links_right';
  
      // Скрыть ссылки на противоположной стороне
      document.querySelectorAll(`.neiro__links.${oppositeSideClass}`).forEach(linkGroup => {
        linkGroup.style.display = isHover ? 'none' : '';
      });
  
      // Установить opacity 0 для ссылок на текущей стороне, кроме той, что соответствует мышце
      document.querySelectorAll(`.neiro__links.${currentSideClass} .neiro__link`).forEach(link => {
        if (link.getAttribute('data-muscle') !== muscleClass) {
          link.style.opacity = isHover ? '0' : '';
        }
      });
  
      // Показать или скрыть блок информации
      const infoBlock = document.querySelector(`#${muscleClass}`);
      if (infoBlock) {
        infoBlock.classList.toggle('visible', isHover);
      }
  
      // Показать или скрыть связанную мышцу
      const muscle = document.querySelector(`.${muscleClass}`);
      if (muscle) {
        muscle.classList.toggle('highlighted', isHover);
      }
    }
  
    function handleLinkHover(event) {
      const muscleElement = event.target.closest('.neiro__link');
      if (muscleElement) {
        const muscleClass = muscleElement.getAttribute('data-muscle');
        if (muscleClass) {
          updateLinksAndInfo(muscleClass, true);
        }
      }
    }
  
    function handleLinkOut(event) {
      const muscleElement = event.target.closest('.neiro__link');
      if (muscleElement) {
        updateLinksAndInfo(muscleElement.getAttribute('data-muscle'), false);
      }
    }
  
    function handleMuscleHover(event) {
      const muscleImage = event.target.closest('.neiro__position');
      if (muscleImage) {
        const muscleClass = muscleImage.classList[1];
        if (muscleClass) {
          updateLinksAndInfo(muscleClass, true);
        }
      }
    }
  
    function handleMuscleOut(event) {
      const muscleImage = event.target.closest('.neiro__position');
      if (muscleImage) {
        updateLinksAndInfo(muscleImage.classList[1], false);
      }
    }
  
    // Добавляем обработчики событий на ссылки и изображения мышц
    document.querySelectorAll('.neiro__link').forEach(link => {
      link.addEventListener('mouseover', handleLinkHover);
      link.addEventListener('mouseout', handleLinkOut);
    });
  
    document.querySelectorAll('.neiro__position').forEach(muscleImage => {
      muscleImage.addEventListener('mouseover', handleMuscleHover);
      muscleImage.addEventListener('mouseout', handleMuscleOut);
    });


    

       
});