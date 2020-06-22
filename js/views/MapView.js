      
      
//get doctors from local storage
let doctors = []
if(localStorage.getItem("doctors")){
   doctors = JSON.parse(localStorage.getItem("doctors"));
}


  


alert("Choose the specialty you want on the filters menu to see the doctors")
      
//criação e design do mapa
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
        
        let infoWindowsArray = [];
        let pos = {}

        //obtenção da localização do utilizador
        infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              position => {
                  pos = { lat: position.coords.latitude, lng: position.coords.longitude };
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
        
        console.log(doctors)
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({map: map, suppressMarkers: true});
        

        
        /* for (let i = 0; i < doctors.length; i++) {
          const medicLat = doctors[i].latitude
          const medicLng = doctors[i].longitude
          const medicName = doctors[i].name
          const medicPhoto = doctors[i].photo
          const medicSpecialty = doctors[i].specialty
          const medicDescription = doctors[i].description
          const medicStatus = doctors[i].medicStatus

          let medicLatLng = new google.maps.LatLng(medicLat, medicLng)
          marker = new google.maps.Marker({
            position: medicLatLng,
            map:map
          })
          
          let contentString = `
          <div id="content">
            <h1 id="doctorName">${medicName}</h1>
            <div id="bodyContent"><p> Specialty: ${medicSpecialty}</p>
              <p> Description: ${medicDescription}</p>
              <p id='extra'></p>
              <p><img src="${medicPhoto}" width="150px" height ="100px"></p>
            </div>
            <button id="${medicName}" type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#mdlRegisterAppointment">Register Appointment!</button>
          </div>
          `
          
          let infoWindow = new google.maps.InfoWindow({content: contentString,});
        
          infoWindowsArray.push(infoWindow);

          marker.addListener('click', function (event) {
            for (var i = 0; i < infoWindowsArray.length; i++) {
              infoWindowsArray[i].close();
              
              sessionStorage.setItem( 'doctorSelected', medicName)
            }
            infoWindow.open(map, marker);
            infoWindow.setPosition(event.latLng);;
            showDirection(pos, event.latLng)
          }) 
        } */
        let markers = []
        
        function removeMarkers(){
          for(i=0; i<markers.length; i++){
            markers[i].setMap(null);
          }
        }

        //botão de filtros
        document.getElementById('btnSearch').addEventListener('click',
          () => {
            
            removeMarkers()
            const txtDistance = document.getElementById("sltDistance")
            const txtSpecialty = document.getElementById("sltSpecialty")
          
            let infoWindowsArray = [];
            for (let i = 0; i < doctors.length; i++) {
              const medicLat = doctors[i].latitude
              const medicLng = doctors[i].longitude
              const medicName = doctors[i].name
              const medicPhoto = doctors[i].photo
              const medicSpecialty = doctors[i].specialty
              const medicDescription = doctors[i].description
              const medicStatus = doctors[i].medicStatus
              //let distance = 0
              
              let medicLatLng = new google.maps.LatLng(medicLat, medicLng)
              if(txtSpecialty.value == medicSpecialty){
                let marker = new google.maps.Marker({
                  position: medicLatLng,
                  map:map
                })
                markers.push(marker)
                
                let contentString = `
                <div id="content">
                  <h1 id="doctorName">${medicName}</h1>
                  <div id="bodyContent"><p> Specialty: ${medicSpecialty}</p>
                    <p> Description: ${medicDescription}</p>
                    <p id='extra'></p>
                    <p><img src="${medicPhoto}" width="150px" height ="100px"></p>
                  </div>
                  <button id="${medicName}" type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#mdlRegisterAppointment">Register Appointment!</button>
                </div>
                `
                
                let infoWindow = new google.maps.InfoWindow({content: contentString,});
              
                infoWindowsArray.push(infoWindow);
      
                marker.addListener('click', function (event) {
                  for (var i = 0; i < infoWindowsArray.length; i++) {
                    infoWindowsArray[i].close();
                    
                    sessionStorage.setItem( 'doctorSelected', medicName)
                  }
                  infoWindow.open(map, marker);
                  infoWindow.setPosition(event.latLng);;
                  showDirection(pos, event.latLng)
                })
              }
              
            }
            
        })

        function showDirection(homePos, doctorPos) {
      
          // Creation of a DirectionsRequest object 
          const request = {
            origin: doctorPos,
            destination: homePos,
            travelMode: google.maps.TravelMode['DRIVING']
          };
    
          // call DirectionsService.route() to initiate a request to the Directions service
          // passing it a DirectionsRequest object literal containing the input terms and a callback method 
          // to execute upon receipt of the response.
          directionsService.route(request,
            (result, status) => {
              if (status == 'OK') {
                directionsRenderer.setDirections(result);
                const directionsData = result.routes[0].legs[0]; // Get data about the mapped route
                if (directionsData) {
                  document.querySelector("#extra").innerHTML = `
                    Driving distance is ${directionsData.distance.text} (${directionsData.duration.text})
                  `
                }
                else {
                  document.querySelector("#extra").innerHTML = 'Directions request failed'
                }
              } else {
                document.querySelector("#extra").innerHTML = status
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

      document.getElementById("btnBack").addEventListener("click", () =>{
        location.replace('../html/hc.html')
      });


      document.getElementById("btnSubmit").addEventListener("click", () =>{
        
        
        let doctor = sessionStorage.getItem('doctorSelected')
        let user = sessionStorage.getItem('loggedUser')
        let prescription = document.getElementById("Prescription")
        let diagnosis = document.getElementById("Diagnosis")
        let rating = document.getElementById("sltRating")
        let length = 0
        let sum = 0
        let average
        let prevRatings = 0
        let doctorReport = {
          "User": user,
          "Doctor": doctor,
          "Diagnosis": diagnosis.value,
          "Prescription": prescription.value,
          "Rating": rating.value
        }
        console.log(doctorReport)
        
        let reports = []
        if(prescription.value!="" && diagnosis.value!="" && rating.value!="")
        {
          if(confirm("Are you sure to submit?"))
          {
          if(localStorage.Reports){
            reports = JSON.parse(localStorage.getItem('Reports'))
            reports.push(doctorReport)
            localStorage.setItem('Reports', JSON.stringify(reports))
            alert("Submited with Success!")
            setTimeout(() => {
            location.replace('../html/appointments.html')
          },
          1000)
          } else { 
            reports.push(doctorReport)
            localStorage.setItem('Reports', JSON.stringify(reports))
            alert("Submited with Success!")
            setTimeout(() => {
              location.replace('../html/appointments.html')
            },
            1000)
          }
        }
        }
        
      })

     

    }

    
        