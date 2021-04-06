let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


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

let scheduleArray = [];

scheduleElArray = [
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
        scheduleArray.push(scheduleElArray[i].val(localStorage.getItem("time block " + i)));

    }
}

// function for handling clicks
function handleFormSubmit(event) {
    event.preventDefault();

    let btnClicked = $(event.target);

    let targetText = btnClicked.siblings("textarea");
 
    let targetTimeBlock = targetText.attr("data-position"); 
    

    // 
    scheduleArray = [
        schedule9am.val(),
        schedule10am.val(),
        schedule11am.val(),
        schedule12pm.val(),
        schedule1pm.val(),
        schedule2pm.val(),
        schedule3pm.val(),
        schedule4pm.val(),
        schedule5pm.val(),
    ];

    

// strings of the schedule for each hour saved in an array


    localStorage.setItem("time block " +  targetTimeBlock, scheduleArray[targetTimeBlock]);
    // localStorage.setItem("schedule", JSON.stringify(schedule));

}

saveBttn.on("click", handleFormSubmit);
renderLastRegistered();

// let time9am = moment()