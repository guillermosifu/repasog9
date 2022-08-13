//variables
// que es una variable

//ces un contenedor  informacion, datos , funciones ...

let numeros2 = 200;
const numeros3 = 300;

// CONST SALUDO =
//LET SALUDO =
const pi = 3.1416;
const saludo = "hola";
const despedida = "adios";
const edad = 30;
// una varible solo puede tener un valor o un dato 

//array o en un arreglo 

const laptops= ["rojo" , "verde" , "negro", "rosado"]

laptops[2]= "blanco"
laptops[4] = "plomo"

laptops[laptops.length] = "azul"
laptops[laptops.length] = "green"

console.table(laptops)



// OBJETOS  es una liasta con un key y un value (propiedad y un atributos)

//   key    value
const laptops1 ={
    ram: "32gb",
    pantalla: "15",
    teclado : "luminoso",
    cargador : "inalambrico",
}

laptops1.regalo = "mouse"

// console.log("ram", laptops1.teclado)
console.table(laptops1)

//-------------------------------------
// funcion declarativa = porwue inicia con palabra function 

function suma2(a,b){
    return a+b
}
console.log("sumando" ,suma2(20,30))

// funciones expresiva o anonima es porque se econde e una variable 

let suma3 = function (a,b){
    return a+b
}

console.log("suma3",suma3(10,10));

//Arrow function= funcione flecha => 

const suma4 =(a,b)=>{
    return a+b
}

console.log("suma4", suma4(30,30))
















const suma = (a, b, c) => {
  return a - b + c;
};

console.log("suma", suma(100, 30, 20));


