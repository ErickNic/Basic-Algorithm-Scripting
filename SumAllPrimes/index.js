function sumPrimes(num) {
    let suma = 0;
    let x=1;
    for(let i=2;i<=num;i++){
        let isPrime = true;  
        if(i===2){
            console.log('vale 2');
            suma += i;
        }
        if(i>2){
            for(let j=2;j<i;j++){
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }else{
                    true;
                }
            }
            if(isPrime){
                suma+=i;
            }
        }
}
    console.log(suma);
    return 'Termino el programa'
}

console.log(sumPrimes(13));

/* 
number=9;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
} */