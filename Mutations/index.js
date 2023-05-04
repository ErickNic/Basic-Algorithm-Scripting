function mutation(arr) {
    let isIt = false;
    let valueToEvaluate = arr[1];
    let String = arr[0];
    let stringPartToEvaluate = String.substring(2);
    
 /*    const vtvLength = valueToEvaluate.length;
    const init = String.length- vtvLength; */

    valueToEvaluate = valueToEvaluate.split('');
    stringPartToEvaluate = stringPartToEvaluate.split('');

    for(let i=0;i<stringPartToEvaluate.length;i++){
        let flag = false;
        console.log(flag)
        for(let j=0;j<valueToEvaluate.length;j++){
/*             console.log(`J vale: ${j}`); */
            console.log(`EVALUANDO LA PARTE DEL STRING ${stringPartToEvaluate[i]} con ${valueToEvaluate[j]}`)
            if(stringPartToEvaluate[i]==valueToEvaluate[j] && flag == false){
                isIt = true;
            }
        }
/*         console.log(`i vale: ${i}`);
        console.log(stringPartToEvaluate[i] + ' en ' + i) */
    }
    console.log(stringPartToEvaluate);
    
    console.log(stringPartToEvaluate);
    console.log(String);
    console.log(stringPartToEvaluate.splice())
    console.log(valueToEvaluate);
    console.log(isIt);
    return isIt;
  }

  mutation(["hello", "e"]);