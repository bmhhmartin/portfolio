 $(document).on('ready', function(){
   
     $('.fresh').slick({
              dots: false,
              infinite: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2500,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
                {
                    breakpoint: 991,
                    infinite: true,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: false,
                  }
                },
                {
                        breakpoint: 767,
                        infinite: true,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
                },
              ]
            });
    });