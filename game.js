// Définir le nombre aléatoire à deviner
//OPTION 1
const min = parseInt(prompt("Entrez la valeur minimale de l'intervalle :"));
const max = parseInt(prompt("Entrez la valeur maximale de l'intervalle :"));
const numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;

const guessButton = document.getElementById("guess-button");
guessButton.style.backgroundColor = "blue";
guessButton.style.color = "white";



guessButton.addEventListener("click", function(event) {

    event.preventDefault();

    //OPTION 2 ET OPTION 3
    const maxTries = 3; // Nombre maximum d'essais autorisés
    const Userguesses = []; // Tableau historique
    for (let tries = maxTries; tries > 0; tries--) {
        const userGuess = prompt(`Historique des essais : ${Userguesses.join(", ")}\nIl vous reste ${tries} essai(s). Entrez un nombre :`);
        Userguesses.push(userGuess);

        if (userGuess == numberToGuess) {
            guessButton.textContent = "Bravo 😁, tu as trouvé le bon nombre !";
            guessButton.style.backgroundColor = "green";
            guessButton.style.color = "white";
            break;
        } else {
            guessButton.textContent = "Désolé 😕, ce n'est pas les bons nombres. Réessaye !";
            guessButton.style.backgroundColor = "red";
            guessButton.style.color = "white";
        }
    }
});
