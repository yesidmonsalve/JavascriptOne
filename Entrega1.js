// Variables declaradas con let y const
let  Num1= 5;
const Num2 = 10;
let Num3 = 20;
const Name = "Jake";
let Name2 = "Sofia";

// Arrow function sin parámetros
const funcionSinParametros = () => {
  return "Hola Bienvenido.";
};

// Arrow function con un solo parámetro
const funcionConUnParametro = (parametro) => {
  return "Hola "+(parametro)+ ", Bienvenido";
};

// Arrow function con dos o más parámetros
const funcionConDosOMasParametros = (param1, param2) => {
  return "Sean Bienvenidos " + param1 + " y " + param2;
};

// Arrow function de una suma
const sumita = (param1, param2) =>{
    return param1+param2;
};

//Arrow function de una suma y multiplicacion
const Ejercicio = (param1, param2, param3) =>{
    return param1+param2*param3;
};

// Llamada a las funciones y mostrar resultados
console.log(funcionSinParametros());
console.log(funcionConUnParametro(Name));
console.log(funcionConDosOMasParametros(Name, Name2));
console.log(sumita(Num1,Num2));
console.log(Ejercicio(Num1,Num2,Num3));
