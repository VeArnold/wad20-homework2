$(function () {

    $(".avatar-container").click(function () {
        $(".avatar-dropdown").toggle()
    });

    $(".main-container").on("click", ".like-button", function(event){
        $(this).toggleClass('liked');
    });

    loadUserInfo();

    loadPosts()
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                var textH3 = ``;
                if (response[i].text !== null) {
                    textH3 = `<h3>${response[i].text}</h3>`;
                }
                var mediaDiv = ``;
                if (response[i].media !== null) {
                    if (response[i].media.type === "image") {
                        mediaDiv = `
                            <div class="post-image">
                              <img src=${response[i].media.url} alt="">
                            </div>
                        `;
                    } else if (response[i].media.type === "video"){
                        mediaDiv = `
                            <div class="post-video">
                               <video width="320" height="240" controls>
                                  <source src=${response[i].media.url} type="video/mp4">
                                  Your browser does not support the video tag.
                                </video> 
                            </div>
                        `;
                    }
                }
                $('.main-container').append(`
                  <div class="post">
                    <div class="post-author">
                      <span class="post-author-info">
                        <img src=${response[i].author.avatar} alt="Post author">
                        <small>${response[i].author.firstname+' '+response[i].author.lastname}</small>
                      </span>
                      <small>${response[i].createTime}</small>
                    </div>
                    ${mediaDiv}
                    <div class="post-title">
                      ${textH3}
                    </div>
                    <div class="post-actions">
                      <button type="button" name="like" class="like-button">${response[i].likes}</button>
                    </div>
                  </div>
                `);
            }
        })
        .catch(function () {
            alert('Error loading posts.')
        });

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

    function loadPosts() {
        return $.get(
            {
                url: 'https://private-anon-682fe31944-wad20postit.apiary-mock.com/posts',
                error: function () {
                    alert('error')
                }
            }
        );
    }

});