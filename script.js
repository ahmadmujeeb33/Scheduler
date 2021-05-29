let body = $("body");
let times = $(".times");
let rows = $(".row");

let today = moment();

$("#currentDay").text(today.format("dddd MMM Do"));

let currentHour = today.format("h");
let amOrpm = today.format("a");
// console.log(" currentHour " + currentHour);
// console.log(" amOrpm " + amOrpm);


$(document).ready(function(){
    rows.each(function() {
        

        if(currentHour.length === 2){
            let timings = $(this).eq(0).eq(0).text();
            let hourOfDay = timings.slice(0,2);
            let clockPosition = timings.slice(2);
            if(hourOfDay === currentHour){
                $(this).addClass(present);
            }
        }
        else{
            let timings = $(this).children().eq(0).children().eq(0).text();
            console.log("timings " + timings);
            let hourOfDay = timings.slice(0,1);
            console.log("hourOfDay " + hourOfDay);
            let clockPosition = timings.slice(1);
            // console.log("hourOfDay " + hourOfDay);
            // console.log("currentHour " + currentHour);
            if(hourOfDay === currentHour){
                $(this).children().eq(1).addClass("present");
            }
        }
        
    });
})

// times.addClass('row hour');

// times.addClass('hour textarea saveBtn');
//times.addClass("saveBtn");






// body.addClass("hour");