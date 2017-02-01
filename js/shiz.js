//initialize Firebase
  var config = {
    apiKey: "AIzaSyAzbTjPtur9yPmVMU1bFKabRQGm7XDPaCk",
    authDomain: "mechanic-locator.firebaseapp.com",
    databaseURL: "https://mechanic-locator.firebaseio.com",
    storageBucket: "mechanic-locator.appspot.com",
    messagingSenderId: "919713038261"
  };

firebase.initMap(config);

var database = firebase.database();

//button onclick event
$("#find-btn").on("click", function(event){
  event.preventDefault();

  var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=auto+repair+near+charlotte&location=35.2033529,-80.980258&radius=100&key=AIzaSyBvZ6mmr-zE_3pX8xlvcmGxkH6GVVG4WBk"
;
//ajax call function need the api to complete
$.ajax({
  url: queryURL,
  method: "GET"
})
//
.done(function(response){
  
  var results = response.data;

    for (var i = 0; i < results.length; i++) {
      console.log(results);
    //create a div with class "search results"
     var locationDiv = $("<div id='search-results'>");

    //sorting the results
    var locator = results[i].locator;

     var p = $("<p>").text("mechanic-locator" + locator);

    //creating a list tag
    var locationList = $("<ul>")
    
    //create a place for the list on the left side  
    locationDiv.replaceWith(ul); //list
    
    //create a place for the map on the right side 
    locationDiv.replaceWith(img); //map
      
      }
    })
  });









