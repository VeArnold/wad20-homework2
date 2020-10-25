
$(".avatar").click(function(){
    $(".dropdown-user").toggle();
    $(this).toggleClass("active"); // will keep hover state if dropdown menu is active

});


$(".dropdown-item").click(function(){

        var content = $(this).html()

        if (content == "Log out") {
            window.location.href = 'login.html';
        } else if (content == "Browse") {
            window.location.href = 'browse.html';
        } else if (content == "Home") {
            window.location.href = 'index.html';
        }

});

loadUserInfo();

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-682fe31944-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                $('#name').text(response.firstname + " " + response.lastname);
                $('#email').text(response.email);
                $('.avatar').attr("src", response.avatar);
            },
            error: function () {
                alert('Error loading user info.')
            }
        }
    );
}
