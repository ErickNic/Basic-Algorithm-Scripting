function largestOfFour(arr){
    const LargestNumbersArray = [];
    /* for(element of arr){
        if(Array.isArray(element)){
            let bigValue = 0;
            for(subElement of element){
               if(bigValue<subElement){
                bigValue = subElement;
               }
            }
            LargestNumbersArray.push(bigValue);
        }else{
            LargestNumbersArray.push(element)
        }
    } */
    for(let i=0;i<4;i++){
        /* console.log('wkring') */
        if(Array.isArray(arr[i])){
            /* console.log('tutu'); */
            let bigValue = 0;
            const subArray = arr[i]
            /* console.log(arr[i].length) */
            for(let j=0;j<arr[i].length;j++){
                if(arr[i][1]<0){
                  if(arr[i][j]===arr[i][1]){
                    bigValue = arr[i][j];
                  }
                  if(bigValue<arr[i][j]){
                    bigValue = arr[i][j];
//                        console.log(arr[i][j])
                    /* console.log(bigValue)
                    console.log('Se entro al loop') */
                }   
                    
                }else if(bigValue<arr[i][j]){
                    bigValue = arr[i][j];
                    /* console.log(bigValue)
                    console.log('Se entro al loop') */
                }
            }
            LargestNumbersArray.push(bigValue);
        }else{
            LargestNumbersArray.push(arr[i]);
            /* console.log('working') */
        }
    }
    return LargestNumbersArray;
}
const x = [4, 5, 1, 3];
/* console.log(largestOfFour(x)) */
/* console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); */
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))


