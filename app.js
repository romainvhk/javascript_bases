// Initialisation de la variable + affichage dans l'inspecteur du navigateur
let nom = 'John';
console.log(nom);

nom = 'Jane';
console.log(nom);

// boucle for, la variable i = 1 et tant que i est inférieur ou égal à 10, on affiche i et on incrémente de 1.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// console.log() pour afficher un message dans l'inspecteur.
console.log("Bonjour tout le monde!")
console.log(3+4)
console.log(nom)

/* 
Initialisation des variables firstName et lastName.
dans la variable name, on ajoute les deux variables précédentes.
*/
let firstName = 'John';
let lastName = 'Doe';
let name = `${firstName} ${lastName}`
console.log(name)

// Initialisation de la variable age.
let age = 27
/* Si l'age est supérieur à 18, le message "vous êtes majeur" s'affiche.
Sinon, c'est le message "vous êtes mineur" qui s'affiche.
*/
if (age > 18) {
    console.log('Vous êtes majeur')
} else {
    console.log('Vous êtes mineur')
}

// Création du tableau couleur
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"]
/*
la boucle commence à 0 (i=0)
à chaque tour, on ajoute 1 à i.
la boucle se termine à la fin du tableau.
à chaque tour, on affiche la couleur à l'index indiqué par i
*/
for (let i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i])
    
}

//Création du tableau numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Ajout du chiffre 6 en dernière position.
numbers.push(6);
console.log(numbers);
// Suppression du dernier élément du tableau.
numbers.pop();
console.log(numbers);


/*
La fonction prend en paramètre a
Si a modulo 2 = 0 alors la fonction affiche pair
Sinon, elle affiche impair
*/
function pair (a){
    if (a % 2 === 0) {
        console.log("pair")
    }else {
        console.log("impair")
    }
}
pair(965)

/*
la fonction somme prend en paramètre a
elle initialise la variable sum qui prend 0 en valeur
pour chaque index du tableau, la fonction ajoutera à somme le nombre qui se trouve à l'index indiqué par i
elle affiche enfin le résultat de l'addition.
*/
function somme (a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]        
    }
    console.log(sum)
}

somme(numbers)

/*
la fonction prend en paramètre a
elle scinde la string et renvoie le résultat dans la variable split
le résultat est ensuite inversé et envoyé dans la variable reverse
enfin, la variable join crée une nouvelle string en concaténant la variable reverse
le resultat est enfin affiché dans la console
*/
function inverse (a) {
    let split = a.split("")

    let reverse = split.reverse()

    let join = reverse.join("")

    console.log(join)
}

inverse('hello world')
