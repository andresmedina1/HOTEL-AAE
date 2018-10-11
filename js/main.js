document.addEventListener('DOMContentLoaded', function() {
    var elemsnav = document.querySelectorAll('.sidenav');
    var instancesnav = M.Sidenav.init(elemsnav);
    
  });
    

var config = {
    apiKey: "AIzaSyB3G1sNiRiMGXR48wR0FAjlF_zaIsMA6c8",
    authDomain: "hotel-daeca-244ad.firebaseapp.com",
    databaseURL: "https://hotel-daeca-244ad.firebaseio.com",
    projectId: "hotel-daeca-244ad",
    storageBucket: "hotel-daeca-244ad.appspot.com",
    messagingSenderId: "957899814726"
  };
    firebase.initializeApp(config);
  
/***********************BARRA DE NAVEGACION ****************************************************************/

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav-wrapper").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav-wrapper').addClass('black');
  }

  else {
        $('nav-wrapper').removeClass('black');
  }
})
  
/*++++++++FECHA ***************************************/
document.addEventListener('DOMContentLoaded', function() {
    var elemsfe = document.querySelectorAll('.datepicker');
    var instancesfe = M.Datepicker.init(elemsfe);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elemsho = document.querySelectorAll('.timepicker');
    var instancesho = M.Timepicker.init(elemsho);
  });



   