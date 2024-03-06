


let timeleft = 10;
let startTime = 0;
let currentTime = 0;

// Assuming params is defined here or brought in from another script
let params = { minute: 5 }; // Example parameter

function convertSeconds(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
    noCanvas();
    startTime = millis();

    if (params.minute) {
        let min = params.minute;
        timeleft = min * 60;
    }

    let timer = select('#timer');
    timer.html(convertSeconds(timeleft - currentTime));

    let interval = setInterval(timeIt, 1000);

    function timeIt() {
        currentTime = Math.floor((millis() - startTime) / 1000);
        timer.html(convertSeconds(timeleft - currentTime));
        if (currentTime >= timeleft) {
            clearInterval(interval);
            // Actions to do after the countdown finishes
        }
    }
}

// Make sure to call setup to initialize everything
setup();
