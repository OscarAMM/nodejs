const deadpool = {
    nombre: "Wade",
    apellido: "Wiston",
    poder: "Regeneración",
    getData(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
console.log(deadpool.getData());

//destructuracion
const {nombre, apellido, poder} = deadpool;

console.log(nombre, apellido, poder);

//function
function printHero ( {nombre, apellido, poder, edad = 0}) {
    console.log(nombre, apellido, poder, edad);
}
printHero(deadpool);
//destructuracion array
const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

console.log(h1,h2,h3);