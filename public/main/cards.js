var swiper = new Swiper(".visitados", {
    loop:true,
    spaceBetween: 0,
    centeredSlides:true,
    autoplay: {
        delay: 5000,
      },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  