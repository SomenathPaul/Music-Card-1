let progress = document.getElementById('progress');
let control_icon = document.getElementById('control-icon');
let song = document.getElementById('song');

song.onloadedmetadata = function() {
    progress.max = song.ondurationchange;
    progress.value = song.currentTime;
}

function playPause() {
    if(control_icon.classList.contains("fa-pause")) {
        song.pause();
        control_icon.classList.remove("fa-pause");
        control_icon.classList.add("fa-play");
    } else {
        song.play();
        control_icon.classList.add("fa-pause");
        control_icon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },1000);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    control_icon.classList.add("fa-pause");
    control_icon.classList.remove("fa-play");
}
