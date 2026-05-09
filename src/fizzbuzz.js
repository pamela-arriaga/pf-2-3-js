export function fizzbuzz(){
  for (let i = 1; i <= 100; i ++){ //Contador del 1 al 100
    if (i % 3 === 0 && i % 5 === 0){ //Multiplos de 3 AND 5
      console.log("FizzBuzz")} //Imprime la palabra FizzBuzz para multiplos en comun de 3 y 5
    else if (i % 3 === 0){ //Multiplos de 3
      console.log("Fizz")}
    else if (i % 5 === 0){ //Multiplos de 5
      console.log("Buzz")}
    else{
      console.log(i)} //Imprime los números restantes que no sean multiplos
    }
}
fizzbuzz();