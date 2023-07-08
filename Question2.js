function calculateAverage (arr) {
  let sum = 0;
function workAvg () {
  arr.forEach(function (element) {
    sum += element;
  });
  console.log(sum / arr.length);
}
return workAvg;
}
var closure = calculateAverage([1,2,3,4]);
closure(); 
 

