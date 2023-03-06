
    $('.testCarousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              // variableWidth:true
            }
          }
          // {
          //   breakpoint: 320,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1,
          //     variableWidth:true
          //   }
          // }
        ]
      });
    
    
  