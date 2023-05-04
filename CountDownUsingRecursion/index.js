// Only change code below this line
const arrayCounting = [];
function countdown(n) {
    
    if(n<1){
        return arrayCounting;
    }
    
    arrayCounting.push(n);
    n--;
    countdown(n);
    return arrayCounting;
}

function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}
function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }
 function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }
console.log(countdown(10));