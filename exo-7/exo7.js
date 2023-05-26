console.log("exo-7");

let translateType = {
  videoGame: "jeu vidéo",
  car: "voiture",
  house: "maison",
  show: "spectacle",
  game: "jeu",
};

for (let i = 0; i < jsonDatas.length; i++) {
  jsonDatas[i].translatedType = translateType[jsonDatas[i].type];
  //console.log(jsonDatas[i]);
  var mainContainer = document.getElementById("myData");
  let div = document.createElement("div");
  div.innerHTML =
    "Nom: " +
    jsonDatas[i].name +
    " <br>type: " +
    jsonDatas[i].translatedType +
    " <br>description: " +
    jsonDatas[i].description +
    " <br>prix: " +
    jsonDatas[i].price +
    " <br>quantité disponible: " +
    jsonDatas[i].quantity +
    "<br><br>";

  mainContainer.appendChild(div);
}

function displayFilteredValues(filteredValues) {
  var resultDiv = document.getElementById("myData");
  resultDiv.innerHTML = ""; // Effacer resultats precedents

  if (filteredValues.length > 0) {
    // Montrer valeurs recherchés
    filteredValues.forEach(function (obj) {
      var div = document.createElement("div");
      div.innerHTML =
        "Nom: " +
        obj.name +
        " <br>Type: " +
        obj.translatedType +
        " <br>Description: " +
        obj.description +
        " <br>Prix: " +
        obj.price +
        " <br>Quantité disponible: " +
        obj.quantity +
        "<br><br>";

      resultDiv.appendChild(div);
    });
  } else {
    resultDiv.innerHTML = "No objects found for the entered type.";
  }
}

//Event listener pour valider search avec entree
var typeInput = document.getElementById("typeInput");
typeInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    filterJson();
  }
});

function filterJson() {
  var input = document.getElementById("typeInput").value.toLowerCase(); // Get the entered type in lowercase

  // filtre json data par rapport à valeur entrée
  var filteredValues = jsonDatas.filter(function (obj) {
    var originalType = obj.type.toLowerCase();
    var translatedType = translateType[originalType]
      ? translateType[originalType].toLowerCase()
      : "";
    return originalType.includes(input) || translatedType.includes(input);
  });

  // Map the filtered values with translated types
  filteredValues.forEach(function (obj) {
    obj.translatedType = translateType[obj.type];
  });

  displayFilteredValues(filteredValues);
}
