
const isTesting = false;

//1.
let jourDeSemaine = "Nous sommes un jour de semaine";
let jourDeWeekend = "Nous sommes un jour de weekend";

let myDate = null;



//2.
if (isTesting == true){
    myDate = new Date(prompt("Date: YYYY, MM, DD, HH, MM, SS"));
}
else {

    myDate = new Date();
    let date = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}

let day = myDate.getDay();
let time = myDate.getHours();

console.log("day", day);
console.log("time:",time);

if (day == 5 && time >=17){
    console.log(jourDeWeekend);
}
else if (day == 0 || day == 6){
    console.log(jourDeWeekend);
}
else if (day == 1 && time<9){
    console.log(jourDeWeekend);
}
else {
    console.log(jourDeSemaine)
}



/*3. const time = myDate.getHours();
if (day == 5 && time >=17){
    console.log(jourDeWeekend);
}*/


/*4.
else if (day == 1 && time<9){
    console.log(jourDeWeekend);
}*/


/*
isTesting
if (isTesting == true){
    myDate = new Date(prompt("Date: YYYY, MM, DD, HH, MM, SS"));
}
else {

    myDate = new Date();
    let date = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}
*/



