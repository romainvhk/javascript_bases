
//1. Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. 
let numberChoose = prompt("Indiquez un nombre compris entre 1 et 10");

// 2. Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.
if(numberChoose > 10) {
    do {
    alert("Votre nombre n'est pas compris entre 1 et 10, veuillez en choisir un autre")
    numberChoose = prompt("Indiquez un nombre compris entre 1 et 10");
} while (parseInt(numberChoose) > 10)
}
// 3.1Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :
// 3.2 Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.
function multiple (number) {
    for (let i = 0; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`)
    }
}

// Appelez la fonction avec le nombre saisi par l'utilisateur en argument.
multiple(numberChoose)