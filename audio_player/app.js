const getaudioscreen = document.getElementById('audioscreen');
const playbtn = document.getElementById('play'),
    prevbtn = document.getElementById('prev'),
    nextbtn = document.getElementById('next'),
    stopbtn = document.getElementById('stop');

const getprogress = document.getElementById('progress'),
    getprogressbar = document.getElementById('progress-bar');

const getvolprogress = document.getElementById('volumeprogress');
const getdisplaytime = document.getElementById('displaytime');

const audios = ['sample1', 'sample2', 'sample3'];

let curridx = 0;

// loadaudio(audios[curridx]);  // sample1
// console.log(audio[curridx]);

function loadaudio(audios) {
    getaudioscreen.src = `./sources/${audios}.mp3`;
}

// play audio and change icon
function playaudio() {
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getaudioscreen.play(); // default function
}

// pause audio and change icon
function pauseaudio() {
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getaudioscreen.pause(); // default function
}

// play and pause audio
function playandpauseaudio() {
    // paused is defalut keywork for audio/video
    if (getaudioscreen.paused) {
        getaudioscreen.play();
    } else {
        getaudioscreen.pause();
    }
}


// next audio
function nextaudio() {
    curridx++;
    if (curridx > audios.length - 1) {
        curridx = 0;
    }
    loadaudio(audios[curridx]);
    playaudio();
}



// previous audio
function previousaudio() {
    curridx--;
    if (curridx < 0) {
        curridx = audios.length - 1;
    }
    loadaudio(audios[curridx]);
    playaudio();
}


//update audio progress
function updateprogress(e) {
    // console.log(e.target);
    // console.log(e.target.duration);
    // console.log(e.target.currentTime);

    // const duration = e.target.duration;
    // const currenttime = e.target.currentTime;
    // console.log(getduration, getcurrenttime);

    // const { duration, currentTime } = e.target;
    // console.log(duration, currentTime);

    const { duration } = e.target;
    const { currentTime } = e.target;
    // console.log(duration, currentTime);

    if (currentTime === 0) {
        getprogressbar.style.width = '0%';
    } else {
        const progresspercent = (currentTime / duration) * 100;
        // console.log(progresspercent);
        getprogressbar.style.width = `${progresspercent}%`;
    }

    //forward
    // const mins = Math.floor(currentTime/60);
    // const secs = Math.floor(currentTime%60);

    // backward
    const mins = Math.floor((duration - currentTime) / 60);
    const secs = Math.floor((duration - currentTime) % 60);
    // console.log(typeof mins); // number

    const minutevalue = mins.toString().padStart(2, '0'); // if you use padStart() concat number must be string
    // console.log(minutevalue);
    const secondvalue = secs.toString().padStart(2, '0');

    getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;
}


//stop audio
function stopaudio() {
    getaudioscreen.pause();
    getaudioscreen.currentTime = 0;
}

// change volume
function volumecontrol() {
    // console.log(getvolprogress.value);
    // console.log(getaudioscreen.volume); // 1

    //volume is default key from audio/video

    getaudioscreen.volume = getvolprogress.value / 100;
    // console.log(getaudioscreen.volume);
    // 1 is default(100%)
    // 0 is Mute(0%)
}

function progressaudioclick(e) {
    // console.log(e.target);
    // console.log(this);

    const width = this.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const getduration = getaudioscreen.duration;
    // console.log(getduration);

    getaudioscreen.currentTime = (clickx / width) * getduration;
    // console.log(getaudioscreen.currentTime);
}

getaudioscreen.addEventListener('timeupdate', updateprogress);
getaudioscreen.addEventListener('play', playaudio);
getaudioscreen.addEventListener('pause', pauseaudio);

playbtn.addEventListener('click', playandpauseaudio);
nextbtn.addEventListener('click', nextaudio);
prevbtn.addEventListener('click', previousaudio);
stopbtn.addEventListener('click', stopaudio);
getvolprogress.addEventListener('change', volumecontrol);
getprogress.addEventListener('click', progressaudioclick);