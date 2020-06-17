import DoctorController from '../controllers/DoctorController.js'

export default class MapView {
    constructor(){
        this.doctorController = new DoctorController()

        this.btnSearch = document.getElementById("btnSearch")
        this.btnBack = document.getElementById("btnBack")
        
        this.bindBackButton()
        this.showMap()
        this.addMyMarker()
        this.addDocMarker(this.doctorController.getDoctors())
    }
    
    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            location.replace('../html/hc.html')
        })
    }

    showMap(){
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

        
        
        
      }
      
        /* document.getElementById('btnProcurar').addEventListener('click',() => {
          const txtDistance = document.getElementById("sltDistance").value
          const txtSpecialty = document.getElementById("sltSpecialty").value
          let pos
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    pos = { lat: position.coords.latitude, lng: position.coords.longitude };
                }, 
                () => handleLocationError(true, infoWindow, map.getCenter())
            );
          }
          console.log(pos);
          const request = {
            location: pos,
            radius: txtDistance
          };
          service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);
        }) */
    
        
        
    }

    addMyMarker(){
        this.infoWindow = new this.google.maps.InfoWindow;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              position => {
                  const pos = { lat: position.coords.latitude, lng: position.coords.longitude };
                  const marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                  })
                  infoWindow.open(map);
                  map.setCenter(pos);
              }, 
              () => handleLocationError(true, infoWindow, map.getCenter())
          );
        } else {
          
          handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }

    }

    addDocMarker(doctors = []){
        console.log(doctors)
        for (let i = 0; i < doctors.length; i++) {
          this.medicLat = doctors[i].latitude
          this.medicLng = doctors[i].longitude
          this.medicName = doctors[i].name
          this.medicPhoto = doctors[i].photo
          this.medicSpecialty = doctors[i].specialty
          this.medicDescription = doctors[i].description

          this.medicLatLng = new google.maps.LatLng(medicLat, medicLng)
            marker = new google.maps.Marker({
            position: medicLatLng,
            map:map
          })
          
          let contentString = `
          <div id="content">
          <h1 id="doctorName">${medicName}</h1>
          <div id="bodyContent"><p> Specialty: ${medicSpecialty}</p>
          <p> Description: ${medicDescription}</p>
          <p><img src="${medicPhoto}" width="150px" height ="100px"></p></div>
          <button id="btnChamar" type="button" class="btn btn-outline-primary" onclick="window.location.href='../html/appointment.html';">Call!</button></div>
          `

          this.infoWindow = new google.maps.InfoWindow({content:    contentString,});

          marker.addListener("click",() => infoWindow.open(map,marker))

          this.bindAddSeeMoreEvent()
        }
    }

    bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.doctorController.setCurrentDoctor(event.target.id)  
                location.href='appointment.html';
            })
        }
    }
 

}