/*Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre de noms.

Utilisez une boucle pour demander à l'utilisateur de saisir chaque nom. Les noms saisis doivent être stockés dans un tableau.

Concaténez plusieurs chaînes de caractères pour construire un message de confirmation contenant le nombre de noms saisis et la liste de ces noms. Si le nombre de noms est supérieur à 3, ajoutez une info supplémentaire au message (par exemple : "C'est beaucoup de noms !").

Affichez le message de confirmation dans la console.

Écrivez une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console.
Appelez la fonction avec le tableau de noms en argument.
*/

// saisir un nombre de noms : prompt()
// boucle for, le nombre de noms, ajouter les noms dans un tableau. Creer le tableau avant
// if nombre de noms < 4 afficher "vous avez ecrit nombre de noms : tableau"

const numberOfName = prompt("Combien de noms souhaitez-vous inscrire ?")
const names = []

for (let i = 0; i < parseInt(numberOfName); i++) {
    names.push(prompt("Ecrivez un nom"))
}

if (parseInt(numberOfName) === 1) {
    console.log(`Vous avez indiqué ${numberOfName} nom : ${names}`)
} else if (1 < numberOfName < 4){
    console.log(`Vous avez indiqué ${numberOfName} noms : ${names}`)
} else {
    console.log(`Vous avez indiqué ${numberOfName} noms : ${names} \n C'est beaucoup de noms !`)
}


