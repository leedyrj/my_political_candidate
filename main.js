//challenge 1 - my code
var missionHeader = document.createElement("h1");
var missionStatement = document.createElement("p");
var headerText = document.createTextNode("Mission Statement");
var statementText = document.createTextNode("To be a good legislator");
missionHeader.appendChild(headerText);
missionStatement.appendChild(statementText);

var element = document.getElementById("candidate--container");
var elementTwo = document.querySelector("p");
element.appendChild(missionHeader);
element.appendChild(missionStatement);

/*Challenge 1 - Jisie's code
const articleRef = document.querySelector("#candidate-article");
let paragraphElement = document.createElement("p");
let paragraphTextNode = document.createTextNode("Made up mission statement");

paragraphElement.appendChild(paragraphTextNode);
articleRef.appendChild(paragraphElement);