function powerOf (base) {
function workExp (exp) {
 console.log(base ** exp);
}
return workExp;
}
var closure = powerOf(2);
closure(3); 
