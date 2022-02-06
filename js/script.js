
/*SEARCH ICON CLICK FUNCTION START - 2 WAY METHODS */

// ONE WAY

//$(document).on('click','.search',function(){
  //  $('.search-bar').addClass('search-bar-active')
//})

//TWO WAY

$(".search").click(function(){
    $('.search-bar').css('display','flex');
});

/*SERCH ICON CLICK FUNCTION END - 2 WAY METHODS */




/*SERCH CANCEL CLICK FUNCTION START  */

$(".search-cancel").click(function(){
    $('.search-bar').css('display','none');
});

/*SERCH CANCEL CLICK FUNCTION END */

/*LOGIN  FUNCTION START */

//LOGIN BTN CLICK
$('.user').click(function(){
  $('.form').css('display','flex')
  $('.login-form').css('display','flex')
  $('.sign-up-form').css('display','none');
});

//CANCEL BTN CLICK

$('.form-cancel').click(function(){
  $('.form').css('display','none')
 
});

//SIGN UP  BTN

$('.sign-up-btn').click(function(){
    $('.form').css('display','flex')
    $('.login-form').css('display','none');
    $('.sign-up-form').css('display','flex');
});

//ALREADY ACCOUNT CLICK

$('.sign-in-btn').click(function(){
  
  $('.sign-up-form').css('display','none');
  $('.login-form').css('display','flex')
});

/*LOGIN  FUNCTION END */


/*SLIDER START */



$(document).ready(function() {
  $('#adaptive').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:true
  });
});



/*SLIDER END */