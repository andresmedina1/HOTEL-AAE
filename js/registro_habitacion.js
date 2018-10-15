var config = {
    apiKey: "AIzaSyB3G1sNiRiMGXR48wR0FAjlF_zaIsMA6c8",
    authDomain: "hotel-daeca-244ad.firebaseapp.com",
    databaseURL: "https://hotel-daeca-244ad.firebaseio.com",
    projectId: "hotel-daeca-244ad",
    storageBucket: "hotel-daeca-244ad.appspot.com",
    messagingSenderId: "957899814726"
  };
firebase.initializeApp(config)

const formRooms = document.getElementById('formulario')

formRooms.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    let data = new FormData(formRooms)
    let name = data.get('nombre')
    let acomodation = data.get('acomod')
    let description = data.get('descrip')
    let res = await firebase.database().ref('rooms').push({
        name,
        acomodation,
        description,
        id: (new Date()).getTime()
    })
    if (res) {
        alert('habitacion ceada con exito')
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });