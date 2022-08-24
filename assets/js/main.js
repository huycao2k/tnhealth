jQuery(function($) {
  $('.slide').slick({
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true, 
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true, 
            arrows: false,
            autoplaySpeed: 2000
          }
        }
      ]
    });  

    $('.slide-deals').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true,
      Infinite: true,
      responsive:[
        {
          breakpoint: 1024,
          settings: {
            // slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
            dots: true
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            // variableWidth: false,
            dots: true,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // variableWidth: true,
            centerMode: true,
            arrows: false,
            infinite: true,
            dots: true
          }
        }
      ]
  });
  
  $('.trending-search').slick({
    slide:'',
    variableWidth: true,
    infinite: false,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 2000,
          variableWidth: true,
        }
      }
    ]
  });



  var w = $(window).width();
  if(w < 500 ) {         
    $('#home-banner .on-mobile').slick({
          slidesToScroll: 1,
          autoplay: true, 
          arrows: false,
          dots:true,
          autoplaySpeed: 2500  
    });     
    $('.tabs-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 3,
      arrows: false,
      centerMode: true,
    }); 
  }  
  tabs();
  faq();
  get_code();
  box_search();
});
$(window).resize(function(){
});
function tabs(){
  $('.tabs-nav li a').click(function(){
    var paren = $(this).parents('.tabs');
    paren.find('.tabs-nav li a').removeClass('active');
    $(this).addClass('active');
    paren.find('.tab-content').removeClass('active');
    var id = $(this).find('input').val();
    $(id).addClass('active');
    return false;
  })  
}
function menu(){
  $('.menu-bar-main ul li ul li').hover(function () {
    var id = $(this).find('input').val();
      $(this).addClass('active');
      $('.menu-level-3').removeClass('active');
      $(id).addClass('active');
    }, function () {
      $('.menu-bar-main ul li ul li').removeClass('active');
    }
  );
}
function faq(){
  $('.faq .question strong').click(function(){
    var paren = $(this).parents('.question')
    $('.faq .question').removeClass('active')
    paren.addClass('active')
  })
}
function get_code(){
  $('.get-code').click(function(){
    $('.box-show-code').show();
  })
  $('.togge').click(function(){
    $('.box-show-code').hide();
  })
}
function box_search(){
  $('.search-toggle').click(function(){
    $('.search-toggle i').toggle(0);
    $('.search-box').toggle(0);
    return false;
  })
}