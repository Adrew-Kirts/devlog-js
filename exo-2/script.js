


//1.
let jourDeSemaine = "Nous sommes un jour de semaine";
let jourDeWeekend = "Nous sommes un jour de weekend";

//2.
const myDate = new Date(2023, 4, 23);
const day = myDate.getDay();

console.log(day);

if (day == 0 || day == 6){
    console.log(jourDeWeekend);
}
else {
    console.log(jourDeSemaine)
}

