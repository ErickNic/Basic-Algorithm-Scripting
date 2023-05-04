function mutation(arr) {
    let isIt = false;
    let stringPartToEvaluate = arr[1];
    let String = arr[0];
    stringPartToEvaluate= stringPartToEvaluate.toLowerCase();
    String = String.toLowerCase();


    stringPartToEvaluate = stringPartToEvaluate.split('');
    String = String.split('');

    let stringPartToEvaluateCopy = [...stringPartToEvaluate];

    for(let i=0;i<stringPartToEvaluate.length;i++){
        for(let j=0;j<String.length;j++){
            if(stringPartToEvaluate[i]===String[j]){
                stringPartToEvaluate.splice(i,1,'x');
            }
        }
    }
    for(let k=0;k<stringPartToEvaluate.length;k++){
        if(stringPartToEvaluate[0]==stringPartToEvaluate[k]){
            isIt = true;
        }else{
            isIt = false;
        }
    }
    return isIt;
}


mutation(["Mary", "Aarmy"]);
mutation(["hello", "hey"]);
/* mutation(["voodoo", "no"]); */
/* const x = ['x','x','x','x']; */
/* console.log(x.reduce((a,b)=>a+b)) */