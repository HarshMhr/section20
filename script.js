const Hamm =document.querySelector('.ham');
const Listt =document.querySelector('.list_of_vid');
const Vidmar=document.querySelector(".container");

Hamm.addEventListener('click',()=>{
    Hamm.classList.toggle('active');
    Listt.classList.toggle('active');
    Vidmar.classList.toggle("active");
});

// ------------------------------------------------------

var a=document.querySelectorAll(".zoom ").length;
            var vid_list=[ "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/001%20Section%20Overview.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/002%20What%20is%20the%20STL.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/003%20Generic%20Programming%20with%20Macros.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/004%20Generic%20Programming%20with%20Function%20Templates.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/005%20Generic%20Programming%20with%20Class%20Templates.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/006%20Creating%20a%20Generic%20Array%20Template%20Class.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/007%20Introduction%20to%20STL%20Containers.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/008%20Introduction%20to%20STL%20Iterators.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/009%20Introduction%20to%20Iterators%20-%20Demo.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/010%20Introduction%20to%20STL%20Algorithms.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/011%20Introduction%20to%20Algorithms%20-%20Demo.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/012%20Sequence%20Container%20-%20Array.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/013%20Sequence%20Containers%20-%20Vector.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/014%20Sequence%20Containers%20-%20Deque.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/015%20Section%20Challenge%201.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/016%20Section%20Challenge%201%20-%20Solution.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/017%20Sequence%20Containers%20-%20List%20and%20Forward%20List.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/018%20Section%20Challenge%202.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/019%20Section%20Challenge%202%20-%20Solution.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/020%20Associative%20Containers%20-%20Sets.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/021%20Associative%20Containers%20-%20Maps.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/022%20Section%20Challenge%203.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/023%20Section%20Challenge%203%20-%20Solution.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/024%20Container%20Adaptors%20-%20Stack.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/025%20Container%20Adaptors%20-%20Queue.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/026%20Section%20Challenge%204.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/027%20Section%20Challenge%204%20-%20Solution.mp4", "https://archive.org/download/013-sequence-containers-vector/20%20-%20The%20Standard%20Template%20Library%20%28STL%29/028%20Container%20Adaptors%20-%20Priority%20Queue.mp4"];
for (var i=0; i<a;i++){
    document.querySelectorAll(".zoom")[i].addEventListener("click",
        function (){

            var vidIndex= Array.from(document.querySelectorAll(".zoom")).indexOf(this);
            let source = document.getElementById("videoSource");   
            let video = document.getElementById("myVideo");
            source.src = vid_list[vidIndex];
            video.load();
            
        });
}










// -------------------------------------------------



const container = document.querySelector(".container"),
mainVideo = container.querySelector("video"),
videoTimeline = container.querySelector(".video-timeline"),
progressBar = container.querySelector(".progress-bar"),
volumeBtn = container.querySelector(".volume i"),
volumeSlider = container.querySelector(".left input");
currentVidTime = container.querySelector(".current-time"),
videoDuration = container.querySelector(".video-duration"),
skipBackward = container.querySelector(".skip-backward i"),
skipForward = container.querySelector(".skip-forward i"),
playPauseBtn = container.querySelector(".play-pause i"),
speedBtn = container.querySelector(".playback-speed span"),
speedOptions = container.querySelector(".speed-options"),
pipBtn = container.querySelector(".pic-in-pic span"),
fullScreenBtn = container.querySelector(".fullscreen i");
let timer;

const hideControls = () => {
    if(mainVideo.paused) return;
    timer = setTimeout(() => {
        container.classList.remove("show-controls");
    }, 3000);
}
hideControls();

container.addEventListener("mousemove", () => {
    container.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();   
});

const formatTime = time => {
    let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0) {
        return `${minutes}:${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`;
}

videoTimeline.addEventListener("mousemove", e => {
    let timelineWidth = videoTimeline.clientWidth;
    let offsetX = e.offsetX;
    let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
    const progressTime = videoTimeline.querySelector("span");
    offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
    progressTime.style.left = `${offsetX}px`;
    progressTime.innerText = formatTime(percent);
});

videoTimeline.addEventListener("click", e => {
    let timelineWidth = videoTimeline.clientWidth;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

mainVideo.addEventListener("timeupdate", e => {
    let {currentTime, duration} = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;
    currentVidTime.innerText = formatTime(currentTime);
});

mainVideo.addEventListener("loadeddata", () => {
    videoDuration.innerText = formatTime(mainVideo.duration);
});

const draggableProgressBar = e => {
    let timelineWidth = videoTimeline.clientWidth;
    progressBar.style.width = `${e.offsetX}px`;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    currentVidTime.innerText = formatTime(mainVideo.currentTime);
}

volumeBtn.addEventListener("click", () => {
    if(!volumeBtn.classList.contains("fa-volume-high")) {
        mainVideo.volume = 0.5;
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        mainVideo.volume = 0.0;
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    volumeSlider.value = mainVideo.volume;
});

volumeSlider.addEventListener("input", e => {
    mainVideo.volume = e.target.value;
    if(e.target.value == 0) {
        return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
});

speedOptions.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
        mainVideo.playbackRate = option.dataset.speed;
        speedOptions.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

document.addEventListener("click", e => {
    if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
        speedOptions.classList.remove("show");
    }
});

fullScreenBtn.addEventListener("click", () => {
    container.classList.toggle("fullscreen");
    if(document.fullscreenElement) {
        fullScreenBtn.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    fullScreenBtn.classList.replace("fa-expand", "fa-compress");
    container.requestFullscreen();
});

speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));
pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
skipBackward.addEventListener("click", () => mainVideo.currentTime -= 5);
skipForward.addEventListener("click", () => mainVideo.currentTime += 5);
mainVideo.addEventListener("play", () => playPauseBtn.classList.replace("fa-play", "fa-pause"));
mainVideo.addEventListener("pause", () => playPauseBtn.classList.replace("fa-pause", "fa-play"));
playPauseBtn.addEventListener("click", () => mainVideo.paused ? mainVideo.play() : mainVideo.pause());
videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));








