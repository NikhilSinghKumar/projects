function updateTime(){
    var dateTime= new Date();
    var hours=dateTime.getHours();
    var minutes=dateTime.getMinutes();
    var seconds=dateTime.getSeconds();
    var am_or_pm=document.getElementById("am-or-pm"); 

    if(hours>=12){
        am_or_pm.innerhtml="PM";
    }
    else{
        am_or_pm.innerhtml="AM";
    }
    if(hours>12){
        hours=hours-12;
    }
    
    hours=(hours<10)? "0"+ hours : hours;
    minutes=(minutes<10)? "0"+ minutes : minutes;
    seconds=(seconds<10)? "0"+ seconds :seconds;

    document.getElementById("hr").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;
}

setInterval(updateTime, 1000);

