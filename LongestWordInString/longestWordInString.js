const longestWordInStringSearch = (str) =>{
    str.replaceAll(',','');
    str.replaceAll(';','');
    str.replaceAll('.','');
    str.replaceAll(',','');
    let largestWord;
    let provisionalValue = 0;
    let largestWordLength=0;
    const strAsArray = str.split(' ');
/*     for(word of strAsArray){
        provisionalValue = word.length;      
        if(largestWordLength<provisionalValue){
            largestWordLength = provisionalValue;
            largestWord = word;
        }
    } */
    for(let i=0;i<strAsArray.length;i++){
        provisionalValue = strAsArray[i].length;      
        if(largestWordLength<provisionalValue){
            largestWordLength = provisionalValue;
            largestWord = strAsArray[i];
        }
    }
    //return `La palabra más larga del string es ${largestWord} y su longitud es ${largestWordLength}`;
    return largestWordLength;
}
/* const comparedValues() */
str = 'Hola soy un string y, seguramente tengo una palabra extremandamente larga.'
console.log(longestWordInStringSearch(str));


