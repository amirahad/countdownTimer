const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');
const button = document.querySelector('#btn').addEventListener('click', changeHex);
const body = document.querySelector('body');
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const value = document.querySelector('#hex-value');
 
const newYears = "1 jan 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEL.innerHTML = formatTime(days);
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function changeHex(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[index]
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
}

countdown();
setInterval(countdown, 1000);