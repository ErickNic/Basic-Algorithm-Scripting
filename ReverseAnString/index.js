function reverseString(str) {
    const arrayOfLetters = str.split('');
    const result = []
    arrayOfLetters.forEach(element => {
        result.unshift(element)
    });
    return result
  }
  
console.log(reverseString("hello"));