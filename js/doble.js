
document.addEventListener('DOMContentLoaded', function() {
    var elemsnav = document.querySelectorAll('.sidenav');
    var instancesnav = M.Sidenav.init(elemsnav);
    
  });

  


  document.addEventListener('DOMContentLoaded', function() {
    var elemslider = document.querySelectorAll('.slider');
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instanceslider = M.Slider.init(elemslider,{
        indicators:true,
        height:500,
        interval:1500
    });
    
    arrowright.addEventListener('click', () => {
      var instances = M.Slider.getInstance(elemslider[0])
      instances.next()
    })
      arrowleft.addEventListener('click', () => {
      var instances = M.Slider.getInstance(elemslider[0])
      instances.prev() 
      })
      

  });
  


$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};