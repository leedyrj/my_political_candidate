const article = document.querySelector("article");
const missionStatement = document.createTextNode("Mission Statement");
article.append(missionStatement);

const statement = document.createTextNode(": To be a good legislator.")
article.appendChild(statement)

const h3 = document.querySelector("article");
const att = document.createAttribute("class");
att.value = "congressional-district";
h3.setAttributeNode(att);
document.write("5th Congressional District");

console.log("still working")