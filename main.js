
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    // spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// фиксированное меню

let menu = document.querySelector(".menu")

if(window.width > 1336){

  
  window.addEventListener('scroll',function(){

    if( window.pageYOffset >= 150 && window.screen.width >= 1200){
    
      menu.classList.add('stiky')
      
    }
    else{
      menu.classList.remove('stiky')
      
    }
  })
}
// плавный переход по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });




  // кнопка наверх

    //  Get the button
    let mybutton = document.getElementById("totop");

    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });

    }

// аккардион

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = document.getElementById(header.dataset.target);

    // Закрыть все открытые элементы
    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== content) {
        item.style.maxHeight = null;
        item.classList.remove('open');
      }
    });

       // Переключить открытие текущего элемента и сменить знак на "-" или обратно на "+"
       if (content.classList.contains('open')) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        header.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
        header.classList.add('active');
      }
  });
});


// бургер меню

const icons = document.querySelectorAll('.burger');
const menuTag = document.querySelector('menu');
const body = document.querySelector('body');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    menuTag.classList.toggle("open");
    
    body.classList.toggle("open");

  });
});
