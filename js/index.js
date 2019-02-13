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
  //console.log(inactives[i]);
}

// before change to next slide, check if next slide is active to trigger the animated graph
timelineSwiper.on('slideChangeTransitionStart', function( ){
  // checkActive();
  checkActiveForAudio();
});


timelineSwiper.on('slideChange', function(swiper, paginationEl){
  var all_bullets = document.querySelectorAll(
    '.swiper-pagination span[class^=swiper-pagination-bullet]',
  );
  for (let i=0; i<all_bullets.length; i++){
    if(all_bullets[i].classList.contains('vicmod_inactive_bullet')){
      all_bullets[i].classList.remove('vicmod_inactive_bullet');
      //console.log(all_bullets[i] + ' REMOVED');
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
      //console.log(inactives[i] + 'ADDED');
    }else{
      //console.log('this one has already');
    }
  }
});


// check if slide is active for audio's sake
// REF: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
function checkActiveForAudio(){
  var audio_slides= document.querySelector(".slide_audio");
   if (hasClass(audio_slides, 'swiper-slide-active')){
    audio_slides.querySelector("audio").currentTime = 0; // start from beginning
    audio_slides.querySelector("audio").play();
  }else{
    audio_slides.querySelector("audio").pause();
  }
}
