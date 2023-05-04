const repeatStringNtimes= (str,n) =>{
    let strCopied = '';
    let StringDisplayed = ''
    for(i=0;i<3;i++){
        strCopied = strCopied.concat('',str);
    }
    return strCopied;
}
console.log(repeatStringNtimes('hola',-3))
