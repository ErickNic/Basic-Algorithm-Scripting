const titleCase = (string) =>{
    let stringArrayed = string.split(' ');
    console.log(string)
    console.log(stringArrayed)
    for(let i=0;i<stringArrayed.length;i++){
        stringArrayed[i] = stringArrayed[i].charAt(0).toUpperCase() + stringArrayed[i].slice(1).toLowerCase();
    }
    stringArrayed = stringArrayed.toString()
    stringArrayed = stringArrayed.replaceAll(',',' ');
    console.log(stringArrayed)
    return stringArrayed;
}

console.log('l')
titleCase("I'm a little tea pot");
