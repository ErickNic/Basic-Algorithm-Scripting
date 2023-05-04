function frankenSplice(arr1, arr2, n) {
    const arr2copy = [...arr2];
    let splicedPart = arr2copy.splice(n);
    arr2copy.splice(n);
    arr2copy.push(...arr1);
    arr2copy.push(...splicedPart)
    console.log(arr2copy);
    console.log(splicedPart)
    console.log('ARREGLO DOS' + arr2)
    return arr2copy;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

