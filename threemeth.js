function perfectnum(){
sum=0;
var a=document.getElementById("num").value;
console.log(a);
var og=a;
for(i=1;i<a;i++){
if(a%i==0){
    sum=sum+i;
}
}
if(og==sum)
document.write(og+" is a perfect number");
else
document.write(og+" is not a perfect number");
}
function factorial(){
fact=1;
var n=getElementById('num').value;
i=1;
do{
    fact=fact*i;
    i++;
}
while(i<=n)
document.write("The factorial of "+n+" is "+fact);
}

function fibonacci(c){
j=0;fib=0;
while(j=c){
fib+=j;
j++
}
document.write("The fibonacci ")
}