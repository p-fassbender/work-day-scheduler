var currentTime;
var eventObjArray = ["","","","","","","","",""];

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

// sets the text of the description text area to be the entered text upon clicking off of textarea
$(".description").on("blur", function () {
    var text = $(this).val().trim();
    $(this).text(text);
})

// saves the individual schedule event text to an array and saves that array to localstorage
function saveEvent(textArea) {
    var eventObj = {
        eventText: textArea.text(),
        index: parseInt(textArea.attr("id"))
    }
     eventObjArray[eventObj.index] = eventObj;
     localStorage.setItem("scheduled-events", JSON.stringify(eventObjArray));
}

// upon clicking save button calls saveEvent function
$(".saveBtn").on("click", function () {
    saveEvent($(this).siblings("textarea"));
});

// loads saved schedule events from localstorage and puts them in an array to be displayed
function loadSchedule() {
    var savedEvents = JSON.parse(localStorage.getItem("scheduled-events"))
    //eventObjArray = savedEvents;
    for (let i = 0; i < savedEvents.length; i++) {
        eventObjArray[i] = savedEvents[i];
    }
    displaySchedule(eventObjArray);
}

// displays the scheduled events from eventObjArray
function displaySchedule() {
    for (let i = 0; i < eventObjArray.length; i++) {
        $("#"+ i).text(eventObjArray[i].eventText);
    }
}

loadSchedule();