let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

let saveBttn = $(".save-icon");
let containerEl = $(".container");
let schedule9am = $("#9AM");
let schedule10am = $("#10AM");
let schedule11am = $("#11AM");
let schedule12pm = $("#12PM");
let schedule1pm = $("#1PM");
let schedule2pm = $("#2PM");
let schedule3pm = $("#3PM");
let schedule4pm = $("#4PM");
let schedule5pm = $("#5PM");

let scheduleElArray = [
    schedule9am,
    schedule10am,
    schedule11am,
    schedule12pm,
    schedule1pm,
    schedule2pm,
    schedule3pm,
    schedule4pm,
    schedule5pm,
];

renderLastRegistered();

// TODO: make this function to render schedule
function renderLastRegistered() {
    for (i = 0; i < scheduleElArray.length; i++) {
        scheduleElArray[i].val(localStorage.getItem("time block " + i));

    }
}

// For coloring the past, present, and future time blocks

let now = moment().format("kk");
for (let i = 0; i < scheduleElArray.length; i++) {

    if(now > scheduleElArray[i].attr("data-hour")) {
        scheduleElArray[i].addClass("past");

    } else if (now === scheduleElArray[i].attr("data-hour")) {
        scheduleElArray[i].addClass("present");

    } else {

        scheduleElArray[i].addClass("future");
    }
}


// function for handling clicks
function handleFormSubmit(event) {
    event.preventDefault();

    let btnClicked = $(event.currentTarget);

    let targetText = btnClicked.siblings("textarea");
 
    let targetTimeBlock = targetText.attr("data-position");
    console.log(targetTimeBlock + "should be here");

    localStorage.setItem("time block " +  targetTimeBlock, scheduleElArray[targetTimeBlock].val());
    // localStorage.setItem("schedule", JSON.stringify(schedule));

}

saveBttn.on("click", handleFormSubmit);
renderLastRegistered();

// let time9am = moment()