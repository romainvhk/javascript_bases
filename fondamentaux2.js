/*Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. 

Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.

Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :


```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```
Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.
Appelez la fonction avec le nombre saisi par l'utilisateur en argument.
*/

// demander d'écrire un nombre entre 1 et 10
// if > afficher une erreur + do while
// faire une fonction qui affiche la table de multiplication grâce à une boucle for

let numberChoose = prompt("Indiquez un nombre compris entre 1 et 10");

if(numberChoose > 10) {
    do {
    alert("Votre nombre n'est pas compris entre 1 et 10, veuillez en choisir un autre")
    numberChoose = prompt("Indiquez un nombre compris entre 1 et 10");
} while (parseInt(numberChoose) > 10)
}

function multiple (number) {
    for (let i = 0; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`)
    }
}
multiple(numberChoose)