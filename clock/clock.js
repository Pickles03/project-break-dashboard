/*

<div id="clock" class="clock">
        <p id="time" class="time">Time: </p>
        <p id="date" class="date">Date: </p>
    </div>

*/

currentTime = document.getElementById('time');
currentDate = document.getElementById('date');

const updateClock = () => {
    const clock = new Date ();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours; //this adds a leading zero to the hours if it is less than 10
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    const time = `${hours}:${minutes}:${seconds}`;
    currentTime.innerHTML = `${time}`;
};
setInterval(updateClock, 1000); //this will call the function every second


const updateDate = () => {
    const currentDay = new Date();
    currentDay.setDate(currentDay.getDate());
    const options = {day: 'numeric', month: 'numeric', year: 'numeric'};
    const date = currentDay.toLocaleDateString('spain', options);
    currentDate.innerHTML = `${date}`;
};
setInterval(updateDate, 1000); 
