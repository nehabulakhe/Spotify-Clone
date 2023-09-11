console.log("welcome to spotify");
let audioElement =new Audio('song/1.mp3');
let songIndex=0;
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');

let songs = [
    
    {songName:"Let Me Love You",filePath: "song/1.mp3",coverPath: "covers/1.jpg" },
    {songName:"Tere Hawale",filePath: "song/2.mp3",coverPath: "covers/2.jpg" },
    {songName:"Heeriye Heeriye",filePath: "song/3.mp3",coverPath: "covers/3.jpg" },
    {songName:"Love Me Like You Do",filePath: "song/4.mp3",coverPath: "covers/4jpg" },
    {songName:"Love is Gone",filePath: "song/5.mp3",coverPath: "covers/5.jpg" },
    {songName:"Stereo Love",filePath: "song/6.mp3",coverPath: "covers/6.jpg" },
    {songName:"Tum Hi Ho",filePath: "song/7.mp3",coverPath: "covers/7.jpg" },
    {songName:"Unstopable",filePath: "song/8.mp3",coverPath: "covers/8.jpg" },
    {songName:"With You",filePath: "song/9.mp3",coverPath: "covers/9.jpg" }
]

//audioElement.play();

//handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})