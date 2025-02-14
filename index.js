function test_var(){
    if(true){
        var x = 10;
    }
        console.log(x);
    
}
test_var();

/*function test_const(){
    if(true){
        const x = 10;
    }
        console.log(x);
    
}*/
//test_const();
let x = 10;
function test_let(){
    if(true){
        console.log(x);
    }
        
    
}
test_let();

const add = (a,b) => a + b;
console.log( add(1,2) );

const nom = "Ricardo";
console.log(`hello ${nom}`);


const tableau = [1,2,3];
tableau.forEach(element => {
    console.log(element);
});


tableau.map(element => {
    return element * 2;
}).forEach(element => {
    console.log(element);
}); //cette methode ne modifie pas le tableau d'origine mais renvoie un nouveau tableau, il faut donc le recuperer


//garder les nombres pairs
const tableau2 = [1,2,3,4,5];
const tableau3 = tableau2.filter(element => {
    return element % 2 === 0;
});
console.log(tableau3);

//nombre impaires
const tableau4 = [1,2,3,4,5];
const tableau5 = tableau4.filter(element => {
    return element % 2 !== 0;
});
console.log(tableau5);

//genere un nombre aleatoire
const tableau6 = [1,2,3,4,5];
const tableau7 = tableau6.filter(element => {
    return Math.random() > 0.5;
});
console.log(tableau7);

tableau.map(element => {
    return element * 2;
}).filter(element => {
    return element % 2 === 0;
}).forEach(element => {
    console.log(element);
})

const [premier,...rest] = tableau;
console.log(premier);
console.log(rest);

//echange de valeur
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);

//destructuring with object 
const user = {
    name: "Ricardo",
    prenom: "Nelson",
    age: 25,
    genre: "homme",
    taille: 1.80
};
const {name,prenom,age} = user;
console.log(nom);
console.log(prenom);
console.log(age);   

 const jumeau = {
    ...user,
    prenom: "Nelly"
 }         
 
 const{prenom: jumeauPrenom,age:jumeauAge} = jumeau;

 