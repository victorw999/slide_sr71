var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  keyboard:{
      enabled: true,
  },

  pagination: {
      el: '.swiper-pagination',
      type:'bullets',
      dynamicBullets:true,
      dynamicMainBullets:1,
      clickable:true,
      renderBullet: function (index, className) {
          var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');

          //var inactives = document.querySelectorAll('span[class^=swiper-pagination-bullet ]');
          //console.log(inactives);

          return '<span class="' + className + '">'+ year + '</span>';
      },

  },
  //paginationBulletRender:

  //paginationClickable: true,
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  //nextButton: '.swiper-button-next',
  //prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  },



});

// initial bullet formats
var inactives = document.querySelectorAll(
  //'.swiper-pagination span[class^=swiper-pagination-bullet]',
  '.swiper-pagination span:not([class*=main])'
  );
//console.log(inactives);
for (var i=0; i<inactives.length; i++){
  inactives[i].classList.add('vicmod_inactive_bullet');
  console.log(inactives[i]);
}

// before change to next slide, check if next slide is active to trigger the animated graph
timelineSwiper.on('slideChangeTransitionStart', function( ){
  checkActive();
});


timelineSwiper.on('slideChange', function(swiper, paginationEl){

  var all_bullets = document.querySelectorAll(
    '.swiper-pagination span[class^=swiper-pagination-bullet]',
  );
  for (let i=0; i<all_bullets.length; i++){
    if(all_bullets[i].classList.contains('vicmod_inactive_bullet')){
      all_bullets[i].classList.remove('vicmod_inactive_bullet');
      console.log(all_bullets[i] + ' REMOVED');
    }
  }

  var inactives = document.querySelectorAll(
    //'.swiper-pagination span[class^=swiper-pagination-bullet]',
    '.swiper-pagination span:not([class*=main])'
    );
  //console.log(inactives);
  for (let i=0; i<inactives.length; i++){
    if(!inactives[i].classList.contains('vicmod_inactive_bullet')){
      inactives[i].classList.add('vicmod_inactive_bullet');
      console.log(inactives[i] + 'ADDED');
    }else{
      console.log('this one has already');
    }
  }

});
