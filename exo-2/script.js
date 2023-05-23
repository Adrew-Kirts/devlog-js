


//1.
let jourDeSemaine = "Nous sommes un jour de semaine";
let jourDeWeekend = "Nous sommes un jour de weekend";

//2.
const myDate = new Date(2023, 4, 22, 5, 0, 0);
const day = myDate.getDay();
const time = myDate.getHours();

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




