//1. Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre de noms.
const numberOfName = prompt("Combien de noms souhaitez-vous inscrire ?");

//1.1 Utilisez une boucle pour demander à l'utilisateur de saisir chaque nom. Les noms saisis doivent être stockés dans un tableau.
const names = [];
for (let i = 0; i < parseInt(numberOfName); i++) {
    names.push(prompt("Ecrivez un nom"))
}

// 2. Concaténez plusieurs chaînes de caractères pour construire un message de confirmation contenant le nombre de noms saisis et la liste de ces noms. Si le nombre de noms est supérieur à 3, ajoutez une info supplémentaire au message (par exemple : "C'est beaucoup de noms !").
// 2.1 Affichez le message de confirmation dans la console.
if (parseInt(numberOfName)>3) {
    console.log(`Vous avez indiqué ${numberOfName} noms : ${names}, \nc'est beaucoup de noms !`)
}else {
    console.log(`Vous avez indiqué ${numberOfName} noms : ${names}`)
}

// 4. Écrivez une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console.
function showtab (tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i])  
    }
}

// 5. Appelez la fonction avec le tableau de noms en argument.
showtab(names)
