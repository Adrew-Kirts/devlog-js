

var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
let celsius = kelvins - 273; //la variable celsius à comme valeur; la valeur de kelvins - 273

let fahrenheits = celsius * (1.8) + 32; //la variable fahrenheits à comme valeur; la valeur de celsius * 1.8 + 32

console.log(Math.floor(fahrenheits)); //on affiche la valeur de la variable fahrenheits en utilisant Math.floor qui renvoie le plus grand entier qui est inférieur ou égal à un nombre 