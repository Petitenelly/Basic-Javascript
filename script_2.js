// Un prompt s'affiche avec la question suivante
let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Utilisateur rentre un nombre (par ex 4)
function factorial(number) 
{
// Si number = 0 la factorielle retournera 1 sinon calcul de la factorielle 
 if (number === 0)
  {
     return 1;
  }
  // calcul récursif
  return number * factorial(number-1);
}

// Dans la console le résultat suivant est affiché
console.log(`Le résultat est : ${factorial(number)}`);