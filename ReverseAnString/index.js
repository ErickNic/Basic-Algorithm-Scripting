function reverseString(str) {
    const arrayOfLetters = str.split('');
    let result = []
    arrayOfLetters.forEach(element => {
        result.unshift(element)
    });
    result = result.toString().replaceAll(',','');
    return result;
  }
  
console.log(reverseString("hello"));