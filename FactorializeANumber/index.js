const FactorializeANumber = (number) =>{
    if(number === 1){
        return 1
    }
    return number * FactorializeANumber(number-1);
}

console.log(FactorializeANumber(5))