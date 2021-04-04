//jshint esversion:6

// module.exports="Hello World";
module.exports.getDate=getDate;
exports.getDate=getDate;

function getDate(){

const today=new Date();
   
var options={
    weekday:"long",
    day:"numeric",
     month:"long"
}

var day=today.toLocaleDateString("en-US",options);
return day;
}
module.exports.getDay=getDay;
function getDay(){

    const today=new Date();
       
    var options={
        weekday:"long",
    }
    
    var day=today.toLocaleDateString("en-US",options);
    return day;
    }