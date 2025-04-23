let hours = "00";
let minutes = "00";
let seconds = "00";
let milliseconds = "00";
let day = "00";
let intervalId = null;
let isRunning = false;

let stopwatch = document.createElement("div");
stopwatch.style.width = "300px"; // Increased width to fit all fields
stopwatch.innerHTML = `${day}:${hours}:${minutes}:${seconds}:${milliseconds}`;
stopwatch.style.fontSize = "48px";

document.body.appendChild(stopwatch);

let startButton = document.createElement("button");
startButton.innerHTML = "Start";
document.body.appendChild(startButton);

let stopButton = document.createElement("button");
stopButton.innerHTML = "Stop";
stopButton.disabled = true; // Initially disabled
document.body.appendChild(stopButton);

let resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
document.body.appendChild(resetButton);

//timestamp

timestampButton = document.createElement("button")
timestampButton.innerHTML = "Get_Timestamp";
timestampButton.disabled=true
document.body.appendChild(timestampButton);


timestamp= document.createElement("h2")
timestamp.innerHTML="Timestamps:"
timestamp.style.borderBottom="2px solid black"
document.body.appendChild(timestamp)



function updateDisplay() {
    stopwatch.innerHTML = `${day}:${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function increaseTime() {
    milliseconds = String(Number(milliseconds) + 1).padStart(2, '0');
    if (Number(milliseconds) > 99) {
        milliseconds = "00";
        seconds = String(Number(seconds) + 1).padStart(2, '0');
        if (Number(seconds) > 59) {
            seconds = "00";
            minutes = String(Number(minutes) + 1).padStart(2, '0');
            if (Number(minutes) > 59) {
                minutes = "00";
                hours = String(Number(hours) + 1).padStart(2, '0');
                if (Number(hours) > 23) {
                    hours = "00";
                    day = String(Number(day) + 1).padStart(2, '0');
                    if (Number(day) > 99) {
                        day = "00";
                    }
                }
            }
        }
    }
    updateDisplay();
}



startButton.addEventListener("click", () => {
    if (!isRunning) {
        intervalId = setInterval(increaseTime, 10);
        isRunning = true;
        startButton.disabled = true; // Disable the start button
        stopButton.disabled = false; // Enable the stop button
        timestampButton.disabled=false // Enable the timestamp button
        resetButton.disabled = false; // Enable the reset button
    }
});

stopButton.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(intervalId);
    day = "00";
    hours = "00";
    minutes = "00";
    seconds = "00";
    milliseconds = "00";
    isRunning = false;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
    timestampButton.disabled=true // Disable the timestamp button
    resetButton.disabled = true; // Disable the reset button
});


timestampButton.addEventListener('click', ()=> {
    let timestampText= document.createElement("p")
    timestampText.innerHTML=`${day}:${hours}:${minutes}:${seconds}:${milliseconds}`

    document.body.appendChild(timestampText);
})