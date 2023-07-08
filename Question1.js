function createCounter (start) {
function increment () {
  start ++;
  console.log(start);
}
return increment;
}
var closure = createCounter(2);
closure(); 
 

