function truncateString(str, num) {
    const dots = '...';
    let finalString;
    
    finalString = str.substr(0,num).concat(dots);
    if(num>=str.length){
        finalString = str;
    }
    console.log(finalString)
    return finalString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("Absolutely Longer", 2);
truncateString("A-", 1);
console.log("É".charCodeAt(0))