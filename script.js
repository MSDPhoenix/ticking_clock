function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
setInterval( function() {
    let time = getSecondsSinceStartOfDay();
    console.log("seconds",time%60);
    console.log("minutes",(Math.floor(time/60)%60));
    console.log("hour",(Math.floor(time/60/60)%60));
    let seconds = document.getElementById("seconds");
    let minutes = document.getElementById("minutes");
    let hour = document.getElementById("hour");
    seconds.style.transform ="rotate("+(time*6+180)+"deg)";
    minutes.style.transform ="rotate("+(time*6/60+180)+"deg)";
    hour.style.transform = "rotate("+(time*6/60/60+180)+"deg)";
}, 1000);