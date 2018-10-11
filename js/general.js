
var firebaseDB = firebase.database()
var refUsers = firebase.database().ref('users')
var user



/*function cerrarsesion(){
    firebase.auth().signOut().then(function() {
        location.href = ('../pages/login.html')
    }).catch(function(error) {
        // An error happened.
      });
}

firebase.auth().onAuthStateChanged(function (userregistro) {
    if (userregistro) {
        // var refusu = firebase.database();
        refUsers.once('value', function (data) {
            datauser = data.val()
            nombre = datauser[userregistro.uid].nombre;
            enviarnombre(nombre);
        });
        function enviarnombre(nombre) {
            alert('Bienvenido: ' + nombre)
        }
        var pagina = window.location.href;
        if (pagina.indexOf('registro.html') != -1 || pagina.indexOf('login.html') != -1) {
            location.href = ('../index.html')
            console.log('isiisis')
        }else{}
    } else {
        var pagina1 = window.location.href;
        if (pagina1.indexOf('registro') != -1 || pagina1.indexOf('login') != -1) {
        }else{
            location.href = ('pages/login.html')
        }
    }
});