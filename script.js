// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// ****THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// setting the current time to display in the #currentDay div 
$('#currentDay').text(moment());

// set variable for time
var t = moment();

// set variable for current hour
var h = t.hour();

// array of hours in schedule
var schedule = ["#event9", "#event10", "#event11", "#event12", "#event1", "#event2", "#event3", "#event4", "#event5"]
var scheduleHour = [9, 10, 11, 12, 1, 2, 3, 4, 5]

// for (let i = 0; i < schedule[i]; i++) {
// }

    // if else statements to determin the background color of the table cell
if (h === 9) {
    $("event9").css("background-color", "red");
} else if (h > 9) {
    $('#event9').css("background-color", "lightGrey"); 
} else if (h < 9) {
    $('#event9').css("background-color", "lightGreen");
} else {
    $('#event9').css("background-color", "yellow"); 
}





    

