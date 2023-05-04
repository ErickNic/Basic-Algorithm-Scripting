function confirmEnding(str,target){
    const length = str.length;
    const lengthTarget = target.length;
    const init = length - lengthTarget;
    let confirmation = false;
    /* console.log(targetAsArray)
    console.log(strAsArray) */
/*     console.log(`La longitud del string como arreglo es: ${strAsArray.length}`); */

    const toCompare = str.slice(init,length);
    console.log(toCompare);
    console.log(target)
    if(toCompare == target){
        console.log('Son iguales y se entro al if')
        confirmation = true;
    }
    
/*     for(let i=length-1;i>0;i--){
        for(let j=lengthTarget-1;j>=0;j--){
            if(confirmating){
                if(strAsArray[i]===targetAsArray[j]){
                    confirmating = true;
                    console.log('Hola')
                    console.log(`Loop: ${i}`)
                    console.log(`Se comparo ${strAsArray[i]} y ${targetAsArray[j]}`);
                    confirmating = true
                }else{
                    confirmating = false;
                }
            }
        }
    } */
    
    
    return confirmation;
}
function confirmEnding(str,target){
    const length = str.length;
    const lengthTarget = target.length;
    const init = length - lengthTarget;
    let confirmation = false;
    const toCompare = str.slice(init,length);
    if(toCompare == target){
        console.log('Son iguales y se entro al if')
        confirmation = true;
    }
    return confirmation;
}

console.log(confirmEnding('hola','a'));
console.log(confirmEnding('Congratulation','on'));