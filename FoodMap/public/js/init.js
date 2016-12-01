$( document ).ready(function(){
    sessionStorage.removeItem("chips");
    $(".button-collapse").sideNav();
    $("#dropdown134").click(function(e){
        setTimeout(function(){
            var chips = sessionStorage.getItem("chips");
            chips = JSON.parse(chips);
            $('.chips-initial').append("<div class='chip'>\
            "+chips['tag'] +"\
            <i class='close material-icons'>close</i>\
          </div>")
            $(".input").prop('disabled', true);
            $(".input").prop('type', "hidden");
        }, 100);
    });
    $('.chips').on('chip.delete', function(e, chip){
        console.log(chip);
    });

    geoFindMe();
});

function geoFindMe() {
  if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = {
        lat: latitude,
        lon: longitude
    };
    sessionStorage.setItem("currentLocation", JSON.stringify(location));
  }

  function error() {
    alert("Unable to retrieve your location");
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
