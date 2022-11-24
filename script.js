function timeShower() {
    var timeNow = new Date();

console. log(timeNow);

document.querySelector(".hours").textContent = timeNow.getHours();
document.querySelector(".minutes").textContent = timeNow.getMinutes();
document.querySelector(".seconds").textContent = timeNow.getSeconds();
    
}
setInterval(function() {
    timeShower();

},1000)
