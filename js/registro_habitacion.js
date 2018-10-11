document.addEventListener('DOMContentLoaded', function () {
    var elemsnav = document.querySelectorAll('.sidenav');
    var instancesnav = M.Sidenav.init(elemsnav);

});

const $formRegister = document.querySelector('.form-register')
var firebaseDB = firebase.database()
var refnewUser = firebase.database().ref('users')
var user

$formRegister.addEventListener('submit', async function (event) {
    event.preventDefault()
    const dataForm = new FormData($formRegister)
    user = await firebase.auth().createUserWithEmailAndPassword(dataForm.get('email'), dataForm.get('clave'))
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    let newUser = {
        Nombre: dataForm.get('nombre'),
        Acomodacion: dataForm.get('acomodacion'),
        Descripcion: dataForm.get('descripcion'),
       
    }
    firebase.database().ref(`users/${user.user.uid}`).set(newUser).then(() => {
        swal("Todo bien!", "ya te as registrado!", "success")
        $formRegister.reset()
    }).catch((e) => {
        console.log(e)
    })
})