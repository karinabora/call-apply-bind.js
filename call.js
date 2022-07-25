// Call take argument seprately:-

let name={
    firstname:"karina",
    lastname:"bora"
}
let printfull=function(hometown){
    console.log(this.firstname+""+this.lastname+"from"+hometown);
}
printfull.call(name,"dehradun")

name2={
    firstname:"karina",
    lastname:"bora"
}
printfull.call(name2,"maharastra")

