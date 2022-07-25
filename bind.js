// call,bind and apply are similar only some works are difference like apply take arguments in array and call take arguments seprately
// bind take arguments as an variable like firstly take one variable and store the value and then we can use the value if we want.

var a={
    name1:"a",
    name2:"c",
    }
    n=function(k){
        console.log(`${this.name1} and ${this.name2} and then ${k}`);
}
b=n.bind(a,"l")
b()
c=b
console.log(c);

