function getIndexToIns(arr,num){
    let indexAssinged = 0;
    arr.sort((a,b)=> a-b);
    console.log(arr)
/*     for(element of arr){
        console.log(element);
        (element<num)?indexAssinged=arr.indexOf(element) +1:indexAssinged=indexAssinged;
    } */
    for(let i=0;i<arr.length;i++){
        if(num>arr[i]){
            indexAssinged= i+1;
            done = true;
        }else if(num==arr[i]){
            indexAssinged= i;
            done = true;
        }else if(num==arr[i]){
            indexAssinged=i-1;
            done = true;
        } 
                
    }

    console.log(indexAssinged)
    return indexAssinged;   
}

getIndexToIns([40, 60], 50);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 20, 10], 19)
