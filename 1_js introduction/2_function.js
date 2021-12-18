function multiply(a,b){
    console.log(a*b)
}
multiply(3,3)
//iife function-- imediately invoked function expression
var multiply=(function(a,b){
    return a*b
})(2,3)
console.log(multiply)
