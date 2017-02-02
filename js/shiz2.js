
var map;
            var service;
            var infowindow;

            function onClick() {
                var currentLocation = new google.maps.LatLng(35.2238751,-80.8377787);

                map = new google.maps.Map(document.getElementById('map'), {
                    center: currentLocation,
                    zoom: 13
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
                var infowindow = new google.maps.InfoWindow();
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

        
             var database = firebase.database();
             database.ref().push({
                name: place.name,
                address: place.formatted_address
             });       

                google.maps.event.addListener(marker, 'click', function() {

                    //infowindow.setContent(place.name);
                    //infowindow.setContent(place.address);
                    //infowindow.open(map, this);
                    console.log(place.name);
                    console.log(place.formatted_address);
                    console.log(place.rating);

                    $("#company-table > thead").append("<tr><td>" + place.name + "</td><td>" + place.formatted_address + "</td><td>" +
    place.rating + " Stars" + "</td><td>" );
                        
                    });                      
            }
        