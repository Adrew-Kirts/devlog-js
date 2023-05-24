// you can write js here

console.log('exo-4');

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

let poppedLastWord = secretMessage.pop();

secretMessage.push("to", "learn");

secretMessage[6] = "right";

let poppedFirstword = secretMessage.shift();

let newFirstWord = secretMessage.unshift("Programming");

secretMessage.splice(5, 5, "know", "you");

console.log(secretMessage.join());