// apply() method take argument as an array.
var name={
    firstname:"karina",
    lastname:"bora",
 }
 let print=function(a,b){
    console.log(this.firstname+" "+this.lastname+a,b);
 }
 print.apply(name,["karina1","bora1"])
  
 name2={
    firstname:"trina",
    lastname:"tra"
 }
 print.apply(name2,["karina2","bora2"])
 