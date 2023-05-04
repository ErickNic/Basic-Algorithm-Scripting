function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i=0;i<arr.length;i++){
        let voto = false;
        let j = 0;
        const length = arr[i].length;
      for(j=0;j<length;j++){
        if(arr[i][j]==elem){
            voto = true;
        }
      }
      if(!voto){
        newArr.push(arr[i]);
    }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 3, 6], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));