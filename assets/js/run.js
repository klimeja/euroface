
  $('.colorbox, a[target=colorbox]').colorbox({maxWidth:'90%', maxHeight: '90%'});
  
  $('input[name=verify_data]').val(1);
  
  $(document).ready(function($) {
  
    var sw = $('.slider').width();
    var sh = $('.slider').height();
    
    if(parseInt($('.slider').width(), 10) > 767){
      $('.slider').imagesLoaded( function(){
      	var revSlider = $('.slider').revolution({
      		delay : 5000, 
      		startwidth : parseInt(sw, 10),
      		startheight : parseInt(sh, 10),
      		fullWidth : 'on',
      		autoHeight : 'on',
      		onHoverStop : 'off',
      		hideThumbs : 0,
      		navigationType : 'bullet',
      		navigationStyle : 'uxb-custom-nav',
      		navigationHAlign : 'right',
      		navigationVAlign : 'top',
      		navigationArrows : 'solo',
      		soloArrowLeftHalign : 'left',
      		soloArrowRightHalign : 'right',
      		spinner : 'none',
    	 });
     });
   }
   
   $('.slider .container, .slider li').height(sh);
  
  
    
  $('a[href^=mailto]').html(function () {
    return $(this).html().replace("(at)", "@"); 
  }).attr("href", function () {
    return $(this).attr("href").replace("(at)", "@"); 
  });
  $('input').val(function(){return $(this).val().replace("(at)", "@")});



  
	});
  
	
	
function menu_toggle(){
  $('#main-menu li:not(.toggle-menu)').slideToggle();
}