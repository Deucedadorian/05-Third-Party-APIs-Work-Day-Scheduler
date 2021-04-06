let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


let saveBttn = $(".save-icon");
let textBox = $("textarea");
let sibTextBox = saveBttn.siblings("textarea");
let containerEl = $(".container");
let textBox9am = $("#0");
let textBox10am = $("#1");


// TODO: make this function to render schedule
function renderLastRegistered() {

}

// function for handling clicks
function handleFormSubmit(event) {
    event.preventDefault();

    let btnClicked = $(event.target);

 
    console.log(btnClicked.siblings(textBox).val());
    

    // TODO: finish this
    let schedule = {
        plan9am: textBox9am.val().trim(),
        plan10am: textBox10am.val().trim(),
    }

    schedule.plan9am = btnClicked.siblings(textBox).attr("id");

    // test to save text in object
    console.log(schedule.plan9am + "here");


    localStorage.setItem("schedule", JSON.stringify(schedule));

    // if there is texted in textarea when save is clicked
    if (btnClicked.siblings("textarea").val() !== "") {
        // TODO: save textarea of sibs with clicked to object
        // localStorage
    }

}

saveBttn.on("click", handleFormSubmit);

// let time9am = moment()