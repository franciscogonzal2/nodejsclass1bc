// Igualdad
if (5 == 5) {
    console.log("5 es igual a 5")
}

if (5 === 5) {
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

// == sólo compara el valor
// === compara el valor y el tipo

if (a == b) {
    console.log("a es igual a b - Débil")
}

if (a === b) {
    console.log("a es igual a b - Fuerte")
}

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - Débil")
}

if (c !== d) {
    console.log("c es diferente a d - Fuerte")
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}


// If else + if else
let nota = 200;
if (nota === 5) {
    console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor");
} else if (nota === 3) {
    console.log("Has obtenido un suficiente");
} else if (nota === 2) {
    console.log("No has aprobado por poco");
} else if (nota === 1) {
    console.log("No has estudiado nada, trabaja un poquito más para la próxima");
} else {
    console.log("Error, introduce una nota entre el 1 y el 5");
}
////-------------------------------------------------------Ejercicio 5 --------------------------------------------------------------------///
// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(`for each ${v}`)
    return 4
})
console.log(val)
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista)

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(`Valor acumulado ${acumulado}`)
    console.log(`valor siguiente ${cur}`)
    console.log(`cantidad de rerrido ${i}`)
    console.log(`valor original del array ${arrayOriginal}`)
    return `valor sumado de cada posicion del array ${acumulado + cur}` 
})
console.log(suma)

