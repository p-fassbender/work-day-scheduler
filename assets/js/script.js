var currentTime;


function update() {
    // gets the current moment time and adds it to the currentDay paragraph to display on the page
    currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentTime);

    // for each time block checks the hour and compares it to the currentTime and changes the class name accordingly
    $(".hour").each(function () {
        var time = moment($(this).text(), "Ha");
        if (moment().isBefore(time)) {
            $(this).siblings(".description").removeClass("past");
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").addClass("future");
        }
        else if (Math.abs(moment().diff(time, "hours")) < 1) {
            $(this).siblings(".description").removeClass("past");
            $(this).siblings(".description").removeClass("future");
            $(this).siblings(".description").addClass("present");
        }
        else {
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("future");
            $(this).siblings(".description").addClass("past");
        }
    });
}
setInterval(update, 1000);
