
var futureDate= new Date("Oct 28, 2023, 10:00:00").getTime();
// by default time begins from 1 Jan 1970

setInterval(function(){
    var presentDate= new Date().getTime();
    var counter= futureDate - presentDate;

    days= Math.floor(counter/(1000*24*60*60))
    hours=Math.floor(counter%(1000*24*60*60)/(1000*60*60))
    minutes=Math.floor(counter%(1000*60*60)/(1000*60))
    seconds=Math.floor(counter%(1000*60)/(1000))

    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    document.getElementById("down").innerHTML=days+ "D: " + hours+ "H: " + minutes + "M: " + seconds + "S"

}, 1000);