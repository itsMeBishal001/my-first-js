//array provides you an ordered collection of elenment
let arr=[] //array declearation

//in js you can assign values of different types
let array1=[1,true,null,"bishal"]

let car=["farrari","tesla","nano","tata"] 
console.log(car[2]);

//replace
car[2]="barly"
console.log(car[2]);
//add new ellement
car[7]="maruti";
console.log(car)
//length of an array
console.log(car.length)
//methods
  

//pop method--remove the last element from the array
car.pop()
console.log(car)
//push --add an element last of an array
car.push("roles Royal")
console.log(car)
 //shift --remove the element starting of an array
 car.shift()
 console.log(car)
 //unshift -- adds an element starting of an array
 car.unshift("cycle")
 console.log(car)


 //MultiDimensional Arrays 

let matrix = [
    [1 , 2, 3],
    [4 , 5, 6],
    [7 , 8, 9]
]

console.log(matrix[2][1])
