var a
console.log(a)
a="its me bishal"
console.log(a)
var a= 13
var num=true
for(var i=2;i*i<=a;i++){
    if(a%i==0){
        num=false
        break
    }
}
if(num){
    console.log("num is prime")
}else
 console.log("num is not prime")
 //diff between var and let--
 var a=6
 console.log(a)
 var a=8
 console.log(a)
 var a = "bishal"
 console.log(a)
 var a= "rik"
 console.log(a)
 let a="rik"
 let a="bishal"
 console.log(a)
 // so this is the main difference between var and let --using var you can decleare a variable many time but using let you can declear
 // variable one time but you can assign the value next time
