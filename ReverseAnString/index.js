function reverseString(str) {
    const arrayOfLetters = str.split('');
    const result = []
    arrayOfLetters.forEach(element => {
        result.unshift(element)
    });
    result.toString()
    return result
  }
  
console.log(reverseString("hello"));