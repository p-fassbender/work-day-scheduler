var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a")

// displays and updates the displayed time every second
function update() {
    $("#currentDay").text(currentTime);
}
setInterval(update, 1000);