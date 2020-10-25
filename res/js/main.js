$(function() {

    $(".avatar").click(function(){
        $(".dropdown-user").toggle();
        $(this).toggleClass("active"); // will keep hover state if dropdown menu is active

    });
});

$(function() {

    $(".dropdown-item").click(function(){

        var content = $(this).html()

        if (content == "Log out") {
            window.location.href = 'login.html';
        } else if (content == "Browse") {
            window.location.href = 'browse.html';
        }
        
    });

});


$( document ).ready(function() {

    var url = "https://private-anon-9ea93ae536-wad20postit.apiary-mock.com/users/1";
    $.getJSON( url, {format: "json"}).done(function(data) {
        $("#name").text(data.firstname + " " + data.lastname);
        $("#email").text(data.email);
        $(".avatar").attr("src", data.avatar);
        
    });
});





