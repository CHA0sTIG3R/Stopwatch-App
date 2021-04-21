let counter = 0;

let stop;
let timed = 0;
const elem = document.getElementById('time');
let Btn = document.getElementsByClassName('btn');
let startBtn = Btn[0];
let stopBtn = Btn[1];
let resetBtn = Btn[2];

stopBtn.style.display = 'none';
resetBtn.style.display = 'none';
const timeCount = (st) => {
    let hr = Math.floor(counter / 360000);
    let s = Math.floor((counter % 6000) / 100);
    let m = Math.floor((counter % 360000) / 6000);
    let ms = Math.floor(counter % 100);
    if (hr < 10) {
        hr = `0${hr}`
    } else {
        hr = hr
    }
    if (m < 10) {
        m = `0${m}`
    } else {
        m = m
    }
    if (s < 10) {
        s = `0${s}`
    } else {
        s = s
    }
    if (ms < 10) {
        ms = `0${ms}`
    } else {
        ms = ms
    }
    counter++

    elem.innerHTML = `${hr}:${m}:${s}.${ms}`
}

startTimer = () => {
    timed = 1;
    let stat = Date.now();
    stop = setInterval(timeCount, 10 - (Date.now() - stat));

    startBtn.disabled = true;
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline';
    resetBtn.style.display = 'inline';
}


stopTimer = () => {
    clearInterval(stop);
    timed = 0;

    startBtn.disabled = false;
    startBtn.innerHTML = 'Resume';
    startBtn.style.display = 'inline';
    stopBtn.style.display = 'none';
    resetBtn.style.display = 'inline';
}

resetTimer = () => {
    clearInterval(stop);
    counter = 0;
    elem.innerHTML = '00:00:00';
    startBtn.disabled = false;
    startBtn.innerHTML = 'Start';
    startBtn.style.display = 'inline';
    stopBtn.style.display = 'none';
    resetBtn.style.display = 'none';
}