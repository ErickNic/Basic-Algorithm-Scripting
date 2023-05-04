function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for(let i=0;i<arr.length;i++){
    const largo = arr[i].length;
    console.log(largo)
    console.log(arr[i])
    if(Array.isArray(arr[i])){
        for(let j=0;j<largo;j++){
            product *= arr[i][j];
            console.log(arr[i][j]);
        }
    }else{
        product *= arr[i];
    }
  }
  console.log(product)
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));