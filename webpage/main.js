const api_key = 'fcdddfcc2be3b398be4e1c3dc6ec3ba7'
var username;


function setUser(username) {
    this.username = username;
    getCurrentlyPlaying();
}

function getCurrentlyPlaying() {
    $.ajax({
        url: 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + username + '&api_key=' + api_key + '&limit=1&format=json',
        dataType: 'json',
        async: false,
        success: function (data) {
            // Go through each song
            $.each(data.recenttracks.track, function (i, song) {
                if (i==0) {
                    console.log(song.artist['#text']);
                    console.log(song.name);
                }
            });
        }
    });
    
}