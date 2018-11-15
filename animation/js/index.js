// check if parents has class

function hasClass(element, className) {
  var regex = new RegExp('\\b' + className + '\\b');
  do {
    if (regex.exec(element.className)) {
      return true;
    }
    element = element.parentNode;
  } while (element);
  return false;
}


function checkActive(){
  var extra_5 = document.querySelector("#extra_5");
  if (hasClass(extra_5, 'swiper-slide-active')){
    /* toggle display on/off when slide changes */
    let box_animated_graph = document.querySelector(".box.animated_graph")
    box_animated_graph.style.display = 'block';

    setTimeout(function(){ extra_5.innerHTML = 24;}, 1);
    setTimeout(function(){ extra_5.innerHTML = 46;}, 4500);
    setTimeout(function(){ extra_5.innerHTML = 90;}, 9000);

    var extra_15 = document.getElementById("extra_15");
    setTimeout(function(){ extra_15.innerHTML = 32;}, 1);
    setTimeout(function(){ extra_15.innerHTML = 62;}, 4500);
    setTimeout(function(){ extra_15.innerHTML = 122;}, 9000);

    var extra_25 = document.getElementById("extra_25");
    setTimeout(function(){ extra_25.innerHTML = 41;}, 1);
    setTimeout(function(){ extra_25.innerHTML = 79;}, 4500);
    setTimeout(function(){ extra_25.innerHTML = 154;}, 9000);

    var extra_35 = document.getElementById("extra_35");
    setTimeout(function(){ extra_35.innerHTML = 45;}, 1);
    setTimeout(function(){ extra_35.innerHTML = 86;}, 4500);
    setTimeout(function(){ extra_35.innerHTML = 166;}, 9000);

    var extra_45 = document.getElementById("extra_45");
    setTimeout(function(){ extra_45.innerHTML = 48;}, 1);
    setTimeout(function(){ extra_45.innerHTML = 92;}, 4500);
    setTimeout(function(){ extra_45.innerHTML = 182;}, 9000);

    var extra_55 = document.getElementById("extra_55");
    setTimeout(function(){ extra_55.innerHTML = 53;}, 1);
    setTimeout(function(){ extra_55.innerHTML = 100;}, 4500);
    setTimeout(function(){ extra_55.innerHTML = 196;}, 9000);

    var extra_65 = document.getElementById("extra_65");
    setTimeout(function(){ extra_65.innerHTML = 64;}, 1);
    setTimeout(function(){ extra_65.innerHTML = 121;}, 4500);
    setTimeout(function(){ extra_65.innerHTML = 238;}, 9000);

    var extra_80 = document.getElementById("extra_80");
    setTimeout(function(){ extra_80.innerHTML = 72;}, 1);
    setTimeout(function(){ extra_80.innerHTML = 236;}, 4500);
    setTimeout(function(){ extra_80.innerHTML = 266;}, 9000);

    var extra_100 = document.getElementById("extra_100");
    setTimeout(function(){ extra_100.innerHTML = 83;}, 1);
    setTimeout(function(){ extra_100.innerHTML = 157;}, 4500);
    setTimeout(function(){ extra_100.innerHTML = 307;}, 9000);

    var extra_120 = document.getElementById("extra_120");
    setTimeout(function(){ extra_120.innerHTML = 94;}, 1);
    setTimeout(function(){ extra_120.innerHTML = 178;}, 4500);
    setTimeout(function(){ extra_120.innerHTML = 354;}, 9000);

    var extra_160 = document.getElementById("extra_160");
    setTimeout(function(){ extra_160.innerHTML = 141;}, 1);
    setTimeout(function(){ extra_160.innerHTML = 261;}, 4500);
    setTimeout(function(){ extra_160.innerHTML = 533;}, 9000);

    var average = document.getElementById("average");
    setTimeout(function(){ average.innerHTML = 60;}, 1);
    setTimeout(function(){ average.innerHTML = 127;}, 4500);
    setTimeout(function(){ average.innerHTML = 270;}, 9000);

  }else{
    /* toggle display on/off when slide changes */
    let box_animated_graph = document.querySelector(".box.animated_graph")
    box_animated_graph.style.display = 'none';
  }
}
