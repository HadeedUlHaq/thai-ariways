// silck animation slider

var $bannerSlider = jQuery(".animated-slider");
var $bannerFirstSlide = $("div.banner-slide:first-child");

$bannerSlider.on("init", function (e, slick) {
  var $firstAnimatingElements = $bannerFirstSlide.find("[data-animation]");
  slideanimate($firstAnimatingElements);
});
$bannerSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
  var $animatingElements = $(
    'div.slick-slide[data-slick-index="' + nextSlide + '"]'
  ).find("[data-animation]");
  slideanimate($animatingElements);
});
$bannerSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  autoplay: false,
  fade: true,
  dots: true,
  swipe: true,
  arrows: true,
  appendArrows: $(".news__arrows"),
  prevArrow: '<div class="news__arrow news__arrow_dir_left"></div>',
  nextArrow: '<div class="news__arrow news__arrow_dir_right"></div>',
});
$(".pausebtn").on("click", function () {
  $(".slideshow").slick("slickPause");
});

$(".playbtn").on("click", function () {
  $(".slideshow").slick("slickPlay");
});
function slideanimate(elements) {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay,
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
}

// data color
jQuery("[data-color]").each(function () {
  jQuery(this).css("color", jQuery(this).attr("data-color"));
});
// data background color
jQuery("[data-bgcolor]").each(function () {
  jQuery(this).css("background-color", jQuery(this).attr("data-bgcolor"));
});
var animtslsec = document.getElementById("anmbtnsec");
var annibnt = animtslsec.getElementsByClassName("anbtn");
for (var i = 0; i < annibnt.length; i++) {
  annibnt[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("panctive");
    current[0].className = current[0].className.replace(" panctive", "");
    this.className += " panctive";
  });
}
// main slider

$(".slideshow").slick({
  dots: true,
  pauseOnHover: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
});
$(".pause").on("click", function () {
  $(".slideshow").slick("slickPause");
});

$(".play").on("click", function () {
  $(".slideshow").slick("slickPlay");
});

var navactive = document.getElementById("navact");
var navbtn = navactive.getElementsByClassName("navbtn");
for (var i = 0; i < navbtn.length; i++) {
  navbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// fhc active button
var fhcactive = document.getElementById("fhcact");
var fhcbtn = fhcactive.getElementsByClassName("fhcbtn");
for (var i = 0; i < fhcbtn.length; i++) {
  fhcbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activee");
    current[0].className = current[0].className.replace(" activee", "");
    this.className += " activee";
  });
}
// pause play button
var plpaussec = document.getElementById("plpaussec");
var ppbtn = plpaussec.getElementsByClassName("ppbtn");
for (var i = 0; i < ppbtn.length; i++) {
  ppbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("pactive");
    current[0].className = current[0].className.replace(" pactive", "");
    this.className += " pactive";
  });
}

// active DatePicker
var roact = document.getElementById("roact");
var robtn = roact.getElementsByClassName("robtn");
for (var i = 0; i < robtn.length; i++) {
  robtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    this.className += " activ";
  });
}

// return and one day things
var rtrnsec = document.getElementById("rtrn");
var onewaysec = document.getElementById("onway");
var returning = document.getElementById("returning");
onewaysec.addEventListener("click", () => {
  returning.style.opacity = "0";
});
rtrnsec.addEventListener("click", () => {
  returning.style.opacity = "1";
});

// book & check section define
var slideshow = document.getElementById("slideshow");
var hideflhtcar = document.getElementById("hideflhtcar");
var hidesection = document.getElementById("hidesection");

var bokingsec = document.querySelector(".bookingsec");
var booking = document.getElementById("book");
var check = document.getElementById("check");
var bookisec = document.getElementById("bookisec");
var chekinsec = document.getElementById("chekinsec");
booking.addEventListener("click", () => {
  bookisec.style.display = "block";
  chekinsec.style.display = "none";
  hideflhtcar.style.display = "block";
});
check.addEventListener("click", () => {
  bookisec.style.display = "none";
  chekinsec.style.display = "block";
});
// fight hotel car rental detect
var flights = document.getElementById("flight");
var hotel = document.getElementById("hotel");
var carrental = document.getElementById("carrental");
var flightsec = document.getElementById("flhtsec");
var hotelsec = document.getElementById("hotelsec");
var carrensec = document.getElementById("carrensec");

flights.addEventListener("click", () => {
  flightsec.style.display = "block";
  hotelsec.style.display = "none";
  carrensec.style.display = "none";
});
hotel.addEventListener("click", () => {
  flightsec.style.display = "none";
  hotelsec.style.display = "grid";
  carrensec.style.display = "none";
});
carrental.addEventListener("click", () => {
  flightsec.style.display = "none";
  hotelsec.style.display = "none";
  carrensec.style.display = "block";
});
// slideaup
bokingsec.addEventListener("click", () => {
  hidesection.style.display = "none";
  hideflhtcar.style.display = "block";
});
slideshow.addEventListener("click", () => {
  hideflhtcar.style.display = "none";
  hidesection.style.display = "block";
});
// plus button hide
$("#hideplus").click(function(){
  $("#hideplus").hide();
});
$("#hideplus2").click(function(){
  $("#hideplus2").hide();
});
// black overlay
$(".bookingsec").click(function() {
  $(this).addClass("focusDiv");
  $(".overlay").show("fade", 500);
});
$(".overlay").click(function() {
  $(this).removeClass("focusDiv");
  $(".overlay").hide("fade", 500);
});

// background Scroll effect
var velocity = 0.25;

function update(){ 
var pos = $(window).scrollTop(); 
$('.plan-trip').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height()-18;
    $(this).css('backgroundPosition', '60% ' + Math.round((height - pos) * velocity) +  'px'); 
   }); 
   };

 $(window).bind('scroll', update);