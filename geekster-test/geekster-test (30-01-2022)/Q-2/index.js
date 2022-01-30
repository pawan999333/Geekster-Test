//Write a programme to print all prime numbers in range 1 to n. take n frm the user.

var n=prompt("Enter the number");
n=parseInt(n);

var prime;
console.log("Prime numbers are:");

for(var i=1;i<=n;i++) {
    prime=1;
    for(var j=2;j<=i/2;j++) {
        if(i%j == 0) {
            prime = 0;
            break;
        }

    }
if(prime) {
    console.log(i);
      }
}