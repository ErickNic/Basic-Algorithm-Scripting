function findElement(arr, func) {
    let num = 0;
    let done =false;
    for(let i=0;i<arr.length;i++){
      if(done != true){
          if(func(arr[i])){
            done = true;
            num = arr[i]
          }else{
            num = undefined
          }
      }else{
        continue;
      }
  }
  
      console.log(num)
      return num;
}
  

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
Passed:findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0;});