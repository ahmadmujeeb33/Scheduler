let textInfo = $(".textarea");
let rowsOfData = $(".row");

let infoOfEvents = {};
let info;

// localStorage.clear();


rowsOfData.on('click','.saveBtn',function(event){
    // console.log($(this).siblings().eq(1).val());
    // console.log("text " + $(this).siblings().eq(1).val());

    let key = $(this).siblings().eq(0).text();
    console.log(key)
    let val = $(this).siblings().eq(1).val();
    console.log(val);


    
    
    
    
    if(localStorage.getItem('values') === null){
        infoOfEvents[key] = val;
        localStorage.setItem('values',JSON.stringify(infoOfEvents));
    }
    else{
        infoOfEvents = JSON.parse(localStorage.getItem('values'));
        console.log("info" + infoOfEvents);
        infoOfEvents[key] = val;
        localStorage.setItem('values',JSON.stringify(infoOfEvents));

    }
})

  