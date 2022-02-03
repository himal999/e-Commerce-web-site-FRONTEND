
/*SERCH ICON CLICK FUNCTION START - 2 WAY METHODS */

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