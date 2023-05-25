// Cours 8 de Codecademy
console.log("exo-6");
/*
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);
*/



let team = {
    players: [
        {
            firstName: "Pablo",
            lastName: "Escobar",
            age: 73
        }
    ],
    games: [
        {
            opponent: "Straight Flyers",
            teamPoints: 21,
            opponentPoints: 14,
        }
    ],
};

let addPlayer = (firstName, lastName, age) => {
    team.players.push({ firstName, lastName, age });
}
let addGame = (opponent, teamPoints, opponentPoints) => {
    team.games.push({ opponent, teamPoints, opponentPoints });
}

addPlayer("Adrew", "Kirts", 35);
addPlayer("Steve", "Jobs", 86);
addPlayer("John", "Kirts", 35);

addGame("Sharp Shooters", 18, 21);
addGame("Nitpickers", 21, 05);
addGame("Killteam", 14, 21);

console.log("Players:");
for (let i = 0; i < team.players.length; i++) {
    console.log(team.players[i]);
}
console.log("Teams:");
for (let i = 0; i < team.games.length; i++) {
    console.log(team.games[i]);
}

let teamPointsTotal = null;
for (let i = 0; i < team.games.length; i++) {
    teamPointsTotal = teamPointsTotal + team.games[i].teamPoints;
}
console.log("Total team points:", teamPointsTotal);

let averageOpponentsPoints = null;
for (let i = 0; i < team.games.length; i++) {
    averageOpponentsPoints = averageOpponentsPoints + team.games[i].opponentPoints;
}
console.log("Average opponents points:", averageOpponentsPoints);


let oldestPlayer = null;
for (let i = 0; i < team.players.length; i++) {
    if (oldestPlayer < team.players[i].age)
        oldestPlayer = team.players[i].age;
}
console.log("The oldest player is", oldestPlayer, "years old");

let playerNames = [];
for (let i = 0; i < team.players.length; i++) {
    playerNames.push(team.players[i].firstName);
}
console.log("Players names sorted alphabetically:",playerNames.sort());
