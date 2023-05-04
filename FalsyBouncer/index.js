function bouncer(arr){
    let noFalsyCopy = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== '' && arr[i] !== undefined){
          if(Number.isNaN(arr[i])){
          }else{
              noFalsyCopy.push(arr[i]);
          }
        }
    }
    return noFalsyCopy;
}


console.log(bouncer([7, "ate", "",NaN, false, 9]));