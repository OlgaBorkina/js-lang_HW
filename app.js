
/********************HW 11 definition */
function encode(num, codingString) {
    let r = checkCS(codingString);
    let res = "";
    let number = num;
    if (r == "ok"){
        let codestr="" + codingString;
        do {
                const digit = Math.trunc(num % codestr.length);
                const symb = getSymbol(digit, codestr);
                res = symb + res;
                num = Math.trunc(num / codestr.length);
        } while(num >= 1);
    return console.log(`Result of encoding ` + number + ` to "` + codingString + `" notation is - ` + res);
//    return res;
    }
}

function getSymbol(digit, codingString) {
    const strP = "" + codingString;
    let symbol= +digit;
return "" + strP[symbol]; 
}

function checkCS (codingString){
    const strP = "" + codingString;
        if (strP.length < 2) return (console.log('Error - Code String too short'));
        else {
            for (let i=0; i<strP.length-1; i++){
                if (strP.substring(i+1, strP.length).includes (strP[i])) return console.log('Error - repeated symbol - ' + (strP[i]) );
            }
        }
return "ok";
}

console.log(encode(328, "gonduras"));