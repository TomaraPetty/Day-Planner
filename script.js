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

// set schedule objects with hour of time block and corrisponding id. 
var schedule = [
    {
        hour: 9,
        e: '#event9'
    },
    {
        hour: 10,
        e: '#event10'   
    }, 
    {
        hour: 11,
        e: '#event11'
    }, 
    {
        hour: 12,
        e: '#event12'
    }, 
    {
        hour: 13,
        e: '#event1'
    },
    {
        hour: 14,
        e: '#event2'
    },
    {
        hour: 15,
        e: '#event3'
    },
    {
        hour: 16,
        e: '#event4'
    },
    {
        hour: 17,
        e: '#event5'
    }
]

for (let i = 0; i < schedule[i].hour; i++) {

       // if else statements to determin the background color of the table cell
if (h === schedule[i].hour) {
    $(schedule[i].e).css("background-color", "red");
} else if (h > schedule[i].hour) {
    $(schedule[i].e).css("background-color", "lightGrey"); 
} else if (h < schedule[i].hour) {
    $(schedule[i].e).css("background-color", "purple");
} else {
    $(schedule[i].e).css("background-color", "yellow"); 
}
}
