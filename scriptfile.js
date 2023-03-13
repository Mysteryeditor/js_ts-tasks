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
var x=document.getElementById("num2").value;
var a=-1;
var b=1;
var temp=0;
var i=1;
str1=new String();
while(i<=x){
    temp=a+b;
    a=b;
    b=temp;
    str1=str1+" "+temp;
    i++;
}
console.log(str1);
}
function genderchk(){
    var a=document.getElementById("gender").value;
    if(a=='male')
    console.log("You are a Male");
    else 
    console.log("You are a female");
}
function genderchk1(){
    var g=document.getElementById("gen").value;
    switch(g)
    {
        case 'male':
            document.write("You are a male");
            break;
        case 'female':
            document.write("YOu are a female");
            break;
        default:
            document.write("Invalid Input");
    }
}
// diplaying details
function display(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("Age").value;
    var gender=document.getElementById("gend").value;
    console.log("Name:"+name);
    console.log("AGE:"+age);
    console.log("GENDER:"+gend);
}
// task2
var arr=[];
var text="";
function addbeg(){
    a=document.getElementById("element").value;
    arr.unshift(a);
    alert(arr);
}
function addend(){
    a=document.getElementById("element").value;
    arr.push(a);
    alert(arr);
}
function delbeg(){
    arr.shift();
    alert(arr);
}
function delend(){
    arr.pop();
    alert(arr);
}
function sortarr(){
    arr.sort();
    alert(arr);
}
function printarr(){
    
    for(let i=0;i<arr.length;i++){
    text += arr[i]+" ";
}
    alert(text);
}
function printarr1(){
    arr.forEach(element=>{
        alert(element);
    })
}
function printarr2(){
    for(let key in arr){
        alert(arr[key]);
      }
}
function printarr3(){
    for(let element of arr) {
        alert(element);
      }
}
function comma(){
    b=arr.toString();
    alert(b);
}
function dt(){
    alert(Date());
}
// task2 question2
