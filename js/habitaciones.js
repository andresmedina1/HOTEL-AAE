 
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
  
 

/*++++++++FECHA ***************************************/
  document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
  });

  
 // document.addEventListener('DOMContentLoaded', function() {
 //   var elemsfecha = document.querySelectorAll('.datepicker');
 //   var instancefecha = M.Datepicker.init(elemsfecha);
 //   var instancefecha = M.Datepicker.getInstance(elemsfecha);
 // });

 // document.addEventListener('DOMContentLoaded', function() {
//    var elemshora = document.querySelectorAll('.timepicker');
 //   var instancehora = M.Timepicker.init(elemshora);
 // });
  