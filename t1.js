let nombusuario = prompt("escribe tu nombre: ")

let edad= prompt("escribe su edad: ")

let estatura=prompt("escribe su estatura: ")
let peso= prompt("escribe tu peso: ")


let estaturados= estatura* estatura
console.log("resultado de la estatura  "+ estaturados)
let IMC = peso / estaturados

console.log("tu imc "+IMC)