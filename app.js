const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024,10,22,22,54,15);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minis = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
console.log(months[month]);

let weekday = futureDate.getDay();//it gives weekday
console.log(weekdays[weekday]);



// Use backticks for template literals
giveaway.textContent = `giveaway ends on  ${weekdays[weekday]}, ${date} ${months[month]} ${year} ${hours}:${minis} am`;

//future time in miliseconds
const futureTime = futureDate.getTime();


function getRemainTime(){
    const today = new Date().getTime();
    
    const t = futureTime - today;
    console.log(t);
    //1s = 1000ms
    //1min = 60s
    //1hr = 60min
    //1d = 24hr

    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinit = 60*1000;
    const oneSec = 1000;

    let remainDays = Math.floor(t / oneDay); //give the integer value
    let remainHours = Math.floor( (t % oneDay) / oneHour);
    let remainMinit = Math.floor( (t % oneHour) / oneMinit);
    let remainSec = Math.floor((t % oneMinit)/oneSec);

    //set values array
    const value = [remainDays,remainHours,remainMinit,remainSec];

    function format(item){
        if(item<10){
            return (item = `0${item}`)
        }
        return item

    }

    items.forEach(function(item,index){
        item.innerHTML = format(value[index]);
    });

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }


}
//countdown
let countdown = setInterval(getRemainTime,1000);

getRemainTime();