searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-conntainer');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scroll > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');

    }
}


window.onload = () => {
    if (window.scroll > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');

    }

    fadeOut()
}

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 4000);
}

let swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        deplay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,

        },
    },
});

let destacados = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        deplay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});
let recienllegados = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        deplay: 9500,
        disableOnInteraction: false,
    },
   
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
    
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
let marcasreconocidas = new Swiper(".brands-slider", {
    grabCursor:true,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        deplay: 9500,
        disableOnInteraction: false,
    },
   
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
    
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});