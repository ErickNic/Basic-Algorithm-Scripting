function chunkArrayInGroups(arr, size) {
    let newarr = [];
    let arrCopy = arr;
    let length =arr.length;
    let r = 0;
    let totalSubArray = length/size;
    if(!Number.isInteger(totalSubArray)){
        totalSubArray = Math.floor(totalSubArray) +1;
    }
    for(let i=0;i<totalSubArray;i++){
        newarr.push([]);
    }

    for(let k=0;k<newarr.length;k++){
        for(let j=0;j<size;j++){
            if(r<length){
                newarr[k][j]= arrCopy[r];
                r++;    
            }
        }
    }

    return newarr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d",4,5,6,7,8], 9);