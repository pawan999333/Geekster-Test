//write a program to print the nth fibonacci number.take user input.

var n=prompt("Enter the number");
n=parseInt(n);

var n1=0;
var n2=1;
var n3;
console.log("The fibonacci series is:");
console.log(n1);
console.log(n2);

for(var i=2;i<n;i++) {
n3 = n1+n2;
console.log(n3);
n1=n2;
n2=n3;
}
console.log("The nth fibonacci number is:");
console.log(n3);
