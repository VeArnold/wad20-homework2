
$(".profile-container").on("click", ".follow-button", function(event){
    $(this).toggleClass('followed');
    if ($(this).hasClass('followed')) {
        $(this).text("Followed");
    } else {
        $(this).text("Follow");
    }
});


loadProfiles()
    .then(function (response) {
        for (let i = 0; i < response.length; i++) {
            $('.profile-container').append(`
              <div class="profile">
                <div class="profile-avatar">
                    <img src=${response[i].avatar} alt="Profile picture">
                </div>
                <div class="profile-name">
                    <p>${response[i].firstname+" "+response[i].lastname}</p>
                </div>
                <div class="button">
                  <button type="button" name="Follow" class="follow-button">Follow</button>
                </div>
              </div>
            `);
        }
    })
    .catch(function () {
        alert('Error loading profiles.')
    });


function loadProfiles() {
    return $.get(
        {
            url: 'https://private-anon-682fe31944-wad20postit.apiary-mock.com/profiles',
            error: function () {
                alert('error')
            }
        }
    );
}
