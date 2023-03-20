// var numero1 = 8; //variable global NUNCA UTILIZAR VAR

// let numero = 5; //variable mutable

// const numero2 = 6; //variable inmutable
// numero = 7;

// numero2 = 7;
// console.log("el numero es: " + numero);

function suma (num1,num2){
    return num1 + num2;
}

console.log(suma(5,10));

function division (num1,num2){
    return num1 / num2;
}

console.log(division(5,10));


function mayorNum(arr) {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
    }
    return mayor;
  }

const miArray = [1, 4, 8, 2, 5, 10, 3];
console.log(mayorNum(miArray));




console.log("la suma de 5 y 10 es: ", 5+10);

console.log("la division de 20 sobre 2 es: ", 20/0);

console.log(Math.max(2,8,9,7,5,6))