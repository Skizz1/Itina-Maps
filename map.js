function initMap() {


      var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            fullscreenControl: true,
            center: {lat: 45.75, lng: 4.85},  //France.
            styles: [
                  {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                              {
                                    "saturation": 36
                              },
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 40
                              }
                        ]
                  },
                  {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                              {
                                    "visibility": "on"
                              },
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 16
                              }
                        ]
                  },
                  {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                              {
                                    "visibility": "off"
                              }
                        ]
                  },
                  {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 20
                              }
                        ]
                  },
                  {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 17
                              },
                              {
                                    "weight": 1.2
                              }
                        ]
                  },
                  {
                        "featureType": "administrative.country",
                        "elementType": "labels",
                        "stylers": [
                              {
                                    "visibility": "simplified"
                              },
                              {
                                    "color": "#599adc"
                              }
                        ]
                  },
                  {
                        "featureType": "administrative.province",
                        "elementType": "labels.text",
                        "stylers": [
                              {
                                    "visibility": "on"
                              }
                        ]
                  },
                  {
                        "featureType": "administrative.locality",
                        "elementType": "labels",
                        "stylers": [
                              {
                                    "visibility": "on"
                              },
                              {
                                    "color": "#dcf1c1"
                              },
                              {
                                    "weight": "0.5"
                              }
                        ]
                  },
                  {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 20
                              }
                        ]
                  },
                  {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 21
                              }
                        ]
                  },
                  {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#22523a"
                              }
                        ]
                  },
                  {
                        "featureType": "poi.park",
                        "elementType": "labels.text",
                        "stylers": [
                              {
                                    "color": "#00ff6c"
                              },
                              {
                                    "weight": "0.5"
                              }
                        ]
                  },
                  {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                              {
                                    "lightness": 17
                              }
                        ]
                  },
                  {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                              {
                                    "lightness": 29
                              },
                              {
                                    "weight": 0.2
                              }
                        ]
                  },
                  {
                        "featureType": "road.highway",
                        "elementType": "labels",
                        "stylers": [
                              {
                                    "visibility": "on"
                              }
                        ]
                  },
                  {
                        "featureType": "road.highway",
                        "elementType": "labels.text",
                        "stylers": [
                              {
                                    "color": "#b05229"
                              },
                              {
                                    "weight": "0.5"
                              }
                        ]
                  },
                  {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#303a48"
                              },
                              {
                                    "lightness": 18
                              },
                              {
                                    "weight": "0.3"
                              }
                        ]
                  },
                  {
                        "featureType": "road.arterial",
                        "elementType": "labels.text",
                        "stylers": [
                              {
                                    "weight": "0.5"
                              },
                              {
                                    "color": "#9b9b9b"
                              }
                        ]
                  },
                  {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 16
                              }
                        ]
                  },
                  {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#000000"
                              },
                              {
                                    "lightness": 19
                              }
                        ]
                  },
                  {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                              {
                                    "color": "#304a55"
                              },
                              {
                                    "lightness": 17
                              }
                        ]
                  }
            ],
            disableDoubleClickZoom: true
      });


      /*
      * géolocalisation navigateur
      */
      var infoWindow = new google.maps.InfoWindow({map: map});
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                  };
                  infoWindow.setPosition(pos);
                  infoWindow.setContent('Votre position');
                  map.setCenter(pos);
            }, function() {
                  handleLocationError(true, infoWindow, map.getCenter());
            });
      } else {
            handleLocationError(false, infoWindow, map.getCenter());
      }

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: map,
            panel: document.getElementById('right-panel')
      });

      directionsDisplay.addListener('directions_changed', function() {
            computeTotalDistance(directionsDisplay.getDirections());
      });

      var depart = document.getElementById('depart').value;
      var arrive = document.getElementById('destination').value;
      $('#valide').click(function() {

            displayRoute(depart, arrive, directionsService,
                  directionsDisplay);
            });
            var posi = [];
            map.addListener('click', function(e) {
                  var marker = new google.maps.Marker({
                        position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
                        map: map
                  });
                  tab = {location: e.latLng.lat().toString()+' '+e.latLng.lng().toString()}
                  posi.push(tab);
                  displayRoute(depart, arrive, directionsService,directionsDisplay,posi)  ;
            });

            $('#valide').click(function() {
                  setInterval(function() {
                        localStorage.setItem('test', '#right-panel', true);
                        localStorage.getItem('test', '#right-panel', true);
                  }, 5000);
            });
      }

      function displayRoute(origin, destination, service, display, posi) {
            var selectedMode = document.getElementById("mode").value;
            if (selectedMode == '0') {
                  service.route({
                        origin: origin,
                        destination: destination,
                        waypoints: posi,
                        travelMode: google.maps.TravelMode.DRIVING,
                        avoidTolls: true
                  }, function(response, status) {
                        if (status === google.maps.DirectionsStatus.OK) {
                              display.setDirections(response);
                        } else {
                              alert('Could not display directions due to: ' + status);
                        }
                  });
            } else {
                  service.route({
                        origin: origin,
                        destination: destination,
                        waypoints: posi,
                        travelMode: google.maps.TravelMode[selectedMode],
                        avoidTolls: true
                  }, function(response, status) {
                        if (status === google.maps.DirectionsStatus.OK) {
                              display.setDirections(response);
                        } else {
                              alert('Could not display directions due to: ' + status);
                        }
                  });
            }
            /*console.log(travelMode);*/
      }



      function computeTotalDistance(result) {
            var total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                  total += myroute.legs[i].distance.value;
            }
            total = total / 1000;
            /*document.getElementById('total').innerHTML = total + ' km';*/
      }
