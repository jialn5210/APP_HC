let doctors = []
if(localStorage.getItem("doctors")){
  doctors = JSON.parse(localStorage.getItem("doctors"));
}

let myDoctor = sessionStorage.getItem('doctorSelected')

/* localStorage.removeItem('doctorSelected'); */

console.log(myDoctor);


let medicLat = 0
let medicLng = 0

for (let i = 0; i < doctors.length; i++) {

  if(doctors[i].name == myDoctor){
    medicLat = doctors[i].latitude
    medicLng = doctors[i].longitude
  }
}
console.log(medicLat);
console.log(medicLng);

let map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.157944, lng: -8.629556},
    zoom: 15,
    streetViewControl: false,
    styles: [
      {
        "elementType": "geometry","stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon","stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill","stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke","stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative","elementType": "geometry","stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country","elementType": "geometry.stroke","stylers": [
          {
            "color": "#000f0e"
          }
        ]
      },
      {
        "featureType": "administrative.country","elementType": "labels.text.fill","stylers": [
          {
            "color": "#ff9d9d"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [
          {
            "color": "#ff5555"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood","elementType": "labels.text.fill","stylers": [
          {
            "color": "#ff9d9d"
          }
        ]
      },
      {
        "featureType": "administrative.province","elementType": "labels.text.fill","stylers": [
          {
            "color": "#ff5959"
          }
        ]
      },
      {
        "featureType": "poi","stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi","elementType": "geometry","stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi","elementType": "labels.text.fill","stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park","elementType": "geometry","stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park","elementType": "labels.text.fill","stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road","elementType": "geometry","stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road","elementType": "labels.icon","stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial","elementType": "geometry.fill","stylers": [
          {
            "color": "#888888"
          }
        ]
      },
      {
        "featureType": "road.arterial","elementType": "labels.text.fill","stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway","elementType": "geometry","stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway","elementType": "geometry.fill","stylers": [
          {
            "color": "#6a6a6a"
          }
        ]
      },
      {
        "featureType": "road.highway","elementType": "geometry.stroke","stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway","elementType": "labels.text.fill","stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.highway","elementType": "labels.text.stroke","stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access","elementType": "geometry.fill","stylers": [
          {
            "color": "#696969"
          }
        ]
      },
      {
        "featureType": "road.local","elementType": "geometry.fill","stylers": [
          {
            "color": "#a4a4a4"
          }
        ]
      },
      {
        "featureType": "road.local","elementType": "labels.text.fill","stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit","stylers": [
          {
            "visibility": "off"
          }
        ] 
      },
      {
        "featureType": "transit.line","elementType": "geometry","stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station","elementType": "geometry","stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water","elementType": "geometry","stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water","elementType": "geometry.fill","stylers": [
          {
            "color": "#a0fef4"
          }
        ]
      },
      {
        "featureType": "water","elementType": "labels.text.fill","stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });





let myPos;
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();
directionsRenderer.setMap(map); 
let medicLatLng = {lat: medicLat, lng: medicLng}
console.log(medicLatLng);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        myPos = { lat: position.coords.latitude, lng: position.coords.longitude };
        const marker = new google.maps.Marker({
          position: myPos,
          map: map,
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        })
        infoWindow.open(map);
        map.setCenter(myPos)
      },
      () => handleLocationError(true, infoWindow, map.getCenter())
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  calcRoute(directionsService, directionsRenderer)

  function calcRoute(directionsService, directionsRenderer) {
    const request = {
      origin: myPos,
      destination: medicLatLng,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsRenderer.setMap(map);
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      }
    });
    
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

document.getElementById("btnVoltar").addEventListener("click", showMapMenu);
function showMapMenu() {
    location.replace('../html/map.html')
}}

document.getElementById("btnSubmit").addEventListener("click", () =>{
  
  let doctor = sessionStorage.getItem('doctorSelected')
  let user = sessionStorage.getItem('loggedUser')
  let presciption = document.getElementById("Prescription").value
  let diagnosis = document.getElementById("Diagnosis").value
  let rating = document.getElementById("sltRating").value

  let doctorReport ={
    User: user,
    Doctor: doctor,
    Diagnosis: diagnosis,
    Presciption: presciption,
    Rating: rating
  }

  console.log(doctorReport)

})