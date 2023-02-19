setInterval(() => {
    date= new Date();
    hours= date.getHours();
    minutes= date.getMinutes();
    seconds= date.getSeconds();
    hoursRotation= 30*hours + minutes/2;
    minutesRotation= 6*minutes;
    secondsRotation= 6*seconds;

    hour.style.transform= `rotate(${hoursRotation}deg)`;
    minute.style.transform= `rotate(${minutesRotation}deg)`;
    second.style.transform= `rotate(${secondsRotation}deg)`;
}, 1000);