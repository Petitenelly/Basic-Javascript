// Un prompt s'affiche avec la question suivante

let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
// Utilisateur rentre un nombre (par ex 5)

function Pyramid(number) {
    let f
    for(i = 1; i <= number; i++)
    {
        f = `${" ".repeat(number - i)}` + `${"#".repeat(i)}`; 
        console.log(f);
    }
}


console.log(`Voici une pyramide de ${floors} étages`) 
Pyramid(floors);