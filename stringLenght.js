function stringLength(string){

 if(string.length > 0 && string.length < 10){
  return string.length;
 }
 else {
  throw new Error("No longer 10 letters");
 }
}

function stringReverse(string) {
 return string.split('').reverse().join('');
}

class Calculator{
 constructor(a,b) {
  this.a = a;
  this.b = b;
 }

 static add(a,b) {
  return a + b ;
 }

 static subtract(a,b) {
  return a - b ;
 }

 static divide(a,b) {
  return a / b ;
 }

 static multiply(a,b) {
  return a * b ;
 }
}

function capital(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports =  { stringLength , stringReverse , Calculator , capital };