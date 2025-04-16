

currentTime = document.getElementById('time');
currentDate = document.getElementById('date');
const greeting = document.getElementById('greeting');

const updateClock = () => {
    const clock = new Date ();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours; 
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds}`;

    currentTime.innerHTML = `${time}`;

    if (hours >= 6 && hours < 10) {
        greeting.innerHTML = "Good Morning!";
    } else if (hours >= 10 && hours < 12) {
        greeting.innerHTML = "Hope your day is going well!";
    }
    else if (hours >= 12 && hours < 14) {
        greeting.innerHTML = "Maybe take a break?";
    } else if (hours >= 14 && hours < 17) {
        greeting.innerHTML = "That lunch was delicious!";
    } else if (hours >= 17 && hours < 20) {
        greeting.innerHTML = "Good Evening!";
    } else {
        greeting.innerHTML = "Good Night 🌙!";
    }
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
