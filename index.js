let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()



var showTime = ()=>{
    let timeZone = document.getElementById("time")
    let yearShow = document.getElementById('year')

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let sec  = date.getSeconds();
    let year = date.getFullYear()
    console.log(year)
    // let day = date.getDay();
    var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Fri";
weekday[6] = "Saturday";

var n = weekday[date.getDay()];
    var time = timeZone.innerHTML = `${hour}:${zero(minute)}:${zero(sec)}||${n}`;
    let yearfinal = yearShow.innerText = year
    setTimeout(showTime, 1000);
}
if(hour<12){
   
    document.getElementById("time-wish").innerText = "Good Morning,"
 }else if (hour<17){
   
   document.getElementById("time-wish").innerText = "Good Afternoon,"
 }else{
  
   document.getElementById("time-wish").innerText = "Good Evening,"
 }

// let timeWish = document.getElementById("time-wish")
// if(hour>12){
//     timeWish.innerHTML = 'Good Afternoon'
// }
   // function to  add zero  when below 10
   function zero(n){
    return(parseInt(n, 10) < 10 ? "0" : "") + n 
  }
showTime()