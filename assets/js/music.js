let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrIcon=document.getElementById("ctrIcon");

song.onloadedmetadata=function(){
    progress.max = song.duration ;
    progress.value = song.currentTime;
}

function playPause(){
    if (ctrIcon.classList.contains("ion-pause")) {
        song.pause();
        ctrIcon.classList.remove("ion-pause"); 
        ctrIcon.classList.add("ion-play");

    }else {
        song.play();
        ctrIcon.classList.add("ion-pause");
        ctrIcon.classList.remove("ion-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrIcon.classList.add("ion-pause");
        ctrIcon.classList.remove("ion-play");
}