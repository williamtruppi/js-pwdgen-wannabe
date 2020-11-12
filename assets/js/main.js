var name = prompt("Inserisci il tuo nome");
var surname = prompt ("inserisci il tuo cognome")
var favColor = prompt ("Qual è il tuo colore preferito?")


var password = name + surname + favColor;
document.getElementById("password").innerHTML = "La tua password è: " + password + "20";