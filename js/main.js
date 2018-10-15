
var config = {
    apiKey: "AIzaSyB3G1sNiRiMGXR48wR0FAjlF_zaIsMA6c8",
    authDomain: "hotel-daeca-244ad.firebaseapp.com",
    databaseURL: "https://hotel-daeca-244ad.firebaseio.com",
    projectId: "hotel-daeca-244ad",
    storageBucket: "hotel-daeca-244ad.appspot.com",
    messagingSenderId: "957899814726"
  };
firebase.initializeApp(config);

var app = new Vue (
{
  el: '#app',
  created: function () {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let sesion = await firebase.database().ref(`users/${user.uid}`).once('value')
        this.sesion = sesion.val()
        console.log(this.sesion)
      } else {
       this.sesion = null
      }
    })
  },
  data() {
    return {
      sesion: null,
      rooms: [],
      selected: [],
    }
  },
  methods: {
    async searchAviableRooms () {
      const from = this.$refs.from.value
      const to = this.$refs.to.value
      if (from && to) {
        const fromDate = (new Date(from)).getTime()
        const toDate = (new Date(to)).getTime()
        
        if (fromDate < (new Date()).getTime()) return alert('La fecha inicio debe ser despues de hoy')
        if (fromDate > toDate) return alert('La fecha desde final debe ser despues de la fecha final')

        let rooms = firebase.database().ref('rooms').once('value')
        let reservations = firebase.database().ref('reservations').once('value')
        const promises = await Promise.all([rooms, reservations])
        rooms = Object.values(promises[0].val())
        reservations = Object.values(promises[1].val())
        rooms = rooms.filter(room => {
          let roomReservations = reservations.filter(reservation => reservation.roomId == room.id )
          let free = true
          for (const res of roomReservations) {
            if ((fromDate >= res.fromDate) && (fromDate <= res.toDate)) {
              free = false
              break
            }
            if ((toDate >= res.fromDate) && (toDate <= res.toDate)) {
              free = false
              break
            }
          }
          return free
        })
        this.rooms = rooms
      } else alert ('Por favor seleccione las fechas indicadas')
    },
    cancel () {
      this.rooms = [];
      this.selected = []
    },
    logOut () {
      firebase.auth().signOut()
      window.location.href = ''
    },
    updateSelction (room) {
      let lastLength = this.selected.length
      let newArr = this.selected.filter(el => el.id != room.id)
      if (newArr.length == lastLength) this.selected.push(room)
      else this.selected = newArr
      console.log(this.selected)
    },
    reserve () {
      if (this.selected.length) {
        const from = this.$refs.from.value
        const to = this.$refs.to.value
        const fromDate = (new Date(from)).getTime()
        const toDate = (new Date(to)).getTime()
        this.selected.forEach(el => {
          let obj = {
            fromDate,
            toDate,
            roomId: el.id
          }
          firebase.database().ref('reservations').push(obj)
        })
        this.cancel()
        alert('Reserva creada con éxito')
      } else alert ('Por favor seleccione al menos una habitacion')
    }
  }
})

Vue.component('grid-item', {

  props: ['room'],
  template: `
    <article class="item">
      <div class=" post item_galeria">
        <div class="item_image">
          <div class="item_img post">
            <img src="assets/habitaciones/suite/2.jpg">
          </div>
        </div>
        <div class=" item_column">
          <div class=" item_detalles">
            <div class="item_name">
                <h5>{{room.name}}</h5>
                <div>
                  <h6>{{room.description}}</h6>
                </div>
              </div>
            <p>
              <label>
                <input type="checkbox" @click="$emit('check')"/>
                <span>Seleccionar</span>
              </label>
            </p>
            <p class="acomodation"><b>Acomodación: </b>{{room.acomodation}}</p>
          </div>
        </div>
      </div>
    </article>`
})

document.addEventListener('DOMContentLoaded', function() {
    var elemsnav = document.querySelectorAll('.sidenav');
    var instancesnav = M.Sidenav.init(elemsnav);
    
  });
    
  
  
/*++++++++FECHA ***************************************/
document.addEventListener('DOMContentLoaded', function() {
    var elemsfe = document.querySelectorAll('.datepicker');
    var instancesfe = M.Datepicker.init(elemsfe);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elemsho = document.querySelectorAll('.timepicker');
    var instancesho = M.Timepicker.init(elemsho);
  });



   