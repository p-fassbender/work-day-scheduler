var currentTime;

// displays and updates the displayed time every second
function update() {
    currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);
}
setInterval(update, 1000);