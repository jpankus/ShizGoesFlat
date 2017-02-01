var map;
            var service;
            var infowindow;

            function onClick() {
                var currentLocation = new google.maps.LatLng(35.2238751,-80.8377787);

                map = new google.maps.Map(document.getElementById('map'), {
                    center: currentLocation,
                    zoom: 15
                    });

                var request = {
                    location: currentLocation,
                    radius: '500',
                    query: 'auto repair'
                };

                service = new google.maps.places.PlacesService(map);
                service.textSearch(request, callback);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        createMarker(results[i]);
                    }
                }
            }

            function createMarker(place) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                // TODO - you guys need to figure this one out
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }