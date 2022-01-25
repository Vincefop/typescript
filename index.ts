import { Coucou } from "./coucou"
let coucou = new Coucou()

coucou.foo()

let prenom: string = "Vincent";
let phrase: string = `coucou ${prenom}`;
let nombre : number = 12;
let vrai: boolean = true;

console.log(phrase);

let tableau: string[] = ["a", " dfef"];

let tuple: [number, string];

tuple = [1, "Vincent"]; // Un ensemble de données prédédini. 
//le nombre de colonnes sont prédéfinis
//le type est prédéfini

enum Fruit {"Banane"=2,"Kiwi","Pomme"} 
let premierFruit: Fruit = Fruit.Banane;

console.log(premierFruit);

let valeur: any;

let utilPourLeRetourDeFonction: void;
let utilPourLeRetourDeFonction2: null;

//Retour never pour exception et boucles infinis

const age: number = 18;

let utilisateur: any = {
    nom: "Jean",
    age: 18
}
console.log(utilisateur);


utilisateur = { ...utilisateur, age: 25}
//...permet de déstructurer utilisateur pour pouvoir faire des modifs
//identique à

utilisateur = {
    age: 25,
    nom: utilisateur.nom
}
console.log(utilisateur);

class Maison{
    porte: string;
    couleur: string;

    constructor(porte: string, couleur: string) {
        this.couleur = couleur;
        this.porte = porte;
    }
}

let maison1 = new Maison("5 points","rouge");

let maison2 = maison1;

maison2.couleur = "bleue";

console.log(maison1);