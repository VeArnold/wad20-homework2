$(function () {

    $(".avatar-container").click(function () {
        $(".avatar-dropdown").toggle();
    });

    loadUserInfo();

    function loadUserInfo() {
        return $.get(
            {
                url: 'https://private-anon-682fe31944-wad20postit.apiary-mock.com/users/1',
                success: function (response) {
                    $('#name').text(response.firstname + " " + response.lastname);
                    $('#email').text(response.email);
                },
                error: function () {
                    alert('error')
                }
            }
        );
    }

});