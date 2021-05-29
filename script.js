let body = $("body");
let times = $(".times");
let rows = $(".row");

let today = moment();

$("#currentDay").text(today.format("dddd MMM Do"));

let currentHour = today.format("h");
let amOrpm = today.format("a");

$(document).ready(function(){
    rows.each(function() {
        let timings = $(this).children().eq(0).children().eq(0).text();
        let hourOfDay;
        let clockPosition;
        if(timings.length === 4){
            hourOfDay = timings.slice(0,2);
            clockPosition = timings.slice(2);
        }
        else{
            hourOfDay = timings.slice(0,1);
            clockPosition = timings.slice(1);       
        }

        if((hourOfDay === currentHour) && (amOrpm === clockPosition)){
            $(this).children().eq(1).addClass("present");
        }
        else if(currentHour === "12"){
            if(amOrpm === "am"){
                $(this).children().eq(1).addClass("future");
            }
            else{
                if(clockPosition === "pm"){
                    $(this).children().eq(1).addClass("future");
                }
                else{
                    $(this).children().eq(1).addClass("past");
                }
            }
            
        }
        else if(hourOfDay === "12"){
            if(clockPosition === "am"){
                $(this).children().eq(1).addClass("past");          
            }
            else{
                if(amOrpm === "am"){
                    $(this).children().eq(1).addClass("future");
                }
                else{
                    $(this).children().eq(1).addClass("past");
                }
            }
            
        }
        else if(clockPosition === amOrpm){
            if(parseInt(hourOfDay) < parseInt(currentHour)){
                $(this).children().eq(1).addClass("past");
            }
            else{
                $(this).children().eq(1).addClass("future");
            }
            
        }

        else if(clockPosition !== amOrpm){
            if(amOrpm === "pm"){
                $(this).children().eq(1).addClass("past");
            }
            else{
                $(this).children().eq(1).addClass("future");
            }
        }
        
    });
})

