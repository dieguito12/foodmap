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

});

