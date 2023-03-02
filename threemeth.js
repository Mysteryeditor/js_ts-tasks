function perfectnum(){
sum=0;
var a=document.getElementById("num").value;
var og=a;
for(i=1;i<a;i++){
if(a%i==0){
    sum=sum+i;
}
}
if(og==sum)
console.log(og+" is a perfect number");
else
console.log(og+" is not a perfect number");
}
function factorial(){
fact=1;
var n=document.getElementById("num1").value;
i=1;
do{
    fact=fact*i;
    i++;
}
while(i<=n)
console.log("The factorial of "+n+" is "+fact);
}

function fibonacci(){
      var i = 0, j = 1, k;
var o=document.getElementById("num2").value;
while(i<=o)
{
    console.log(i + "<br />");
    k = i+j;
    i = j;
    j = k;
}
}