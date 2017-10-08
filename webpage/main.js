const api_key = 'fcdddfcc2be3b398be4e1c3dc6ec3ba7'
var username;

var songname;
var songartist;


function setUser(username) {
    if (username == undefined){
        alert("please enter a username");
    } else {
        this.username = username;
        getCurrentlyPlaying();
    }
}

function getCurrentlyPlaying() {
    $.ajax({
        url: 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + username + '&api_key=' + api_key + '&limit=1&format=json',
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data.recenttracks.track.length == 1){
                console.log("not currently playing anything");
            } else {
                // Go through each song
                $.each(data.recenttracks.track, function (i, song) {
                    // save details of first song (currently playing)
                    if (i==0) {
                        songartist=(song.artist['#text']);
                        songname=(song.name);
                    }
                });

                songartist = songartist.replace(/[^a-z0-9]/gi,'').toLowerCase();
                songname = songname.replace(/[^a-z0-9]/gi,'').toLowerCase();

                let url = "http://azlyrics.com/lyrics/"+songartist+"/"+songname+".html"                
                // have to host python on the server somehow?
                $.ajax({ url: url, success: function(data) { 
                    alert(data); 
                } });
                

            }
        }
    });
    console.log(songname);
    console.log(songartist);
}